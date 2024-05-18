import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DetectionTitle } from "../detection/DetectionTitle";

export const OccurrenceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
