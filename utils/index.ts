import { toast } from "sonner";
export const handleFormErrors = (errors: any) => {
    Object.values(errors).forEach((err: any) => {
      toast(err.message || "Invalid input");
    });
  };
  