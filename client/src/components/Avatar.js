import { Link, useLocation } from "react-router-dom";
// tailwind 
import {  Menu } from '@headlessui/react';

export default function Avatar() {
    const location = useLocation();

    return (
        <div>
            <img
                className="h-8 w-8 rounded-full"
                src="https://zno.s3-us-west-1.amazonaws.com/darrin.jpg"
                alt=""
            />
                </div>
    )
  }
  