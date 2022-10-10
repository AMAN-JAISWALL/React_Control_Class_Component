import React from "react";

export default class Control_Class_Pos_Nag_Zero extends React.Component{

    constructor(props){
        super(props)
        this.state = {res:"", num1: 0}
        this.Handle_Num = this.Handle_Num.bind(this)
        this.Calculate = this.Calculate.bind(this)
    }
    Handle_Num(event){
    this.setState({num1:event.target.value})
    }
    Calculate(event){
        var num1 = this.state.num1
        var a1 = ""
        if(num1==0){
            a1 = "Number is Zero"
        }else if(num1<0){
            a1 = "Number is Nagative"
        }else if(num1>0){
            a1 = "Number is Positive"
        }
        this.setState({res:a1})
        event.preventDefault()

    }



    render(){
        return(
            <div>
                <h1>Check Number Positive - Nagative or Zero </h1>
                <form action="" onSubmit={this.Calculate}>
                    <input type="text" placeholder="Input A Number" onChange={this.Handle_Num}   />
                    <br />
                    <input type="submit" value="Click Me"  />
                    <br />
                    <h4>{this.state.res}</h4>
                </form>
            </div>
        )
    }


}