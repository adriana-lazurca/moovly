import { Field } from 'formik';

export const Checkbox = (props) => {
   const { label, ...attributes } = props;

   return (
      <label>
         <Field type='checkbox' {...attributes} />
         <span className='px-2'>{label}</span>
      </label>
   );
};
