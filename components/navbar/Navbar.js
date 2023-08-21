import Link from 'next/link';
import React from 'react';

const lists = ['Home', 'About us', 'Equipments', 'Contact Us'];
const Navbar = () => {
  return (
    <nav className='border-b-[1px] border-primary flex items-center justify-between px-6 top-0 sticky bg-white z-50'>
      <img
        src='https://res.cloudinary.com/sportsite/image/upload/v1692635021/logo_qrnoos.png'
        className='w-28 text-white'
      />

      <ul className='flex gap-12 text-primary '>
        {lists.map((list) => (
          <li key={list} className='font-bold'>
            <Link
              className='hover:border-b-primary border-b-4 py-2 border-b-transparent transition-all '
              href={`/${
                list === 'Home' ? '' : list.toLowerCase().replace(/\s+/g, '-')
              }`}
            >
              {list}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
