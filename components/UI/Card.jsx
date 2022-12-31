export default function Card({ borderRadius, classes, children }) {
  return (
    <div
      className={`white-to-lighter-purple dark:black-to-dark-purple whitespace-normal border border-purple ${borderRadius} ${classes}`}
    >
      {children}
    </div>
  );
}
