"use client";
import { useState } from "react";
// styles
import styles from "./Output.module.scss";
// components
import MainInfo from "../TestBlocks/MainInfo";
import Companies from "../Companies";
import Contacts from "../Contacts";
import SearchInput from "@/components/Globals/SearchInput";
import TemplateForm from "../TemplateForm";
import SideMenu from "@/components/Globals/SideMenu";
// icons
import { TemplateIcon } from "@/assets/icons/template";
import TemplateMenu from "@/components/Globals/SideMenu/TemplateMenu";

interface OutputProps {
  response: any;
  url: string;
}

const Output = ({ response, url }: OutputProps) => {
  const [searchValue, setSearchValue] = useState<string>(url);
  const [searchFailed, setSearchFailed] = useState<boolean>(false);
  const [sideMenuIsOpen, setSideMenuOpen] = useState<boolean>(false);

  return (
    <div className={styles.output}>
      <div className={styles.container}>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          errorLabel={searchFailed}
          setSearchFailed={setSearchFailed}
          url={url}
        />
        <div className={styles.content}>
          <Companies {...response.data.company} url={url} />
          <Contacts data={response.data} />
          <MainInfo data={response.data} />
        </div>
      </div>
      {/* TODO - refactor thos to another block */}
      <span
        className={styles.templateIcon}
        onClick={() => setSideMenuOpen(true)}
      >
        <TemplateIcon />
      </span>
      <TemplateForm />
      <SideMenu
        children={<TemplateMenu />}
        isOpen={sideMenuIsOpen}
        onClose={setSideMenuOpen}
      />
    </div>
  );
};

export default Output;
