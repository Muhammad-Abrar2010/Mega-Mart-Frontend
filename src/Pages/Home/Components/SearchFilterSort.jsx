


import { useState } from "react";

const SearchFilterSort = ({ onSearch, onFilter, onSort }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");  // Added state for brand filter
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = () => {
    onFilter({ category, brand, minPrice, maxPrice });  // Included brand in filter
  };

  const handleSort = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
    onSort(selectedSort);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow-md">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search by name"
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex-1 md:flex-none">
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white w-full md:w-auto px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      <div className="flex-1">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div className="flex-1">
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Brands</option>
          <option value="brandA">Brand A</option>
          <option value="brandB">Brand B</option>
          <option value="brandC">Brand C</option>
        </select>
      </div>
      <div className="flex flex-1 gap-4">
        <input
          type="number"
          placeholder="Min Price"
          className="border p-2 w-1/2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="border p-2 w-1/2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="flex-1 md:flex-none">
        <button
          onClick={handleFilter}
          className="bg-blue-500 text-white w-full md:w-auto px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Filter
        </button>
      </div>
      <div className="flex-1">
        <select
          value={sort}
          onChange={handleSort}
          className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="createdAt_desc">Newest First</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilterSort;
