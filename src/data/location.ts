export interface State {
  id: string;       // 2-character ID: "01", "02", etc.
  code: string;     // State code: "BR", "KA", etc.
  name: string;
  nameHindi: string;
  supported: boolean;
}

export interface District {
  id: string;       // 2-character ID: "01", "02", etc.
  stateId: string;  // 2-character State ID
  name: string;
  nameHindi: string;
}