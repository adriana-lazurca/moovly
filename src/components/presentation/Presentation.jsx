import logo from '../../assets/moovly-logo.svg';
import awards from '../../assets/Moovlyawards.png';

export const Presentation = () => {
   return (
      <div className='bg-primary'>
         <img className='img-fluid w-100' src={logo} alt='logo' />
         <p>Moovly quote</p>
         <p>Employer</p>
         <img src={awards} alt='awards' />
      </div>
   );
};
