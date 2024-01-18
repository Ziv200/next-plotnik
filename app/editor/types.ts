export enum typeOfObject {
  input = "INPUT",
  output = "OUTPUT",
  stage = "STAGE",
}

export interface PlanObjectType {
  [key: string]: any; // This is the index signature
  id: string;
  name: string;
  typeOfObject: typeOfObject;
  channelCount: number;
  stageBox: string;
  patchNo: number;
  mic: string | null;
  stand: string | null;
  icon: string | null;
  X: number;
  Y: number;
  Z: number;
  width: number;
  height: number;
  angle: number;
  showIcon: boolean;
  showName: boolean;
  showPatchNo: boolean;
  comment: string | null;
}
