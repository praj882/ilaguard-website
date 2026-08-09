export interface State {
  id: number;
  code: string;
  name: string;
  supported: boolean;
}

export interface District {
  id: number;
  stateId: number;
  name: string;
}