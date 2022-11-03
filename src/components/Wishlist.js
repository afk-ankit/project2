import { useSelector } from 'react-redux'
import '../css/Wishlist.css'

function Wishlist() {

    const wishlist = useSelector(state => state.wishlistReducer.item)
    return (
        <div>
            <h1>Welcome to wishlist</h1>
            {wishlist?.map(e => <h1 key={e.id}>{e.title}</h1>)}
        </div>
    )
}

export default Wishlist