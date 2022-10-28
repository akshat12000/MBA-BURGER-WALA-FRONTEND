import React from 'react'
import "../../styles/paymentsuccess.scss";
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <section className='paymentsuccess'>
        <main>
            <h1>Order COnfirmed</h1>
            <p>Order Placed Successfully, You can check order status below</p>
            <Link to="/myorders">Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSuccess