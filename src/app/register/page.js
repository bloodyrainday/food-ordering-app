import React from "react";

import googleIcon from "../../assets/google.png";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>

      <form className="block max-w-xs mx-auto">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 items-center justify-center">
          Login with google
          <Image src={googleIcon} alt={"google-icon"} width={24} height={24} />
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;
