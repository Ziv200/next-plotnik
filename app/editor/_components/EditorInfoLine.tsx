"use client";
import { usePlan } from "../planContext";
import InfoLineCell from "./info_line_components/InfoLineCell";
const EditorInfoLine = () => {
  const { selectedObject } = usePlan();
  return (
    <div className='flex flex-row items-center justify-around h-[60px] bg-gray-200'>
      {!selectedObject ? (
        <div>Click on an object to select it</div>
      ) : (
        <div className='flex flex-row w-full py-2 items-center justify-around'>
          <p className='text-xl'>{selectedObject.typeOfObject}</p>
          <InfoLineCell cellKey='Name' value={selectedObject.name} />
          <InfoLineCell cellKey='#No' value={selectedObject.patchNo.toString()} />
          <InfoLineCell cellKey='ChCount' value={selectedObject.channelCount.toString()} />
          <InfoLineCell cellKey='Mic' value={selectedObject.mic} />
          <InfoLineCell cellKey='Stand' value={selectedObject.stand} />
          <InfoLineCell cellKey='StageBox' value={selectedObject.stageBox} />
          <InfoLineCell cellKey='Comment' value={selectedObject.comment} />
        </div>
      )}
    </div>
  );
};
export default EditorInfoLine;
