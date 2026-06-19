interface TableHeaderProps {
  headers: string[];
  tableWidth: string[];
}

function TableHeader({ headers, tableWidth }: TableHeaderProps) {
  return (
    <thead>
      <tr className="">
        {headers.map((header, i) => (
          <th key={header} className={`text-white py-2 w-[${tableWidth[i]}%]`}>
            {header.toUpperCase()}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
