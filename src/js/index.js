//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

import { Home } from "./component/home.js";

//render your react application
let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(six, five, four, three, two, one);
	counter++;
	ReactDOM.render(
		<Home
			dSix={six}
			dFive={five}
			dFour={four}
			dThree={three}
			dTwo={two}
			dOne={one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
