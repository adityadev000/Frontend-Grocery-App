import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  rightText?: string;
}

const PrimaryButton = ({
  children,
  onClick,
  rightText,
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-primary text-white py-4 rounded-2xl flex items-center justify-between px-6 text-lg font-semibold shadow-lg hover:opacity-90 transition"
    >
      <span>{children}</span>

      {rightText && (
        <span className="text-sm opacity-90">
          {rightText} →
        </span>
      )}
    </button>
  );
};

export default PrimaryButton;
