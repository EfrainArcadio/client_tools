import { createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import { loader as recargasLoader } from './views/BuscadorRecargas'
import Recargas from './views/Recargas'
import Home from './views/Home'
import Validaciones from './views/Validaciones'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, 
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'recargas',
                element: <Recargas />,
            }, 
            {
                path:'recargas/:hex_card',
                element: <Recargas />,
                loader: recargasLoader
            },
            {
                path:'validaciones',
                element: <Validaciones />,
            }
        ],
    }
])