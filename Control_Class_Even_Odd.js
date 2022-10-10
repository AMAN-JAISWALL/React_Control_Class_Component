import React from "react";

export default class Control_Class_Even_Odd extends React.Component{

    constructor(props){
        super(props)
        this.state = {num1: 0, res1 : 0}
        this.ANumber = this.ANumber.bind(this);
        this.Fun1 = this.Fun1.bind(this);
    }

    ANumber(event){
        this.setState({num1:event.target.value})
    }
    Fun1(event){
        // var num2 = this.state.num1
      var g = ""
        if(this.state.num1%2==0){
            g ="Even Number"
        }else{
            g = "odd Number"
        }
        this.setState({res1: g })
        event.preventDefault()
    }


    render(){
        return(
            <div>
                <form action="" onSubmit={this.Fun1}>
                    <input type="text" placeholder="Enter A Number" onChange={this.ANumber} />
                    <input type="submit" value="Click Me" />
                    <h3>Number is {this.state.res1}</h3>
                    <p>Current Number is  {this.state.num1}</p>
                </form>
            </div>
        )
    }

}