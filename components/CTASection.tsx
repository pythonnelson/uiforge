import Link from "next/link";
import React from "react";

const CTASection = () => {
  return (
    <div className="flex flex-col max-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center">
        Craft Your Perfect{" "}
        <span className="text-[#1d7572] underline">UI with Precision</span> and
        Ease
      </h2>
      <p className="text-center text-[15px] w-[1000px] max-sm:w-full text-slate-500">
        Welcome to UI Forge, your ultimate solution for building and managing UI
        components. Whether you&apos;re a developer looking to streamline your
        workflow or a designer aiming for pixel-perfect precision, UI Forge
        provides the tools you need.
        <br />
        UI Forge is a powerful tool that empowers developers and designers to
        create, customize, and integrate UI components effortlessly. Forge your
        perfect interface with our intuitive builder and seamless integration
        capabilities.
      </p>

      <button
        type="button"
        className="block text-sm border border-[#1d7572] font-bold text-[#1d7572] px-9 py-3 rounded-md hover:bg-[#1d7572] hover:text-white transition-all duration-500"
      >
        Let&apos;s Get You Started
      </button>
    </div>
  );
};

export default CTASection;
