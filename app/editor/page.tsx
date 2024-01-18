import EditorInfoLine from "./_components/EditorInfoLine";
import EditorMiniTable from "./_components/EditorMiniTable";
import EditorObjectPropeties from "./_components/EditorObjectPropeties";
import EditorStage from "./_components/EditorStage";

const page = () => {
  return (
    <div className='flex flex-col lg:flex-row  justify-between p-5 gap-5'>
      <div id='editor_sidebar' className='flex flex-col justify-around items-center w-1/3 max-w-[400px] bg-gray-200'>
        <EditorMiniTable />
        <EditorObjectPropeties />
      </div>
      <div className='flex  flex-col gap-5 mx-auto'>
        <EditorInfoLine />
        <div className='mx-auto'>
          <EditorStage />
        </div>
      </div>
    </div>
  );
};
export default page;
