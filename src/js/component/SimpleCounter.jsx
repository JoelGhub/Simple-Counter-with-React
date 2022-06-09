import React from "react";
import PropTypes from "prop-types";
//create your first component

function SimpleCounter(props) {
	return (
		<div className="w-100">
			<ol className="list-unstyled justify-content-center bg-dark d-flex ">
				<li className="rounded-3 m-2 fs-1 text-white bg-danger border p-5 border-dark">
					<i className="fa fa-clock-o" aria-hidden="true"></i>
				</li>
				<li className="four rounded-3 m-2 fs-1 bg-secondary text-white p-5 border border-dark">
					{props.digitFour}
				</li>
				<li className="three rounded-3 m-2 fs-1 bg-secondary text-white p-5 border border-dark">
					{props.digitThree}
				</li>
				<li className="two rounded-3 m-2 fs-1 bg-secondary text-white p-5 border border-dark">
					{props.digitTwo}
				</li>
				<li className="one rounded-3 m-2 fs-1 bg-secondary text-white p-5 border border-dark">
					{props.digitOne % 10}
				</li>
			</ol>
		</div>
	);
}

export default SimpleCounter;
