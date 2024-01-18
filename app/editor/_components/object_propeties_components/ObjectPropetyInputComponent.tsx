"use client";
import { Input } from "@/components/ui/input";
import { usePlan } from "../../planContext";
type objectPropetyProps = {
  propetyKey: string;
  value: number;
};

const ObjectPropetyInputComponent = ({ propetyKey, value }: objectPropetyProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className='flex flex-row gap-4  items-center '>
      <span>{propetyKey}:</span>
      <span className=''>
        <Input className='w-16' value={value} onChange={handleChange} />
      </span>
    </div>
  );
};
export default ObjectPropetyInputComponent;
