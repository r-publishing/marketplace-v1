import { State } from '../../interfaces/interface';

export const initialState: State = {
  // utilities
  readOnlyUrl: "http://127.0.0.1:40403",
  validatorUrl: "http://127.0.0.1:40403",
  masterRegistryUri: "",
  isLoading: false,

  //public store data
  storeNftData: {},

  // user data
  address: "",
  userBoxId: "",
  userNftData: {},
  file: {},
};

export default function reducer(state = initialState, action: { type: any; payload: any }) {
  console.log(action);
  switch (action.type) {
    case "INIT": {
      return {
        ...state,
      };
    }
    case "INIT_USER_WALLET": {
      return {
        ...state,
        address: action.payload.address,
        userBoxId: action.payload.userBoxId,
      };
    }
    case "INIT_STORE": {
      return {
        ...state,
      };
    }
    case "UPLOAD": {
      return {
        ...state,
        file: action.payload.file,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case "PUBLISH_TO_PUBLIC_STORE": {
      return {
        ...state,
      };
    }
    case "SAVE_USER_NFT_DATA_COMPLETED": {
      return {
        ...state,
        userNftData: action.payload,
      };
    }

    case "PURCHASE_NFT": {
      return {
        ...state,
      };
    }
    case "SAVE_STORE_NFT_DATA_COMPLETED": {
      return {
        ...state,
        storeNftData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
