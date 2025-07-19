"use server";

export async function roastResume(formData: FormData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/analyze`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    console.log(res);
    let errorMessage = "Something went wrong.";

    try {
      const errorData = await res.json();
      errorMessage = errorData?.message || errorData?.error || errorMessage;
    } catch {
      try {
        errorMessage = await res.text();
      } catch {
        // fallback message
      }
    }

    throw new Error(errorMessage);
  }

  return await res.json();
}
