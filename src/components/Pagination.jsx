function Pagination({onPageChange, currentPage, blogs,pageSize}){
    const totalPages=Math.ceil(blogs.length/pageSize)
    // console.log(totalPages)
    const renderPaginationLinks = () => {
        return (
          <ul>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <li
                className={pageNumber === currentPage ? "activePagination" : ""}
                key={pageNumber}
              >
                <a href="#" onClick={(e) => {
                  e.preventDefault(); 
                  onPageChange(pageNumber);
                }}>
                  {pageNumber}
                </a>
              </li>
            ))}
          </ul>
        );
      };
    return(
        <>
        <ul className="pagination my-8 flex-wrap gap-4">
            <li >
                <button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage===1}>Previous</button>
            </li>
            <div className="flex gap-1 flex-row">
                {renderPaginationLinks()}
            </div>
            <li>
                <button onClick={()=>onPageChange(currentPage+1)} disabed={currentPage===totalPages}>Next</button>
            </li>
        </ul>
        </>
    )
}
export default Pagination