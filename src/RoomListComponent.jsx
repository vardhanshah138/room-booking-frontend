import { Chip, List, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";

const RoomList = (props) => {
  const {setCurrentRoom} = props;  
  return (
    <List>
      {props?.rooms?.map((room) => (
        <ListItem key={room} 
          divider 
          onClick={() => {setCurrentRoom(room)}}
          sx={{
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <ListItemText
            primary={room.name}
            secondary={`Capacity: ${room.capacity}`}
          />
          <ListItemSecondaryAction>
            {room.tags.map((tag, index) => (
              <Chip key={index} label={tag} style={{ marginLeft: 4 }} />
            ))}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default RoomList;