import {
  GraduationCap,
  BookOpen,
  School,
  MonitorCheck,
} from "lucide-react";

export const programs = [
  {
    id: 1,
    title: "Post UTME",
    description:
      "Prepare for university screening with structured lessons, mock tests and CBT practice.",
    icon: GraduationCap,
    buttonText: "Learn More",
    link: "/programs/post-utme",
    badge: "Popular",
    color: "blue",
  },
  {
    id: 2,
    title: "JUPEB",
    description:
      "Prepare for JUPEB examinations and secure Direct Entry admission into 200 Level.",
    icon: BookOpen,
    buttonText: "Learn More",
    link: "/programs/jupeb",
    badge: "Top Choice",
    color: "green",
  },
  {
    id: 3,
    title: "Pre-Degree",
    description:
      "Build a solid academic foundation before beginning your university programme.",
    icon: School,
    buttonText: "Learn More",
    link: "/programs/pre-degree",
    badge: "Recommended",
    color: "orange",
  },
  {
    id: 4,
    title: "JAMB CBT",
    description:
      "Practice thousands of CBT questions with explanations and timed mock examinations.",
    icon: MonitorCheck,
    buttonText: "Start Practice",
    link: "/cbt",
    badge: "Free",
    color: "purple",
  },
];