import * as dotenv from 'dotenv';
import * as mysql from 'mysql2/promise';

dotenv.config();
// const mySQLPort = +(process.env.MYSQL_PORT as string) || 3306
export default mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_NAME,
  // port: mySQLPort,
});
