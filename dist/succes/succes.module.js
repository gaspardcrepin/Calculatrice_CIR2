"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccesModule = void 0;
const common_1 = require("@nestjs/common");
const succes_controller_1 = require("./succes.controller");
const succes_service_1 = require("./succes.service");
const succes_entity_1 = require("./succes.entity");
const typeorm_1 = require("@nestjs/typeorm");
let SuccesModule = class SuccesModule {
};
SuccesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([succes_entity_1.Succes])],
        controllers: [succes_controller_1.SuccesController],
        providers: [succes_service_1.SuccesService],
        exports: [typeorm_1.TypeOrmModule],
    })
], SuccesModule);
exports.SuccesModule = SuccesModule;
//# sourceMappingURL=succes.module.js.map