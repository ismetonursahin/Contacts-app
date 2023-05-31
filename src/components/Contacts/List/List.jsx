import React, { useState } from "react";

function List({ eskiVeri }) {
  let [filterText, setFiltertext] = useState("");

  let filtered = eskiVeri.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  console.log(filtered);

  return (
    <div>
      <input
        placeholder="Filtreleme"
        value={filterText}
        onChange={(e) => setFiltertext(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span> {contact.ad}</span>
            <span> {contact.telefon}</span>
          </li>
        ))}
      </ul>

      <p>Total Contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
