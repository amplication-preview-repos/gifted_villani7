import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { MusicTrackTitle } from "../musicTrack/MusicTrackTitle";

export const UserMusicListeningCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isListening" source="isListening" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="musicTrack.id"
          reference="MusicTrack"
          label="MusicTrack"
        >
          <SelectInput optionText={MusicTrackTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
