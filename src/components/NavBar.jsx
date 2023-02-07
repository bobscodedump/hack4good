import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

function NavBar({ About, Skills, Portfolio, Experience, Certificates }) {
  const [isOpen, setOpen] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [skillsHover, setSkillsHover] = useState(false);
  const [projectsHover, setProjectsHover] = useState(false);
  const [experienceHover, setExperienceHover] = useState(false);
  const [certificationsHover, setCertificationsHover] = useState(false);

  return (
    <>
      <div className=" mt-10 md:mx-5 flex flex-row justify-between">
        <span className="ml-2 md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            className="cursor-pointer"
          />
        </span>
        <ul className="mx-10 text-gray-500 flex flex-row items-baseline justify-evenly w-96 hidden md:flex">
          <Link
            className={
              aboutHover ? "underline cursor-pointer" : "cursor-pointer"
            }
            onMouseEnter={() => setAboutHover(true)}
            onMouseLeave={() => setAboutHover(false)}
            onClick={() => scrollToSection(About)}
          >
            About
          </Link>
          <Link
            className={
              skillsHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setSkillsHover(true)}
            onMouseLeave={() => setSkillsHover(false)}
            onClick={() => scrollToSection(Skills)}
          >
            Courses
          </Link>
          <Link
            className={
              projectsHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setProjectsHover(true)}
            onMouseLeave={() => setProjectsHover(false)}
            onClick={() => scrollToSection(Portfolio)}
          >
            Resumes
          </Link>
          <Link
            className={
              experienceHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setExperienceHover(true)}
            onMouseLeave={() => setExperienceHover(false)}
            onClick={() => scrollToSection(Experience)}
          >
            Profile
          </Link>
        </ul>
      </div>
      {isOpen && (
        <ul className="ml-4 flex flex-col md:invisible text-gray-500">
          <Link
            className={
              aboutHover ? "underline cursor-pointer" : "cursor-pointer"
            }
            onMouseEnter={() => setAboutHover(true)}
            onMouseLeave={() => setAboutHover(false)}
          >
            About
          </Link>
          <Link
            className={
              skillsHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setSkillsHover(true)}
            onMouseLeave={() => setSkillsHover(false)}
          >
            Courses
          </Link>
          <Link
            className={
              projectsHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setProjectsHover(true)}
            onMouseLeave={() => setProjectsHover(false)}
          >
            Resume
          </Link>
          <Link
            className={
              experienceHover
                ? "underline mt-3 cursor-pointer"
                : "mt-3 cursor-pointer"
            }
            onMouseEnter={() => setExperienceHover(true)}
            onMouseLeave={() => setExperienceHover(false)}
          >
            Profile
          </Link>
        </ul>
      )}
    </>
  );
}

export default NavBar;
