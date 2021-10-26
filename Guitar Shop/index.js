class ClassicGuitar{
    #id;
    constructor(manufactureYear,brand,price,numberOfString = 6,id){
        this.manufactureYear = manufactureYear;
        this.brand = brand;
        this.price = price;
        this.numberOfString = numberOfString;
        this.used = false;
        this.#id = id
    }
    play() {
        if (this.used === false){
            this.used = true;
            this.price = (this.price * 90) / 100;
            console.log("🎶🎶🎶")
            console.log(`The price of the guitar has dropped by 10% - the price now is:${this.price}$`)
        }else {
            console.log("🎶🎶🎶")
        }

    }
    get getPrice(){
        return this.price
    }
    set changePrice(val){
        if (typeof val === "number"){
            this.price = val
        } else{
            console.log("The price must be in numbers")
        }
    }
    get getManufactureYear(){
        return this.manufactureYear
    }
    get getBrand(){
        return this.brand
    }
    get getId(){
        return this.#id
    }
    static detectSound(str){
        if(str==="🎸"){
            return "ElectricGuitar"
        } else if(str === "🔊"){
            return "BassGuitar"
        } else {
            return "ClassicGuitar"
        }
    }
}


class ElectricGuitar extends ClassicGuitar {
    constructor(manufactureYear, brand, price, numberOfString = 6, id, longNeck) {
      super(manufactureYear, brand, price, numberOfString = 6, id);
      this.longNeck = longNeck
    }
    play(){
        if (this.used === false){
            this.used = true;
            this.price = (this.price * 90) / 100;
            console.log("🎸🎸🎸")
            console.log(`The price of the guitar has dropped by 10% - the price now is:${this.price}$`)
        }else {
            console.log("🎸🎸🎸")
        }
    }
}

let newGuiter = new ClassicGuitar(2000,"Gibson",1600,6,9)
let newElectricGuitar = new ElectricGuitar(2021,"Fender",2000,6,10,true)