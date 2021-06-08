/* eslint-disable eqeqeq */
import './Conversion.css';
import React, { Component } from "react";
export default class Conversion extends Component {

    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
        this.onValueOfmoeda = this.onValueOfmoeda.bind(this);
        this.onValueTomoeda = this.onValueTomoeda.bind(this);
        this.conversion = this.conversion.bind(this);
      
        this.state = {
            moedaOf: '',
            moedaTo: '',
            num: 0
        }
    }
    
    onValueChange(e){
        this.setState({num: e.target.value})
    }
    onValueOfmoeda(e){
        this.setState({moedaOf: e.target.value})
    }
    onValueTomoeda(e){
        this.setState({moedaTo: e.target.value})
    }
    conversion(){
        let valor = parseFloat(this.state.num);
        let converted = 0.0;
        let dolar = 5.05;
    
        if(this.state.moedaOf == 'real' && this.state.moedaTo == 'dolar'){
            converted = valor / dolar;
            document.getElementById('resultado').innerHTML = converted.toFixed(2) + ' Dólar americano';
        }
        if(this.state.moedaOf == 'dolar' && this.state.moedaTo == 'real'){
            converted = valor * dolar;
            document.getElementById('resultado').innerHTML = converted.toFixed(2) + ' Real brasileiro';
        }
    }
    
    render(){
        return (
            <div className="">
                
                <form>
                    <input onChange={(e) => this.onValueChange(e)} type="number" className="Input"/>
                    <br/>
             
                    <select onChange={(e) => this.onValueOfmoeda(e)} className="of">
                        <option></option>
                        <option type="text" value="dolar">Dolar</option>
                        <option type="text" value="real">Real</option>
                    </select>
                    
                    <label> to </label>

                    <select onChange={(e) => this.onValueTomoeda(e)} className="to">
                        <option></option>
                        <option type="text" value="dolar">Dolar</option>
                        <option type="text" value="real">Real</option>
                    </select>

                    <br/>
                    <button className="btn" type="button" onClick={this.conversion}>Converter</button>
                    <br/>
                    <span className="" id="resultado"></span>
                </form>
            </div>
        );
    }
}
