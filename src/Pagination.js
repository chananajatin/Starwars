const Pagination = ({ nextPage, prevPage, next , prev}) => {
  return (
    <div className="pagination">
      {prev && <button onClick={prevPage}>Previous</button>}
      {next && <button onClick={nextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
