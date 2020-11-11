import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_TWEEETS,
  FETCH_TWEEET,
  CREATE_TWEEET,
  EDIT_TWEEET,
  DELETE_TWEEET
} from "./types";
import tweeets from "../apis/tweeets";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createTweeet = formValues => async dispatch => {
  const response = await tweeets.post("/tweeets", formValues);
  dispatch({
    type: CREATE_TWEEET,
    payload: response.data
  });
};

export const fetchTweeets = () => async dispatch => {
  const response = await tweeets.get("/tweeets");
  dispatch({
    type: FETCH_TWEEETS,
    payload: response.data
  });
};

export const fetchTweeet = id => async dispatch => {
  const response = await tweeets.get(`/tweeets/${id}`);
  dispatch({
    type: FETCH_TWEEET,
    payload: response.data
  });
};
export const editTweeet = (id, formValues) => async dispatch => {
  const response = await tweeets.put(`/tweeets/${id}`, formValues);
  dispatch({
    type: EDIT_TWEEET,
    payload: response.data
  });
};

export const deleteTweeet = (id, formValues) => async dispatch => {
  const response = await tweeets.delete(`/tweeets/${id}`);
  dispatch({
    type: EDIT_TWEEET,
    payload: id
  });
};
