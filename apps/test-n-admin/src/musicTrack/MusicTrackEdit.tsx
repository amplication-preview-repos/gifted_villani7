import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserMusicListeningTitle } from "../userMusicListening/UserMusicListeningTitle";

export const MusicTrackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="artist" source="artist" />
        <TextInput label="album" source="album" />
        <NumberInput step={1} label="duration" source="duration" />
        <TextInput label="spotifyUri" source="spotifyUri" />
        <TextInput label="appleMusicUri" source="appleMusicUri" />
        <ReferenceArrayInput
          source="userMusicListenings"
          reference="UserMusicListening"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserMusicListeningTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
