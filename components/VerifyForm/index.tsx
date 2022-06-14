import Image from "next/image";
import Router from "next/router";
import React, { useState } from "react";
import styles from "./VerifyForm.module.css";

const VerifyForm = (props: {
  imageSrc: string;
  title: string;
  previousID?: string;
  children: any;
}) => {
  const [idToVerify, setIdToVerify] = useState(props.previousID ?? "");

  function submitForm() {
    if (idToVerify) {
      if (idToVerify.split("/").length >= 2) {
        // (probably) URL
        let path = "";
        let pathArray = idToVerify.split("/");
        path = path + pathArray.pop();
        path = "/" + pathArray.pop() + "/" + path;
        Router.push(path);
      } else {
        // UUID
        Router.push(`/verify/${idToVerify}`);
      }
    } else {
      return;
    }
  }

  return (
    <div className={styles.verifyFormContainer}>
      <div className={styles.topRow}>
        <div className={styles.textColumn}>
          <h1 className={styles.title}>{props.title}</h1>
          <div className={styles.bodyText}>{props.children}</div>
        </div>
        <div className={styles.imageColumn}>
          <Image
            src={props.imageSrc}
            width="100%"
            height="100%"
            objectFit="contain"
            alt=""
            layout="responsive"
          />
        </div>
      </div>
      <div className={styles.form}>
        <label htmlFor="badgeid" className={styles.textboxLabel}>
          Badge ID or URL:
        </label>
        <div className={styles.inputRow}>
          <input
            className={styles.textbox}
            name="id"
            id="badgeid"
            placeholder={props.previousID ? "XXXXXXXX-XXXX-XXXX-XXXXXXXXXXXX" : ""}
            onChange={({ target: { value } }) => setIdToVerify(value)}
            value={idToVerify ?? props.previousID ?? ""}
            onKeyDown={(e) => e.keyCode === 13 ? submitForm() : null}
          ></input>
          <button
            formAction="submit"
            className={styles.submit}
            disabled={props.previousID ? true : false}
            onClick={() => submitForm()}
            onKeyDown={(e) => e.keyCode === 13 ? submitForm() : null}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyForm;
