export type Job = {
  id: string;
  image: string;
  name: string;
  position: string;
  postTime: string;
  jobType: string;
  location: string;
  tags: string[];
};

import PhotosnapLogo from "../imgs/Group 9.svg";
import ManageLogo from "../imgs/Group 9(1).svg";
import AccountLogo from "../imgs/Group 9(2).svg";
import MyHomeLogo from "../imgs/Group 9(3).svg";
import LoopStudiosLogo from "../imgs/Group 9(4).svg";
import FaceItLogo from "../imgs/Group 9(5).svg";
import ShortlyLogo from "../imgs/Group 9(6).svg";
import InsureLogo from "../imgs/Group 9(7).svg";
import EyecamLogo from "../imgs/Group 9(8).svg";
import AirFilterLogo from "../imgs/Group 9(9).svg";

export const jobs: Job[] = [
  {
    id: "1",
    image: PhotosnapLogo,
    name: "Photosnap",
    position: "Senior Frontend Developer",
    postTime: "1d ago",
    jobType: "full-time",
    location: "USA only",
    tags: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "2",
    image: ManageLogo,
    name: "Manage",
    position: "Fullstack Developer",
    postTime: "1d ago",
    jobType: "part-time",
    location: "Remote",
    tags: ["Fullstack", "Midweight", "Python", "React"],
  },
  {
    id: "3",
    image: AccountLogo,
    name: "Account",
    position: "Junior Frontend Developer",
    postTime: "2d ago",
    jobType: "part-time",
    location: "USA only",
    tags: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
  },
  {
    id: "4",
    image: MyHomeLogo,
    name: "MyHome",
    position: "Junior Frontend Developer",
    postTime: "5d ago",
    jobType: "contract",
    location: "USA only",
    tags: ["Frontend", "Junior", "CSS", "JavaScript"],
  },
  {
    id: "5",
    image: LoopStudiosLogo,
    name: "Loop Studios",
    position: "Software Engineer",
    postTime: "1w ago",
    jobType: "full-time",
    location: "Worldwide",
    tags: ["Fullstack", "Midweight", "JavaScript", "Sass", "Ruby"],
  },
  {
    id: "6",
    image: FaceItLogo,
    name: "FaceIt",
    position: "Junior Backend Developer",
    postTime: "2w ago",
    jobType: "full-time",
    location: "UK only",
    tags: ["Backend", "Junior", "Ruby", "RoR"],
  },
  {
    id: "7",
    image: ShortlyLogo,
    name: "Shortly",
    position: "Junior Developer",
    postTime: "2w ago",
    jobType: "full-time",
    location: "Worldwide",
    tags: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
  },
  {
    id: "8",
    image: InsureLogo,
    name: "Insure",
    position: "Junior Frontend Developer",
    postTime: "2w ago",
    jobType: "full-time",
    location: "USA only",
    tags: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"],
  },
  {
    id: "9",
    image: EyecamLogo,
    name: "Eyecam Co.",
    position: "Full Stack Engineer",
    postTime: "3w ago",
    jobType: "full-time",
    location: "Worldwide",
    tags: ["Fullstack", "Midweight", "JavaScript", "Django", "Python"],
  },
  {
    id: "10",
    image: AirFilterLogo,
    name: "The Air Filter Company",
    position: "Frontend Developer",
    postTime: "1mo ago",
    jobType: "part-time",
    location: "Worldwide",
    tags: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
  },
];
