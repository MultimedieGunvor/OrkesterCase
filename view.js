// import Musician from "./utils/musicianClass.js";

export default class View {
    constructor(controller) {
        const self = this;
        const idSearchForm = document.getElementById("idSearchForm");
        const idField = document.getElementById("memberIdField");
        const showAllMusiciansButton = document.getElementById("showAllMusiciansButton");
        const musicianDialogForm = document.getElementById("musicianDialogForm");
        const addMusicianButton = document.getElementById("addMusicianButton");
        const musicianDialog = document.getElementById("musicianDialog");
        const cancelButton = document.getElementById("cancelButton");
        const searchResult = document.getElementById("searchResult");
        const hiddenIdField = document.getElementById("hiddenIdField");
        const confirmDialog = document.getElementById("confirmDialog");
        const confirmDialogForm = document.getElementById("confirmDialogForm");
        const cancelConfirmBtn = document.getElementById("cancelConfirmBtn");

        self.controller = controller;

        showAllMusiciansButton.onclick = function () {
            self.controller.showAllMusicians();
        }

        idSearchForm.onsubmit = function (e) {
            e.preventDefault();
            console.log(idField.value)
            self.controller.idSearch(idField.value);
        }

        addMusicianButton.onclick = function() {
            musicianDialogForm.reset();
            musicianDialog.showModal();
        }

        cancelButton.onclick = function () {
            musicianDialog.close();
        }

        musicianDialogForm.onsubmit = function () {
            self.controller.newMusician({
                memberId: document.getElementById("idfield").value,
                firstName: document.getElementById("firstnamefield").value,
                lastName: document.getElementById("lastnamefield").value,
                instrument: document.getElementById("instrumentfield").value,
                road: document.getElementById("roadfield").value,
                houseNumber: document.getElementById("housenumberfield").value,
                seniority: parseFloat(document.getElementById("seniorityfield").value)
            })
        }

        searchResult.onclick = function (e) {
            if (e.target.nodeName === "BUTTON") {
                hiddenIdField.value = e.target.id;
                confirmDialog.showModal();
            }
        }

        cancelConfirmBtn.onclick = function () {
            confirmDialog.close();
        }

        confirmDialogForm.onsubmit = function() {
            self.controller.deleteMusician(hiddenIdField.value);
            self.controller.showAllMusicians();
        }
    }

    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML = template;
    }

    snackbar(snackmessage) {
        const snackbar = document.getElementById("snackbar");
        snackbar.innerHTML = snackmessage;
        snackbar.className = "show";
        setTimeout (function() {
            snackbar.className = snackbar.className.replace("show", "");
        },3000);
    }



}