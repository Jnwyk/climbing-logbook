export interface RouteGeneralInformationInterface {
  id: string;
  name: string;
  cragName: string;
  areaName: string;
  country: string;
  grade: {
    grade: string;
  };
  defaultFormat: {
    format: string;
  };
}

export interface RouteDetails extends RouteGeneralInformationInterface {
  length: number | null;
  year: string | null;
  firstAscent: string | null;
  boltNumber: number | null;
  additionalInfo: string | null;
}
