// src/components/Skeleton.jsx

const Skeleton = ({
  className = "",
  count = 1,
  circle = false,
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`
            animate-pulse
            bg-slate-200
            dark:bg-slate-700
            ${
              circle
                ? "rounded-full"
                : "rounded-xl"
            }
            ${className}
          `}
        />
      ))}
    </>
  );
};

export default Skeleton;