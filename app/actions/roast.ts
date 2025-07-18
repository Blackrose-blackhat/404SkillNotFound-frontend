"use server"

export async function roastResume(formData: FormData) {
  const res = await fetch("https://four04skillnotfound-backend.onrender.com/api/analyze", {
    method: "POST",
    body: formData,
    
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }
  return await res.json();
}