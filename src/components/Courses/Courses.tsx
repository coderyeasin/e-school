import { FaRegCalendarAlt } from "react-icons/fa";
import type { CourseType } from "../../../types/type";
import { GoPeople } from "react-icons/go";

const keyCourses: CourseType[] = [
  {
    id: "1",
    calIcon: <FaRegCalendarAlt />,
    userIcon: <GoPeople />,
    thumbnail: "/src/assets/Images/Morder pyschology.png",
    title: "Modern Psychology",
    description: "This is a brief description of Course 1.",
    btnText: "Enroll Now",
  },
  {
    id: "1",
    calIcon: <FaRegCalendarAlt />,
    userIcon: <GoPeople />,
    thumbnail: "/src/assets/Images/Morder psyc.png",
    title: "Modern Psychology",
    description: "This is a brief description of Course 1.",
    btnText: "Enroll Now",
  },
  {
    id: "1",
    calIcon: <FaRegCalendarAlt />,
    userIcon: <GoPeople />,
    thumbnail: "/src/assets/Images/Morder pychons.png",
    title: "Modern Psychology",
    description: "This is a brief description of Course 1.",
    btnText: "Enroll Now",
  },
];

const Courses = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-[36px] font-bold text-center text-FooterColor py-20">
        Online Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keyCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-[18px] shadow-md p-4"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-[24px] font-medium text-[#413960] mb-2">
              {course.title}
            </h3>
            <p className="text-[#585859] text-base mb-4">
              {course.description}
            </p>

            <button className="cursor-pointer text-white bg-PrimaryColor py-2 px-6 rounded-[33px]">
              {course.btnText}
            </button>
            <div className="flex justify-between items-center gap-4 my-4">
              <span className="flex items-center gap-2 text-sm text-gray-500">
                {course.calIcon} Start 20 April, 2025
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                {course.userIcon} 60 seats
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
