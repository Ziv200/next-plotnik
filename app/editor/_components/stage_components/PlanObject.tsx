"use client";

import { Button } from "@/components/ui/button";
import { usePlan } from "../../planContext";
import { PlanObjectType } from "../../types";
import Image from "next/image";
const PlanObject = ({ object }: { object: PlanObjectType }) => {
  const { chooseSelectedObject, removeObject } = usePlan();

  const handleClick = () => {
    chooseSelectedObject(object.id);
  };
  return (
    <div onClick={handleClick} className=' w-fit cursor-pointer relative'>
      <Button className='absolute top-0 left-0' variant='ghost' onClick={() => removeObject(object.id)}>
        X
      </Button>
      <Image width={150} height={150} alt={object.name} src={object.icon || "/assets/icons/p_p.png"} />
      {object.showName && (
        <p id={`${object.id}_name`} className='absolute bottom-0 right-1/2 translate-x-1/2'>
          {object.name}
        </p>
      )}
      {object.showPatchNo && (
        <p
          id={`${object.id}_patchNo`}
          className='bg-background p-2 rounded-full absolute bottom-[-5] right-1/2 translate-x-1/2'>
          {object.patchNo}
        </p>
      )}
    </div>
  );
};
export default PlanObject;
