"use client";
import { usePlan } from "../planContext";
import { CheckboxWithLabel } from "./object_propeties_components/CheckboxWithLabel";
import ObjectPropetyInputComponent from "./object_propeties_components/ObjectPropetyInputComponent";

const EditorObjectPropeties = () => {
  const { getSelectedObject } = usePlan();
  const selectedObject = getSelectedObject();
  if (!selectedObject) {
    return <div className='text-sm'>No object selected</div>;
  }
  return (
    <div className='flex flex-col gap-4 p-4 w-full'>
      <h2 className='text-center'>Propeties:</h2>
      <div className='grid grid-cols-3 '>
        <ObjectPropetyInputComponent propetyKey='X' />
        <ObjectPropetyInputComponent propetyKey='Y' />
        <ObjectPropetyInputComponent propetyKey='Z' />
      </div>
      <div className='grid grid-cols-3 '>
        <ObjectPropetyInputComponent propetyKey='W' />
        <ObjectPropetyInputComponent propetyKey='H' />
        <ObjectPropetyInputComponent propetyKey='L' />
      </div>
      <div>
        <CheckboxWithLabel propetyKey='showName' label='Show Name' />
        <CheckboxWithLabel propetyKey='showPatchNo' label='Show Patch No' />
        <CheckboxWithLabel propetyKey='showIcon' label='Show Icon' />
      </div>
    </div>
  );
};
export default EditorObjectPropeties;
