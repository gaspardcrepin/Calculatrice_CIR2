import { Echec } from './echec.model';
import { EchecService } from './echec.service';
export declare class EchecController {
    private echecService;
    constructor(echecService: EchecService);
    HandleEchec(): Promise<(number | Echec)[]>;
}
