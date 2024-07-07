import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserMusicListeningList } from "./userMusicListening/UserMusicListeningList";
import { UserMusicListeningCreate } from "./userMusicListening/UserMusicListeningCreate";
import { UserMusicListeningEdit } from "./userMusicListening/UserMusicListeningEdit";
import { UserMusicListeningShow } from "./userMusicListening/UserMusicListeningShow";
import { UserLocationList } from "./userLocation/UserLocationList";
import { UserLocationCreate } from "./userLocation/UserLocationCreate";
import { UserLocationEdit } from "./userLocation/UserLocationEdit";
import { UserLocationShow } from "./userLocation/UserLocationShow";
import { MusicTrackList } from "./musicTrack/MusicTrackList";
import { MusicTrackCreate } from "./musicTrack/MusicTrackCreate";
import { MusicTrackEdit } from "./musicTrack/MusicTrackEdit";
import { MusicTrackShow } from "./musicTrack/MusicTrackShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"testN"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserMusicListening"
          list={UserMusicListeningList}
          edit={UserMusicListeningEdit}
          create={UserMusicListeningCreate}
          show={UserMusicListeningShow}
        />
        <Resource
          name="UserLocation"
          list={UserLocationList}
          edit={UserLocationEdit}
          create={UserLocationCreate}
          show={UserLocationShow}
        />
        <Resource
          name="MusicTrack"
          list={MusicTrackList}
          edit={MusicTrackEdit}
          create={MusicTrackCreate}
          show={MusicTrackShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
