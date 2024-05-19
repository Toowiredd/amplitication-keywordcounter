import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const OccurrenceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="count" source="count" />
        <TextInput label="detection ID" source="detectionId" />
      </SimpleForm>
    </Create>
  );
};
