
import React from 'react'
import { HomeFilled } from '@ant-design/icons';
import Link from 'next/link'
import { Image } from 'antd';
function Navbar() {
    return (
        <header className="bg-blue-600 w-full h-14 px-4 md:px-8 flex justify-between">
            <div className="flex items-center gap-4">
                <Image preview={false} alt="logo" src="https://cdn.icon-icons.com/icons2/2389/PNG/512/spacex_logo_icon_144865.png" width={56} /> <p className="font-bold text-2xl mt-5">Space-X</p>
            </div>
            <div className="flex items-center">
                <Link href="/">
                    <button className="bg-blue-700 py-2 px-4 text-gray-100 rounded-lg hover:bg-blue-800 flex gap-2 items-center focus:outline-none" ><HomeFilled />Home</button>
                </Link>
            </div>
        </header>
    )
}

export default Navbar