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

    handleOnClick = (event) => {
        const num = event.target.value;
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

        if(num === 2 && random === 3){
            this.state({
                numberCpu: numberCpu + 1, 
                message: text1,
            });
        }

        if(num === 2 && random === 1){
            this.state({
                numberPla: numberPla + 1,
                message: text1,
            });
        }

        if(num === 3 && random === 1){
            this.state({
                numberCpu: numberCpu + 1, 
                message: text1,
            });
        }

        if(num === 3 && random === 2){
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

                <h2 className={(this.state.message)}>Resultado</h2>

                <button value={1} onClick={this.handleOnClick}>Piedra</button>
                <button value={2} onClick={this.handleOnClick}>Papel</button>
                <button value={3} onClick={this.handleOnClick}>Tijera</button>

               

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

    if(num === 1 && random === 2){
        return "pierdes";
    }

    if(num === 1 && random === 3){
        return "Ganaste";
    }

    if(num === 2 && random === 3){
        return "pierdes";
    }

    if(num === 2 && random === 1){
        return "Ganaste";
    }

    if(num === 3 && random === 1){
        return "pierdes";
    }

    if(num === 3 && random === 2){
        return "Ganaste";
    }
}