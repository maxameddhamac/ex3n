"use server";

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitEmail(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!email) {
    return { message: "Please enter your email address.", success: false };
  }

  console.log("Submitted email:", email);
  return { message: "Thanks for submitting!", success: true };
}

export async function submitPassword(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const password = String(formData.get("password") ?? "");

  if (password.length < 6) {
    return {
      message: "Password must be at least 6 characters long.",
      success: false,
    };
  }

  return { message: "Password submitted successfully.", success: true };
}

export async function submitName(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();

  if (!firstName || !lastName) {
    return { message: "Please enter both your first and last name.", success: false };
  }

  return {
    message: `Hello, ${firstName} ${lastName}!`,
    success: true,
  };
}
