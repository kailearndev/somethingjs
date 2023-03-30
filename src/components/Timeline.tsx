import React from "react";
import { Calendar } from "react-feather";
interface TimelineProps {
  title: string;
  dateTime: string;
  content: string;
  company?: string;
}
const Timeline: React.FC<TimelineProps> = (props) => {
  const { dateTime, title, content, company } = props;
  return (
    <div className=" rounded-xl p-4 border mb-3">
      <ol className="relative">
        <li className="mb-10 ml-4 ">
          <div className="absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white uppercase">
            {title}
          </h3>
          <p className="text-blue-gray-400">{company}</p>

          <div className="flex text-sm text-gray-800 mt-1">
            {dateTime}
            {/* <Calendar></Calendar> */}
          </div>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 mt-1">
            {content}
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
