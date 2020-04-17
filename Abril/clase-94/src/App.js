import React, { useState } from "react";

const App = () => {
	const [form, setForm] = useState({
		input: "",
		select: "",
	});

	const handleChange = (e) => {
		console.log("handle change del input", e.target.value);
		setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};

	return (
		<div className="App">
			<form>
				<input
					type="text"
					onChange={handleChange}
					name="input"
					value={form.input}
				></input>
				<select onChange={handleChange} name="select" value={form.select}>
					<option value="mendoza">Mendoza</option>
					<option value="cordoba">Cordoba</option>
					<option value="bsas">Buenos Aires</option>
				</select>
			</form>
		</div>
	);
};

export default App;
