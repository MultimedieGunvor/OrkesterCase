import Inventory from "./utils/inventoryClass.js"

export default class Model {
    constructor() {
        this.musicianList = new Inventory;
        this.musicianList.addMusician("2093", "Peter", "Gammelgaard", "Kontrabas", "Højmarken", "23", 4);
        this.musicianList.addMusician("2094", "Lisa", "Bruun", "Cello", "Algade", "3", 2);
        this.musicianList.addMusician("2095", "Morten", "Gaardbo", "Klaver", "Klosterporten", "107", 1);
        this.musicianList.addMusician("2096", "Astrid", "Petersen", "Violin", "Viborgvej", "56", 4);
        this.musicianList.addMusician("2097", "René", "Møllehave", "Tuba", "Landevejen", "27B", 7);
        this.musicianList.addMusician("2098", "Camilla", "Christensen", "Trompet", "Ærøgade", "13", 5);
        this.musicianList.addMusician("2099", "Anders", "Sørensen", "Obo", "Ved Kilden", "6", 3);
        this.musicianList.addMusician("2073", "Sofia", "Ibsgaard", "Kornet", "Præstehaven", "109C", 6);
        this.musicianList.addMusician("2036", "Jesper", "Graversgaard", "Stortromme", "Indelukket", "78", 8);
        this.musicianList.addMusician("2045", "Helene", "Hansen", "Tværfløjte", "Randersvej", "230", 9);
        this.musicianList.addMusician("2023", "Rasmus", "Simoni", "Bassun", "Stokbrovej", "67", 12);
        this.musicianList.addMusician("2071", "Maria", "Boserup", "Viola", "Strandvejen", "38", 10);
        this.musicianList.addMusician("2022", "Christian", "Thomsen", "Fagot", "Bredgade", "29", 4.5);
        this.musicianList.addMusician("2021", "Julie", "Frederiksen", "Trombone", "Bredsdorffs Allé", "48", 3.5);
        this.musicianList.addMusician("2023", "Thomas", "Nørgaard", "Harpe", "Fåborggade", "92", 7.5);
        this.musicianList.addMusician("2034", "Stine", "Asdal", "Kazoo", "Smutvejen", "3", 11);
        this.musicianList.addMusician("2035", "Mikael", "Grønkvist", "Xylofon", "Christian Xs Vej", "393", 1.5);
        this.musicianList.addMusician("2036", "Cecilie", "Knudsen", "Guitar", "Søndergade", "99", 2.5);
        this.musicianList.addMusician("2074", "Jakob", "Seeberg", "Trommer", "Nørre Allé", "83B", 5.5);
        this.musicianList.addMusician("2066", "Ellen", "Holm", "Triangel", "Lollandsgade", "73C", 8.5);

    }
}