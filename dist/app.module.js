"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const echec_module_1 = require("./echec/echec.module");
const echec_controller_1 = require("./echec/echec.controller");
const echec_service_1 = require("./echec/echec.service");
const succes_module_1 = require("./succes/succes.module");
const succes_controller_1 = require("./succes/succes.controller");
const succes_service_1 = require("./succes/succes.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [echec_module_1.EchecModule, succes_module_1.SuccesModule, typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig)],
        controllers: [app_controller_1.AppController, echec_controller_1.EchecController, succes_controller_1.SuccesController],
        providers: [app_service_1.AppService, echec_service_1.EchecService, succes_service_1.SuccesService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map