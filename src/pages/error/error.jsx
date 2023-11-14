import { FaHome, FaSadTear } from 'react-icons/fa';
import Navbar from '../../components/navbar/navbar';
import './error.scss';
import { NavLink } from 'react-router-dom';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Error = () => {
    useDocumentTitle('Indisponível');
    return (<>
        <Navbar></Navbar>
        <div className="error-page">
            <FaSadTear></FaSadTear>
            Página inexistente
            <NavLink to="inicio">
                <FaHome></FaHome>
                Voltar para o Início
            </NavLink>
        </div>
    </>);
}

export default Error;