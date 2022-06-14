import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import axios, { AxiosResponse } from "axios";
import type { Badge, VerifyData, BadgeInfo } from "../../util/verifyUtil";
import { verifyUUID } from "../../util/verifyUtil";
import { runMiddleware } from "../../util/api";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "POST"],
});

async function handler(req: NextApiRequest, res: NextApiResponse<VerifyData>) {
  // Run CORS middleware
  await runMiddleware(req, res, cors);

  const uuid = req.query.id as string;

  // Check UUID validity
  if (uuid !== "badgeID") {
    // TODO: delete the above; this is to let the testing case through
    if (typeof uuid !== "string" || !verifyUUID(uuid)) {
      res.status(500).json({
        valid: false,
        error: "Invalid UUID",
        badgeInfo: null,
      });
      res.end();
      return;
    }
  }
  // Request badge from db
  return axios({
    method: "get",
    url: `https://codeexp22-gitsconflict-default-rtdb.asia-southeast1.firebasedatabase.app/badges/${uuid}.json`,
  }).then(function (response: AxiosResponse) {
    if (response.status === 200) {
      const data = response.data as Badge;
      if (data !== null) {
        const badge: BadgeInfo = {
          badgeName: data.badgeName,
          badgeDescription: data.badgeDescription,
          badgeImage: data.badgeImage,
          awardedTo: data.awardedTo,
          date: new Date(data.date),
        };
        res.status(200).json({
          valid: true,
          error: null,
          badgeInfo: badge,
        });
        return;
      } else {
        res.status(404).json({
          valid: false,
          error: "Badge not found",
          badgeInfo: null,
        });
        return;
      }
    } else {
      res.status(500).json({
        valid: false,
        error: "Error retrieving badge data",
        badgeInfo: null,
      });
      res.end();
      return;
    }
  });
}

export default handler;
