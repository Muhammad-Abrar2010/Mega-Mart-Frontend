
const ProductList = ({ products }) => {
  if (!Array.isArray(products)) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.productName}</h2>
          <p>{product.description}</p>
          <img src={product.productImage} alt={product.name} />
          <p>Price: ${product.price}</p>
          <p>Rating: {product.ratings}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
