function Tables({
  pageIndex,
  pageOptions,
  getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  nextPage,
  previousPage,
  prepareRow,
  data,
  canNextPage,
  canPreviousPage,
  gotoPage,
}) {
  return (
    <div>
      <table {...getTableProps()} className="table__container">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className="table__head" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td className="table__body" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="table__wrap">
        <p className="table__show">
          Showing data <span>{page.length !== 0 ? page[0].index + 1 : 0}</span>{" "}
          to <span>{page.length}</span> of <span>{data.length} </span>
          entries
        </p>

        <div className="table__pagination">
          <button
            className="table__page"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </button>{" "}
          {pageOptions &&
            pageOptions.map((el, index) => (
              <button
                key={index}
                className={`table__page ${pageIndex === index ? "active" : ""}`}
                onClick={() => gotoPage(index)}
              >
                {el + 1}
              </button>
            ))}
          <button
            className="table__page"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {">"}
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Tables;
