import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const OccurrenceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="count" source="count" />
        <TextInput label="detection ID" source="detectionId" />
      </SimpleForm>
    </Edit>
  );
};
