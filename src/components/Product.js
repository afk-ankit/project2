import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../css/Product.css'
import ProductCard from './ProductCard'

function Product() {
    useEffect(() => {
        const getData = async () => {
            const result = await axios('https://fakestoreapi.com/products');
            setItem(result.data)
        }
        getData();

    }, [])

    const [item, setItem] = useState([])
    return (
        <div className='Product'>
            <h1 className='product__heading'>PRODUCTS</h1>
            <div className='product__grid'>
                {item.map(e =>
                    <ProductCard key={e.id} id={e.id} title={e.title} rating={e.rating.rate} img={e.image} price={e.price} />
                )}
            </div>
        </div>

    )
}

export default Product