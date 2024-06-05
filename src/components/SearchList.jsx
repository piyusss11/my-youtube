function SearchList(props) {
  const { info } = props;
  return (
    <div className=" hover:bg-gray-100 py-2 px-5 rounded-xl cursor-default">
      <i className="text-black pr-3 ri-search-line"></i>
      {info}
    </div>
  );
}

export default SearchList;
