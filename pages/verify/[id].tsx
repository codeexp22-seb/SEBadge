import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { BadgeInfo, VerifyData } from "../../util/verifyUtil";
import styles from "../../styles/VerifyBadge.module.css";
import TopBar from "../../components/TopBar";
import BadgeView from "../../components/BadgeView";

const VerifyBadge = () => {
  const router = useRouter();

  const [returnBody, setReturnBody] = useState(<></>);

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
            setReturnBody(
              <main>
                <BadgeView badge={badgeInfo} badgeID={badgeID} />
              </main>
            );
          }
        }
      })
      .catch((err: AxiosError) => {
        const data = err?.response?.data as VerifyData;
        if (err?.response?.status === 404) {
          setReturnBody(<p>BADGE {badgeID} NOT FOUND</p>);
        } else {
          setReturnBody(<p>ERROR: {data.error}</p>);
        }
      });
  }, [router.isReady]);

  return (
    <>
      <TopBar homeButton />
      {returnBody}
    </>
  );
};

export default VerifyBadge;
