import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const OccurrenceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <NumberInput step={1} label="count" source="count" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="detection ID" source="detectionId" />
      </SimpleForm>
    </Edit>
  );
};
