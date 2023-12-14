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
}) {
  console.log(data);
  console.log(page);
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
      <div className="table__container">
        <p className="table__show">
          Showing data <span>{page.length !== 0 ? page[0].index + 1 : 0}</span>{" "}
          to <span>{page.length}</span> of <span>{data.length}</span>
          entries
        </p>
        <span>
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => previousPage()}>-</button>
        <button onClick={() => nextPage()}>+</button>
      </div>
    </div>
  );
}

export default Tables;
