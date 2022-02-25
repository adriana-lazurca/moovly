import logo from '../../assets/moovly-logo.svg';
import awards from '../../assets/Moovlyawards.png';
import './presentation.css';

export const Presentation = () => {
   return (
      <div className='presentation'>
         <img className='img-fluid w-75 mb-4' src={logo} alt='logo' />
         <p className="text-white w-75 fw-bolder text-center">With Moovly, I create professional training videos, and my customers really apreciate the quality</p>
         <p className="text-white-50 w-75 text-center mb-0">Wladzio Wladecki</p>
         <p className="text-white-50 w-75 text-center">Consultant @ MF consulting</p>
         <img className='w-50' src={awards} alt='awards' />
      </div>
   );
};
