"use client";
import { usePlan } from "../planContext";
import ObjectPropetyInputComponent from "./object_propeties_components/ObjectPropetyInputComponent";

const EditorObjectPropeties = () => {
  const { selectedObject } = usePlan();
  if (!selectedObject) {
    return <div className='text-sm'>No object selected</div>;
  }
  return (
    <div className='flex flex-col gap-4 p-4 w-full'>
      <h2 className='text-center'>Propeties:</h2>
      <div className='grid grid-cols-3 '>
        <ObjectPropetyInputComponent propetyKey='X' value={selectedObject.X} />
        <ObjectPropetyInputComponent propetyKey='Y' value={selectedObject.Y} />
        <ObjectPropetyInputComponent propetyKey='Z' value={selectedObject.Z} />
      </div>
      <div className='grid grid-cols-3 '>
        <ObjectPropetyInputComponent propetyKey='W' value={selectedObject.width} />
        <ObjectPropetyInputComponent propetyKey='H' value={selectedObject.height} />
        <ObjectPropetyInputComponent propetyKey='L' value={selectedObject.angle} />
      </div>
    </div>
  );
};
export default EditorObjectPropeties;
