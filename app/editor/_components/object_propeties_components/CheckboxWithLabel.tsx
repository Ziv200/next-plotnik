"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { usePlan } from "../../planContext";
import { CheckedState } from "@radix-ui/react-checkbox";
export const CheckboxWithLabel = ({ propetyKey, label }: { propetyKey: string; label: string }) => {
  const { changeObjectBooleanPropety, getSelectedObject } = usePlan();
  const selectedObject = getSelectedObject();

  const handleChange = (checked: CheckedState) => {
    if (!selectedObject) return;
    if (checked !== "indeterminate") {
      changeObjectBooleanPropety(selectedObject?.id, propetyKey, checked);
    }
  };

  return (
    <div className='flex items-center gap-4'>
      <Checkbox onCheckedChange={handleChange} checked={selectedObject?.[propetyKey]} id={propetyKey} />
      <label htmlFor={propetyKey}>{label}</label>
    </div>
  );
};
