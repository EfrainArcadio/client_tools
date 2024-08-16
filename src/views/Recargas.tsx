import {   Form, useActionData, useNavigate } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage"

import { FormEvent } from "react";
import BuscadorRecargas from "./BuscadorRecargas";

export default function Recargas() {

  const error = useActionData() as string
  const navigate = useNavigate();


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hexCardInput = document.querySelector('input[name="hex_card"]') as HTMLInputElement;
    const hexCardValue = hexCardInput.value;
    navigate(`/recargas/${hexCardValue}`);
  };
  
  return (
    <div className=" container m-auto">
    <div className="text-center font-black my-4 text-4xl">
      <h2>Busca por Tarjeta </h2>
    </div>
    {error && <ErrorMessage>{error}</ErrorMessage>}
    <Form
      className="lg:w-[600px] w-11/12 m-auto bg-gray-300 p-4 rounded-sm shadow-lg space-x-4 flex flex-col lg:flex-row"
      method="GET"
      onSubmit={handleSubmit}
    >
      <div className="space-x-4">

        <label htmlFor="hex_card">Numero Tarjeta</label>
        <input
          className="p-2 focus:border-yellow-950"
          type="text" name="hex_card" id="hex_card" placeholder="C8A55429" />
      </div>
      <div className="w-11/12 mt-5">
        <input type="submit" value="Buscar" className="w-full border-purple-950 border-2 rounded-sm text-purple-950 hover:text-white hover:bg-purple-950 text-2xl p-2" />
      </div>
    </Form>
    <div>
      <BuscadorRecargas />
    </div>
  </div>
  )
}
