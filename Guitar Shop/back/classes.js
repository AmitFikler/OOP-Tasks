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
            console.log("πΆπΆπΆ")
            console.log(`The price of the guitar has dropped by 10% - the price now is:${this.price}$`)
        }else {
            console.log("πΆπΆπΆ")
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
        if(str==="πΈ"){
            return "ElectricGuitar"
        } else if(str === "π"){
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
            console.log("πΈπΈπΈ")
            console.log(`The price of the guitar has dropped by 10% - the price now is:${this.price}$`)
        }else {
            console.log("πΈπΈπΈ")
        }
    }
}


class BassGuitar extends ClassicGuitar {
    constructor(manufactureYear, brand, price, numberOfString = 4, id) {
      super(manufactureYear, brand, price, numberOfString = 4, id);
    }
    play(){
        if (this.used === false){
            this.used = true;
            this.price = (this.price * 90) / 100;
            console.log("πππ")
            console.log(`The price of the guitar has dropped by 10% - the price now is:${this.price}$`)
        }else {
            console.log("πππ")
        }
    }

    playSolo() {
        let arrOfEmojis = ["π₯", "π€", "π΅", "π’", "π’", "πΊ"]
        return arrOfEmojis.sort(() => 0.5 - Math.random());
    }
}

module.exports = {ClassicGuitar,ElectricGuitar,BassGuitar}
