import {createModel} from '@rematch/core';
import {RootModel} from '.';
import {AppStackList} from '../navigation/types';

interface AppState {
  status: 'not-authenticated' | 'authenticated';
  wallet: {
    amount: string;
  };
  modal: {
    status: 'idle' | 'success' | 'error';
    message: string;
    navigationTarget: keyof AppStackList;
  };
}

export const app = createModel<RootModel>()({
  state: {
    status: 'not-authenticated',
    wallet: {
      amount: '0.00',
    },
    modal: {
      status: 'idle',
      message: '',
    },
  } as AppState, // initial state
  reducers: {
    // handle state changes with pure functions
    authenticateUser(state) {
      return {
        ...state,
        status: 'authenticated',
      };
    },
    logout(state) {
      return {
        ...state,
        status: 'not-authenticated',
      };
    },
    increaseWalletAmount(state, payload) {
      if (Number(payload) < 500) {
        return state;
      }
      return {
        ...state,
        wallet: {
          ...state.wallet,
          amount: (Number(state.wallet.amount) + Number(payload))
            .toFixed(2)
            .toString(),
        },
      };
    },
    decreaseWalletAmount(state, payload) {
      if (Number(payload) < 500) {
        return state;
      }
      return {
        ...state,
        wallet: {
          ...state.wallet,
          amount: (Number(state.wallet.amount) - Number(payload))
            .toFixed(2)
            .toString(),
        },
      };
    },
    successModal(state, payload) {
      return {
        ...state,
        modal: {
          ...state.modal,
          ...payload,
          status: 'success',
        },
      };
    },
    errorModal(state, payload) {
      return {
        ...state,
        modal: {
          ...state.modal,
          ...payload,
          status: 'error',
        },
      };
    },
    resetModal(state) {
      return {
        ...state,
        modal: {
          ...state.modal,
          status: 'idle',
          message: '',
          navigationTarget: 'none',
        },
      };
    },
  },

  //   effects: dispatch => ({
  // handle state changes with impure functions.
  // use async/await for async actions
  // async incrementAsync(payload: number, state) {
  //   console.log('This is current root state', state);
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   dispatch.count.increment(payload);
  // },
  //   }),
});
