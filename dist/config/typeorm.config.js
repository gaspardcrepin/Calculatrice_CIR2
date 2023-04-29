"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const echec_entity_1 = require("../echec/echec.entity");
const succes_entity_1 = require("../succes/succes.entity");
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    username: 'user',
    password: 'user',
    database: 'calculatrice',
    entities: [echec_entity_1.Echec, succes_entity_1.Succes],
};
//# sourceMappingURL=typeorm.config.js.map