import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/app/validation/formSchema";

export const useRoastForm = () => {
  return useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resume: undefined,
      github: "",
      roastMode: false,
    },
  });
};
