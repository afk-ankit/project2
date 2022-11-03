import { useSelector } from 'react-redux'
import '../css/Cart.css'
import WishlistItem from './WishlistItem'

function Cart() {
    const cartItems = useSelector(state => state.cartReducer.item)
    const total = cartItems.reduce((accumulator, e) => { return accumulator + (e.price * e.qty) }, 0)
    return (
        <div className='Cart'>
            <h1 className='product__heading'>CART</h1>
            {cartItems?.length > 0 ?
                <div className='cart__container'>
                    <div className='cart__items'>
                        {cartItems?.map(e => <WishlistItem key={e.id} id={e.id} title={e.title} price={e.price} rating={e.rating} img={e.img} isCart={true} qty={e.qty} />)}
                    </div>
                    <div className='cart__total'>
                        <h1>Total</h1>
                        <p>There {cartItems.length == 1 ? "is" : "are"} {cartItems.length ? cartItems.length : "no"} items in cart</p>
                        <p>Total bill : {total}</p>
                    </div>
                </div> : <h1 style={{ textAlign: "center" }}>Cart empty !!!</h1>
            }


        </div>
    )
}

export default Cart 