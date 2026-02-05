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
    <section className="w-full h-96 bg-FooterColor">
      <div className="max-w-330 flex justify-between items-center gap-40 mx-auto py-14">
        <p className="text-white text-center py-20">
          Millions of people of all ages and from around <br /> the world are
          improving their lives with us
        </p>
        <div>
          <div className="flex items-start gap-40">
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
