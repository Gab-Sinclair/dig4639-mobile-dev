class Adder{
    constructor (b, c, props){
        this.props = props;
        this.b = b;
        this.c = c;
    }

   sum(b,c){
        return (this.b + this.c);
    }

    
    render(){
        let result = `<p> the sum of ${this.b} and ${this.c} is ${this.sum()} </p>`;
            console.log(result);
 }
}
module.exports = Adder;
