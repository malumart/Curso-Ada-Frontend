import React, { useState } from "react";

const App = () => {
	const [form, setForm] = useState({
		input: "",
		textarea: "",
		select: ""
	});

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<div className="App">
			<label>
				Input sin controlar:
				<input type="text" name="input" onChange={handleChange} />
			</label>

			<textarea name="textarea" onChange={handleChange} />

			<select name="select" onChange={handleChange}>
				<option value="mendoza">Mendoza</option>
				<option value="cordoba">Cordoba</option>
				<option value="tucuman">Tucuman</option>
				<option value="bs as">Bs As</option>
			</select>
		</div>
	);
};

export default App;
