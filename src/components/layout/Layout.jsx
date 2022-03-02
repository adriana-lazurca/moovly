import { Menu } from '../menu/Menu';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import React from 'react';

export const Layout = (props) => {
   const [userEmail] = useLocalStorage('userEmail', '');

   return (
      <div className='container header-color mb-5'>
         <div className='row header bg-info'>
            <div className='col-8 '>
               <Menu />
            </div>
            <div className='col-4'>
               {' '}
               <>
                  {userEmail && <div>Hello {userEmail}</div>}

                  {!userEmail && <div>Hello stranger</div>}
               </>
            </div>
         </div>
         <div>{props.children}</div>
      </div>
   );
};
