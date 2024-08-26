import { Admin, Resource } from "react-admin";
import './App.css';
import dataProvider from "./DataProvider";
import { Route } from "react-router-dom";
import { RoomComponent } from "./Room";

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
    >
      <Resource name="rooms" >
        <Route path="book" element={<RoomComponent />}/>    
      </Resource>
    </Admin>
  );
}

export default App;
