export interface Document {
  [name: string]: {
    id: string;
    desc: string;
    name: string;
    mimeType: string;
    data: string;
    type?: string;
    price?: number
  };
}

export interface File {
  [name: string]: Document;
}

export interface State {
  readOnlyUrl: string;
  validatorUrl: string;
  masterRegistryUri: string;
  isLoading: boolean;
  storeNftData: Document;
  address: string;
  userBoxId: string;
  userNftData: Document;
  file: Document;
}

export interface reducerState {
  reducer: State;
}
