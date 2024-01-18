"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const EditorTopbar = () => {
  return (
    <div className='h-[50px] flex w-full justify-between items-center px-5 text-white bg-gray-600'>
      <div className='flex items-center justify-between gap-10'>
        <h1 className='text-xl'>Plotnik</h1>
        <div className='flex items-center gap-10'>
          <DropdownMenu>
            <DropdownMenuTrigger>File</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Plan Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Save</DropdownMenuItem>
              <DropdownMenuItem>Save As Copy</DropdownMenuItem>
              <DropdownMenuItem>Preview PDF</DropdownMenuItem>
              <DropdownMenuItem>Download As PDF</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>Add</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Object</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>Edit</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Undo</DropdownMenuItem>
              <DropdownMenuItem>Redo</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Duplicate Selected</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
export default EditorTopbar;
