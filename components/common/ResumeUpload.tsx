import { ControllerRenderProps } from "react-hook-form";
import { FileUpload } from "../ui/file-upload";

type Props = {
  field: ControllerRenderProps<any, "resume">;
};

export const ResumeUpload = ({ field }: Props) => (
  <div className="flex flex-col gap-2">
    <label className="font-medium text-sm">Resume (PDF or TXT, max 5MB)</label>
    <FileUpload value={field.value} onChange={field.onChange} />
  </div>
);
