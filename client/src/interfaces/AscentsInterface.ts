export interface AscentTableInterface {
  ascentDate: Date;
  stars: number;
  route: {
    name: string;
    cragName: string;
    areaName: string;
    country: string;
    grade: {
      grade: string;
    };
  };
  format: {
    format: string;
  };
  style: {
    style: string;
  };
  myGrade: {
    grade: string;
  };
}
