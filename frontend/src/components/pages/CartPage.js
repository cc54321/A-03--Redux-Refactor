import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, editProduct } from '../reducers/productSlice';
import './CartPage.css';

const CartPage = ({ id, title, publisher, genre, price }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };

  const handleEdit = () => {
    const updatedProduct = { id, title: 'Updated Title', publisher, genre, price };
    dispatch(editProduct(updatedProduct));
  };

  return (
    <div className="cart-page">
      <h2>{title}</h2>
      <p>Publisher: {publisher}</p>
      <p>Genre: {genre}</p>
      <p>Price: ${price}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CartPage;









// import React, { useState } from 'react';
// // import './CartPage.css';

// const CartPage = (props) => {
//   const [editBtn, setEditBtn] = useState(props.price === 0 ? true : false);

//   const [editProduct, setEditProduct] = useState({
//     id: props.id,
//     title: props.title,
//     publisher: props.publisher,
//     genre: props.genre,
//     price: props.price,
//   });

//   const onChangeHandler = (e) => {
//     e.target.name === 'price'
//       ? setEditProduct({
//           ...editProduct,
//           [e.target.name]: Number.parseFloat(e.target.value).toFixed(2),
//         })
//       : setEditProduct({
//           ...editProduct,
//           [e.target.name]: e.target.value,
//         });
//   };

//   const saveProduct = () => {
//     props.editProduct(editProduct);
//     setEditBtn(false);
//   };

//   return (
//     <div className="cart-page">
//       <h2>
//         <u>{props.title}</u>
//       </h2>
//       {editBtn ? (
//         <div>
//           <label htmlFor="title">Title: </label>
//           <input
//             type="text"
//             name="title"
//             value={editProduct.title}
//             onChange={onChangeHandler}
//           />
//           <br />
//           <label htmlFor="publisher">Publisher: </label>
//           <input
//             type="text"
//             name="publisher"
//             value={editProduct.publisher}
//             onChange={onChangeHandler}
//           />
//           <br />
//           <label htmlFor="genre">Genre: </label>
//           <input
//             type="text"
//             name="genre"
//             value={editProduct.genre}
//             onChange={onChangeHandler}
//           />
//           <br />
//           <label htmlFor="price">Price: </label>
//           <input
//             type="number"
//             name="price"
//             step=".01"
//             min="0.01"
//             value={editProduct.price}
//             onChange={onChangeHandler}
//           />
//           <br />

//           <button onClick={saveProduct}>Save Edits!</button>
//         </div>
//       ) : (
//         <React.Fragment>
//           <p>Publisher: {props.publisher}</p>
//           <p>Genre: {props.genre}</p>
//           <p>Price: ${props.price}</p>
//         </React.Fragment>
//       )}

//       <button onClick={() => setEditBtn(!editBtn)}>Edit</button>
//       <button onClick={() => props.deleteProduct(props.id)}>Delete!</button>
//     </div>
//   );
// };

// export default CartPage;
