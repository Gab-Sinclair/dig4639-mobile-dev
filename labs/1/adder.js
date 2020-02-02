class Adder{
    constructor (props){
       this.props =props;
       this.b = {};
       this.c = {};

    }

   sum(b,c){
        return (this.props.b + this.props.c);
    }

    
    render(){

        let result = `the sum of ${this.props.b} and ${this.props.c} is ${this.sum()} `;
            return result;
    }
}
module.exports = Adder;
