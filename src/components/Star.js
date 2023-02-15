import React from "react";

function Star({ number }) {
	const stars = "*".repeat(number);
	return <div>{stars}</div>;
}

export default Star;
