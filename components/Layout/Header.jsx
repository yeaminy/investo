/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { links } from './links';

const Header = () => {
  return (
    <div className="fixed flex px-2 w-full h-[65px] justify-between items-center z-10 top-0 bg-purple-800 drop-shadow-lg shadow-lg">
      <img src="/logo.png" alt="Logo" width={50} height={50} />
      <div>
        {links.map((item, index) => (
          <Link key={index} href={item.url}>
            <a className="m-1 px-3 py-2">{item.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
