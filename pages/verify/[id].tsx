import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { BadgeInfo, VerifyData } from "../../util/verifyUtil";
import TopBar from "../../components/TopBar";
import BadgeView from "../../components/BadgeView";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorDetail from "../../components/ErrorDetail";
import errorImage from "../../public/undraw_server_down_s-4-lk.svg"

const VerifyBadge = () => {
  const router = useRouter();

  const [returnBody, setReturnBody] = useState(<></>);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const badgeID = (router.query.id as string).toUpperCase();
    axios({
      method: "get",
      url: `/api/verify`,
      params: {
        id: badgeID,
      },
      responseType: "json",
    })
      .then(function (response: AxiosResponse) {
        if (response.status === 200) {
          const data = response.data as VerifyData;
          if (data.valid) {
            const badgeInfo = data.badgeInfo as BadgeInfo;
            setReturnBody(<BadgeView badge={badgeInfo} badgeID={badgeID} />);
          }
        }
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        const data = err?.response?.data as VerifyData;
        if (err?.response?.status === 404) {
          router.push({
            pathname: "/verify/NotFound",
            query: { id: badgeID },
          });
          return;
        } else {
          setReturnBody(
            <ErrorDetail title="Error" imageSrc={errorImage}>
            <p>An error occurred while trying to verify the badge.</p>
            <p>Error: {data.error}</p>
          </ErrorDetail>
          
          );
        }
        setLoading(false);
      });
  }, [router.isReady]);

  return (
    <>
      <TopBar homeButton />
      <main>{isLoading ? <LoadingSpinner /> : returnBody}</main>
    </>
  );
};

export default VerifyBadge;
