import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./TopBar.module.css";

const TopBar = (props: { homeButton?: boolean }) => {
  return (
    <div className={styles.topBar}>
      <span className={styles.topBarTitle}>SEBadge</span>
      {props.homeButton && (
        <a href="/verify" className={styles.topBarButton}>
          Verify another badge
        </a>
      )}
    </div>
  );
};

export default TopBar;
