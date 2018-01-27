/* export const fetchMeetups = () =>
  fetch("http://localhost:3000/api/meetups").then(res => res.json());  */

import axios from "axios";
import { Platform } from "react-native";
//import { ProfileScreen } from "../screens/index";

let url;

if (Platform.OS !== "ios") {
  url = "http://10.0.3.2:3000/api";
} else {
  url = "http://localhost:3000/api";
}

axios.defaults.baseURL = url;

const fakeGroupId = "5a63f610d14e4b6c611ae8b0";

class MeetupApi {
  constructor() {
    (this.groupId = fakeGroupId),
      (this.path = `/groups/${this.groupId}/meetups`);
  }

  async fecthGroupMeetups() {
    try {
      const { data } = await axios.get(this.path);
      return data.meetups;
    } catch (e) {
      console.log(e);
    }
  }
}

export { MeetupApi };
