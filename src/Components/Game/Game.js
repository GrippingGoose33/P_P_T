import React, { Component } from 'react';
import './Game.css';

class Game extends Component {

    constructor() {
        super()
        this.state = {
            numberPla: 0,
            plaInput: "",
            numberCpu: 0,
            cpuInput: "",
            message: "",
            message2: "",
            random: generateRandom(3)
        }
    }

    handleOnClick = (e) => {
        const num = e.target.value;
        const random = parseInt(this.state.random);
        const text1 = afterText(num, random);
        const numberCpu = parseInt(this.state.numberCpu + 1);
        const numberPla = parseInt(this.state.numberPla + 1);

        if(num === 1 && random === 2){
            this.state({
                numberCpu: numberCpu + 1, 
                message: text1,
            });
        }

        if(num === 1 && random === 3){
            this.state({
                numberPla: numberPla + 1,
                message: text1,
            });
        }
    }

    render() {
        return (
            <div className="Game">
                <h2>
                    Escoje un objeto
                </h2>

                <h2 className={(this.state.message)}>s</h2>

                <button value = {1} onClick={this.handleOnClick()}>Piedra</button>
                <button value = {2} onClick={this.handleOnClick()}>Papel</button>
                <button value = {3} onClick={this.handleOnClick()}>Tijera</button>

                <p>
                    <button onClick={this.handleOnClick}>Submit</button>
                </p>

                <h1>Cpu: {this.state.cpuInput}</h1>

                <p className= "Texto">Player {this.state.numberPla} - Cpu {this.state.numberCpu}</p>
            </div>
        );
    }
}

export default Game;

function generateRandom(max , min=1){
    
   return Math.floor(Math.random() * (max - min) + min);
}

function afterText(num, random){

    if(num === random){
        return "Empate";
    }

    if(num === random){
        return "Empate";
    }

    if(num === random){
        return "Empate";
    }

}