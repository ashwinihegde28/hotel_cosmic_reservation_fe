import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);


export default function StripeProvider(props) {
 const options = {}

  return (
    <Elements stripe={stripePromise} options={options}>
      {props.children}
      
    </Elements>
  );
};