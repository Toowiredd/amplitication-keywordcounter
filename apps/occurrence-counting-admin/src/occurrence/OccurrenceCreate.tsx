import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OccurrenceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <NumberInput step={1} label="count" source="count" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="detection ID" source="detectionId" />
      </SimpleForm>
    </Create>
  );
};
