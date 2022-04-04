import React, { Component } from 'react';
import './Game.css';

class Game extends Component {

    constructor() {
        super()
        this.state = {
            numberPla: "",
            plaInput: "",
            numberCpu: "",
            cpuInput: "",
            message: "",
            random: generateRandom(3)
        }
    }

    render() {
        return (
            <div>
                <p>
                    Escoje un objeto
                </p>

                <button>Piedra</button>
                <button>Papel</button>
                <button>Tijera</button>
            </div>
        );
    }
}

export default Game;

function generateRandom(max , min=1){
    return Math.floor(Math.random() * (max - min) + min);
}