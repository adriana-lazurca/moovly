import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { Input } from '../input/Input';
import { createUser } from '../../apis/user';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './registration-form.css'

export const RegistrationForm = () => {
   const [, setUserEmail] = useLocalStorage('userEmail', '');

   const initialValues = {
      email: '',
      password: '',
      confirmPassword: '',
   };

   const validationSchema = Yup.object({
      email: Yup.string().required('Please enter an email').email('Email is invalid'),

      password: Yup.string()
         .required('Please enter a password')
         .matches(
            '^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z]).{8}$',
            'Must contain 8 characters, one Uppercase, two Lowercase, two Digits and one special case Character'
         ),

      confirmPassword: Yup.string()
         .required('Please confirm the password')
         .oneOf([Yup.ref('password')], 'Passwords must be a match'),
   });

   const handleSubmit = async (values) => {
      const { confirmPassword, ...userRequest } = values;

      const createdUser = await createUser(userRequest);

      setUserEmail(createdUser.email);

      navigate(`/`);
   };

   let navigate = useNavigate();

   return (
      <div className="w-75 px-4">
         <h2 className="mt-5 mb-3">Welcome</h2>
         <h6 className="mt-2 mb-4">Create account to continue</h6>
         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
               <Input label='Email' name='email' type='email' />
               <Input label='PASSWORD' name='password' type='password' />
               <Input label='REPEAT PASSWORD' name='confirmPassword' type='password' />
               <div className='d-grid gap-2'>
                  <button className='btn mt-4 text-white' type='submit'>
                     Sign up
                  </button>
               </div>
            </Form>
         </Formik>
      </div>
   );
};
