// login/actions.ts
"use server";

import { customLogin } from "../../utils/customLoginHandler"; // Adjust the path as necessary
import { redirect } from "next/navigation";

export async function loginAction(prevData: any, formData: FormData) {
  const res = await customLogin(formData);

  if (res.error) {
    console.error("Login Error:", res.error);
    return res; // Handle the error appropriately, possibly returning it to the frontend
  }

  redirect("/my-account"); // Redirect upon successful login
}
