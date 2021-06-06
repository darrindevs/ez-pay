import { Fragment } from 'react';
import NavbarOut from "../components/NavbarOut";
import Authentication from "../components/Authentication";
import Footer from "../components/Footer";
import { Popover, Transition } from '@headlessui/react';


export default function Home() {
  return (
    <body class="flex flex-col min-h-screen">{/* keep this for sticky footer */}
        <main class="">{/* keep flex-auto for sticky footer */}
        <NavbarOut />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:relative mt-10">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Peer to Peer Payments</span>{' '}
              <span className="block text-indigo-600 xl:inline">Made Simple</span>
            </h1>
            <p className="max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Set up and share your <strong>Payment Profile</strong> in under 2 minutes. Getting paid has never been easier.

            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <Authentication />
              
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
    </main>
    </body>
  )
}
