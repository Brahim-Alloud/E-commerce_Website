import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [categories, setCategorie] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = false;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const responseProducts = await fetch("https://fakestoreapi.com/products");
      const responseCategories = await fetch("https://fakestoreapi.com/products/categories");
      // const response2 = await fetch("https://dummyjson.com/products");
      if (!componentMounted) {
        setData(await responseProducts.clone().json());
        setCategorie(await responseCategories.json());
        setFilter(await responseProducts.json());
        setLoading(false);
      }
      return () => {
        componentMounted = true;
      }
    }
    getProducts();
  }, [])
  const Loading = () => {
    return (
      <>
        {/* <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div> */}
        Loading ....
      </>
    )  
  }
  const filterProduct = (cat) => {
    const updatedList = data.filter((x)=>x.category ===cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
          {categories.map((categorie) => {
            return (
              <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct(categorie)} key={categorie}>{categorie}</button>
            )
          })}
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card h-100 text-center p-4"  >
                  <img src={product.image} className="card-img-top" height="250px" alt={product.title}/>
                    <div className="card-body">
                      <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                      <p className="card-text lead fw-bold">${product.price}</p>
                      <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                    </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    )
}
return (
  <div>
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  </div>
)
}
