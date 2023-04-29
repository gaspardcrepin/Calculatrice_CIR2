import { SuccesService } from './succes.service';
export declare class SuccesController {
    private succesService;
    constructor(succesService: SuccesService);
    handleSucces(timeTakenMs: number): Promise<[number, number]>;
}
