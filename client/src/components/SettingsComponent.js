// components 
import Form1 from "../components/Form1";


export default function ProfileComponent() {
    return (
      <div className="container">
     {/* > container  */}
     <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">{/* Start main content */}
        <Form1 />
        
        </div>
      </div>
      </div>
    )
  }
  