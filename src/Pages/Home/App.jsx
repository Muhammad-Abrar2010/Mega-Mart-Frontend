

import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
import SearchFilterSort from "./components/SearchFilterSort";

const App = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState(""); // Track the current sort option

  const fetchProducts = async (page = 1, filters = {}, sort = currentSort) => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/products", {
        params: {
          page,
          limit: 10,
          search: filters.search || "",
          category: filters.category || "",
          minPrice: filters.minPrice || "",
          maxPrice: filters.maxPrice || "",
          sort: sort || "",
        },
      });
      setProducts(data.products);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageChange = (page) => {
    fetchProducts(page, {}, currentSort); // Use the current sort option when changing the page
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
      <ProductList products={products} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
