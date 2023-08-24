import Link from "next/link";
import UserAuthForm from "./UserAuthForm";

const SignUp = ({}) => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
        <h1 className="text-2xl font-semibold tracking-tight">
          {" "}
          &#128075; Hello, there
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Geddit account and agree to our
          User Agreement and Privarcy Policy.
        </p>
        {/* Sign in form */}
        <UserAuthForm className="" />
        <p className="px-8 text-center text-sm text-zinc-700">
          Already a User?{" "}
          <Link
            href="/sign-in"
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
