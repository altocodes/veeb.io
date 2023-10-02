"use client";
import { useState } from "react";
// styles
import styles from "./Output.module.scss";
// components
import SearchInput from "@/components/Globals/SearchInput";
import Cards from "../Cards";
import Loader from "../../Globals/Loader";
import MultipleSearch from "../MultipleSearch";
import Heading from "../Heading";
// icons
import { FailIcon } from "@/assets/icons/fail";

const Output = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isSearching, setSearching] = useState<boolean>(false);
  const [searchFailed, setSearchFailed] = useState<boolean>(false);
  const [multipleSearch, setMultipleSearch] = useState<boolean>(false);

  return (
    <div className={styles.output}>
      <Heading />
      {!multipleSearch ? (
        <>
          <SearchInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setSearchFailed={setSearchFailed}
            setSearching={setSearching}
          />
          <span
            className={styles.loadLink}
            onClick={() => setMultipleSearch(true)}
          >
            загрузить списком
          </span>
        </>
      ) : (
        <MultipleSearch />
      )}
      <div className={styles.content}>
        {searchFailed && searchValue.length ? (
          <div className={styles.failBlock}>
            <FailIcon />
            <span className={styles.failText}>
              Ничего не найдено <br /> Попробуйте другой адрес
            </span>
          </div>
        ) : (
          !!searchValue.length && isSearching && <Loader value="Ищем контакты" />
        )}
        {!searchValue.length && <Cards />}
      </div>
    </div>
  );
};

export default Output;