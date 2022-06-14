import type { NextPage } from "next";
import ErrorDetail from "../components/ErrorDetail";
import TopBar from "../components/TopBar";
import errorImage from "../public/undraw_access_denied_re_awnf.svg";

const NotFound: NextPage = () => {
  return (
    <>
      <TopBar homeButton />
      <main>
        <ErrorDetail title="Internal Server Error" imageSrc={errorImage}>
          <p>Something went wrong. Try again?</p>
        </ErrorDetail>
      </main>
    </>
  );
};

export default NotFound;
