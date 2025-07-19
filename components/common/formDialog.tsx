import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Controller } from "react-hook-form";
import { useRoastForm } from "@/app/hooks/useRoastForm";
import { handleFormErrors } from "@/utils";
import { ResumeUpload } from "./ResumeUpload";
import { roastResume } from "@/app/actions/roast";
import { useRouter } from "next/navigation";
import { useRoastStore } from "@/store/roastStore";

const SARCASM_STEPS = [
  "Uploading your ancient resume...",
  "Peeking at your dusty GitHub profile...",
  "Letting the AI judges roast you mercilessly...",
  "Judgment day has arrived! Prepare yourself...",
];

const FormDialog = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useRoastForm();
  const router = useRouter();
  const { setResult, setPanelOpen } = useRoastStore.getState();

  const onSubmit = async (data: any) => {
    try {
      toast.info(SARCASM_STEPS[0]);
      await new Promise(res => setTimeout(res, 900));

      toast.info(SARCASM_STEPS[1]);
      await new Promise(res => setTimeout(res, 900));

      toast.info(SARCASM_STEPS[2]);
      const formData = new FormData();
      formData.append("resume", data.resume);
      formData.append("github_username", data.github);
      formData.append("roast_mode", data.roastMode ? "true" : "false");

      console.log("form data is " , formData);
      const res = await roastResume(formData);
      setResult(res);
      setPanelOpen(true); // e.g., show the result panel/modal
      
      toast.info(SARCASM_STEPS[3]);
      await new Promise(res => setTimeout(res, 1200));

      toast.success("Submitted! Let the judgment begin.");
      router.push("/panel");
    } catch (error) {
      toast.error("Today is not your day! , something went wrong");
    }
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="default">Enter Roast Chamber</Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 text-zinc-100 border border-zinc-700 rounded-xl shadow-2xl ">
        <form onSubmit={handleSubmit(onSubmit, handleFormErrors)} className={"space-y-6"}>
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Enter the Roast Chamber</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Upload your resume and GitHub. We’ll tell you why recruiters keep ghosting you.
            </DialogDescription>
          </DialogHeader>

          {/* Resume Upload */}
          <Controller
            name="resume"
            control={control}
            render={({ field }) => <ResumeUpload field={field} />}
          />

          {/* GitHub Field */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm">GitHub Username</label>
            <Controller
              name="github"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  placeholder="e.g. your-cool-username"
                  className="bg-zinc-800 border border-zinc-600 rounded px-3 py-2 text-zinc-100 text-sm"
                />
              )}
            />
          </div>

          {/* Roast Mode */}
          <div className="flex items-center gap-2 mt-2">
            <Controller
              name="roastMode"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  id="roastMode"
                  checked={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <label htmlFor="roastMode" className="font-medium text-sm">
              Enable Roast Mode (brutally honest feedback)
            </label>
          </div>

          <DialogFooter className="pt-4">
            <Button type="submit" variant="default" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Roast Me"}
            </Button>
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="border-zinc-600 text-zinc-300"
                onClick={() => reset()}
              >
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
