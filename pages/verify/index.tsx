import type { NextPage } from "next";
import TopBar from "../../components/TopBar";
import VerifyForm from "../../components/VerifyForm";
import verifyArt from "../../public/undraw_confirmation_re_b6q5.svg";

const Verify: NextPage = () => {
  return (
    <>
      <TopBar />
      <main>
        <VerifyForm imageSrc={verifyArt} title="Verify badge">
          <p>Enter a badge ID to verify its authenticity, as well as check its details.</p>
        </VerifyForm>
      </main>
    </>
  );
};

export default Verify;
