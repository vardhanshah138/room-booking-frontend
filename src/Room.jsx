import { useEffect, useState } from "react";
import { SimpleForm, TextInput, useDataProvider } from "react-admin";
import RoomList from "./RoomListComponent";
import RoomDetails from "./RoomDetails";

export const RoomComponent = () => {
  const [search, setSearch] = useState("");
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState();
  const dataProvider = useDataProvider();

  useEffect(() => {    
      dataProvider
      .getList("rooms",{filter : search})
      .then((response) => {
        setRooms(response.data)
      }).catch((error) => {
      })    
  },[dataProvider, search]);
return(
<>
<SimpleForm
  toolbar={null}
>
  <TextInput 
    source="room"
    onChange={(e) => {      
      setSearch(e.target.value);
    }}
  />  
</SimpleForm>  
<RoomList rooms={rooms} setCurrentRoom={setCurrentRoom} />
<RoomDetails room={currentRoom}/>
</>);
}