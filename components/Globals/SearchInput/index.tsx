"use client";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
// next
import { useRouter } from "next/navigation";
// styles
import "./SearchInput.scss";
// icons
import { SearchIcon } from "@/assets/icons/search";
import { CloseIcon } from "@/assets/icons/close";
// components
import Loader from "../Loader";
// hooks
import { useDebounce } from "@/hooks/useDebounce";
// helper functions
import { validateWebsiteURL } from "@/services/validateWebsiteURL";

interface SearchInputProps {
  searchValue?: string;
  setSearchValue: (arg: string) => void;
  setSearchFailed: (arg: boolean) => void;
  setSearching?: (arg: boolean) => void;
  errorLabel?: boolean;
  url?: string;
}

// TODO: refactor this block - we need 2 types of search input - with loader and without(when parent block contains loader)

const SearchInput = ({
  searchValue,
  setSearchValue,
  setSearchFailed,
  setSearching,
  errorLabel,
  url,
}: SearchInputProps) => {
  const [inputIsDisabled, setInputDisabled] = useState<boolean>(false);
  const [inputIsSearching, setInputSearching] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = useCallback(
    useDebounce((value: string) => {
      if (!value || value === url) return;
      setInputDisabled(true);
      setInputSearching(true);
      //
      if (setSearching) setSearching(true);
      //
      value = value.toLowerCase().trim();
      validateWebsiteURL(value, true)
        .then((validUrl) => {
          router.push(`/result/${validUrl}`);
        })
        .catch(() => {
          setSearchFailed(true);
          setInputDisabled(false);
          setInputSearching(false);
        });
    }, 1000),
    []
  );

  const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleSearch(value);
    setInputSearching(false);
    setSearchValue(value);
    setSearchFailed(false);
    
    //
    if (setSearching) setSearching(false);
  };

  const clearSearchValue = () => {
    if (!inputIsDisabled) {
      setSearchValue("");
      setSearchFailed(false);
    }
  };

  useEffect(() => {
    if (inputRef.current && !inputIsDisabled) inputRef.current.focus();
  }, [inputIsDisabled]);

  if (setSearching) {
    return (
      <div className="searchInput">
        <div className={`inputBlock ${inputIsDisabled && "disabled"}`}>
          <span className="searchIcon">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Введите адрес сайта"
            ref={inputRef}
            disabled={inputIsDisabled}
            value={searchValue}
            onChange={(e) => onSearchValueChange(e)}
          />
          <span className="closeIcon" onClick={clearSearchValue}>
            <CloseIcon />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="searchInput">
      <div className={`inputBlock ${inputIsDisabled && "disabled"}`}>
        {!inputIsSearching ? (
          <>
            <span className="searchIcon">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Введите адрес сайта"
              ref={inputRef}
              disabled={inputIsDisabled}
              value={searchValue}
              onChange={(e) => onSearchValueChange(e)}
            />
            <span className="closeIcon" onClick={clearSearchValue}>
              <CloseIcon />
            </span>
          </>
        ) : (
          <Loader />
        )}
      </div>
      {!inputIsDisabled && errorLabel && (
        <label className="error">Ничего не найдено</label>
      )}
    </div>
  );
};

export default SearchInput;
