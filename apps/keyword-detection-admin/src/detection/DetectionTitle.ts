import { Detection as TDetection } from "../api/detection/Detection";

export const DETECTION_TITLE_FIELD = "state";

export const DetectionTitle = (record: TDetection): string => {
  return record.state?.toString() || String(record.id);
};
