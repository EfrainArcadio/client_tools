

import { Recarga, RecargasSchema } from "../types"
import axios from "axios";



export async function getRecargasByNumberCard(numero_serie_hex: Recarga['numero_serie_hex']) {

    try {
        const url = `${import.meta.env.VITE_API_URL}/api/recargas/${numero_serie_hex}`

        const response = await axios.get(url);
        console.log(response)
        const result = RecargasSchema.safeParse(response.data.data); // Assuming data is in response.data
        console.log(result)
        if (result.success) {
          const validatedData = result.data; // Validated and optionally modified data
            return validatedData
          // Use the validated data here
        } else {
          console.error('Validation errors:', result.error.issues);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}



