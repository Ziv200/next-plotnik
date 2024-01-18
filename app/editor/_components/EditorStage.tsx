"use client";

import PlanObject from "./stage_components/PlanObject";
import { usePlan } from "../planContext";
import { Button } from "@/components/ui/button";
import { typeOfObject } from "../types";
const exampleObject = {
  id: "1234",
  name: "acc gtr",
  typeOfObject: typeOfObject.input,
  channelCount: 1,
  stageBox: "sdrack1",
  patchNo: 1,
  mic: "di",
  stand: null,
  icon: "/assets/icons/p_accGtr.png",
  X: 50,
  Y: 50,
  Z: 0,
  W: 150,
  H: 150,
  L: 90,
  showIcon: true,
  showName: true,
  showPatchNo: true,
  comment: null,
};

const EditorStage = () => {
  const { planDetails, addNewObject, getSelectedObject } = usePlan();
  const selectedObject = getSelectedObject();
  return (
    <div style={{ aspectRatio: "1123/794" }} className='w-[65vw] bg-gray-200'>
      <Button onClick={() => addNewObject(exampleObject)}>Add</Button>
      {planDetails.planObjects.map((object) => (
        <PlanObject object={object} key={object.id} />
      ))}
    </div>
  );
};
export default EditorStage;
