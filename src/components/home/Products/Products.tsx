import React, { useEffect } from 'react'
import Product from '../Product/Product.tsx';
import './products.scss';
import ScrollContainer from 'react-indiana-drag-scroll';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsData } from "../../../redux-toolkits/feature/productsSlice";

const Products = () => {
  const productsData = useSelector((state: RootState) => state.products.products);
  console.log(productsData);
  const dispatch = useDispatch();

  interface RootState {
    products: any
  }

  type productInfo = {
    name:string,
    img:string,
    containing: number,
    scents:string,
    price:number,
    id:number
  }

  useEffect(() => {
		axios
			.get('http://localhost:5000/products')
			.then((res) => dispatch(setProductsData(res.data)));
	}, []);

  return (
    <div className='products'>
      <div className="products__text">
        <div className='products__description'>
          <p className='products__text-formule'>Chaque formule a été créée pour répondre à tous les besoins de soins de la peau.</p>
          <p className='products__text-skin'>Chaque formule contient des ingrédients dans les dosages qui feront le plus pour votre peau.</p>
          <span className='products__button'>VOIR TOUS LES PRODUITS</span>
        </div>
      </div>
      <ScrollContainer className="scroll-container products__products-list">
         {productsData.map(({name, img, containing, scents, price, id}:productInfo) => (
          <Product key={id} img={img} name={name} containing={containing} scents={scents} price={price} />
        ))}
      </ScrollContainer>
    </div>
  )
}

export default Products
