class Adder{
    constructor (props){
       this.props =props;
    }

   sum(){
        return (this.props.a + this.props.b);
    }

    render(){
        let result = `<p> the sum of ${this.props.a} and ${this.props.b} is ${this.sum()} </p>`;
            return result;
    }
}
module.exports = Adder;
