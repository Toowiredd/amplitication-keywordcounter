import { Detection } from "../detection/Detection";

export type Occurrence = {
  count: number | null;
  createdAt: Date;
  detection?: Detection | null;
  id: string;
  updatedAt: Date;
};
