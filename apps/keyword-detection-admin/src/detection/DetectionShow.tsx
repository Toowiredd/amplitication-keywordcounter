import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DETECTION_TITLE_FIELD } from "./DetectionTitle";

export const DetectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Keyword"
          target="detectionId"
          label="Keywords"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Detection"
              source="detection.id"
              reference="Detection"
            >
              <TextField source={DETECTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Occurrence"
          target="detectionId"
          label="Occurrences"
        >
          <Datagrid rowClick="show">
            <TextField label="count" source="count" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="detection"
              source="detection.id"
              reference="Detection"
            >
              <TextField source={DETECTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
