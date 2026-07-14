import type {
  FormatInterface,
  GradeInterface,
  StyleInterface,
} from './DictionaryInterface';

export type AscentVisibility = 'PUBLIC' | 'PRIVATE';

export interface AscentTableInterface {
  ascentDate: Date;
  stars: number;
  route: {
    name: string;
    cragName: string;
    areaName: string;
    country: string;
    grade: GradeInterface;
  };
  format: FormatInterface;
  style: StyleInterface;
  myGrade: GradeInterface;
}

export interface FilterAscentsInterface {
  route: string;
  minGrade: string;
  maxGrade: string;
  format: string;
  style: string;
}

export interface CreateAscentInterface {
  userId: string;
  routeId: string;
  ascentDate: string;
  myGradeId: string;
  formatId: string;
  styleId: string;
  stars: number;
  visibility: string;
  personalOpinion: string;
}
