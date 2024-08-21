import { ReactNode } from "react";

type NameValueRowProps = {
  name: string;
  value?: ReactNode;
  valueColor?: string;
};

export const NameValueRow: React.FC<NameValueRowProps> = ({
  name,
  value,
  valueColor = "offwhite",
}) => {
  return (
    <div className="flex flex-row w-full items-baseline font-poppins text-lg">
      <div className="grow shrink-0 text-offwhite">{name}</div>
      <div className={`text-lg shrink text-white text-right`}>
        {value}
      </div>
    </div>
  );
};
