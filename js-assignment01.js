var Show = class {
    constructor(title, mediatype, genre, starring, duration, year, language, country) {
    this.title = title,
    this.mediatype = mediatype,
    this.genre = genre,
    this.starring = starring,
    this.duration = duration,
    this.language = language,
    this.year = year,
    this.country = country,
    this.viewers = null
    }
}

var Subscriber = class {
    constructor(name){
    this.name = name,
    view(show){
        this.show = show,
        show.subscriber = this.name
    }
}

var Review = class {
    constructor(title, subscriberid){
    this.title = title,
    this.subscriberid = subscriberid
    }
}

var bettercallsaul = new Show("Better call Saul", "TV Series", "Drama", ["Bob Odenkirk, "Rhea Seehorn", "Jonathan Banks"], 50, 2017, "English", "USA");

var saulgoodman = new Subscriber("Saul Goodman");

saulgoodman.view(bettercallsaul);