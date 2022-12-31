export default function GradientBorder({
  gradient,
  borderRadius,
  onClick,
  classes,
  children,
}) {
  return (
    <div
      onClick={onClick}
      className={`p-0.25 ${gradient} ${borderRadius} ${classes}`}
    >
      {children}
    </div>
  );
}
