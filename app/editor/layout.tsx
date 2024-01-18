import EditorTopbar from "./_components/EditorTopbar";
import { PlanProvider } from "./planContext";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PlanProvider>
      <div className='min-h-screen max-w-screen mx-auto'>
        <EditorTopbar />
        {children}
      </div>
    </PlanProvider>
  );
};
export default layout;
