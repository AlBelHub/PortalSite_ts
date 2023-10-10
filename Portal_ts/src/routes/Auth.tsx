import React from 'react';

import {Link} from 'react-router-dom';
import '../styles/auth.scss';

export default function Auth() {
    return(
        <>
        <div className="auth">
            <div className="auth__container">
                <div className="img-template">img</div>
                <p className='text'>org name</p>
                <input type="text" className="input border" placeholder='Имя пользователя'/>
                <input type="password" className="input border" placeholder='Пароль'/>
                <Link to="/" type="button" className='link border'>Войти </Link>
            </div>
        </div>
        </>
    );
}