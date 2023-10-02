import { useEffect } from "react";
// styles
import styles from "./SideMenu.module.scss";
// icons
import { CloseIcon } from "@/assets/icons/close";

interface SideMenuProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: (arg: boolean) => void;
}

const SideMenu = ({ children, isOpen, onClose }: SideMenuProps) => {
  const closeModal = () => {
    onClose(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div className={styles.overlay} onClick={closeModal} />
          <aside className={styles.sideMenu}>
            <span className={styles.closeBtn} onClick={closeModal}>
              <CloseIcon />
            </span>
            <div className={styles.container}>{children}</div>
          </aside>
        </>
      )}
    </>
  );
};

export default SideMenu;
