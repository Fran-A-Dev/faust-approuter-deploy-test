// login/actions.ts
"use server";

// login/actions.ts
import { customLogin } from "../../utils/customLoginHandler";
import { redirect } from "next/navigation";
export async function loginAction(prevData: any, formData: FormData) {
  const res = await customLogin(formData);

  if (res.error) {
    console.error("Login Error:", res.error);
    return res;
  }

  redirect("/my-account");
}
