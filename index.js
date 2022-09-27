let valami = {
    nev: "Username",
    _eletkor: 23,

    kiir(){
        console.log(this.nev, this._eletkor);
    },
    get eletkor(){
        return this._eletkor;
    },
};

valami.kiir();

class User {
    #eletkor = 0;

    constructor(nev, eletkor){
        this.nev = nev;
        this.eletkor = eletkor;
    }

    get eletkor(){
        return this.#eletkor;
    }

    set eletkor(eletkor){
        if(typeof eletkor ==='number' && eletkor >= 0){
            this.#eletkor=eletkor;
        }else{
            throw new Error("Eletkor nem negatív egesz kell hogy legyen");
        }
    }

    get username(){
        return this.nev;
    }

    kiir(){
        console.log(this,this.nev,this.eletkor);
    }

    login(usernev,pass){
        return false;
    }

}

let user = new User("Maurisz", 20);

console.log(valami instanceof User);
console.log(user instanceof User);
console.log(User);
//user.kiir();
console.log('----------------');
user.kiir();
let k = user.kiir;
let obj = {
    nev:'nev',
    eletkor:30,
    kiir:user.kiir,
}
obj.kiir();
//k();

document.getElementById('gomb').addEventListener('click',user.kiir);

