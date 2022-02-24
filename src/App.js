import './App.css';
import { Signup } from './components/Signup';
import logo from './assets/moovly-logo.svg';
import awards from './assets/Moovlyawards.png';

function App() {
   return (
      <div className='container mt-3'>
         <div className=' row'>
            <div className='bg-primary col'>
               <img className='img-fluid w-100' src={logo} alt='logo' />
               <p>Moovly quote</p>
               <p>Employer</p>
               <img src={awards} alt='awards' />
            </div>
            <div className='bg-danger col'>
               <Signup />
            </div>
         </div>
      </div>
   );
}

export default App;
