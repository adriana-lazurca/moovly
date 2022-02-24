import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Input } from '../input/Input';

export const Signup = () => {
   
   const initialValues = {
      email: '',
      password: '',
      confirmPassword: ''
   }

   const validationSchema = Yup.object({
      email: Yup.string()
         .required('required')
         .email('Email is invalid'),

      password: Yup.string()
         .required('required')
         .min(8, 'Password must have at least 8 characters'),

      confirmPassword: Yup.string()
         .required('required')
         .oneOf([Yup.ref('password')], 'Passwords must be a match'),
   });

   return (
      <div>
         <h2>Welcome</h2>
         <h6>Create account to continue</h6>
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
               console.log(values);
            }}
         >
            <Form>
               <Input label='Email' name='email' type='email' />
               <Input label='PASSWORD' name='password' type='password' />
               <Input label='REPEAT PASSWORD' name='confirmPassword' type='password' />
               <button className='btn btn-danger mt-3' type='submit'>
                  Sign up
               </button>
            </Form>
         </Formik>
      </div>
   );
};
