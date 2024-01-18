"use client";
import { Input } from "@/components/ui/input";
import { usePlan } from "../../planContext";
type objectPropetyProps = {
  propetyKey: string;
  value: string | number;
};

const ObjectPropetyComponent = ({ propetyKey, value }: objectPropetyProps) => {
  return (
    <div className='flex flex-row gap-4  items-center '>
      <span>{propetyKey}:</span>
      <span className=''>
        <Input className='w-16' value={value} />
      </span>
    </div>
  );
};
export default ObjectPropetyComponent;
