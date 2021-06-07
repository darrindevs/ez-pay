import { Fragment } from 'react';
import NavbarOut from "../components/NavbarOut";
import Authentication from "../components/Authentication";
import PublicComponent from "../components/PublicComponent";
import Footer from "../components/Footer";
import { Popover, Transition } from '@headlessui/react';


export default function Public() {
  return (
    <body class="flex flex-col min-h-screen">{/* keep this for sticky footer */}
        <main class="">{/* keep flex-auto for sticky footer */}
        <NavbarOut />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:relative mt-10">
          <PublicComponent />
       
      </div>
      <Footer />
    </div>
    </main>
    </body>
  )
}
