"use client";

import Object from "./stage_components/Object";
import { usePlan } from "../planContext";
import { Button } from "@/components/ui/button";
import { typeOfObject } from "../types";
const exampleObject = {
  id: "id",
  name: "name",
  typeOfObject: typeOfObject.input,
  channelCount: 2,
  stageBox: "sdrack1",
  patchNo: 1,
  mic: "di",
  stand: null,
  icon: null,
  X: 50,
  Y: 50,
  Z: 0,
  width: 200,
  height: 200,
  angle: 90,
  showIcon: true,
  showName: true,
  showPatchNo: true,
  comment: null,
};
const exampleObject2 = {
  id: "id2",
  name: "name2",
  typeOfObject: typeOfObject.input,
  channelCount: 2,
  stageBox: "sd1",
  patchNo: 2,
  mic: "di",
  stand: null,
  icon: null,
  X: 30,
  Y: 30,
  Z: 0,
  width: 150,
  height: 150,
  angle: 0,
  showIcon: true,
  showName: false,
  showPatchNo: true,
  comment: null,
};

const EditorStage = () => {
  const { planDetails, addNewObject, selectedObject } = usePlan();
  return (
    <div style={{ aspectRatio: "1123/794" }} className='w-[65vw] bg-gray-200'>
      <Button onClick={() => addNewObject(exampleObject)}>Add</Button>
      <Button onClick={() => addNewObject(exampleObject2)}>Add2</Button>
      {planDetails.planObjects.map((object) => (
        <Object object={object} key={object.id} />
      ))}
    </div>
  );
};
export default EditorStage;
