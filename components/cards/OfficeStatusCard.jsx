import { YES } from "../../constants/data";

export default function OfficeStatusCard({ officeStatus, classes }) {
  return (
    <div
      className={`relative rounded-full border border-lightPurple py-2.5 px-4 dark:border-purple lg:flex lg:items-center lg:gap-2 ${classes}`}
    >
      <p className="text-center text-black dark:text-white">
        Office Status:{" "}
        <span className="font-semibold">
          {officeStatus === YES ? "Open" : "Closed"}
        </span>
      </p>
      <div
        className={`absolute top-1/2 right-5 h-2 w-2 -translate-y-1/2 rounded-full lg:relative lg:right-0 lg:top-0 lg:translate-y-0 ${
          officeStatus === YES ? "bg-darkGreen dark:bg-lightGreen" : "bg-red"
        }`}
      />
    </div>
  );
}
