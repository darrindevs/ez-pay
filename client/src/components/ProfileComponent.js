// components 
import QR from "../components/QR";
import Avatar from "./Avatar";

export default function ProfileComponent() {
    return (
      <div className="container">
     {/* > container  */}
     <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">{/* Start main content */}
        <div className="bg-white">
        <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          
        <img
          className="inline-block h-20 w-20 rounded-full"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        </div>
        <div>
          <h4 className="text-lg font-bold">[NAME]</h4>
          <p className="mt-1">
            [ABOUT Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
            quidem ipsam quia iusto]
          </p>
          <h3 className="text-lg leading-6 font-medium text-gray-900">My Campaign</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem.</p>
          </div>
          <div className="mt-5">
             {/* QR Code */}
          <QR />
          </div>
        </div>
      </div>
         
        </div>
      </div>
  
        </div>{/* End main content */}
        <div className="bg-gray-50 px-4 py-4 sm:px-6">
          {/* Card Footer Content goes here */}
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
     
      </div>
      
      
    )
  }
  