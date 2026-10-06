import Image from "next/image";

interface ChildProps {
  label: string;
  iconUrl: string;
  size: number;
}

const Icon = ({ label, iconUrl, size }: ChildProps) => {
  return (
    <div>
      <Image src={iconUrl} alt={label} height={size} width={size} />
    </div>
  );
};

export default Icon;
