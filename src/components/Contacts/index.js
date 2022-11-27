import { useEffect, useState } from "react";

import "./style.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
	const [contacts, setContacts] = useState([
		{
			fullname: "Birsen Bozkurt",
			phone_number: "123123",
		},
		{
			fullname: "Hilal Sari",
			phone_number: "321321 ",
		},
		{
			fullname: "Kübra Özkan",
			phone_number: "456456",
		},
	]);

	useEffect(() => {
		console.log(contacts);
	}, [contacts]);
	return (
		<div id="container">
			<h1>Contacts</h1>
			<List contacts={contacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	);
}

export default Contacts;
