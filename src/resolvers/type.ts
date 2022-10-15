import { IResolvers } from 'graphql-tools';
import { getMobileURL } from '../lib/utils';

const type: IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getMobileURL(parent.url)
    },
    Race: {
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit,
        urlMobile: parent => getMobileURL(parent.url)
    },
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        location: parent => parent.Location,
        urlMobile: parent => getMobileURL(parent.url)
    },
    Location: {
        lng: parent => parent.long
    },
    Driver: {
        id: parent => parent.driverId,
        name: parent => parent.givenName.concat(' ').concat(parent.familyName),
        urlMobile: parent => getMobileURL(parent.url)
    },
    DriverStanding: {
        driver: parent => parent.Driver,
        constructors: parent => parent.Constructors
    },
    Constructor: {
        id: parent => parent.constructorId,
        urlMobile: parent => getMobileURL(parent.url)
    }
};

export default type;