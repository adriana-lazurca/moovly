import { Link } from 'react-router-dom';

import './menu.css';

export const Menu = () => {
   return (
      <div className=''>
         <ul>
            <li>
               <Link to='/'>Home</Link>
            </li>
            <li>
               <Link to='/contact'>Contact</Link>
            </li>
            <li>
               <Link to='/signup'>Register</Link>
            </li>
         </ul>
      </div>
   );
};
