import { useState, useEffect } from "react";

const initalFormValue = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
	console.log(addContact);
	const [form, setForm] = useState(initalFormValue);

	useEffect(() => {
		setForm(initalFormValue);
	}, [contacts]);
	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (form.fullname == "" || form.phone_number == "") {
			return false;
		}
		addContact([...contacts, form]);
	};

	return (
		<form onSubmit={onSubmit}>
			<div>
				<input name="fullname" placeholder="Fullname" onChange={onChangeInput} value={form.fullname} />
			</div>

			<div>
				<input name="phone_number" placeholder="Phone Number" onChange={onChangeInput} value={form.phone_number} />
			</div>
			<div className="btn">
				<button onClick={onSubmit}>Add</button>
			</div>
		</form>
	);
}

export default Form;
