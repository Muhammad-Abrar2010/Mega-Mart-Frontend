
// import { useState } from "react";

// const SearchFilterSort = ({ onSearch, onFilter, onSort }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [category, setCategory] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [sort, setSort] = useState("");

//   const handleSearch = () => {
//     onSearch(searchTerm);
//   };

//   const handleFilter = () => {
//     onFilter({ category, minPrice, maxPrice });
//   };

//   const handleSort = (e) => {
//     setSort(e.target.value);
//     onSort(e.target.value);
//   };

//   return (
//     <div className="flex flex-col md:flex-row md:items-center mb-6">
//       <input
//         type="text"
//         placeholder="Search by name"
//         className="border p-2 mb-4 md:mb-0 md:mr-4"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button
//         onClick={handleSearch}
//         className="bg-blue-500 text-white px-4 py-2 rounded mb-4 md:mb-0 md:mr-4"
//       >
//         Search
//       </button>

//       <select
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         className="border p-2 mb-4 md:mb-0 md:mr-4"
//       >
//         <option value="">All Categories</option>
//         <option value="electronics">Electronics</option>
//         <option value="clothing">Clothing</option>
//         <option value="accessories">Accessories</option>
//       </select>

//       <input
//         type="number"
//         placeholder="Min Price"
//         className="border p-2 mb-4 md:mb-0 md:mr-4"
//         value={minPrice}
//         onChange={(e) => setMinPrice(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Max Price"
//         className="border p-2 mb-4 md:mb-0 md:mr-4"
//         value={maxPrice}
//         onChange={(e) => setMaxPrice(e.target.value)}
//       />

//       <select value={sort} onChange={handleSort} className="border p-2">
//         <option value="">Sort By</option>
//         <option value="price_asc">Price: Low to High</option>
//         <option value="price_desc">Price: High to Low</option>
//         <option value="createdAt_desc">Newest First</option>
//       </select>
//       <button
//         onClick={handleFilter}
//         className="bg-blue-500 text-white px-4 py-2 rounded mb-4 md:mb-0"
//       >
//         Filter
//       </button>
//     </div>
//   );
// };

// export default SearchFilterSort;



import { useState } from "react";

const SearchFilterSort = ({ onSearch, onFilter, onSort }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = () => {
    onFilter({ category, minPrice, maxPrice });
  };

  const handleSort = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
    onSort(selectedSort);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center mb-6">
      <input
        type="text"
        placeholder="Search by name"
        className="border p-2 mb-4 md:mb-0 md:mr-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 md:mb-0 md:mr-4"
      >
        Search
      </button>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 mb-4 md:mb-0 md:mr-4"
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="accessories">Accessories</option>
      </select>

      <input
        type="number"
        placeholder="Min Price"
        className="border p-2 mb-4 md:mb-0 md:mr-4"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        className="border p-2 mb-4 md:mb-0 md:mr-4"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <select value={sort} onChange={handleSort} className="border p-2 mb-4 md:mb-0">
        <option value="">Sort By</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="createdAt_desc">Newest First</option>
        <option value="brand_asc">Brand Name: A-Z</option>
        <option value="brand_desc">Brand Name: Z-A</option>
      </select>
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Filter
      </button>
    </div>
  );
};

export default SearchFilterSort;