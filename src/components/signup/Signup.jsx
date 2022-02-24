import { RegistrationForm } from '../registration-form/RegistrationForm';
import { Presentation } from '../presentation/Presentation';

export const Signup = () => {
   return (
      <div className='container mt-3'>
         <div className='row'>
            <div className='col'>
               <Presentation />
            </div>
            <div className='col'>
               <RegistrationForm />
            </div>
         </div>
      </div>
   );
};
