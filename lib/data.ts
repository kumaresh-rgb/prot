import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Dalle from "@/public/Dalle.png";
import Documentation from "@/public/Documentation.png";
import SalesDashboard from "@/public/SalesDashboard.png";
import SalesGraphDashboard from "@/public/SalesGraphDahboard.png";
import CustomerDashboard from "@/public/CustomerDashboard.png";
import Barcode from "@/public/Barcode.png";
import ProfileCard from "@/public/ProfileCard.png";
import Unsplash2 from "@/public/Unsplash2.png";
import Protfolio from "@/public/Protfolio.png";

import { MdWorkHistory } from "react-icons/md";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer Internship",
    location: "Chennai, Tamil Nadu",
    description:
    "I am currently in my second year of studies. I swiftly secured a 6-month internship as a front-end developer at Net Axis Pvt. Ltd.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Recently Completed BE CSE ",
    location: "Kanchipuram, Tamil Nadu",
    description:
    "I completed my academic journey in 2023, having successfully finished all eight semesters. While I have fulfilled the requirements for graduation,",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Software Developer Internship (Remote)",
    location: "Hydrabad, Telangana",
    description:
    "I'm currently working as a Software Developer during my internship at VYZA Solution Pvt Ltd. My skill stack includes React, Python, and databases. I'm open to full-time opportunities.",
    icon: React.createElement(MdWorkHistory),
    date: "2023 - Present",
  },
  {
    title: "Front-End Developer Internship (Remote)",
    location: "New Delhi",
    description:
    "I'm now a Front-End developer as well as a Team Lead working as an intern at Senchola University. My stack includes HTML, CSS, JavaScript, and React. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Dall-E Clone",
    description:
      "I worked as a full-stack developer on this  Project for 3 Weeks. Users can Share Publicly Generated Ai Images.",
    tags: ["React", "Open AI", "MongoDB", "Node js","Tailwind Css"],
    imageUrl: Dalle,
  },
  {
    title: "Sales-Graph Dashboard UI",
    description:
    "I've carefully designed a sales graph dashboard with modern UI principles, serving as a potent tool for sales analytics.",
    tags: ["React", "Chart js", "Framer Motion" , "MUI",],
    imageUrl: SalesDashboard,
  },
  {
    title: "Documentation Page UI",
    description:
      
"Crafted a public web app with modern UI using Tailwind CSS for documentation frontend, providing a contemporary user experience.",
    tags: ["React", "Typescript", "Chakra UI", "Framer"],
    imageUrl: Documentation,
  },
  {
    title: "Sales-Analytics DashBoard UI",
    description:
      "Crafted a Sales-Analytics Dashboard UI, focused on calculating sales percentages seamlessly.",
    tags: ["React",  "MUI","Apex Chart"],
    imageUrl: SalesGraphDashboard  ,
  },
  {
    title: "Cutomer-Order-DashBoard UI",
    description:
    "Designed a Customer-Order Dashboard UI, emphasizing seamless tracking of order statuses.",
    tags: ["Html","Css","Javascript"],
    imageUrl: CustomerDashboard ,
  },
  {
    title: "Employee Attendence With Barcode",
    description:
    "Implementing Employee Attendance system using OpenCV library and Barcode technology.",
    tags: ["Python","Open CV"],
    imageUrl: Barcode ,
  },
   {
  title: "My Protfolio",
  description:
    "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  tags: ["React", "Next.js",  "Tailwind", "Framer-Motion"],
  imageUrl: Protfolio ,
},
  {
  title: "Fake Profile-Card Generated UI",
  description:  
"Developed a Fake Profile Card Generator UI utilizing Faker.js for developmental purposes.",
  tags: ["React","Semantic UI", "Faker js"],
  imageUrl: ProfileCard ,
},
{
title: "Unsplash Clone",
description:
"Created an Unsplash clone, replicating the popular platform's functionality for image sharing.",
tags: ["React","MUI","Semantic UI","Unsplash API"],
imageUrl: Unsplash2 ,
},
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "C++",
  "Framer Motion",
] as const;