import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const KeywordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Detection ID" source="detectionId" />
        <TextInput label="text" source="text" />
      </SimpleForm>
    </Create>
  );
};
