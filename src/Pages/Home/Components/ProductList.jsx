
const ProductList = ({ products }) => {
  // Check if 'products' is defined and is an array
  if (!Array.isArray(products)) {
    return <p>Loading...</p>; // Or any other fallback UI
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price}</p>
          <p>Rating: {product.ratings}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
