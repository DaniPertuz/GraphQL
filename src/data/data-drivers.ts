import { F1 } from './data-source';
import { checkYear, paginationOptions, roundCheck } from '../lib/utils';

export class DriversData extends F1 {
    constructor() {
        super();
    }

    async getDrivers(elements: number = -1, page: number = 1) {
        if (elements === -1) {
            return await this.get(`drivers.json?limit=1000`, {
                cacheOptions: { ttl: 60 }
            });
        }

        return await this.get(`drivers.json?${paginationOptions(elements, page)}`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getDriversByYear(year: string) {
        year = checkYear(year);
        return await this.get(String(year).concat('/drivers.json'),
            { cacheOptions: { ttl: 60 } }
        );
    }

    async getDriversByYearAndRound(year: string, round: number) {
        year = checkYear(year);
        round = roundCheck(round);
        return await this.get(String(year).concat(`/${round}`).concat('/drivers.json'),
            { cacheOptions: { ttl: 60 } }
        );
    }

    async getDriver(id: string) {
        return await this.get((`/drivers/${id}.json`),
            { cacheOptions: { ttl: 60 } }
        );
    }

    async getSeasonPilotsRanking(year: string) {
        year = checkYear(year);
        return await this.get(String(year).concat('/driverStandings.json'),
            { cacheOptions: { ttl: 60 } }
        );
    }
}