

class Adder{

    constructor(){
    this.props.a = a;
    this.props.b = b;
    }

    sum(a,b){
       this.props.x = (a + b);
    }

    render(){
        this.sum();
          return '<p>The sum of ${this.props.a}; and ${this.props.b}; is ${this.props.x}</p>';
    }
}

module.exports = Adder ;