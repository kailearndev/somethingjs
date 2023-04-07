import React, {
  ButtonHTMLAttributes,
  ChangeEvent,
  FC,
  HtmlHTMLAttributes,
  MouseEventHandler,
  useState,
} from "react";
import { customersDataFake } from "../../ultils/fakeData";
import Modal from "../../components/Modal";
import { Button } from "@material-tailwind/react";

interface TableProps {
  data: [];
}

const Table: FC<TableProps> = (props) => {
  const {} = props;
  const [modalHistory, setmodalHistory] = useState<boolean>(false);
  const [idUser, setidUser] = useState(1);
  const handleShowHistory = (e: number) => {
    setidUser(e);
    setmodalHistory(true);
  };
  // console.log(customersDataFake);

  const handelOnclose = () => setmodalHistory(false);
  return (
    <div>
      <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                First name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {customersDataFake.map((item, idx) => {
            return (
              <tbody key={item.id}>
                <tr className="bg-white border-b hover:bg-gray-50 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {item.firstName + " " + item.lastName}
                  </th>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.address}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  <td className="px-6 py-4">
                    <Button onClick={() => handleShowHistory(idx)}>
                      Show History
                    </Button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <Modal
          open={modalHistory}
          handler={handelOnclose}
        >
          {customersDataFake.map((user) => {
            const idx = user.purchaseHistory.findIndex((_, i) => i === idUser);
            if (idx !== -1) {
              const purchase = user.purchaseHistory[idx];
              return (
                <div key={user.id} className="h-auto ">
                  <ol className=" relative border-l border-black ">
                    <li className=" ml-4 mb-1 border p-3 rounded-2xl border-white-500 ">
                      <div className="absolute w-3 h-3 bg-blue-500 rounded-full  -mt-3.5 -left-1.5 border " />
                      <time className="mb-2 text-lg  ">
                        Product: {purchase.product}
                      </time>
                      <div className="text-sm font-semibold text-gray-900 ">
                        <h1>
                          Date and Time:{" "}
                          <span className="text-md bg-slate-300">
                            {purchase.date}
                          </span>
                        </h1>
                      </div>
                      <p>
                        Price:{" "}
                        <span className="bg-orange-300">{purchase.price}$</span>
                      </p>
                    </li>
                  </ol>
                </div>
              );
            }
            return null;
          })}
        </Modal>
      </div>
    </div>
  );
};

export default Table;
