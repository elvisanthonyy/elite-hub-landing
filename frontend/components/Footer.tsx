import Icon from "./Icon";
import Link from "next/link";

export interface SocialLink {
  id: number;
  label: string;
  iconUrl: string;
  link: string;
}

interface ChildProps {
  socialLinks: SocialLink[];
}

const Footer = ({ socialLinks }: ChildProps) => {
  return (
    <footer className="bg-[#262626] flex flex-col justify-between mt-20 w-full p-8 h-[300px]">
      <h1 className="text-[20px] font-semibold text-[#CFCFCF]">Elite Hub</h1>
      <section className="flex flex-col gap-4">
        <h2 className="text-[16px] text-[#7A7A7A]">Stay connected</h2>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <Link
              className="bg-[#4D4D4D] h-[36px] aspect-square flex items-center justify-center rounded-[16px]"
              key={link.id.toString()}
              href={link.link}
            >
              <Icon size={20} iconUrl={link.iconUrl} label="label" />
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
