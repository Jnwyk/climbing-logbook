import locationIcon from './../assets/location.svg';
import type { RouteGeneralInformationInterface } from '../interfaces/RoutesInterface';

interface RouteCardInfoProps {
  route: RouteGeneralInformationInterface;
}

export function RouteCardInfo({ route }: RouteCardInfoProps) {
  return (
    <div className="flex items-center gap-6">
      <div className="bg-stone-900 w-16 h-16 flex items-center justify-center border border-primary/20 text-xl font-semi-bold text-primary">
        {route.grade.grade}
      </div>
      <div>
        <h2 className="text-[1.25rem] text-text-light font-semibold">
          {route.name}
        </h2>
        <div className="flex gap-2 text-xs text-text-smokey mt-1">
          <img src={locationIcon} alt="location-icon" />
          <span>{`${route.cragName}, ${route.areaName}`}</span>
          <span className="border" />
          <span>{route.country}</span>
        </div>
      </div>
    </div>
  );
}
