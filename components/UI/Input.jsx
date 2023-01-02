export default function TextInput({
  inputType,
  id,
  name,
  type,
  onChange,
  onBlur,
  onFocus,
  value,
  placeholder,
  classes,
}) {
  const inputClasses = `w-full rounded-sm border border-purple bg-white py-3 px-4 leading-relaxed resize-none text-black outline-none dark:bg-black dark:text-lightPurple md:rounded-md ${classes}`;

  return inputType === 'textinput' ? (
    <input
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      placeholder={placeholder}
      className={inputClasses}
    />
  ) : (
    <textarea
      id={id}
      name={name}
      rows={8}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      placeholder={placeholder}
      className={inputClasses}
    />
  );
}
