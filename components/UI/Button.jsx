export default function Button({
  bg,
  border,
  px,
  py,
  font,
  classes,
  onClick,
  children,
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer ${bg} ${border} ${px} ${py} ${classes}`}
    >
      <p className={font}>{children}</p>
    </div>
  );
}
