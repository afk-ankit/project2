import '../css/PaymentConfirmation.css'
import React, { useEffect, useState } from 'react'

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
            {resolve === 1 && <h3>Payment successfull</h3>}
            {resolve === 0 && <h3>Payment unsucsessfull</h3>}
        </div>
    )
}

export default PaymentConfirmation