"use client";
import Logo from "@/components/ui/pages/Logo";
import Findinfo from "@/components/ui/pages/login/Findinfo";
import LoginForm from "@/components/ui/pages/login/LoginForm";
import SnsLoginForm from "@/components/ui/pages/login/SnsLoginForm";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

// const { data: session } = useSession();

function Loginpage() {
  return (
    <div className="mx-[30px] mt-[30px]">
      <Logo />
      <LoginForm />
      <Findinfo />
      <SnsLoginForm />
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}

export default Loginpage;
