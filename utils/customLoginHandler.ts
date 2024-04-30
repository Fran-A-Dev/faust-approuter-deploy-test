// utils/customLoginHandler.ts
import { onLogin } from "@faustwp/experimental-app-router";

export async function customLogin(
  formData: FormData
): Promise<{ error?: string; message?: string }> {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_URL) {
    console.error(
      "WordPress URL is not set. Please configure environment variables."
    );
    return { error: "Configuration error: WordPress URL is not set." };
  }

  const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/api/faust/token`;
  console.log("Using WordPress URL:", apiUrl);

  // Your existing logic here
  const result = await onLogin(formData);
  return result;
}
