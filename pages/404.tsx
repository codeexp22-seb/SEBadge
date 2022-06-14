import type { NextPage } from "next";
import ErrorDetail from "../components/ErrorDetail";
import TopBar from "../components/TopBar";
import notFoundImage from "../public/undraw_page_not_found_re_e9o6.svg";

const NotFound: NextPage = () => {
  return (
    <>
    <TopBar homeButton />
    <main>
    <ErrorDetail title="Page not found" imageSrc={notFoundImage}>
      <p>The page you were trying to look for does not exist.</p>
    </ErrorDetail>
    </main>
    </>
  );
};

export default NotFound;
