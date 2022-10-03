import {CardElement } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useStripe, useElements } from "@stripe/react-stripe-js";
const PaymentForm = () => {

    const stripe = useStripe();
  const elements = useElements();
  
  const paymentHandler = async (event) => {
      event.preventDefault();

      if(!stripe || !elements) return;    
      const response = await fetch("/Netlify/functions/payments", {
          method: "post",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              amount: 1000
          })
      }).then((res) => res.json());

      const secret = response.paymentIntent.client_secret;

      const paymentResults = await stripe.confirmCardPayment(secret,{
          payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                  name: "Your Name",
              }
          }
      });

      if(paymentResults.paymentIntent.status === "succeeded") {
          alert("Payment Successful");
      }
  }

    return (
        <div className = "PaymentContainer">
            <div className = "FormContainer" onClick = {paymentHandler}>
            <h2>Credit Card Payment: </h2>
            <CardElement/>
            <Button   buttonType = {BUTTON_TYPE_CLASSES.inverted} > Pay Now </Button>
            </div>
        </div>
    )
}

export default PaymentForm;