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
exports.SuccesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const succes_entity_1 = require("./succes.entity");
const typeorm_2 = require("@nestjs/typeorm");
let SuccesService = class SuccesService {
    constructor(succesRepository) {
        this.succesRepository = succesRepository;
    }
    async createSucces(timeTakenMs) {
        console.log("Sauvegarde d'un succès dans la DB");
        const succes = new succes_entity_1.Succes();
        succes.timeTakenMs = timeTakenMs;
        console.log(succes);
        await succes.save();
        return succes;
    }
    async reponseSucces(tempsPris) {
        console.log("On traite la requête succès");
        const reponse = await this.succesRepository.find();
        var moyenne = 0;
        var succesRapide = 0;
        reponse.forEach(succes => {
            moyenne += succes.timeTakenMs;
            if (succes.timeTakenMs > tempsPris) {
                succesRapide += 1;
            }
        });
        console.log([moyenne / reponse.length, succesRapide * 100 / reponse.length]);
        return [moyenne / reponse.length, succesRapide * 100 / reponse.length];
    }
};
SuccesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(succes_entity_1.Succes)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SuccesService);
exports.SuccesService = SuccesService;
//# sourceMappingURL=succes.service.js.map