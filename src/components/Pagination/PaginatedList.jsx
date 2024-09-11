import { useState } from "react";
import { Pagination, Stack } from "@mui/material";

const PaginatedList = ({ itemsPerPage, items }) => {
  const [page, setPage] = useState(1);
  const count = Math.ceil(items.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Stack spacing={2} alignItems="center">
        <Pagination count={count} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default PaginatedList;
