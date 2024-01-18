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

  return (
    <div className='flex flex-col items-center'>
      <div>{cellKey}</div>
      <div className='text-sm text-center'>{value || "-"}</div>
    </div>
  );
};
export default InfoLineCell;
