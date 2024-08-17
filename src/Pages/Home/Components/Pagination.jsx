
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div className="flex justify-center mt-6">
      {pages.map((page) => (
        <button
          key={page}
          className={`mx-1 px-4 py-2 rounded transition-colors duration-300 ${
            page === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
