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
            random: generateRandom(3)
        }
    }

    handleOnClick = () => {
        //const text = afterText(numberPla, numberCpu);
    }

    render() {
        return (
            <div>
                <p>
                    Escoje un objeto
                </p>

                <h2 className={(this.state.message)}></h2>

                <button onClick={this.state.plaInput = 1}
                >Piedra</button>
                <button onClick={this.state.plaInput = 2}
                >Papel</button>
                <button onClick={this.state.plaInput = 3}
                >Tijera</button>

                <p className= "Texto">Player {this.state.numberPla} - Cpu {this.state.numberCpu}</p>
            </div>
        );
    }
}

export default Game;

function generateRandom(max , min=1){
    return Math.floor(Math.random() * (max - min) + min);
}

function afterText(numberPla,numberCpu){

    if(numberPla == 1 && numberCpu == 1){
        return "Empate";
    }

    if(numberPla == 2 && numberCpu == 2){
        return "Empate";
    }

    if(numberPla == 3 && numberCpu == 3){
        return "Empate";
    }

}