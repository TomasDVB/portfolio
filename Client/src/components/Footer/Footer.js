import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.footer_content_container}>
          <h3 className={styles.website_logo}>Tomas</h3>
          <span className={styles.footer_info}>+54 9 11-2655-9431</span>
          <span className={styles.footer_info}>tomasdelvallebergar@gmail.com</span>
        </div>
        <div className={styles.footer_menus}>
          <div className={styles.footer_content_container}>
            <span className={styles.menu_title}>menu</span>
            <a href="" className={styles.menu_item_footer}>
              Home
            </a>
            <a href="" className={styles.menu_item_footer}>
              Proyects
            </a>
            <a href="" className={styles.menu_item_footer}>
              Testimonials
            </a>
          </div>
          <div className={styles.footer_content_container}>
            <span className={styles.menu_title}>legal</span>
            <a href="" className={styles.menu_item_footer}>
              Privacy Policy
            </a>
            <a href="" className={styles.menu_item_footer}>
              Cookies
            </a>
            <a href="" className={styles.menu_item_footer}>
              Legal Advice
            </a>
          </div>
        </div>

        <div className={styles.footer_content_container}>
          <span className={styles.menu_title}>Follow me</span>
          <div className={styles.social_container}>
            <a
              href="https://github.com/TomasDVB"
              target="_blank"
              className={styles.social_link}
            ></a>
            <a
              href="https://www.linkedin.com/in/tomasdelvallebergara-624a91207/"
              target="_blank"
              className={styles.social_link}
            ></a>
            <a
              href="https://www.instagram.com/tomi_delvalleb/"
              target="_blank"
              className={styles.social_link}
            ></a>
          </div>
        </div>
      </div>
      <div className={styles.copyright_container}>
        <span className={styles.copyright}>
          Copyright 2023, myportafolio.com. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
