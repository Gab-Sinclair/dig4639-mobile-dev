import React from "react";

class Adder extends React.Componet{

    constructor(a,b){
    this.props.a = a;
    this.props.b = b;
    this.props.x = x;
    }

    sum(a,b){
       x = ({a} + {b});
       return x;
    }

    render(){
        this.sum(a,b);
          return '<p>The sum of ${this.props.a}; and ${this.props.b}; is ${this.props.x}</p>';
    }
}
module.exports = Adder;