import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { KeywordTitle } from "../keyword/KeywordTitle";
import { OccurrenceTitle } from "../occurrence/OccurrenceTitle";

export const DetectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="keywords"
          reference="Keyword"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeywordTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="occurrences"
          reference="Occurrence"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OccurrenceTitle} />
        </ReferenceArrayInput>
        <TextInput label="state" source="state" />
      </SimpleForm>
    </Create>
  );
};
