import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import {CiLogin} from 'react-icons/ci'
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div className={styles.navwrapper}>
        <div className={styles.navlink}>
          <AiOutlineGithub style={{ fontSize: "20.39px" }} />
          <div className={styles.texxt}>GitHub</div>
        </div>
        <div className={styles.navlink}>
          <IoDocumentTextOutline style={{ fontSize: "20.39px" }} />
          <div className={styles.texxt}>Docs</div>
        </div>
        <div className={`${styles.navlink} ${styles.login} `}>
          <CiLogin style={{ fontSize: "20.39px" }} />
          <div className={styles.texxt}>Sign In</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
