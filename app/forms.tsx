"use client";

import { useActionState } from "react";
import {
  submitEmail,
  submitName,
  submitPassword,
} from "./actions";

const emptyState = {
  message: "",
  success: false,
};

function Feedback({
  message,
  success,
}: {
  message: string;
  success: boolean;
}) {
  if (!message) return null;

  return (
    <p className={success ? "feedback success" : "feedback error"} role="status">
      {message}
    </p>
  );
}

export default function ExerciseForms() {
  const [emailState, emailAction, emailPending] = useActionState(
    submitEmail,
    emptyState,
  );
  const [passwordState, passwordAction, passwordPending] = useActionState(
    submitPassword,
    emptyState,
  );
  const [nameState, nameAction, namePending] = useActionState(
    submitName,
    emptyState,
  );

  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">Practice</p>
        <h1>Form exercises</h1>
        <p className="intro">
          Try each form to see server-side validation and feedback in action.
        </p>
      </header>

      <div className="exercise-list">
        <section className="exercise-card">
          <p className="exercise-number">Exercise 01</p>
          <h2>Basic form</h2>
          <p className="description">
            Submit an email address. It will be logged by the server.
          </p>
          <form action={emailAction}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
            <button type="submit" disabled={emailPending}>
              {emailPending ? "Submitting..." : "Submit email"}
            </button>
            <Feedback {...emailState} />
          </form>
        </section>

        <section className="exercise-card">
          <p className="exercise-number">Exercise 02</p>
          <h2>Required field</h2>
          <p className="description">
            Passwords must contain at least 6 characters.
          </p>
          <form action={passwordAction}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
            />
            <button type="submit" disabled={passwordPending}>
              {passwordPending ? "Checking..." : "Submit password"}
            </button>
            <Feedback {...passwordState} />
          </form>
        </section>

        <section className="exercise-card">
          <p className="exercise-number">Exercise 03</p>
          <h2>Full name greeting</h2>
          <p className="description">
            Enter your name to receive a personalized greeting.
          </p>
          <form action={nameAction}>
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
            />
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
            />
            <button type="submit" disabled={namePending}>
              {namePending ? "Sending..." : "Get greeting"}
            </button>
            <Feedback {...nameState} />
          </form>
        </section>
      </div>
    </main>
  );
}
