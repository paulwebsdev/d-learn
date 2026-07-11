import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthInput from "../../components/auth/AuthInput";
import Button from "../../components/ui/Button";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log({ email });

    alert("Password reset link sent! 📧");

    setEmail("");
    setErrors({});
  };

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Forgot Password?"
          subtitle="Enter your email and we'll send you a password reset link."
        />

        <form onSubmit={handleSubmit}>
          <AuthInput
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            error={errors.email}
          />

          <Button
            type="submit"
            className="w-full"
          >
            Send Reset Link
          </Button>
        </form>

        <p className="mt-6 text-center">
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            ← Back to Login
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}

export default ForgotPassword;