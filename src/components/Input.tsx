import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    dark?: Boolean;
    width?: string | number;
    label?: string;
    icon?: Boolean;
    placeholder?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    type?: "password" | "text" 
    }
const Input: FC<InputProps> = (props) => {
    const { dark = false, width = '', value, label, icon = false, placeholder, onChange, type = "text" } = props;
    return (
      <div>
        <div className="relative">
          {!icon ? (
            <>
              <div className="relative mt-5">
                <input
                  type={type}
                  
                  className={`block px-2.5 pb-2.5 pt-4 ${
                    width ? width : "w-96"
                  } text-md text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-600 peer`}
                  onChange={onChange}
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] rounded-full bg-white px-2 peer-focus:px-2 peer-focus:text-grey-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  {value}
                </label>
              </div>
            </>
          ) : (
            <>
              <div className="absolute inset-y-0 left-0 flex items-center mt-5 pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type={type}
                className={`block px-2.5 pb-2.5 pt-4 ${
                  width ? width : "w-96"
                }
                  text-md text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                onChange={onChange}
              />
            </>
          )}
        </div>
      </div>
    );
};

export default Input;
