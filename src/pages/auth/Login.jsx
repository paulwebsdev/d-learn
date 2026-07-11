
import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";
import Button from "../../components/ui/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = {};

  // Email validation
  if (!email.trim()) {
    newErrors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = "Please enter a valid email.";
  }

  // Password validation
  if (!password) {
    newErrors.password = "Password is required.";
  } else if (password.length < 8) {
    newErrors.password = "Password must be at least 8 characters.";
  }

  setErrors(newErrors);

console.log(newErrors);

  // Stop if there are errors
  if (Object.keys(newErrors).length > 0) {
    return;
  }

  console.log({
    email,
    password,
    rememberMe,
  });
};

  return (
    <AuthLayout>
      <AuthCard>

        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue your learning journey."
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

          <PasswordInput
  label="Password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  error={errors.password}
/>

          <div className="mb-6 flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-slate-600">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          <Button
  type="submit"
  className="w-full"
>
  Login
</Button>

        </form>

        <p className="mt-6 text-center text-slate-600">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Register
          </Link>

        </p>

      </AuthCard>
    </AuthLayout>
  );
}

export default Login;