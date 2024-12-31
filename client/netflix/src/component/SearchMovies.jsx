const SearchMovies = () => {
  return (
    <div className="flex justify-center pt-[15%] w-[100%]">
      <form className="w-[50%]">
        <div className="w-[100%] flex items-center justify-between rounded-md shadow-md shadow-gray-600 p-2">
          <input
            type="text"
            placeholder="Search Movies..."
            className="w-[85%] p-2 text-lg outline-none"
          />
          <button className="bg-red-600 rounded-md p-2 font-semibold text-white text-lg hover:brightness-75">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchMovies;
