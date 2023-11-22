import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

//import { ModalProvider } from "@/components/providers/modal-provider";
//import { QueryProvider } from "@/components/providers/query-provider";

const PlatformLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
    
        <Toaster />
      
        {children}
     
    </ClerkProvider>
  );
};

export default PlatformLayout;
