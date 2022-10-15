import { F1 } from './data-source';
import { checkYear, roundCheck } from '../lib/utils';

export class RacesData extends F1 {
    constructor() {
        super();
    }

    async getYear(year: string) {
        return await this.get(`${checkYear(year)}.json`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getYearRound(year: string, round: number) {
        return await this.get(`${checkYear(year)}/${roundCheck(round)}.json`, {
            cacheOptions: { ttl: 60 }
        });
    }
}