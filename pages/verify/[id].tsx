import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { BadgeInfo, VerifyData } from "../../util/verifyUtil";
import TopBar from "../../components/TopBar";
import BadgeView from "../../components/BadgeView";
import LoadingSpinner from "../../components/LoadingSpinner";

const VerifyBadge = () => {
  const router = useRouter();

  const [returnBody, setReturnBody] = useState(<></>);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const badgeID = `${router.query.id}`;
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
          console.log(data);
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
          setReturnBody(<p>ERROR: {data.error}</p>);
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
