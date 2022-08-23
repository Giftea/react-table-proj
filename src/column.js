import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "id",
    accessor: "id",
    disableFilters: true
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "DOB",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    disableFilters: true
  },
  {
    Header: "Age",
    accessor: "age",
    disableFilters: true
  },
];
