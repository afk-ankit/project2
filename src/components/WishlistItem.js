import '../css/WishlistItem.css'
function WishlistItem({ img, title, price, rating }) {
    return (
        <div className='WishlistItem'>
            <div className='wishlistItem__img'>
                <img src={img} alt="" />
            </div>
            <div className='wishlistItem__details'>
                <p>{title}</p>
                <p>${price}</p>
                <div>
                    {Array(Math.floor(rating)).fill().map(e => <i key={Math.random()} className="bi bi-star-fill" ></i>)}
                </div>
            </div>

            <div className='wishlistItem__button'>

                <button>Add to Cart</button>
                <button>Remove form wishlist</button>

            </div>

        </div>
    )
}

export default WishlistItem 