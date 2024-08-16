import { Recarga as RecargaTypes } from "../types"

type RecargaDetailProps = {
  recarga: RecargaTypes
}

export default function Recarga({recarga}: RecargaDetailProps) {
  return (
    <div className="bg-white flex space-x-1 space-y-1">
      <div  className="p-2">
        <p>{recarga.location_id}</p>
      </div>
      <div className="p-2">
        <p>{recarga.fecha_hora_transaccion}</p>
      </div>
      <div className="p-2">
        <p>{recarga.numero_serie_hex}</p>
      </div>
      <div className="p-2">
        <p>{recarga.tipo_transaccion}</p>
      </div>
      <div className="p-2">
        <p>{recarga.monto_transaccion}</p>
      </div>
        <div className="p-2">
          <p>{recarga.saldo_despues_transaccion}</p>  
        </div>
    </div>
  )
}
