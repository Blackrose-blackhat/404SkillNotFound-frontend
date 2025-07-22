import React, { useState } from "react";
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
import { useRoastForm } from "@/hooks/useRoastForm";
import { handleFormErrors } from "@/utils";
import { ResumeUpload } from "./ResumeUpload";
import { roastResume } from "@/actions/roast";
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

  // Enhanced state management
  const [step, setStep] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (data: any) => {
    setSubmitError(null);
    setStep(0);
    setIsCompleted(false);
    
    try {
      await new Promise(res => setTimeout(res, 900));
      setStep(1);
      await new Promise(res => setTimeout(res, 900));
      setStep(2);
      const formData = new FormData();
      formData.append("resume", data.resume);
      formData.append("github_username", data.github);
      formData.append("roast_mode", data.roastMode ? "true" : "false");
      const res = await roastResume(formData);
      setResult(res);
      setPanelOpen(true);
      setStep(3);
      setIsCompleted(true);
      
      // Wait then close dialog and navigate
      await new Promise(res => setTimeout(res, 1200));
      setIsOpen(false); // Close dialog
      
      // Small delay to ensure dialog closes, then navigate
      setTimeout(() => {
        router.push("/panel");
        // Reset after navigation
        setTimeout(() => {
          setStep(null);
          setIsCompleted(false);
          reset();
        }, 500);
      }, 300);
      
    } catch (error) {
      setSubmitError("Today is not your day! Something went wrong.");
      setStep(null);
      setIsCompleted(false);
      reset();
    }
  };

  // Enhanced Stepper UI with completion state
  const Stepper = () => (
    <div className="flex flex-col gap-4 py-6">
      {SARCASM_STEPS.map((text, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              step !== null && idx < step
                ? "bg-green-500 border-green-500"
                : step !== null && idx === step
                ? "bg-yellow-400 border-yellow-400 animate-pulse"
                : "bg-zinc-800 border-zinc-600"
            }`}
          >
            {step !== null && idx < step ? (
              <span className="text-xs text-white">✓</span>
            ) : null}
          </div>
          <span
            className={`text-sm transition-colors duration-300 ${
              step !== null && idx === step
                ? "text-yellow-300 font-semibold"
                : step !== null && idx < step
                ? "text-green-400"
                : "text-zinc-400"
            }`}
          >
            {text}
          </span>
        </div>
      ))}
      
      {/* Success message when completed */}
      {isCompleted && (
        <div className="mt-4 p-3 bg-green-900/30 border border-green-700 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">✓</span>
            </div>
            <span className="text-green-400 font-medium">
              Roasting complete! Redirecting to results...
            </span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="default" onClick={() => setIsOpen(true)}>
          Enter Roast Chamber
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 text-zinc-100 border border-zinc-700 rounded-xl shadow-2xl ">
        {step !== null ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                {isCompleted ? "Roast Complete!" : "Roasting in Progress..."}
              </DialogTitle>
              <DialogDescription className="text-zinc-400">
                {isCompleted 
                  ? "Your roast is ready. Taking you to the results..."
                  : "Please wait while we judge your fate."
                }
              </DialogDescription>
            </DialogHeader>
            <Stepper />
            {submitError && (
              <div className="text-red-400 text-sm mt-4">{submitError}</div>
            )}
          </>
        ) : (
          <form onSubmit={handleSubmit(onSubmit, handleFormErrors)} className={"space-y-6"}>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">Enter the Roast Chamber</DialogTitle>
              <DialogDescription className="text-zinc-400">
                Upload your resume and GitHub. We'll tell you why recruiters keep ghosting you.
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
            {submitError && (
              <div className="text-red-400 text-sm mt-4">{submitError}</div>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;