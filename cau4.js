class Animal {
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
        setName = function(name){
            this.name = name;
        }
        setWeight = function(weight){
            this.weight = weight;
        }
        getName = function(){
            return this.name;
        }
        getWeight = function(){
            return this.weight;
        }
        toString = function() {
            return `${this.name} ${this.weight}`;
        }
};


let objAnimal1 = new Animal('Elephant', 45.6);
objAnimal1.toString();
console.log(objAnimal1.toString());


let objAnimal2 = new Animal('Dog', 2);
objAnimal2.setName('Mouse');
console.log(objAnimal2);