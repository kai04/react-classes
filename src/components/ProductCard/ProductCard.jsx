import React from "react";
import styles from './ProductCard.module.css';
function ProductCard(props) {
  // console.log(props);
  return (
    <div class={styles.card}>
      <h3>{props.title}</h3>
      <h5>{props.price}</h5>
      <button>Add to cart</button>
    </div>
  );
}
export default ProductCard;
