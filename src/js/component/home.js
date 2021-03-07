import React from "react";
import PropTypes from "prop-types";
//create your first component
export function Home(props) {
	return (
		<div className="bigCounter">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="six"> {props.dSix % 10} </div>
			<div className="five"> {props.dFive % 10} </div>
			<div className="four"> {props.dFour % 10} </div>
			<div className="three"> {props.dThree % 10} </div>
			<div className="two"> {props.dTwo % 10} </div>
			<div className="one"> {props.dOne % 10} </div>
		</div>
	);
}
Home.propTypes = {
	dSix: PropTypes.number,
	dFive: PropTypes.number,
	dFour: PropTypes.number,
	dThree: PropTypes.number,
	dTwo: PropTypes.number,
	dOne: PropTypes.number
};
