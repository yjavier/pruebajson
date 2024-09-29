import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Presentacion from './presentacion/Presentacion';

const Rifas = () => {
    const { id } = useParams(); 

    return (
        <>
            <Header />
            <Presentacion></Presentacion>
            <div>Rifa de usuario con ID: {id}</div>
        </>
    );
};

export default Rifas;
