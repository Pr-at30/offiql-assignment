import React from "react";
import Info from "../Info/Info";
// import Button from "../../utils/Button/Button";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./Hero.module.css";
import {ReactComponent as Midphoto} from '../../assets/email campaign-pana.svg'

function Hero() {
  return (
    <div className={styles.container}>
      
      <div className={styles.top}>
        <Logo className={styles.logo} />
        <button className={styles.button}>Talk to us</button>
        {/* <Button text="Talk to us"/> */}
      </div>

      <div className={styles.mid}>
        <div className={styles.text1}>
          Grow your Business 
        </div>
        <div className={styles.text1}>
          with Email Automation
        </div>
        <Midphoto className={styles.midphoto}/>
        <button className={styles.midbutton}>Get started</button>
        {/* <Button text="Get started"/> */}
      </div>
      
      <div className={styles.bottom}>
        <Info />
      </div>

      <div className={styles.footer}>
      </div>
    </div>
  );
}

export default Hero;
