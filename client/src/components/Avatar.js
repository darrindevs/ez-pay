import { Link, useLocation } from "react-router-dom";
// tailwind 
import {  Menu } from '@headlessui/react';

export default function Avatar() {
    const location = useLocation();

    return (
        <div>
            <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Open user menu</span>
                    <img
                          className="h-8 w-8 rounded-full"
                          src="https://zno.s3-us-west-1.amazonaws.com/darrin.jpg"
                          alt=""
                        />
            </Menu.Button>
                </div>
    )
  }
  