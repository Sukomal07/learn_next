'use client'
import Link from "next/link";
import courseData from '@/data/music_courses.json'
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string
}

function FeaturedCourses() {
    const featuredCourse = courseData.courses.filter((course: Course) => course.isFeatured)
    console.log(featuredCourse);

    return (
        <div className="py-12 bg-gray-900 text-white">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide">
                    FEATURED COURSES
                </h2>
                <p className="mt-2 text-4xl font-bold tracking-tight sm:text-4xl">
                    Learn with the best
                </p>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourse.map((course) => (
                        <div key={course?.id} className="flex">
                            <BackgroundGradient className="p-4 sm:p-6 flex flex-col text-center flex-grow h-[100%]">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`} className="mt-4">
                                    Learn More
                                </Link>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link
                    href={"/courses"}
                    className="px-8 py-2 rounded border text-xl border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                    View all courses
                </Link>
            </div>
        </div>
    );
}

export default FeaturedCourses;
