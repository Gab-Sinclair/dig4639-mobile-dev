class Pet{
    constructor(props){
        this.props = props;
    }
    getName(){
        return this.props.name;
    }
   getSpecies(){
       return this.props.species;
   }
   getSpeech(){
       return "I make this sound: ";
   }
   getIdentity = () =>{
       console.log(this);
   }
}

class Cat extends Pet{
    constructor(props){
        //inherit props from parent
        super(props);
        //add props in subclass
        this.props.species = "cat";
    }
    getSpeech(){
        return super.getSpeech() + "meow";
    }
}

class Dog extends Pet{
    constructor(props){
        //inherit props from parent
        super(props);
        //add props in subclass
        this.props.species = "dog";
    }
    getSpeech(){
        return super.getSpeech() + "ruff";
    }
}

function sayName(pet){  //creates pet name species undefined in below example
    console.log(`my name is ${pet.getName()}, and I am  ${pet.getSpecies()}`);
    console.log(`${pet.getSpeech()}`);
}

var myPet = new Cat({name:"Luna"});
sayName(myPet);
myPet.getIdentity()
//assign method getIdentity to VAR MyIdentity
var myIdentity = myPet.getIdentity;
//call function
myIdentity();

var myDog = new Dog({name:"Fido"});
sayName(myDog);
myDog.getIdentity()
