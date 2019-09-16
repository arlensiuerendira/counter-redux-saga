import axios from "axios";
import { put, all, takeLatest } from "redux-saga/effects";

function* getUserLaunched(action) {
  try {
    console.log("action.user", action.userNb);
    const user = yield axios
      .create({ baseURL: "https://5d7c04cf6b8ef80014b29937.mockapi.io/api/v1" })
      .get(`/user/${action.userNb}`);
    console.log("User", user.data);
    yield put({ type: "USER_SUCCESS", user: user.data });
  } catch (err) {
    console.log("Error on API call", err);
    yield put({ type: "USER_ERROR", error: err });
  }
}

export default function* userSaga() {
  yield all([takeLatest("USER_LAUNCHED", getUserLaunched)]);
}
