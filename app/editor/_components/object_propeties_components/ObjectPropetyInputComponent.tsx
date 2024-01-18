"use client";
import { Input } from "@/components/ui/input";
import { usePlan } from "../../planContext";
import { useEffect } from "react";
type objectPropetyInputProps = {
  propetyKey: string;
};

const ObjectPropetyInputComponent = ({ propetyKey }: objectPropetyInputProps) => {
  //rerender when handlechange
  const { changeObjectInputPropety, selectedObject } = usePlan();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedObject) {
      return;
    }
    changeObjectInputPropety(selectedObject.id, propetyKey, Number(e.target.value));
  };

  return (
    <div className='flex flex-row gap-4  items-center '>
      <span>{propetyKey}:</span>
      <span className=''>
        <Input className='w-16' value={selectedObject && selectedObject[propetyKey]} onChange={handleChange} />
      </span>
    </div>
  );
};
export default ObjectPropetyInputComponent;
