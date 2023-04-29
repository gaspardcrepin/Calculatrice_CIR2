"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchecController = void 0;
const common_1 = require("@nestjs/common");
const echec_service_1 = require("./echec.service");
let EchecController = class EchecController {
    constructor(echecService) {
        this.echecService = echecService;
    }
    HandleEchec() {
        console.log("POST reçu pour un échec !");
        this.echecService.createEchec();
        console.log("Echec sauvegardé");
        return this.echecService.dernierEchec();
    }
};
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EchecController.prototype, "HandleEchec", null);
EchecController = __decorate([
    (0, common_1.Controller)('Echec'),
    __metadata("design:paramtypes", [echec_service_1.EchecService])
], EchecController);
exports.EchecController = EchecController;
//# sourceMappingURL=echec.controller.js.map