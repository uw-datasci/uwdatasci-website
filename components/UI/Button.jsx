import Image from 'next/image';

export default function Button({
  bg,
  border,
  px,
  py,
  font,
  classes,
  icon,
  iconAlt,
  iconClasses,
  onClick,
  children,
}) {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer ${bg} ${border} ${px} ${py} ${classes}`}
    >
      <p className={font}>{children}</p>
      {icon ? <Image src={icon} alt={iconAlt} className={iconClasses} /> : null}
    </div>
  );
}
