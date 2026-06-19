import type { AscentTableInterface } from '../../interfaces/AscentsInterface';
import RouteStyleIcon from '../RouteStyleIcon';
import StarRating from '../StarRating';
import formatDate from '../../utils/formatDate';

interface TableAscentsBodyProps {
  content: AscentTableInterface[];
}

function TableAscentsBody({ content }: TableAscentsBodyProps) {
  return (
    <tbody>
      {content.map((ascent, i) => (
        <tr
          key={
            ascent.route.name +
            ascent.route.cragName +
            ascent.route.areaName +
            ascent.route.country +
            i
          }
          className={`text-white ${i % 2 ? 'bg-card-dark' : 'bg-card-light'} text-center`}
        >
          <td className="w-[30%] pl-3 py-1 text-left">
            <div className="font-semibold">
              {ascent.route.name.toUpperCase()}
            </div>
            <div className="text-xs">{`${ascent.route.cragName}, ${ascent.route.areaName}`}</div>
          </td>
          <td className="w-[10%]">{ascent.myGrade.grade}</td>
          <td className="w-[10%]">
            <RouteStyleIcon style={ascent.style.style} />
          </td>
          <td className="w-[10%]">{ascent.format.format}</td>
          <td className="w-[15%]">{formatDate(ascent.ascentDate)}</td>
          <td className="w-[25%]">
            <StarRating rating={ascent.stars} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableAscentsBody;
