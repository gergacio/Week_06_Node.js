//variable define with const (shouldn't be changed) assined with annonymous function
//Park is called constructor (special func make Park objects)
const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    //set up empty array - internally
    this.dinosaurs = [];
};

//add functionality to Park protorype (like that we share behavior between all objects created with Park)
Park.prototype.addDinosaurs = function (dinosaur) {
    //get dinosaur from ouside and push it in our collection
    this.dinosaurs.push(dinosaur);
}
//remove dinosaur from collection
Park.prototype.removeDinosaurs = function (dinosaur) {
    //find dinosaur
    for(let index; index < this.dinosaurs.length; index++){
        //compare every dinosaur from collection with given dinosaur from ouside
        if(this.dinosaurs[index]['species'] == dinosaur['species']){
            //remove it
            this.dinosaurs.splice(index,1);
        }

    }

}

//find most atractive dinosaur
Park.prototype.findMostAtractiveDino = function () {
    //loop collection find dino by guestsAttractedPerDay
    let guestAttracted = 0;
    let mostAttractiveDino;
    for(let index; index < this.dinosaurs.length; index++){
        
        if(this.dinosaurs[index]['guestsAttractedPerDay'] > guestAttracted){
            guestAttracted = this.dinosaurs[index]['guestsAttractedPerDay']//update temp guest attractive count
            //update mostAttractive dino
            mostAttractiveDino = this.dinosaurs[index];
           
        }

    }
 
    return mostAttractiveDino;
}

module.exports = Park;