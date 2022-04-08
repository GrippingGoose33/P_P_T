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
                rand: generateRandom(4)
            }
            
        }

        handleOnClick = (event) => {
            const num = event.target.value;
            const random = generateRandom(4);
            const text1 = afterText(num, random);
            const score = parseInt;
            const cpuScore = parseInt;
            
            console.log("-------------");
            
            console.log("Player input: ", num);
            console.log("Cpu input: ", random);

            if(num == random){
                console.log("Empate");
            }

            if(num == 1 && random == 2 || num == 2 && random == 3 || num == 3 && random == 1){
                console.log("Perdiste");
            }

            if(num==1){
                console.log("Jugador: Piedra");
            }

            if(num==2){
                console.log("Jugador: Papel");
            }

            if(num==3){
                console.log("Jugador: Tijeras");
            }

            if(random===1){
                console.log("Cpu: Piedra");
            }

            if(random===2){
                console.log("Cpu: Papel");
            }

            if(random===3){
                console.log("Cpu: Tijeras");
            }

            if(num == 1 && random == 3 || num == 2 && random == 1 || num == 3 && random == 1){
                console.log("Ganaste");
            }

            console.log("-------------");
        }

        render() {
            return (
                <div className="Game">
                    <h2>
                        Escoje un objeto
                    </h2>

                    <h2 className={(this.state.message.text1)}>Resultado</h2>

                    <div>
                      <button value={1} onClick={this.handleOnClick}>Piedra</button>
                      <button value={2} onClick={this.handleOnClick}>Papel</button>
                      <button value={3} onClick={this.handleOnClick}>Tijera</button>
                    </div>

                    <h1>Cpu: {this.state.random}</h1>

                    <p className= "Texto">Player {this.state.numberPla} - Cpu {this.state.numberCpu}</p>
                </div>
            );
        }
    }

    export default Game;

    function generateRandom(max){
    return Math.floor(Math.random() * (max - 1) + 1);
    }

    function afterText(num, random){

        if(num === random){
            return "Empate";
        }
        if((num === 1 && random === 3) || (num === 2 && random === 1) || (num === 3 && random === 2)){
            return "Ganaste";
        }
        if((num === 1 && random === 2) || (num === 2 && random === 3) || (num === 3 && random === 2)){
            return "pierdes";
        }
    }