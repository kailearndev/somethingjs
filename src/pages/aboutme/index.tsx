import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Tooltip,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Facebook } from "react-feather";
import avatar from "../../assets/avatar.jpg";
import Timeline from "../../components/Timeline";
import { fakeCV } from "../../ultils/fakeData";
import Table from "../customer/Table";
import Modals from "../../components/Modal";
import Example from "../../components/Modal";
import Modal from "../../components/Modal";

const fakeStudies = [
  {
    title: "TOKYO SAKURA ACADEMY",
    dateTime: "2018 - 2020",
    content: "JAPANESE STUDY",
  },
  {
    title: "MEKONG UNIVERSITY",
    dateTime: "2018 - 2020",
    content: "SOFTWARE ENGINEER",
  },
];
const AboutMe = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="">
      <div className="flex ">
        <div className="basis-1/4">
          <Card className="w-96  hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-crosshair  duration-300">
            <CardHeader floated={false} className="h-min">
              <img src={avatar} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 uppercase"
              >
                Nguyen vu luan
              </Typography>
              <Typography color="blue" className="font-medium" textGradient>
                /Web Developer/
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="basis-3/4 ml-2 overflow-y-scroll h-[476px] rounded-sm ">
          <Timeline
            title={"Web Developer"}
            company="
                SAI GON COMMERCIAL BANK (SCB BANK)"
            dateTime={"12/12/2020 - 03/03/2021"}
            content={fakeCV[0].content}
          />
          <Timeline
            title={"Web developer"}
            dateTime={"12/12/2021 - 03/03/2023"}
            content={fakeCV[1].content}
          />
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/3 mt-4">
          {fakeStudies.map((item , idx) => (
            <Timeline key= {idx}
              title={item.title}
              dateTime={item.dateTime}
              content={item.content}
            />
          ))}
        </div>
        <div className="basis-3/4 mt-4 border rounded-lg ml-4 flex justify-center p-4">
          <div>
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Personal{" "}
                  <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="mr-2">2</span>
                  Account{" "}
                  <span className="hidden sm:inline-flex sm:ml-2">Info</span>
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">3</span>
                Confirmation
              </li>
            </ol>
          </div>

          <div>
            <Modal
              open={open}
              handler={handleOpen}
              children={<Table data={[]} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
