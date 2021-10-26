import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { startDate, endDate } = req.query;
  const { data } = await axios.get(
    `http://localhost:3000/analytics/report?startDate=${startDate}&endDate=${endDate}`
  );
  res.send(JSON.stringify(data));
};

export default handler;
