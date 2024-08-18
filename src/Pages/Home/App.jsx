// import { useEffect, useState } from "react";
// import axios from "axios";
// import ProductList from "./components/ProductList";
// import Pagination from "./components/Pagination";
// import SearchFilterSort from "./components/SearchFilterSort";

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentSort, setCurrentSort] = useState(""); // Track the current sort option

//   const fetchProducts = async (page = 1, filters = {}, sort = currentSort) => {
//     try {
//       const { data } = await axios.get("https://mega-mart-backend-six.vercel.app/api/products", {
//         params: {
//           page,
//           limit: 10,
//           search: filters.search || "",
//           category: filters.category || "",
//           brand: filters.brand || "",
//           minPrice: filters.minPrice || "",
//           maxPrice: filters.maxPrice || "",
//           sort: sort || "",
//         },
//       });
//       setProducts(data.products);
//       setTotalPages(data.totalPages);
//       setCurrentPage(data.currentPage); // Set currentPage to match the fetched data
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts(); // Fetch products on initial render and sort changes
//   }, [currentSort]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page); // Update currentPage state
//     fetchProducts(page, {}, currentSort); // Fetch products for the selected page
//   };

//   const handleSearch = (searchTerm) => {
//     fetchProducts(1, { search: searchTerm }, currentSort); 
//   };

//   const handleFilter = (filters) => {
//     fetchProducts(1, filters, currentSort); 
//   };

//   const handleSort = (sortOption) => {
//     setCurrentSort(sortOption);
//     fetchProducts(1, {}, sortOption); 
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <SearchFilterSort
//         onSearch={handleSearch}
//         onFilter={handleFilter}
//         onSort={handleSort}
//       />
//       <ProductList products={products} />
//       <Pagination
//         totalPages={totalPages}
//         currentPage={currentPage}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
import SearchFilterSort from "./components/SearchFilterSort";
import { ClipLoader } from "react-spinners";

const App = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState(""); // Track the current sort option
  const [loading, setLoading] = useState(false); // Add loading state

  const fetchProducts = async (page = 1, filters = {}, sort = currentSort) => {
    try {
      setLoading(true); // Start loading
      const { data } = await axios.get("https://mega-mart-backend-six.vercel.app/api/products", {
        params: {
          page,
          limit: 10,
          search: filters.search || "",
          category: filters.category || "",
          brand: filters.brand || "",
          minPrice: filters.minPrice || "",
          maxPrice: filters.maxPrice || "",
          sort: sort || "",
        },
      });
      setProducts(data.products);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage); // Set currentPage to match the fetched data
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products on initial render and sort changes
  }, [currentSort]);

  const handlePageChange = (page) => {
    setCurrentPage(page); // Update currentPage state
    fetchProducts(page, {}, currentSort); // Fetch products for the selected page
  };

  const handleSearch = (searchTerm) => {
    fetchProducts(1, { search: searchTerm }, currentSort); 
  };

  const handleFilter = (filters) => {
    fetchProducts(1, filters, currentSort); 
  };

  const handleSort = (sortOption) => {
    setCurrentSort(sortOption);
    fetchProducts(1, {}, sortOption); 
  };

  return (
    <div className="container mx-auto mt-8">
      <SearchFilterSort
        onSearch={handleSearch}
        onFilter={handleFilter}
        onSort={handleSort}
      />
      {loading ? (
        <div className="flex justify-center">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <ProductList products={products} />
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
