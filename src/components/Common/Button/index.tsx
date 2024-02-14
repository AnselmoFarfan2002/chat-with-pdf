export default function Button({
  children,
  onClick,
  fullwidth = false,
  disabled = false,
  className = "",
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  fullwidth?: boolean;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      className={`px-3 py-2 shadow-md font-extrabold rounded-md bg-purple-800 ${
        fullwidth && "w-full"
      } ${disabled ? "opacity-50" : "hover:bg-purple-700"} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
