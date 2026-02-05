const HeroSection = () => {
  return (
    <section className="flex justify-between items-center">
      <div className="space-y-5">
        <p className="text-base text-[#FD511A]">Are you ready to Learn?</p>
        <h1 className="font-bold text-[48px] leading-17.5">
          Learn With fun <br /> on
          <span className="text-PrimaryColor"> any schedule</span>
        </h1>
        <p className="text-base leading-9 text-[#6C6B6B] font-light">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Varius
          blandit facilisis quam netus.
        </p>
        <button className="cursor-pointer text-white bg-PrimaryColor py-3 px-9 rounded-[33px]">
          Get Started
        </button>
      </div>

      <img src="/src/assets/Images/Illustration.png" alt="Hero Image" />
    </section>
  );
};

export default HeroSection;
