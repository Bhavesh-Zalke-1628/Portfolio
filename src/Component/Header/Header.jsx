import React from 'react'

const Header = () => {
    return (
        <div>
            <div class="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-900">
                <nav class="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
                    <div class="flex items-center justify-between">
                        <button>
                            <div class="flex items-center space-x-2">
                                <h2 class="text-black dark:text-white font-bold text-2xl">Company</h2>
                            </div>
                        </button>
                        <div class="hidden lg:block">
                            <ul class="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
                                <li
                                    class="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <a href="#">Home</a>
                                </li>
                                <li
                                    class="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <a href="#">Our services</a>
                                </li>
                                <li
                                    class="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <a href="#">About</a>
                                </li>
                                <li
                                    class="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
