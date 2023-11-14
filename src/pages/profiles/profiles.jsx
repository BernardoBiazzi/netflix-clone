import { useNavigate } from 'react-router-dom';
import './profiles.scss';

const Profiles = () => {
    const profiles = [
        { 
            name: 'Bernardo Biazzi', 
            picture: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfau2_ixC0tLf77vSTrz2q4HpBIKxN6WIpL5wvTznB9V6COzXe3KdzcIGsa-aiEFWBDKE5RIJz-qcPIX4x0M-3kRXi6ktYrl0y3a.png?r=3f3' 
        },
        { 
            name: 'Otávio Biazzi', 
            picture: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUXJVVQD6o4fEaF41Qo1karboadfGNJ7X8zBsFiN2FhG_gR-WmcAzm_JBBzo-FYnUvUbjCCu4-1AXt1RNM77DjcWNyzBxYBPOB-K.png?r=2af' 
        },
        { 
            name: 'Helga Biazzi', 
            picture: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS6uOI_NEikNFvxF_bXAFNaOdRkb1zAL_0cudbN2Q4rbFYG3i-wsDyiBHLYnBtsuN0jpUhgm_55S5vp2WAyMjKIuW2Y9yGTj33wA.png?r=d4a' 
        },
        { 
            name: 'Marco Biazzi', 
            picture: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfe0Rq3IYjTXIvk8NUSXDuU1pDLlT-7CmBIci9VlCHpFdWEOye-8AwiLhZau3m2BPwZcel8Z2TNS4jp6uvDhDAipx06Symg6VyjR.png?r=2c6' 
        },
        { 
            name: 'Lord Supremo', 
            picture: 'https://occ-0-1123-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUJtfoWq0SpPfli2uLvYMMEESdNrbLPJSlS4SNz-COZybbyZOuY4ZT8tkPF_ddvdgoNQ-fanX4C3P629Y9yxRcXfc_IqOnU4RbLa.png?r=937' 
        }
    ];

    const navigate = useNavigate();
    const handleClick = (profile) => {
        console.log(profile);
        navigate('/inicio');
    } 

    return (<>
        <div className="profile-selection">
            <h1 className="whos-watching">Quem está assistindo?</h1>
            <div className="profiles-container">
                {profiles.map((profile, index) => (
                    <div className="profile" key={index} onClick={() => handleClick(profile)}>
                        <img src={profile.picture} alt={`profile-${index}`} />
                        <span>{profile.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </>);
};

export default Profiles;