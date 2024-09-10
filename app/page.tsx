'use client';

import Image from 'next/image';
import Link from "next/link";
import {useState} from 'react';

export default function Home() {
  const [navbar, setNavbar]=useState(false);
  return (
    <>
    <div className="flex justify-between items-center float-none p-8">
      <h1 className="text-violet-900 text-3xl font-bold font-serif float-left">THE Tina Times</h1>
      <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="ham"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
      <ul className="flex float-end p-8 font-serif sm:flex ">
        <li>
        <button type="button" className="p-2">Shop</button>
        </li>
        <li><button type="button" className="p-2">Blog</button>
        </li>
        <li> <button type="button" className="p-2">Who We Are</button>
        </li>
        <li>
        <button type="button" className="p-2">My Profile</button>
        </li>
        <li>
        <button type="button" className="bg-violet-800 text-white p-2 rounded-lg ">Basket</button>
        
        </li>
      </ul>
    </div>
    </>
  );
}
