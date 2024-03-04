import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='text-gray-400 flex flex-col gap-8 items-center p-8'>
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center text-center lg:text-start'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white font-bold'>About Us</h1>
                    <p>
                        Music School is a premier institution dedicated to teaching the art
                        and science of music. We nurture talent from the ground up,
                        fostering a vibrant community of musicians.
                    </p>
                </div>
                <div className='flex flex-col gap-4 items-center'>
                    <h1 className='text-white font-bold'>Quick Links</h1>
                    <ul className='flex md:flex-col gap-3'>
                        <li>
                            <Link href={'/'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 items-center'>
                    <h1 className='text-white font-bold'>Follow Us</h1>
                    <ul className='flex gap-3'>
                        <li>
                            <Link href={'/'} target='_blank'>
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} target='_blank'>
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} target='_blank'>
                                Instagram
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white font-bold'>Contact Us</h1>
                    <div className='flex flex-col gap-3'>
                        <p>New Delhi, India</p>
                        <p>Delhi 10001</p>
                        <p>Email: info@musicschool.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
            </section>
            <p className='text-center'>© 2024 Music School. All rights reserved.</p>
        </footer>
    )
}

export default Footer
