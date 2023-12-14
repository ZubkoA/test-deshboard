import React from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import customers from "../data.json";
import Header from "./Header";
import Tables from "./Table";

function Customers() {
  const data = React.useMemo(() => customers, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Customer Name",
        accessor: "customer_name",
      },
      {
        Header: "Company",
        accessor: "company",
      },
      {
        Header: "Phone Number",
        accessor: "phone_number",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row }) => {
          return (
            <button
              className={`
                ${
                  row.original.status === "active"
                    ? "table__btn--active"
                    : "table__btn--inactive"
                } + table__btn
              `}
            >
              {row.original.status}
            </button>
          );
        },
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    setGlobalFilter,
    // canNextPage,
    // canPreviousPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 8 },
    },
    useGlobalFilter,
    usePagination
  );
  const { pageIndex, globalFilter } = state;
  return (
    <section className="main__section">
      <Header filter={globalFilter} setFilter={setGlobalFilter} />
      <Tables
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        headerGroups={headerGroups}
        page={page}
        nextPage={nextPage}
        previousPage={previousPage}
        prepareRow={prepareRow}
        data={data}
      />
    </section>
  );
}
export default Customers;
