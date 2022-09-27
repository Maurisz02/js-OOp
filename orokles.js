

class Allat{
    #labakSzama;
    #nev;

    constructor(nev, labakSzama){
        this.#nev = nev;
        this.#labakSzama = labakSzama;
    }

    hangotAd(){
        throw new Error("A hangotAd függvény absztrakt");
    }
}


class AranyHal extends Allat{
    constructor(nev){
        super(nev,0);
    }

    hangotAd(){
        console.log('');
    }
}

class Kutya extends Allat{
    constructor(nev){
        super(nev,4);
    }

    hangotAd(){
        console.log("vau")
    }
}

let kutya = new Kutya('Jamblebeee');
kutya.hangotAd();
let hal = new AranyHal('hal');
hal.hangotAd();