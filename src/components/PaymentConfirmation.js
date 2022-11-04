import '../css/PaymentConfirmation.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PaymentConfirmation() {
    const [resolve, setResolve] = useState(null)
    useEffect(() => {

        setTimeout(() => {
            setResolve(Math.floor(Math.random() * 2))
        }, 3000)


    }, [])

    console.log(resolve)
    return (
        <div className='PaymentConfirmation'>
            {resolve === null ? <>
                <div className="lds-facebook"><div></div><div></div><div></div></div>

                <p>Please don't close the tab payment is processing</p> </> : <></>}


            {resolve === 1 && <div className='paymentConfirmation__container'>
                <div>
                    <i className="bi bi-check-circle-fill" style={{
                        marginRight: "1rem",
                        fontSize: "2rem",
                        color: "green"
                    }}>

                    </i>
                    <h3>Payment successfull</h3>
                </div>
                <Link to="/" className='paymentConfirmation__button'>Go Home</Link>

            </div>}


            {resolve === 0 && <div className='paymentConfirmation__container'>
                <div>
                    <i class="bi bi-x-circle-fill" style={{
                        marginRight: "1rem",
                        fontSize: "2rem",
                        color: "red"
                    }}>

                    </i>
                    <h3>Payment unsucsessfull</h3>
                </div>
                <Link to="/" className='paymentConfirmation__button'>Go Home</Link>
            </div>}

        </div>
    )
}

export default PaymentConfirmation