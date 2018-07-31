import axios from "axios";
import { FETCH_USER } from "../../helpers/contents";
export const fetchUser = () => async dispatch => {
  const res = await axios.get("http://react-ssr-api.herokuapp.com/users");
  dispatch({
    type: FETCH_USER,
    payload: res
  });
};
