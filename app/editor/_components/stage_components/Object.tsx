"use client";

import { Button } from "@/components/ui/button";
import { usePlan } from "../../planContext";
import { PlanObjectType } from "../../types";
const Object = ({ object }: { object: PlanObjectType }) => {
  const { chooseSelectedObject, removeObject } = usePlan();

  const handleClick = () => {
    chooseSelectedObject(object.id);
  };
  return (
    <div onClick={handleClick} className='w-fit cursor-pointer'>
      <Button onClick={() => removeObject(object.id)}>remove</Button>
      <p>{object.name}</p>
      <p>{object.showName ? "true" : "false"}</p>
      <p>{object.showIcon ? "true" : "false"}</p>
      <p>{object.showPatchNo ? "true" : "false"}</p>
      <p>X{object.X}</p>
      <p>Y{object.Y}</p>
    </div>
  );
};
export default Object;
