import { registerAs } from '@nestjs/config';

console.log('DIR', `${__dirname}/**/*.entity{.ts,.js}`);

const ssl = process.env.DATABASE_SSL
  ? {
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {};

const commonDbConfigOpts = {
  type: 'postgres',
  synchronize: false,
  logging: true,
  ...ssl,
  autoLoadEntities: true,
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  host: process.env.DB_MAIN_HOST,
  port: parseInt(process.env.DB_MAIN_PORT),
  username: process.env.DB_MAIN_USER,
  password: process.env.DB_MAIN_PASSWORD,
  database: process.env.DB_MAIN_DATABASE,
  schema: process.env.DB_MAIN_SCHEMA,
};

const defaultDbConfig = registerAs('database', () => {
  return {
    ...commonDbConfigOpts,
    migrations: [`${__dirname}/**/migrations/*.ts`],
    cli: {
      migrationsDir: 'src/migrations',
    },
  };
});
export default defaultDbConfig;

export const seedDbConfig = registerAs('database', () => {
  return {
    ...commonDbConfigOpts,
    migrations: [`${__dirname}/**/seeds/*.ts`],
    cli: {
      migrationsDir: 'src/seeds',
    },
  };
});
