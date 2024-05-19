import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { KeywordList } from "./keyword/KeywordList";
import { KeywordCreate } from "./keyword/KeywordCreate";
import { KeywordEdit } from "./keyword/KeywordEdit";
import { KeywordShow } from "./keyword/KeywordShow";
import { OccurrenceList } from "./occurrence/OccurrenceList";
import { OccurrenceCreate } from "./occurrence/OccurrenceCreate";
import { OccurrenceEdit } from "./occurrence/OccurrenceEdit";
import { OccurrenceShow } from "./occurrence/OccurrenceShow";
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
        title={"Occurrence Counting"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Keyword"
          list={KeywordList}
          edit={KeywordEdit}
          create={KeywordCreate}
          show={KeywordShow}
        />
        <Resource
          name="Occurrence"
          list={OccurrenceList}
          edit={OccurrenceEdit}
          create={OccurrenceCreate}
          show={OccurrenceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
