class Adder{
    constructor (b,c){
        this.b = b;
        this.c = c;
    }

   sum(b,c){
        let x = b + c ;
    }

    render(){
         this.sum();
           return '<p> the sum of {this.b} and  {this.c}  is {this.b + this.c} </p>';
 }
}
module.exports = Adder;
