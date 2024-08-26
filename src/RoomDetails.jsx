import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isEmpty, useDataProvider } from "ra-core";
import momentDate from "./momentDate";
import { Grid } from "@mui/material";
import { Button } from "react-admin";

const RoomDetails = (props) => {
  const { room } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [schedules, setSchedules] = useState([]);
  const dataProvider = useDataProvider();

  useEffect(() => {    
    if(!isEmpty(room)){
      dataProvider
      .getList("schedules",{ id : room.id, date : momentDate(startDate).format("MM/DD/YYYY") })
      .then((response) => {
        setSchedules(response.data)
      }).catch((error) => {
      }) 
    } 
  },[dataProvider, room, startDate]);

  if (!room) {
    return <Typography variant="h6">Select a room to view details</Typography>;
  }

  return (
    <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
      <Typography variant="h4" gutterBottom>
        {room.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Capacity:</strong> {room.capacity}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Tags:</strong>
      </Typography>
      <Stack direction="row" spacing={1}>
        {room.tags.length > 0 ? (
          room.tags.map((tag, index) => (
            <Chip key={index} label={tag} color="primary" />
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No tags available
          </Typography>
        )}
      </Stack> 
      <DatePicker 
        selected={startDate} 
        onChange={(date) => setStartDate(date)}
        //minDate={new Date()}
        dateFormat="MM/dd/yyyy"
        /> 
        <Grid container spacing={2}>
          {schedules.map((slot, index) => (
            <Grid item key={index}>
              <Button
              >
                {slot.startTime} - {slot.endTime} 
              </Button>
            </Grid>
          ))}
        </Grid>    
    </Paper>
  );
};

export default RoomDetails;
