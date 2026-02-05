import React from "react";

const Testimonial = () => {
  return (
    <section className="w-full h-auto ">
      <h2 className="text-[36px] font-bold text-center text-FooterColor py-20">
        Testimonial
      </h2>
      <div className="flex items-center justify-center gap-4 mx-auto w-full max-w-170">
        <img
          src="/src/assets/Images/Man.png"
          alt="Testimonial"
          className="w-20 h-20"
        />
        <p className="text-base text-black">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
