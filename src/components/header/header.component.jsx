import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header =({currentUser,hidden}) =>(
    <div className='header'>
        <Link className='logo-container' to='/'>
             <Logo className='logo'/>
        </Link> 
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP 
            </Link>
            <Link className='option' to='/shop'>
                CONTACT 
            </Link>
            {currentUser ? (
            //if currentUser evaluated as true is gonna be <div></div>//
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            ):(
            //if currentUser evaluated as false(null) is gonna be <Link></Link>//
            <Link className='option' to='/signin'>SIGN IN</Link>
            )}
            <CartIcon/>
        </div>
        {
         hidden  ?null : <CartDropdown/>
        }
    </div>
);


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

