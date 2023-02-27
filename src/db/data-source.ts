import { config } from 'dotenv';
import * as path from 'path';
import { User } from 'src/users/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

config();
console.log(path.join(__dirname, '/**/migrations/*{.ts,.js}'));

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [User],
  migrations: [path.join(__dirname, '/**/migrations/*')],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
