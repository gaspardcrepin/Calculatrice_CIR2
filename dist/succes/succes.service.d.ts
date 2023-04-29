import { Repository } from 'typeorm';
import { Succes } from './succes.entity';
export declare class SuccesService {
    private succesRepository;
    constructor(succesRepository: Repository<Succes>);
    createSucces(timeTakenMs: number): Promise<Succes>;
    reponseSucces(tempsPris: number): Promise<[number, number]>;
}
