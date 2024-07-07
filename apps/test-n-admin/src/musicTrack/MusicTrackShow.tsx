import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { MUSICTRACK_TITLE_FIELD } from "./MusicTrackTitle";

export const MusicTrackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="artist" source="artist" />
        <TextField label="album" source="album" />
        <TextField label="duration" source="duration" />
        <TextField label="spotifyUri" source="spotifyUri" />
        <TextField label="appleMusicUri" source="appleMusicUri" />
        <ReferenceManyField
          reference="UserMusicListening"
          target="musicTrackId"
          label="UserMusicListenings"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField label="isListening" source="isListening" />
            <TextField label="timestamp" source="timestamp" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="MusicTrack"
              source="musictrack.id"
              reference="MusicTrack"
            >
              <TextField source={MUSICTRACK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
