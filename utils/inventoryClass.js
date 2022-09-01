import Musician from "./musicianClass.js"

export default class Inventory {
    constructor() {
        this.musicians = [];
    }

    addMusician(memberId, firstName, lastName, instrument, road, houseNumber, seniority) {
        const newMusician = new Musician(memberId, firstName, lastName, instrument, road, houseNumber, seniority);
        this.musicians.push(newMusician);
    }

    getMusician(memberId) {
        for (const musician of this.musicians) {
            if (memberId === musician.memberId) {
                return musician;
            }
        }
        return null;
    }



    allMusicians() {
        return this.musicians;
    }

    deleteMusician(id) {
        const index = this.musicians.map(musician=>musician.memberId).indexOf(id);
        this.musicians.splice(index, 1);
    }
}