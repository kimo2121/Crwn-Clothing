import React from 'react';
import SignIn from '../../components/sign-in.component/sign-in.component';
import './sign-in-sign-up.styles.scss';
import SignUp from '../../components/sign-up/sign-up.component';

const SingInAndSignUpPage = ()=>
(
    <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
    </div>
);
 export default SingInAndSignUpPage;
