import { Detection } from "../detection/Detection";

export type Keyword = {
  createdAt: Date;
  detection?: Detection | null;
  id: string;
  text: string | null;
  updatedAt: Date;
};
