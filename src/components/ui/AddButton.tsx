import { FiPlus } from "react-icons/fi";

interface AddButtonProps {
  onClick?: () => void;
  size?: "sm" | "md";
}

const AddButton = ({ onClick, size = "md" }: AddButtonProps) => {
  const sizeClasses =
    size === "sm"
      ? "w-10 h-10"
      : "w-12 h-12";

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses} bg-primary text-white rounded-2xl flex items-center justify-center shadow-md hover:scale-105 transition`}
    >
      <FiPlus size={20} />
    </button>
  );
};

export default AddButton;
