import { Repository } from 'typeorm';
import { Echec } from './echec.entity';
export declare class EchecService {
    private echecRepository;
    constructor(echecRepository: Repository<Echec>);
    createEchec(): Promise<Echec>;
    dernierEchec(): Promise<(number | Echec)[]>;
}
