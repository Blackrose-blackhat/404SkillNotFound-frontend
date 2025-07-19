import { z } from "zod";

export const formSchema = z.object({
  resume: z
    .custom<File>((file) => file instanceof File, {
      message: "You forgot to upload your resume? Bold move.",
    })
    .refine(
      (file) => file && ["application/pdf", "text/plain"].includes(file.type),
      {
        message:
          "Nice try. Only PDFs or TXT files, not whatever that was.",
      }
    )
    .refine((file) => file && file.size <= 5 * 1024 * 1024, {
      message: "5MB max. We’re judging your resume, not your life choices.",
    }),
  github: z
    .string()
    .min(1, "A GitHub username is kind of essential. Try again.")
    .regex(/^[a-zA-Z0-9-]{1,39}$/, "That’s not a GitHub username, that’s gibberish."),
  roastMode: z.boolean().optional(),
});
