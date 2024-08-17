const ProductList = ({ products }) => {
  if (!Array.isArray(products)) {
    return <p>Loading...</p>;
  }

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-md flex flex-col"
        >
          <img
            src={product.productImage}
            alt={product.productName}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <div className="flex flex-col flex-grow">
            <h2 className="text-lg font-semibold mb-2">{product.productName}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="mt-auto">
              <p className="text-blue-500 font-semibold">Price: ${product.price}</p>
              <p className="text-yellow-500">Rating: {product.ratings}★</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
