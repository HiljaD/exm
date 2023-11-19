
import { Navbar } from "@/app/(marketing)/_components/navbar";

const BimViewerLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className=" bg-slate-100">
        {children}
      </main>
   
    </div>
  );
};

export default BimViewerLayout;