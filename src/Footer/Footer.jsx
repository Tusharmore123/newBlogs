import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black footer">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    
                    <div className="w-full p-6 md:w-1/4 md:text-sm xs:w-1/2 dl:text-center sm:w-1/4 lg:w-2/12">
                        <div className="h-full  ">
                            <h3 className="tracking-px mb-9  xs:text-sm dl:text-xs  font-semibold uppercase text-gray-500">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4 ">
                                    <Link
                                        className=" text-base  xs:text-sm dl:text-xs font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base xs:text-sm dl:text-xs font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base xs:text-sm dl:text-xs font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base xs:text-sm dl:text-xs font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/4 md:text-sm xs:w-1/2 dl:text-center sm:w-1/4 lg:w-2/12">
                        <div className="h-full ">
                            <h3 className="tracking-px mb-9 xs:text-sm dl:text-xs  font-semibold uppercase text-gray-500">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base xs:text-sm dl:text-xs font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base xs:text-sm dl:text-xs font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base xs:text-sm dl:text-xs font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base xs:text-sm dl:text-xs font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/4 xs:text-sm dl:text-xs md:text-sm xs:w-1/2 dl:text-center sm:w-1/4 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9   font-semibold uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base xs:text-sm dl:text-xs font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" xs:text-sm dl:text-xs text-base font-medium text-gray-900 hover:text-white"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" xs:text-sm dl:text-xs text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/4 md:text-sm xs:w-1/2 dl:text-center sm:w-1/4 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                {/* <Logo width="100px" /> */}
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 xs:text-sm dl:text-xs">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer