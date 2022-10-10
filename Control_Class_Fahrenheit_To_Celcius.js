import React from "react";
export default class Control_Class_Fahrenheit_To_Celcius extends React.Component{

    constructor(props){
        super(props)

        this.state = {f: 0 , res: "" }
        this.Control_fah = this.Control_fah.bind(this)
        //this.Control_cel = this.Control_cel.bind(this)
        this.Convert = this.Convert.bind(this)

    }
    Control_fah(event){
        this.setState({f:event.target.value})
    }
    // Control_cel(event){
    //     this.setState({c:event.target.value})
    // }
    Convert(event){
        var cel = ((this.state.f -32)/1.8).toFixed(2)   // toFixed Method desimal ke baad 2 digit ka ans deti h
        //var fah = ((cel*1.8)+32)
        this.setState({res:cel})
        //this.setState({c:fah})



        event.preventDefault()
    }

    render(){
        return(
            <div>
                <form action="" onSubmit={this.Convert} >
                <input type="text" placeholder="Enter Fahrenheit" onChange={this.Control_fah} />
                <br />
                <input type="submit" value="Click Me"  />
                <br />
                <input type="text" placeholder="OutPut" value={this.state.res} onChange={this.Control_cel} />
                <br />
                <h2>Celcius is = {this.state.res}</h2>
                </form>
            </div>
        )
    }

}