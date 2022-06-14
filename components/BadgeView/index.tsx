import React, { useEffect, useState } from "react";
import { BadgeInfo } from "../../util/verifyUtil";
import styles from "./BadgeView.module.css";
import Image from "next/image";
import moment from "moment";
import CopyToClipboard from "react-copy-to-clipboard";

const BadgeView = (props: { badge: BadgeInfo; badgeID: string }) => {
  const [copied, setCopied] = useState(false);
  const copyURL = `${window.location.host}/verify/${props.badgeID}`;

  return (
    <div className={styles.badgeContainer}>
      <div className={styles.badgeCard}>
        <Image
          src={props.badge.badgeImage}
          alt={`Badge icon for ${props.badge.badgeName}`}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
        <p aria-hidden className={styles.badgeText}>
          {props.badge.badgeName}
        </p>
      </div>
      <div>
        <h1 className={styles.title}>{props.badge.badgeName}</h1>
        <div className={styles.badgeDetails}>
          <p>Verified achievement from SEB</p>
          <p>
            Issued to <strong>{props.badge.awardedTo}</strong> on{" "}
            <strong>{moment().format("D MMMM YYYY")}</strong>
          </p>
          <p>
            <span className={styles.idText}>ID: {props.badgeID}</span>
          </p>
        </div>
        <p className={styles.description}>{props.badge.badgeDescription}</p>
        <CopyToClipboard text={copyURL} onCopy={() => setCopied(true)}>
          <a className={styles.shareButton} href="#">
            Share
          </a>
        </CopyToClipboard>
        {copied && <p className={styles.copiedText}>Link copied</p>}
      </div>
    </div>
  );
};

export default BadgeView;
