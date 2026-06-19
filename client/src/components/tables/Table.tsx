import type { AscentTableInterface } from '../../interfaces/AscentsInterface';
import TableAscentsBody from './TableAscentsBody';
import TableHeader from './TableHeader';

interface TableProps {
  headers: string[];
  tableWidth: string[];
  tableData?: AscentTableInterface[];
}

function Table({ headers, tableWidth, tableData }: TableProps) {
  if (!tableData) return null;
  return (
    <table className="w-[80%] table-fixed shadow-[0_4px_12px_rgba(0,0,0,0.3)] shadow-black">
      <TableHeader headers={headers} tableWidth={tableWidth} />
      <TableAscentsBody content={tableData} />
    </table>
  );
}

export default Table;
