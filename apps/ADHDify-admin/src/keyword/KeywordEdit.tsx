import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const KeywordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="Detection ID" source="detectionId" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="text" source="text" />
      </SimpleForm>
    </Edit>
  );
};
