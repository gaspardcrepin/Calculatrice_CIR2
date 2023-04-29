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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchecService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const echec_entity_1 = require("./echec.entity");
let EchecService = class EchecService {
    constructor(echecRepository) {
        this.echecRepository = echecRepository;
    }
    async createEchec() {
        console.log("Sauvegarde d'un échec dans la DB");
        const echec = new echec_entity_1.Echec();
        console.log(echec);
        await echec.save();
        return echec;
    }
    async dernierEchec() {
        console.log("Recherche du dernier échec en date dans la DB");
        const reponse = await this.echecRepository.find();
        console.log(reponse[reponse.length - 1]);
        return [reponse[reponse.length - 1], reponse.length];
    }
};
EchecService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(echec_entity_1.Echec)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EchecService);
exports.EchecService = EchecService;
//# sourceMappingURL=echec.service.js.map