import React, { useState } from "react";

function Form({ kisiEkle, eskiVeri }) {
  let [form, setForm] = useState({ ad: "", telefon: "" });

  let InputDegis = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let onSubmit = (e) => {
    e.preventDefault();

    if (form.ad === "" || form.telefon === "") {
      return false;
    }
    kisiEkle([...eskiVeri, form]);
    setForm({ ad: "", telefon: "" });
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="ad"
          value={form.ad}
          placeholder="Adınızı Girin"
          onChange={InputDegis}
        ></input>
      </div>
      <div>
        <input
          name="telefon"
          value={form.telefon}
          placeholder="Telefon"
          onChange={InputDegis}
        ></input>
      </div>
      <div className="btn">
        <button>Giriş</button>
      </div>
    </form>
  );
}

export default Form;
