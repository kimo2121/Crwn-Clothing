import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51H3FxnEh4aoUgsppfYwcHrk1FXt1rFJDg4Fg5rSApnGZ4BzyE7rZubVNGxhXi2g9nTgxTFTCt8OY7L5GSrTTmw3700dSuXEtlM'

    const onToken = token=> {
        console.log(token)
        alert('Payment Successful');
    };

    return(
        <StripeCheckout
        label='Pay Now'
        name='Crown Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        discription={`Your total is  $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
    

};

export default StripeCheckoutButton;