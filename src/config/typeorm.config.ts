import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {Echec} from '../echec/echec.entity'
import {Succes} from '../succes/succes.entity'

export const typeOrmConfig: TypeOrmModuleOptions = {
type: 'mysql',
host: 'localhost',
//port: 5500,
username: 'user',
password: 'user',
database: 'calculatrice',
entities: [Echec,Succes],
};