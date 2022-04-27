import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const AllAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const lenght = allEntries.length;

  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ data: allEntries, lenght }));
};

export default AllAvo;
