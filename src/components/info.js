import {FaLinkedin} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';



export default function Info(){
    return (
        <div className="info">
        <img src="./small.jpg" className='portrait' alt='sexy profile pix'></img>
        <h1 className='name'>Jason S</h1>
        <h4 className='job'>Air Combat Systems Officer</h4>
        <h5 className='website'>Sotzky.com</h5>
        <div className="button-container" >
        <btn className='btn-email' variant="info"><i class="fas fa-envelope-square"></i>  Email</btn>
        <btn className="btn-linkedin" variant="light"><i class="fab fa-linkedin"></i>  LinkedIn</btn>
        </div>
        </div>
    )
}