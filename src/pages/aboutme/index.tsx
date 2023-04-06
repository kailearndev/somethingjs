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
          <Card className="w-96 ">
            <CardHeader
              floated={false}
              className="h-min hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-crosshair  duration-300"
            >
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
          {fakeStudies.map((item, idx) => (
            <Timeline
              key={idx}
              title={item.title}
              dateTime={item.dateTime}
              content={item.content}
            />
          ))}
        </div>
        <div className="basis-3/4 mt-4 border rounded-lg ml-4 flex justify-center p-4">
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
