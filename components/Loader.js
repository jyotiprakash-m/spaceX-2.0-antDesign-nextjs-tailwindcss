import { Image } from 'antd'
import React from 'react'
function Loader() {
    return (
        <div className="w-full h-screen flex justify-center">
            <Image preview={false} className="" alt="loader" src="https://i.pinimg.com/originals/a7/12/3a/a7123a124ba35c74c421e1678e2bb677.gif" />
        </div>
    )
}

export default Loader