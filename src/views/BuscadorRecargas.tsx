import { redirect, useLoaderData } from "react-router-dom";
import { LoaderFunctionArgs } from "react-router-dom";
import { getRecargasByNumberCard } from "../services/RecargasServices";
import { Recarga as RecargaType } from "../types";
import Recarga from "./Recarga";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: LoaderFunctionArgs) {
  const hex_card = params.hex_card;

  if (hex_card !== undefined) {
    const recargas = await getRecargasByNumberCard(hex_card);
    if (!recargas) {
      return redirect(`/recargas/${hex_card}`);
    }
    return recargas;
  }
}

export default function BuscadorRecargas() {
  const recargas = useLoaderData() as RecargaType[];

  // Aquí puedes utilizar el valor de searchTerm para realizar la búsqueda en tu API o base de datos
  if(Array.isArray(recargas) && recargas.length > 0 ) {
    return (
      <div className="container">
        {recargas.map((recarga) => (
          <Recarga key={recarga.id_transaccion_organismo} recarga={recarga} />
        ))}
      </div>
    );
  }
}
