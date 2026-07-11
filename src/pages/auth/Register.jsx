import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";
import Button from "../../components/ui/Button";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Full Name
    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    // Email
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }

    // Phone
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{11}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 11 digits.";
    }

    // Password
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    // Confirm Password
    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log({
      fullName,
      email,
      phone,
      password,
      confirmPassword,
    });

    alert("Registration Successful! 🎉");

    // Clear the form
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});
  };

  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Create Account"
          subtitle="Join D Learn and start your learning journey."
        />

        <form onSubmit={handleSubmit}>
          <AuthInput
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            error={errors.fullName}
          />

          <AuthInput
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            error={errors.email}
          />

          <AuthInput
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            error={errors.phone}
          />

          <PasswordInput
            label="Password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            error={errors.password}
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            error={errors.confirmPassword}
          />

          <Button
            type="submit"
            className="w-full"
          >
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}

export default Register;