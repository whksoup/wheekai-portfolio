import React from "react";

export default function HeaderText({ children, mt = "mt-16", mb = "mb-48" }) {
  return (
    <section className={`flex justify-center px-4 md:px-8 ${mt} ${mb}`}>
      <div className="max-w-screen-xl w-full">
        <h1 className="text-6xl font-light text-left text-Medium leading-light">
          {children}
        </h1>
      </div>
    </section>
  );
}
