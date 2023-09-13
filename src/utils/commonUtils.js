import moment from "moment";
export const convertDate = (value = "") => {
  return moment(value).format("MMMM Do YYYY, h:mm:ss a");
};
