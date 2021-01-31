import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.postgress.username,
  'password': config.postgress.password,
  'database': config.postgress.database,
  'host': config.postgress.host,

  'dialect': config.postgress.dialect,
  'storage': ':memory:',
});
