export default class Musician {
    constructor(memberId, firstName, lastName, instrument, road, houseNumber, seniority) {
        this.memberId = memberId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.instrument = instrument;
        this.road = road;
        this.houseNumber = houseNumber;
        this.seniority = seniority;
    }

    getMemberId() {
        return this.memberId;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getInstrument() {
        return this.instrument;
    }
    getRoad() {
        return this.road;
    }
    getHouseNumber() {
        return this.houseNumber;
    }
    getSeniority() {
        return this.seniority;
    }
}