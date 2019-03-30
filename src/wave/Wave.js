import React, { Component } from 'react';
import './Wave.css';


class Wave extends Component {

	constructor(){
		super();

		this.state = {
			fr: 50,
			p: 2,
		};	
	}

	componentDidMount(){
		
		this.crearWave()
	}
	componentDidUpdate(){
		
		this.crearWave()	
	}
	crearWave(){
		var canvas = document.getElementById("wave")
		let context = canvas.getContext("2d")
		// let context = this.canvas.getContext("2d")
		let width = canvas.width = 850;
		let height = canvas.height = 500;
		

		context.translate(0, height / 2);
		context.scale(1, -1);

		context.beginPath();
		context.moveTo(0, 0);
		context.lineTo(850, 0);
		context.stroke()

		context.translate(50, 0);
		context.beginPath();
		context.moveTo(0, -250);
		context.lineTo(0, 250);
		context.stroke();
		//Math.PI * 2 = controlar periodo
		for(let angle = 0; angle < Math.PI * this.state.p ; angle += .01) {
			//angle * => controlar frecuencia oscilación
			var x = angle * this.state.fr,
			y = Math.sin(angle) * 100;
			context.fillStyle = "black";
			context.fillRect(x, y, 4, 4);
		}

	}		
	aumentarFr = () => {
		console.log(this.state.fr)
		if (this.state.fr < 60){
			this.setState({fr: this.state.fr + 10});	
		}
	}
	disminuirFr = () => {
		console.log(this.state.fr)
		if (this.state.fr > 10){
			this.setState({fr: this.state.fr - 10});
		}
	}
	cambiarPeriodo =() => {
		let select = document.getElementById("select")
		this.setState({p: select.value})
	}


	render() {
		return (
			<div id="wrapper">
				<h1 id="title">Sinusoidal wave</h1>
				<p>Frecuencia</p>
				<button onClick={this.aumentarFr}>⇧</button>
				<button onClick={this.disminuirFr}>⇩</button>
				<p>Seleccionar periodo</p>
				<select id="select" onChange={this.cambiarPeriodo}>
					<option value="1">0.5</option>
					<option value="2">1</option>
					<option value="4">2</option>
				</select>
				<div id="container">
					<canvas id="wave"></canvas>
				</div>
			</div>
			);
	}	
}

export default Wave;