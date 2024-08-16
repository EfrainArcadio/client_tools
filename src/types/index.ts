import { object, string, number, boolean, Output, array,} from 'valibot'
import { z } from 'zod'
import { formatearFecha } from '../utils'

export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()
})
export const ProductsSchema = array(ProductSchema)
export type Product = Output<typeof ProductSchema>


export const RecargaSchema = z.object({
  id_transaccion_organismo: z.string(),
  provider: z.string(),
  tipo_tarjeta: z.string(),
  numero_serie_hex: z.string(),
  fecha_hora_transaccion: z.string().datetime().transform((dateString) => {
    const date = new Date(dateString);
    return formatearFecha(date);
}),
  tipo_equipo: z.string(),
  location_id: z.string(),
  tipo_transaccion: z.string(),
  saldo_antes_transaccion: z.number(),
  monto_transaccion: z.number(),
  saldo_despues_transaccion: z.number(),
  sam_serial_hex_ultima_recarga: z.string(),
  sam_serial_hex: z.string(),
  contador_recargas: z.string(),
  event_log: z.string(),
  load_log: z.string(),
  mac: z.string(),
  sam_counter: z.string(),
  environment: z.string(),
  environmet_issuer_id: z.string(),
  contract: z.string(),
  contract_tariff: z.string(),
  contract_sale_sam: z.string(),
  contract_restrict_time: z.string(),
  contract_validity_start_date: z.string().datetime().transform((dateString) => {
    const date = new Date(dateString);
    return formatearFecha(date);
}),
  contract_validity_duration: z.string()
});

  
// Esquema de un array de recargas
export const RecargasSchema = z.array(RecargaSchema);

// Tipo para el resultado
export type Recarga = z.infer<typeof RecargaSchema>;
