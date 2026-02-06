const links = [
  {
    name: "Course",
    subLinks: [
      "Graphic Design",
      "Web Design",
      "Business",
      "Marketing",
      "Engineering",
    ],
  },
  {
    name: "Company",
    subLinks: ["About Us", "Careers", "Blog", "Contact Us"],
  },
  {
    name: "Terms",
    subLinks: ["Help Center", "Terms of Service", "Privacy Policy"],
  },
];
const Footer = () => {
  return (
    <section className="w-full bg-FooterColor">
      <div className="max-w-330 mx-auto py-14 flex flex-col gap-10 md:flex-row md:justify-between md:items-center md:gap-40">
        <p className="text-white text-center md:text-left py-10 md:py-20">
          Millions of people of all ages and from around{" "}
          <br className="hidden md:block" /> the world are improving their lives
          with us
        </p>
        <div>
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-40">
            {links.map((link) => (
              <div key={link.name}>
                <h3 className="text-white text-lg font-bold mb-4">
                  {link.name}
                </h3>
                <ul className="space-y-2">
                  {link.subLinks.map((subLink) => (
                    <li
                      key={subLink}
                      className="text-white text-sm cursor-pointer"
                    >
                      {subLink}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center text-white mt-10">
        <p>&copy; 2026 E-School. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
