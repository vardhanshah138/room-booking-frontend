import moment from "moment-timezone";

const momentDate = (date) => moment(new Date(date).toISOString());

export default momentDate;