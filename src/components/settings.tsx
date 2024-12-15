import { SettingsIcon } from "lucide-react";

export default function Settings() {
      return (
            <div className="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
                <div className="flex items-center justify-center p-12">
                    <div className=" relative inline-block text-left dropdown">
                        <span className="rounded-md shadow-sm"
                        ><button className="inline-flex justify-center w-full" 
                        type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                            <SettingsIcon className="h-4 w-4"/>
                            </button>
                        </span>
                        <div className="hidden dropdown-menu">
                            <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                <div className="px-4 py-3">
                                <p className="text-sm leading-5">Signed in as</p>
                                <p className="text-sm font-medium leading-5 text-gray-900 truncate">tom@example.com</p>
                                </div>
                                <div className="py-1">
                                <a href="javascript:void(0)" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Account settings</a>
                                <a href="javascript:void(0)" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Support</a>
                                <span role="menuitem" tabIndex={-1} className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50" aria-disabled="true">New feature (soon)</span>
                                <a href="javascript:void(0)" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >License</a></div>
                                <div className="py-1">
                                <a href="javascript:void(0)" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Sign out</a></div>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>  
  )}
  
  