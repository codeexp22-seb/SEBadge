import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./TopBar.module.css";
import logo from "../../public/SEB_logo.svg";

const TopBar = (props: { homeButton?: boolean }) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarIcon}>
        <Image
          src={logo}
          alt="SEB logo"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        ></Image>
      </div>
      <div className={styles.topBarTitle}>
        <Link href="/">
          <a className={styles.topBarTitleLink}>SEBadge</a>
        </Link>
      </div>
      {props.homeButton && (
        <Link href="/verify">
          <a className={styles.topBarButton}>Verify another badge</a>
        </Link>
      )}
    </div>
  );
};

export default TopBar;
