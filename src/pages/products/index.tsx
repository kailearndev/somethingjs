import React, { ChangeEvent, useEffect, useId, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Toast from '../../components/Toast';
import useDebounce from '../../hooks/useDebounce';
import { customersDataFake } from '../../ultils/fakeData';
import { User } from './dto/User';

const Products = () => {
    const [user, setUser] = useState('')
    const [toast, setToast] = useState(Boolean)
    const debouncedValue = useDebounce<string>(user, 500)
    const [searchInput, setSearchInput] = useState<User>({} as User);
    const initialState = {} as User

    const handleSearch = () => {
        let _a = customersDataFake.find((item) => item.lastName === user)
        if(_a){
            setSearchInput(_a)
        }
        else setToast(false)
        
    }
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setUser(event.target.value)
        
    }
    const handleCloseToast = () => {
        setToast(true)
       
    }
    useEffect( ()=> {
      if(user === "") {
        setSearchInput(initialState);
      }
      setToast(true);
      
    },[user])
    return (
      <div>
        <div className="flex justify-center">
          <label className="sr-only">Search</label>
          <div className="relative w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              onChange={handleInput}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
              placeholder="Search"
              required
            />
          </div>
          <button
            onClick={handleSearch}
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
        <div className=" flex justify-center ">
          <div className=" w-[50%]  rounded-lg p-5">
            <div className="border-2 border-dotted  rounded-sm shadow-lg ">
              {/* <div className="flex justify-center h-[50px] mt-5">
                <div className=" rounded-xs ">
                  <img
                    loading="lazy"
                  
                    alt="No Avatar"
                    className="w-full h-full rounded-full bg-stone-600"
                  />
                </div>
              </div> */}

              <div className="grid grid-cols-2 gap-2 mt-5 p-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    First Name
                  </label>
                  <input
                    disabled
                    value={`${
                      searchInput.firstName ? searchInput.firstName : "-"
                    }`}
                    className=" block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Last Name
                  </label>
                  <input
                    disabled
                    value={searchInput.lastName ?? "-"}
                    type="text"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-col">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Age
                  </label>
                  <input
                    disabled
                    value={searchInput.age ?? "-"}
                    type="text"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-col">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Job
                  </label>
                  <input
                    disabled
                    value={searchInput.job ?? "-"}
                    type="text"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-col">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Address
                  </label>
                  <input
                    disabled
                    value={searchInput.address ?? "-"}
                    type="text"
                    className="block w-96 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-1 right-2 animate-bounce ease-in-out'>
            {toast === false ? (
              <Toast
                content="Not Found User"
                kindof="danger"
                onClose={handleCloseToast}
              />
            ) : null}
          </div>
        </div>
       
      </div>
    );
}

export default Products;