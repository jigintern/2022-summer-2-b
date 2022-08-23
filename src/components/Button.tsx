import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonHTMLProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<ButtonHTMLProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "12px 32px",
        height: "40px",
        background: "white",
        border: "1px solid #ABABAB",
        borderRadius: "8px",
        fontSize: "16px",
        color: "#767676",
      }}
    >
      {children}
    </button>
  );
};
