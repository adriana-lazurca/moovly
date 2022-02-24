import { RegisterForm } from '../register-form/RegisterForm';
import { Presentation } from '../presentation/Presentation';

export const Signup = () => {
   return (
      <div className='container mt-3'>
         <div className='row'>
            <div className='col'>
               <Presentation />
            </div>
            <div className='col'>
               <RegisterForm />
            </div>
         </div>
      </div>
   );
};
