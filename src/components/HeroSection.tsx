import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
    return (
        <div className='h-auto md:h-[40rem] w-full flex flex-col text-center gap-4 justify-center items-center relative py-24 md:py-0 '>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <h1 className='text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of music </h1>
            <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className='mt-4'>
                <Link href={'/courses'}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-slate-900 text-white border-slate-800"
                    >
                        Explore courses
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
