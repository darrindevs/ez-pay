/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import Authentication from "../components/Authentication";
import { Link, useLocation } from "react-router-dom";

import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

// components 
import Brand from "./Brand";
import AuthCheck from './AuthCheck';




export default function NavbarOut() {
    // make sure to use this in any component where using location 
  const location = useLocation();

  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
          <div className="relative z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
              <div>
                <Brand />
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <Authentication />
                </Popover.Button>
              </div>
              <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <Popover.Group as="nav" className="flex space-x-10">
                  <Popover>
                    {({ open }) => (
                      <>
                       

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white"
                          >
                            <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                              
                            </div>
                            <div className="bg-gray-50">
                              <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                                
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  
                  <Popover>
                    {({ open }) => (
                      <>
                        <Popover.Button
                          
                        >
                         
                          <ChevronDownIcon
                           
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg"
                          >
                            <div className="absolute inset-0 flex">
                              <div className="bg-white w-1/2" />
                              <div className="bg-gray-50 w-1/2" />
                            </div>
                            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                              <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Company</h3>
                                  <ul className="mt-5 space-y-6">
                                   
                                  </ul>
                                </div>
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                    Resources
                                  </h3>
                                  <ul className="mt-5 space-y-6">
                                    
                                  </ul>
                                </div>
                              </nav>
                              <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                <div>
                                  <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                    From the blog
                                  </h3>
                                  <ul className="mt-6 space-y-6">
                                    
                                  </ul>
                                </div>
                                <div className="mt-6 text-sm font-medium">
                                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                    {' '}
                                    View all posts <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
                <div className="flex items-center md:ml-12">
                <Authentication />
                </div>
              </div>
            </div>
          </div>

         
        </>
      )}
    </Popover>
  )
}
