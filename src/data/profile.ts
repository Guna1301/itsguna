import avatar from "@/assets/images/profile.jpg";
import banner from "@/assets/images/image.png";

export const profile = {
  name: "Guna Sai",
  role: "Software Engineer",
  tagline: "Backend • AI • Infrastructure",
  location: "Hyderabad, India",
  bio: "Building developer infrastructure, scalable backend systems, and AI-powered applications. Passionate about distributed systems, context engineering, and creating software that solves real-world problems.",
  about: [
    "I enjoy building software that solves real problems. From backend systems and AI applications to developer tools, I'm always curious about how things work beneath the surface.",
    "I believe good software comes from understanding the fundamentals, paying attention to the details, and constantly improving with every project.",
    "When I'm not building, you'll probably find me learning something new, writing about it, or refining ideas that eventually turn into projects."
    ],
  resume: "/resume.pdf",
  avatar,
  banner,
} as const;