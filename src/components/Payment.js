import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/Payment.css'

function Payment() {
    const cartItems = useSelector(state => state.cartReducer.item)
    const total = cartItems.reduce((accumulator, e) => { return accumulator + (e.price * e.qty) }, 0).toFixed(2)
    const user = useSelector(state => state.userReducer)
    return (
        <div className='Payment'>
            <h1>Hello {user.userName}, your sub-total is ${total}</h1>
            <p style={{ marginTop: "1rem" }}>Please fill up the form below to proceed</p>
            <h2 style={{ marginTop: "2rem" }}>Address and Contact details *</h2>
            <div className='payment__address'>
                <div className='payment__address-item'>
                    <p>Country :</p>
                    <input type="text" />
                </div>
                <div className='payment__address-item'>
                    <p>State :</p>
                    <input type="text" />
                </div>
                <div className='payment__address-item'>
                    <p>Pin Code :</p>
                    <input type="text" />
                </div>
                <div className='payment__address-item'>
                    <p>City :</p>
                    <input type="text" />
                </div>
                <div className='payment__address-item'>
                    <p>PhoneNumber :</p>
                    <input type="text" />
                </div>
                <div className='payment__address-item'>
                    <p>Email :</p>
                    <input type="email" />
                </div>

            </div>
            <h2 style={{ marginTop: "2rem" }}>Payment details *</h2>
            <div className='payment__address'>
                <div className='payment__address-item'>
                    <p>ATM Number :</p>
                    <input type="text" />
                </div>
                <div className='payment__address-item'>
                    <p>Expiry Year :</p>
                    <input type="text" />
                </div>
                <div className='payment__address-item'>
                    <p>CVV :</p>
                    <input type="text" />
                </div>
                <div className='payment__address-item'>
                    <p>Card holder's name :</p>
                    <input type="text" />
                </div>


            </div>
            <Link to='/paymentConfirmation' className='cart__button' style={{
                marginTop: "2rem",
                width: "40%"

            }}>Proceed to Payment</Link>
        </div>
    )
}

export default Payment  