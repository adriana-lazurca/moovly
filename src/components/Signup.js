import { Formik, Form } from 'formik';
import { Input } from './Input';

export const Signup = () => {
   return (
      <div>
         <h2>Welcome</h2>
         <h6>Create account to continue</h6>
         <Formik initialValues={{ email: '', password: '', confirmPassword: '' }}>
            {(formik) => (
               <Form>
                  <Input label='Email' name='email' type='email' />
                  <Input label='PASSWORD' name='password' type='password' />
                  <Input label='REPEAT PASSWORD' name='repeatpassword' type='password' />
                  <button className='btn btn-danger mt-3' type='submit'>
                     Sign up
                  </button>
               </Form>
            )}
         </Formik>
      </div>
   );
};
