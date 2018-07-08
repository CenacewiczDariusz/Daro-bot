import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import {Doughnut} from 'react-chartjs-2';
import url('.style/style.css');
import {HorizontalBar} from 'react-chartjs-2';




class Apper extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			pomiar: [],
			ostWyniki: []
		}

	}
	componentDidMount() {
		fetch('http://localhost:3000/pomiar')
		.then(function(res){
			return res.json()
		})
		.then(res =>{

			this.setState ({
				pomiar: res,
				min: 0,
				max: 48

			})
		})
	}

	handleClick() {
		this.setState({
			min: this.state.min + 48,
			max: this.state.max + 48,
		})
	}

	render() {
		
		if(this.state.pomiar.length > 0) {




			let energy1 = 0.27
			let energy = 0.25

					// let sumCzynna = for(i=0; i< {e.energiaCzynna.{id <= 48}}; i++) {



					//let sumBierna = // funkcja ktora zwroci mi sume pomiarow z jednego dnia{e.energiaBierna}

					// let price1 =

					// let price2 = 


			 		//let this.state = {pomiar: [{num: 1}, {num: 2}, {num:3}]}

			 console.log(this.state.pomiar);

			 let lastHours = this.state.pomiar.filter(el => el.id > this.state.min && el.id < this.state.max);


			 let average = lastHours.map((e,i) => { 
			 	return e.energiaCzynna
			 }); 


			 let sum = average.reduce((p,n) => {
			 	return p + n;
			 }, 0)

			 const avg = sum / average.length;


			 console.log(avg);


			 let averageBr = lastHours.map((e,i) => {
			 	return e.energiaBierna
			 });

			 let sum1 = averageBr.reduce((p,n) => {
			 	return p + n;
			 },0)

			 const avgBr = sum1 / averageBr.length;

			 console.log(avgBr);


			 let cenaCz = avg * energy1

			 let cenaBR = avgBr * energy

			 

				 //console.log(getFullDate());




					// var avAll = this.state.pomiar.map((e,i) => e.temperatuta).reduce((p,n)=>p+n) / this.state.pomiar.length

					// var av = this.state.pomiar.map((e,i) => { if(i < 48) { 
					// 	return e.temperatuta}}).reduce((p,n)=>p+n) / this.state.pomiar.length;





					// var avZakres = this.state.pomiar.slice(0,20).map((e,i) => e.temperatuta).reduce((p,n)=>p+n) / this.state.pomiar.slice(0,20).length




				let data = {
						labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec'],
						datasets: [
						{
							label: 'Energia Czynna',
							backgroundColor: 'rgba(255,99,132,0.2)',
							borderColor: 'rgba(255,99,132,1)',
							borderWidth: 1,
							hoverBackgroundColor: 'rgba(255,99,132,0.4)',
							hoverBorderColor: 'rgba(255,99,132,1)',
							data: [cenaCz, cenaBR, avg, avgBr,46,energy,66]
						}
						]
					};

					let data1 = {
							labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec'],
							datasets: [
							{
								label: 'Energia Bierna',
								backgroundColor: 'rgba(46, 167, 181, 0.3)',
								borderColor: 'rgba(46,167,181,1)',
								borderWidth: 1,
								hoverBackgroundColor: 'rgba(46, 167, 181, 0.7)',
								hoverBorderColor: 'rgba(46,167,181,1)',
								data: [65, 39, 60, 61, 46, 35, 25]
							}
							]
						};



			return (
				<div>
				{
					lastHours.map((e,i) => {
						return (
							<div key={i}>
								<li >
									<h2> 
										Data: {e.date} 
									</h2>
										<p>
											Godzina: {e.time}
										</p>
										<p>
											Energia Czynna: {e.energiaCzynna}
										</p>
										<p>
											Energia Bierna: {e.energiaBierna}
										</p>
										<p>
											Temperatura: {e.temperatuta}
										</p>
								</li>
										Sredni pobór energii czynnej: {avg}, Cena operatora: {cenaCz}
									<p>
										Średni pobór energii biernej: {avgBr}, Cena operatora: {cenaBR}
									</p>
								<button type="button" onClick={() => this.handleClick()}> Nast Dzien </button>

							</div>
							)
					})
				}
							<h2> Bieżący rok </h2>
								<HorizontalBar data={data} />

							<h2> Bieżący rok </h2>
								<HorizontalBar data={data1} />

				</div>
				)
		} else {
			return (
				<h1> brak pomiarow </h1>
				)
		}
	}
}

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render (
		<Apper />,
		document.getElementById('app')
		)
})








