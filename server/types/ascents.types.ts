export type AscentVisibility = "PUBLIC" | "PRIVATE";

export interface CreateAscentInterface {
  userId: string;
  routeId: string;
  ascentDate: Date;
  myGradeId: string;
  formatId: string;
  styleId: string;
  stars: number;
  visibility: AscentVisibility;
  personalOpinion: string;
}
