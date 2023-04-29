"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchecModule = void 0;
const common_1 = require("@nestjs/common");
const echec_controller_1 = require("./echec.controller");
const echec_service_1 = require("./echec.service");
const typeorm_1 = require("@nestjs/typeorm");
const echec_entity_1 = require("./echec.entity");
let EchecModule = class EchecModule {
};
EchecModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([echec_entity_1.Echec])],
        controllers: [echec_controller_1.EchecController],
        providers: [echec_service_1.EchecService],
        exports: [typeorm_1.TypeOrmModule],
    })
], EchecModule);
exports.EchecModule = EchecModule;
//# sourceMappingURL=echec.module.js.map