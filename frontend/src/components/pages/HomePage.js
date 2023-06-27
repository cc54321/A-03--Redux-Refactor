import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HomePage.css';
import CartPage from '../pages/CartPage';
import SignInPage from '../pages/SignInPage';

const HomePage = () => {
  const products = useSelector((state) => state.products.slice(0, 2));

  return (
    <div className="home-page">
      <h1>Welcome to the Shopping App</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <p>Publisher: {product.publisher}</p>
            <p>Genre: {product.genre}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
      <Link to="/signin" className="link-signin">Sign In</Link>

      <h2>Cart Page</h2>
      <CartPage
        id={1}
        title="Hogwart's Legacy"
        publisher="Warner Bros."
        genre="Adventure"
        price={59.99}
      />

      <h2>Sign In Page</h2>
      <SignInPage />
    </div>
  );
};

export default HomePage;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import CartPage from './CartPage';

// const HomePage = () => {
//   const products = useSelector((state) => state.products);

//   const displayProducts = products.slice(0, 2).map((product) => (
//     <CartPage
//       key={product.id}
//       id={product.id}
//       title={product.title}
//       publisher={product.publisher}
//       genre={product.genre}
//       price={product.price}
//     />
//   ));

//   return (
//     <div className="home-page">
//       <h1>Shopping App</h1>
//       <div className="product-list">{displayProducts}</div>
//       <Link to="/signin">Sign In</Link>
//     </div>
//   );
// };

// export default HomePage;






