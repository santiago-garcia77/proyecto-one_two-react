import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/inicio';
import Nosotros from '../pages/nosotros';

// Routes = Agrupa todas las rutas
// Route = se define cada ruta o cada enlace
const Rutas = () => {
    return (
        <Routes>
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/nosotros' element={<Nosotros />} />
        </Routes>
    );
}
export default Rutas;