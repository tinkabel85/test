import React, { useState } from "react";

const quotes = ["The first quote", "The second", "The third", "The last one"];

function Quotes() {
	const [quote, setQuote] = useState("");

	const handleClick = () => {
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		setQuote(randomQuote);
	};
	return (
		<div>
			<button onClick={handleClick}>Get a quote</button>
			<p>{quote}</p>
		</div>
	);
}

export default Quotes;
