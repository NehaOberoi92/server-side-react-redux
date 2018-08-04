import { FETCH_ADMIN } from '../../helpers/contents';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ADMIN:
      return action.payload.data;
    default:
      return state;
  }
};
