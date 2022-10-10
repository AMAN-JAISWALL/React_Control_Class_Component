import React from 'react';

export default class Control_Class_Swap extends React.Component{

    constructor(props){
        super(props)
        this.state = {res1:"", res2:"", Result:""}
        this.ANumber = this.ANumber.bind(this)
        this.BNumber = this.BNumber.bind(this)
        this.Calcu = this.Calcu.bind(this)
    }

    ANumber(event){
        this.setState({res1:event.target.value})
    }

    BNumber(event){
        this.setState({res2:event.target.value})
    }

    Calcu(event){
        var a = +(this.state.res1);
        var b = +(this.state.res2);

        //res1 = 10, res2 = 20;
        a = a + b;  // res1 30
        b = a - b // res2 = 10;
         a = a - b // res1 = 20
         
         document.getElementById("txt1").value =a;
         document.getElementById("txt2").value = b;
         this.setState({Result:" A is =" + a + " B is = " + b});

        
        // this.setState(res2);
        event.preventDefault()
    }


    render(){
        return(
            <div>
                <h3>Our Swap Program</h3>
                <form action="" onSubmit={this.Calcu} >
                    <input type="text" placeholder='Enter A Number' id="txt1"  onChange={this.ANumber} />
                    <br />
                    <input type="text" placeholder='Enter B Number' id="txt2"  onChange={this.BNumber} />
                    <br />
                    <input type="Submit" value='Click Me' />
                    <h4>After Swap 
                       {this.state.Result}
                    </h4>
                </form>
            </div>
        )


    }


}