import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import LoadingSpinner from "../../components/LoadingSpinner";
import VerifyForm from "../../components/VerifyForm";
import notFound from "../../public/undraw_no_data_re_kwbl.svg";

const BadgeNotFound = () => {
  const router = useRouter();

  const [returnBody, setReturnBody] = useState(<></>);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;
    const badgeID = router.query.id as string;
    setReturnBody(
      <VerifyForm imageSrc={notFound} title="Badge not found" previousID={badgeID}>
        <p>
          The badge with ID <strong>{badgeID}</strong> does not exist.
        </p>
        <p>Please ensure that the entered badge ID is correct.</p>
      </VerifyForm>
    );
    setLoading(false);
  }, [router.isReady]);

  return (
    <>
      <TopBar />
      {isLoading ? <LoadingSpinner /> : <main>{returnBody}</main>}
    </>
  );
};

export default BadgeNotFound;
