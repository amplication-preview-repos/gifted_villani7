import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { MusicTrackTitle } from "../musicTrack/MusicTrackTitle";

export const UserMusicListeningEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
