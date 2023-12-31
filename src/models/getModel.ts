import { getDbConnection } from "../config/dbconnect";
import { page0Query, page1F14Query } from "../types/pageType";

export const queryPage0 = async (fId: string): Promise<page0Query[] | null> => {
    try {
      const connection = getDbConnection();
      const query = `SELECT * ,
      (SELECT tambon.tambon FROM tambon WHERE tambon.code = page0.f6) AS f6Name,
      (SELECT ampher.ampher FROM ampher WHERE ampher.code = page0.f7) AS f7Name,
      (SELECT province.province FROM province WHERE province.code = page0.f8) AS f8Name
      FROM page0
      WHERE f_id = ?
      ORDER BY id ASC`;
  
      const [results] = await connection.query<page0Query[]>(query,[fId]);
      
      // console.log(results);
      return results;
    } catch (error: unknown) {
      console.error(error);
      return null;
    }
};

export const queryPage1F1 = async (fId: string): Promise<page1F14Query[] | null> => {
  try {
    const connection = getDbConnection();
    const query = `SELECT f14
    FROM page0
    WHERE f_id = ?
    ORDER BY id ASC`;

    const [results] = await connection.query<page1F14Query[]>(query,[fId]);
    connection.end();
    // console.log(results);
    return results;
  } catch (error: unknown) {
    console.error(error);
    return null;
  }
};