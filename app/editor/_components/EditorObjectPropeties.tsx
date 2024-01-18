"use client";
import { usePlan } from "../planContext";
import ObjectPropetyComponent from "./object_propeties_components/ObjectPropetyComponent";

const EditorObjectPropeties = () => {
  const { selectedObject } = usePlan();
  if (!selectedObject) {
    return <div className='text-sm'>No object selected</div>;
  }
  return (
    <div className='flex flex-col gap-4 p-4 w-full'>
      <h2 className='text-center'>Propeties:</h2>
      <div className='grid grid-cols-3 '>
        <ObjectPropetyComponent propetyKey='X' value={selectedObject.X} />
        <ObjectPropetyComponent propetyKey='Y' value={selectedObject.Y} />
        <ObjectPropetyComponent propetyKey='Z' value={selectedObject.Z} />
      </div>
      <div className='grid grid-cols-3 '>
        <ObjectPropetyComponent propetyKey='W' value={selectedObject.width} />
        <ObjectPropetyComponent propetyKey='H' value={selectedObject.height} />
        <ObjectPropetyComponent propetyKey='L' value={selectedObject.angle} />
      </div>
    </div>
  );
};
export default EditorObjectPropeties;
