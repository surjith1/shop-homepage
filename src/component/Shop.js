import React from 'react'

const Shop = (props) => {
  return <>
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
                <button className="btn btn-outline-dark" type="submit">
                    <i className="bi-cart-fill me-1"></i>
                    Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
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
    <div className="col mb-5">
      <div className="card h-100">
        
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        
        <div className="card-body p-4">
          <div className="text-center">
            
            <h5 className="fw-bolder">{props.data.product}</h5>
            
            {props.data.productPrice1}
          </div>
        </div>
        
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
        </div>
      </div>
    </div>
    <div className="col mb-5">
      <div className="card h-100">
       
        <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}
>Sale</div>
        
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        
        <div className="card-body p-4">
          <div className="text-center">
            
            <h5 className="fw-bolder">{props.data.specialItem}</h5>
            
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
            </div>
            
            <span className="text-muted text-decoration-line-through">{props.data.specialItemPrice1}</span>
            {props.data.specialItemPrice2}
          </div>
        </div>
        
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
        </div>
      </div>
    </div>
    <div className="col mb-5">
      <div className="card h-100">
        
        <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}
>Sale</div>
        
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        
        <div className="card-body p-4">
          <div className="text-center">
            
            <h5 className="fw-bolder">{props.data.salesItem}</h5>
            
            <span className="text-muted text-decoration-line-through">{props.data.salesItemPrice1}</span>
            {props.data.salesItemPrice2}
          </div>
        </div>
        
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
        </div>
      </div>
    </div>
    <div className="col mb-5">
      <div className="card h-100">
        
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        
        <div className="card-body p-4">
          <div className="text-center">
            
            <h5 className="fw-bolder">{props.data.popularItem}</h5>
            
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
            </div>
            
            {props.data.popularItemPrice}
          </div>
        </div>
        
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
        </div>
      </div>
    </div>
    <div className="col mb-5">
      <div className="card h-100">
        
        <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}
>Sale</div>
        
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        
        <div className="card-body p-4">
          <div className="text-center">
            
            <h5 className="fw-bolder">{props.data.saleItem}</h5>
            
            <span className="text-muted text-decoration-line-through">{props.data.salesItemPrice1}</span>
            {props.data.salesItemPrice2}
          </div>
        </div>
        
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
        </div>
      </div>
    </div>
    <div className="col mb-5">
      <div className="card h-100">
        
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
       
        <div className="card-body p-4">
          <div className="text-center">
            
            <h5 className="fw-bolder">{props.data.product}</h5>
            
            {props.data.productPrice2}
          </div>
        </div>
      
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
        </div>
      </div>
    </div>
    <div className="col mb-5">
      <div className="card h-100">
        
        <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}
>Sale</div>
        
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        
        <div className="card-body p-4">
          <div className="text-center">
            
            <h5 className="fw-bolder">{props.data.specialItem}</h5>
            
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
            </div>
            
            <span className="text-muted text-decoration-line-through">{props.data.specialItemPrice1 }</span>
            { props.data.specialItemPrice2}
          </div>
        </div>
        
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
        </div>
      </div>
    </div>
    <div className="col mb-5">
      <div className="card h-100">
        
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        
        <div className="card-body p-4">
          <div className="text-center">
           
            <h5 className="fw-bolder">{props.data.popularItem}</h5>
            
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
              <div className="bi-star-fill" />
            </div>
            
            {props.data.popularItemPrice}
          </div>
        </div>
    
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<footer className="py-5 bg-dark">
<div className="container"><p className="m-0 text-center text-white">Copyright © Your Website 2022</p></div>
</footer>
</>
}

export default Shop