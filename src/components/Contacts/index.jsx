import React, { useEffect, useState } from "react";
import List from "./List/List";
import Form from "./Form/Form";

function Contacts() {
  let [contacts, setContacts] = useState([
    {
      ad: "İsmet",
      telefon: "45445",
    },
    {
      ad: "Arda",
      telefon: "457876",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List eskiVeri={contacts}></List>
      <Form kisiEkle={setContacts} eskiVeri={contacts}></Form>
    </div>
  );
}

export default Contacts;
