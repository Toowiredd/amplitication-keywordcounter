import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const KeywordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="Detection ID" source="detectionId" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="text" source="text" />
      </SimpleForm>
    </Create>
  );
};
