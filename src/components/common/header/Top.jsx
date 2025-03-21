import React from 'react'
import Image from "next/image";
import Link from 'next/link';
const Top = () => {
    return (
        <div>
            <div className="lg:w-[300px] w-[200px]">
                <Link
                    href="/"
                    className={`header-logo block lg:ml-0 ml-2 mt-3 lg:my-3`}
                >
                    <Image
                        src="/logo/logo_nonbg.png"
                        alt="logo"
                        width={400}
                        height={500}
                        className="lg:w-[350px] lg:h-[100px]"
                    />
                </Link>
            </div>

        </div>
    )
}

export default Top