const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse gap-8 items-center md:flex-row md:justify-between md:gap-0">
      <div className="space-y-5 w-full md:w-1/2 flex flex-col items-center md:items-start">
        <p className="text-base text-[#FD511A]">Are you ready to Learn?</p>
        <h1 className="font-bold text-3xl md:text-[48px] leading-tight md:leading-17.5 text-center md:text-left">
          Learn With fun <br /> on
          <span className="text-PrimaryColor"> any schedule</span>
        </h1>
        <p className="text-base md:text-base leading-7 md:leading-9 text-[#6C6B6B] font-light text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur{" "}
          <br className="hidden md:block" /> adipiscing elit. Varius blandit
          facilisis quam netus.
        </p>
        <button className="cursor-pointer text-white bg-PrimaryColor py-3 px-7 md:px-9 rounded-[33px] w-fit mx-auto md:mx-0">
          Get Started
        </button>
      </div>

      <img
        src="/src/assets/Images/Illustration.png"
        alt="Hero Image"
        className="w-60 md:w-auto"
      />
    </section>
  );
};

export default HeroSection;
