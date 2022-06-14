import styles from "./ErrorDetail.module.css";
import Image from "next/image";

const ErrorDetail = (props: { title: string; imageSrc: string; children?: any }) => {
  return (
    <div className={styles.errorPageContainer}>
      <div className={styles.textCol}>
        <h1 className={styles.title}>{props.title}</h1>
        <div>{props.children ?? <p>An error occurred.</p>}</div>
      </div>
      <div className={styles.imageCol}>
        <Image
          src={props.imageSrc}
          height="100%"
          width="100%"
          objectFit="contain"
          layout="responsive"
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorDetail;
