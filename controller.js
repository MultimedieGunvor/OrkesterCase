export default class Controller {
    initialize(model, view) {
        this.model = model;
        this.view = view;
    }

    buildTemplate(musician) {
        return `<div class="card">
        <div class="container">
          <h4><b>Medlems-ID: ${musician.getMemberId()}</b></h4>
          <p>Navn: ${musician.getFirstName()} ${musician.getLastName()}</p>
          <p>Instrument: ${musician.getInstrument()}</p>
          <p>Bopæl: ${musician.getRoad()} ${musician.getHouseNumber()}</p>
          <p>Anciennitet: ${musician.getSeniority()} år</p>
          <button type="button" id="${musician.getMemberId()}">Fjern</button>

        </div>
      </div>`
    }

    idSearch(memberId) {
        const musician = this.model.musicianList.getMusician(memberId);
        let template = "";

        if (musician !== null) {
            template = this.buildTemplate(musician);
        } else {
            template = `
            <div class="container">
            <h4><b>Intet at vise</b></h4>
            </div>`;
        }
        this.view.message(template);
    }

    showAllMusicians() {
        let template = "";
        for (const musician of this.model.musicianList.allMusicians()) {
            template += this.buildTemplate(musician);
        }
        this.view.message(template);
    }

    newMusician(musician) {
        const doesMusicianAlreadyExist = this.model.musicianList.getMusician(musician.memberId);

        if (doesMusicianAlreadyExist === null) {
            this.model.musicianList.addMusician(musician.memberId, musician.firstName, musician.lastName, musician.instrument, musician.road, musician.houseNumber, musician.seniority);
            this.view.snackbar("Musikeren blev tilføjet");
            this.showAllMusicians();
        } else {
            this.view.snackbar("Musikeren findes allerede i systemet");
        }
    }

    deleteMusician(id) {
        this.model.musicianList.deleteMusician(id);
        this.view.snackbar("Musikeren blev fjernet");
    }
}