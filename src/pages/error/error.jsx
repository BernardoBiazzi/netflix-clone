import { FaHome, FaSadTear } from 'react-icons/fa';
import Navbar from '../../components/navbar/navbar';
import './error.scss';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (<>
        <Navbar></Navbar>
        <div className="error-page">
            <FaSadTear></FaSadTear>
            Página inexistente
            <NavLink to="/">
                <FaHome></FaHome>
                Voltar pro Início
            </NavLink>
        </div>
    </>);
}

export default Error;