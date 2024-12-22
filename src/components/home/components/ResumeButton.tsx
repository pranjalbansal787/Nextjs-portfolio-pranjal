import LocalConfig from "@/constants/config";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[12rem]"
      href="https://drive.google.com/file/d/19uMu7e7SCh-THViNf5ZXUKQRk7iXjb3S/view?usp=sharing"
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
