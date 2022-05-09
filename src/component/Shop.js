import React from 'react';
import { useState } from 'react';

const Shop = (props) => {
    let products = [
        {
          isSale:false,
          topImg:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productTitle:"Fancy Product",
          isStar:false,
          linethroughValue:"",
          normalValue:"$18.00",
          btnText:"View Options",
          isAddtoCartClick:false,
          isEnableBtn:false,
        },
        {
          isSale: true,
          topImg:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productTitle:"Special Item",
          isStar:true,
          linethroughValue:"$20.00",
          normalValue:"$18.00",
          btnText:"Add to Cart",
          isAddtoCartClick:true,
          isEnableBtn:true,
        },
        {
          isSale: true,
          topImg:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productTitle:"Sales Item",
          isStar:false,
          linethroughValue:"$50.00",
          normalValue:"$25.00",
          btnText:"Add to Cart",
          isAddtoCartClick:true,
          isEnableBtn:true,
        },
        {
          isSale: false,
          topImg:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productTitle:"Popular Item",
          isStar:true,
          linethroughValue:"",
          normalValue:"$40.00",
          btnText:"Add to Cart",
          isAddtoCartClick:true,
          isEnableBtn:true,
        },
        {
          isSale: true,
          topImg:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productTitle:"Sales Item",
          isStar:false,
          linethroughValue:"$50.00",
          normalValue:"$25.00",
          btnText:"Add to Cart",
          isAddtoCartClick:true,
          isEnableBtn:true,
        },
        {
          isSale:false,
          topImg:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productTitle:"Fancy Product",
          isStar:false,
          linethroughValue:"",
          normalValue:"$18.00",
          btnText:"View Options",
          isAddtoCartClick:true,
          isEnableBtn:false,
        },
        {
          isSale: true,
          topImg:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productTitle:"Special Item",
          isStar:true,
          linethroughValue:"$20.00",
          normalValue:"$18.00",
          btnText:"Add to Cart",
          isAddtoCartClick:true,
          isEnableBtn:true,
        },
        {
          isSale: false,
          topImg:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          productTitle:"Popular Item",
          isStar:true,
          linethroughValue:"",
          normalValue:"$40.00",
          btnText:"Add to Cart",
          isAddtoCartClick:true,
          isEnableBtn:true,
        },
    ];
    const [data,setData] = useState(products);
    const [cart,setCart]=useState(0);
    const [cartArr,setCartArray] = useState([]);
    const [removeArr,setRemoveArr]=useState([]);
    //const [disable, setDisable]=useState(false);
    const addToCart  = (product) => {
        let cartCopy = [...cartArr];
        cartCopy.push(product);
        setCartArray(cartCopy);
    }
    
    
    const removerToCart=(i) =>{
        let cartRemoveCopy = [...cartArr];
        cartRemoveCopy.splice(i,1);
        setCartArray(cartRemoveCopy);
        // console.log("Clicking");

    }

    // const styles={
        // opacity:0.2,
        // pointerEvents:"none",
    // }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></
                            li>
                            <li className="nav-item"><span className="nav-link">About</span></li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Shop</span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><span className="dropdown-item">All Products</span></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><span className="dropdown-item">Popular Items</span></li>
                                    <li><span className="dropdown-item">New Arrivals</span></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit" onClick={()=>removerToCart()}>
                                <i className="bi-cart-fill me-1"></i>
                                <span>Cart </span>
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartArr.length}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header>


            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        data.map((e)=> {
                            return    <div className="col mb-5">
                            <div className="card h-100">
                                {/* Sale badge*/}
                                { e.isSale ? <><div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', 
                     right: '0.5rem' }}>Sale</div></>:""}
                                {/* Product image*/}
                                <img className="card-img-top" src={e.topImg} alt={e.productTitle} />
                                {/* Product details*/}
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        {/* Product name*/}
                                        <h5 className="fw-bolder">{e.productTitle}</h5>
                                        {/* Product reviews*/}
                                        {
                                            e.isStar ?<>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                            <div className="bi-star-fill" />
                                        </div>
                                        </>:""
                                    }
                                        {/* Product price*/}
                                        <span className="text-muted text-decoration-line-through">{e.linethroughValue}</span>
                                        {e.normalValue}
                                    </div>
                                </div>
                                {/* Product actions*/}
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href='#' onClick={()=>addToCart(products) }>{e.btnText}</a></
                     div>
                                </div>
                            </div>
                        </div>
                        })
                    }
                    </div>
                </div>
            </section>

            <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright © Your Website 2022</p></div>
            </footer>
        </>
    );
}

export default Shop