import ReactPaginate from "react-paginate";
import '../Pagination/Pagination.css';

const Pagination = ({ pageNumber, info, updateNumber}) => {
  const pageChange = (data) => {
    updateNumber(data.selected + 1);
  };
  return (
<>
  <ReactPaginate
  nextLabel="Next"
  forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
  previousLabel="Prev"
  nextClassName="btn btn-primary fs-5 next"
  activeClassName="active"
  pageCount={info?.pages}
  onPageChange={pageChange}
  containerClassName={'pagination'}
  pageClassName="page-item"
  pageLinkClassName={"page-link"}
  previousClassName= "btn btn-primary fs-5 prev"
  previousLinkClassName='page-link'
  nextLinkClassName='page-link'
/>
</>
  );
};

export default Pagination;