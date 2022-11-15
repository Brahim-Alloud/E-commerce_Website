import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCart,delCart } from '../redux/action';


export default function Cart() {
    const state = useSelector((state)=> state.handleCart);
    const dispatch = useDispatch();
    const addProduct = (product)=> {
        if(product.rating.count>product.qty){
            dispatch(addCart(product));
        }      
    }
    const delProduct = (product)=> {
        if(product.rating.count>product.qty){
            dispatch(delCart(product));
        }      
    }
    const ShowCart = () => {
      return(
        <> 
            {state.map((product) => {
                return (
                    <div className="row border border-1 border-dark rounded mt-2">
                        <div className = "col-md-4" >
                            <img src={product.image} alt={product.title} height="200px" width="180px"/>
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className= "lead fw-bold "> {product.qty } X ${product.price} = $ { product.qty * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4 mt-3" onClick={()=>delProduct(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark mt-3" onClick={()=>addProduct(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
      )
    }
    return (
        <div className='container m-5 text-center'> 
            <ShowCart/>
        </div>
    )
}
// onClick={()=>handleButton(product)}
// onClick={()=>handleButton(product)}