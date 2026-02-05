import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DetectionTitle } from "../detection/DetectionTitle";

export const OccurrenceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="count" source="count" />
        <ReferenceInput
          source="detection.id"
          reference="Detection"
          label="detection"
        >
          <SelectInput optionText={DetectionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
