import axios from "axios";

import { transfersActions } from "../slices/transfers.slice";

const API_URL = "http://localhost:4000/api/v1/transfers";

export const getUsersTransfers = (userId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/v1/users/${userId}/history`
      );
  
      dispatch(transfersActions.getTransfers({ transfers: res.data.user }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const newTransfer = (senderUserId, receiverUserId, amount,date) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(API_URL, {
        date,
        senderUserId,
        receiverUserId,
        amount,
      });
   
      dispatch(
        transfersActions.newTransfer({ newTransfer: res.data.newTransfer })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
