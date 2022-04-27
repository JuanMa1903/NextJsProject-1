import { IncomingMessage, ServerResponse } from "http";
import DB from '@database';

const AllCats = async (req:IncomingMessage, res: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const lenght = allEntries.length

  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify({ data: allEntries, lenght }))
}

export default AllCats
