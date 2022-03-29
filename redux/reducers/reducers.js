
export const initialState = {
  // utilities
  readOnlyUrl: 'http://127.0.0.1:40403',
  validatorUrl: 'http://127.0.0.1:40403',
  masterRegistryUri: '',
  isLoading: false,

  //public store data
  storeContractId: '',
  storeBoxId: '',
  storeNftData: {},

  // user data
  userContractId: '',
  userBoxId: '',
  userNftData: {},
  file: {},
};


export default function reducer (state = initialState, action) {
    console.log(action);
    switch (action.type) {
      case 'INIT': {
        return {
          ...state,
        };
      }
      case 'UPLOAD': {
        return {
          ...state,
          file: action.payload.file
        }
      }
      case 'SET_LOADING': {
        return {
          ...state,
          isLoading: action.payload,
        };
      }
      case 'PUBLISH_TO_PUBLIC_STORE': {
        return {
          ...state,
        };
      }
      case 'SAVE_USER_NFT_DATA_COMPLETED': {
        return {
          ...state,
          userNftData: action.payload,
        };
      }
  
      // case 'SET_PLATFORM': {
      //   return {
      //     ...state,
      //     platform: action.payload.platform,
      //   };
      // }
      // case 'SET_USER': {
      //   return {
      //     ...state,
      //     user: action.payload.user,
      //   }
      // }
      // case 'SET_SEARCH_TEXT': {
      //   return {
      //     ...state,
      //     searchText: action.payload.searchText,
      //   };
      // }
      default: {
        return state;
      }
    }
  };