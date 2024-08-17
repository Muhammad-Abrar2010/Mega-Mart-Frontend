const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.productImage}
        alt={product.productName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.productName}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-gray-900 font-bold mt-2">Price: ${product.price}</p>
        <p className="text-gray-600 mt-1">Category: {product.category}</p>
        <p className="text-gray-600 mt-1">Ratings: {product.ratings}</p>
        <p className="text-gray-500 mt-1 text-sm">
          Date Added: {new Date(product.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
