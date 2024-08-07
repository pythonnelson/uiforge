import { features } from "@/constants";
import React from "react";

const Features = () => {
  return (
    <section className="py-12 bg-slate-50 mt-12">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-bold text-center">What to Expect</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full items-center justify-center flex bg-[#bcf1f0]">
                  <Icon className="text-[#1B6A88] text-[32px]" />
                </div>
                <h3 className="text-lg font-semibold text-center mt-6 text-[#1B6A88]">
                  {feature.name}
                </h3>
                <p className="text-slate-600 text-[13px] mt-2 text-center w-[80%]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
