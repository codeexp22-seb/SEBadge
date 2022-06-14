import type { NextPage } from "next";
import Head from "next/head";
import TopBar from "../../components/TopBar";
import VerifyForm from "../../components/VerifyForm";
import verifyArt from "../../public/undraw_confirmation_re_b6q5.svg";

const Verify: NextPage = () => {
  return (
    <>
      <Head>
        <title>Verify SEB Badge</title>
        <meta name="description" content="Web service to verify SEB badges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
