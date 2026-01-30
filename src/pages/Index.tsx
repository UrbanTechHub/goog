import { useState } from "react";
import GoogleLogo from "@/components/GoogleLogo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, User } from "lucide-react";

const Index = () => {
  const [step, setStep] = useState<"email" | "password">("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleEmailNext = () => {
    if (email.trim()) {
      setStep("password");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter") {
      action();
    }
  };

  // Email step
  if (step === "email") {
    return (
      <div className="flex min-h-screen flex-col bg-background px-6 py-10">
        <div className="mx-auto w-full max-w-[400px] animate-fade-in">
          {/* Logo */}
          <div className="mb-4">
            <GoogleLogo className="h-12 w-12" />
          </div>

          {/* Heading */}
          <h1 className="mb-1 text-[28px] font-normal text-foreground">Sign in</h1>
          <p className="mb-8 text-base text-foreground">to continue to Gmail</p>

          {/* Email Input with floating label */}
          <div className="relative mb-3">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              onKeyDown={(e) => handleKeyDown(e, handleEmailNext)}
              className={`peer h-14 w-full rounded border bg-transparent px-4 pt-4 text-base outline-none transition-colors ${
                emailFocused
                  ? "border-primary border-2"
                  : "border-border"
              }`}
            />
            <label
              className={`pointer-events-none absolute left-4 transition-all ${
                email || emailFocused
                  ? "-top-2.5 bg-background px-1 text-xs"
                  : "top-4 text-base"
              } ${emailFocused ? "text-primary" : "text-muted-foreground"}`}
            >
              Email or phone
            </label>
          </div>

          {/* Forgot email link */}
          <a
            href="#"
            className="inline-block text-sm font-medium text-link hover:underline"
          >
            Forgot email?
          </a>

          {/* Info text */}
          <p className="mt-8 text-sm leading-5 text-muted-foreground">
            Not your computer? Use Guest mode to sign in privately.{" "}
            <a href="#" className="font-medium text-link hover:underline">
              Learn more about using Guest mode
            </a>
          </p>

          {/* Bottom actions */}
          <div className="mt-10 flex items-center justify-between">
            <a
              href="#"
              className="text-sm font-medium text-link hover:underline"
            >
              Create account
            </a>
            <Button 
              onClick={handleEmailNext}
              className="h-9 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 hover:shadow-md"
            >
              Next
            </Button>
          </div>
        </div>

        {/* Language selector */}
        <div className="fixed bottom-6 left-6">
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            English (United Kingdom)
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  // Password step
  return (
    <div className="flex min-h-screen flex-col bg-background px-6 py-10">
      <div className="mx-auto w-full max-w-[400px] animate-fade-in">
        {/* Logo */}
        <div className="mb-4">
          <GoogleLogo className="h-12 w-12" />
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-[28px] font-normal text-foreground">Welcome</h1>

        {/* Email chip */}
        <button 
          onClick={() => setStep("email")}
          className="mb-6 flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
        >
          <User className="h-5 w-5 text-muted-foreground" />
          <span>{email}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Instruction text */}
        <p className="mb-6 text-base text-foreground">
          To continue, first verify that it's you
        </p>

        {/* Password Input with floating label */}
        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            onKeyDown={(e) => handleKeyDown(e, () => {})}
            className={`peer h-14 w-full rounded border bg-transparent px-4 pt-4 text-base outline-none transition-colors ${
              passwordFocused
                ? "border-primary border-2"
                : "border-border"
            }`}
          />
          <label
            className={`pointer-events-none absolute left-4 transition-all ${
              password || passwordFocused
                ? "-top-2.5 bg-background px-1 text-xs"
                : "top-4 text-base"
            } ${passwordFocused ? "text-primary" : "text-muted-foreground"}`}
          >
            Enter your password
          </label>
        </div>

        {/* Show password checkbox */}
        <div className="flex items-center gap-3">
          <Checkbox
            id="showPassword"
            checked={showPassword}
            onCheckedChange={(checked) => setShowPassword(checked === true)}
            className="h-[18px] w-[18px] rounded-sm border-2 border-muted-foreground data-[state=checked]:border-primary data-[state=checked]:bg-primary"
          />
          <label
            htmlFor="showPassword"
            className="cursor-pointer text-sm text-foreground"
          >
            Show password
          </label>
        </div>

        {/* Bottom actions */}
        <div className="mt-10 flex items-center justify-between">
          <a
            href="#"
            className="text-sm font-medium text-link hover:underline"
          >
            Forgot password?
          </a>
          <Button className="h-9 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 hover:shadow-md">
            Next
          </Button>
        </div>
      </div>

      {/* Language selector */}
      <div className="fixed bottom-6 left-6">
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          English (United Kingdom)
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Index;
