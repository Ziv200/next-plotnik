"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { usePlan } from "../../planContext";

interface InfoLineCellProps {
  cellKey: string;
  value: string | null;
}

const InfoLineCell = ({ cellKey, value }: InfoLineCellProps) => {
  const { getSelectedObject, changeObjectInputPropety } = usePlan();
  const selectedObject = getSelectedObject();
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: FormData) => {
    setIsEditing(false);
  };
  return (
    <div className='flex flex-col items-center'>
      <div>{cellKey}</div>
      {isEditing ? (
        <form action={handleSubmit}>
          <Input autoFocus name={cellKey} className='h-4 w-16 flex' defaultValue={selectedObject?.name} type='text' />
        </form>
      ) : (
        <div onDoubleClick={() => setIsEditing(true)} className='text-sm text-center'>
          {value || "-"}
        </div>
      )}
    </div>
  );
};
export default InfoLineCell;
