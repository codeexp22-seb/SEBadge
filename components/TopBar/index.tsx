import Link from "next/link";
import React from "react";
import styles from "./TopBar.module.css";

const TopBar = (props: { homeButton?: boolean }) => {
  return (
    <div className={styles.topBar}>
      <Link href="/verify">
        <a className={styles.topBarTitle}>SEBadge</a>
      </Link>
      {props.homeButton && (
        <Link href="/verify">
          <a className={styles.topBarButton}>Verify another badge</a>
        </Link>
      )}
    </div>
  );
};

export default TopBar;
