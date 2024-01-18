"use client";
import { Input } from "@/components/ui/input";
import { usePlan } from "../../planContext";
import { useState } from "react";
type objectPropetyInputProps = {
  propetyKey: string;
};

const ObjectPropetyInputComponent = ({ propetyKey }: objectPropetyInputProps) => {
  //rerender when handlechange
  const { changeObjectInputPropety, getSelectedObject } = usePlan();
  const selectedObject = getSelectedObject();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedObject) return;
    const newValue = Number(e.target.value);
    changeObjectInputPropety(selectedObject?.id, propetyKey, newValue);
  };
  return (
    <div className='flex flex-row gap-4 px-2 items-center '>
      <span>{propetyKey}:</span>
      <span className=''>
        <Input
          className=''
          name={propetyKey}
          type='number'
          onChange={handleChange}
          value={selectedObject ? selectedObject[propetyKey] : ""}
        />
      </span>
    </div>
  );
};
export default ObjectPropetyInputComponent;
