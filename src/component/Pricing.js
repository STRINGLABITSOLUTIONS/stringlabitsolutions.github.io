import React from 'react'

export default function Pricing() {
    const icon1 = 'https://tailus.io/sources/blocks/team/preview/images/tanzanite.webp';
    const icon2 = 'https://tailus.io/sources/blocks/team/preview/images/premium.webp';
  return (
    <div class="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            A Tailus Blocks subscription gives you access to our components and more.
            </h2>
        </div>
        <div
            class="m-auto mt-12 items-center justify-center space-y-6 lg:flex lg:space-y-0 lg:space-x-6 xl:w-10/12"
        >
            <div class="group relative z-10 mx-auto sm:w-7/12 lg:w-4/12">
            <div
                aria-hidden="true"
                class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div class="relative space-y-8 p-8">
                <div class="flex items-center justify-between">
                <h5 class="text-xl font-semibold text-gray-700 dark:text-white">Monthly</h5>
                <div class="relative flex justify-around">
                    <div class="flex">
                    <span class="-ml-6 text-xl font-bold text-sky-500">$</span>
                    <span class="leading-0 text-4xl font-bold text-gray-800 dark:text-white">19</span>
                    </div>
                </div>
                </div>
                <img
                src={icon1}
                width="512"
                height="512"
                class="m-auto w-16"
                alt="tanzanite illustration"
                />
                <p class="text-center text-gray-600 dark:text-gray-300">
                If you only require access for one developer, this may be the plan for you.
                </p>
                <button class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span class="relative text-base font-semibold text-sky-600 dark:text-white">Get Started</span>
                </button>
            </div>
            </div>

            <div class="group relative m-auto md:w-10/12 lg:w-8/12">
            <div
                aria-hidden="true"
                class="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div class="relative sm:flex">
                <div class="space-y-8 p-8 pb-20 sm:w-7/12 sm:pb-8">
                <div class="flex items-center justify-between">
                    <h5 class="text-xl font-semibold text-gray-700 dark:text-white">Complete pack</h5>
                    <div class="relative flex justify-around">
                    <div class="flex">
                        <span class="-ml-6 text-xl font-bold text-sky-500">$</span>
                        <span class="leading-0 text-4xl font-bold text-gray-800 dark:text-white">1900</span>
                    </div>
                    </div>
                </div>
                <img
                    src={icon2}
                    width="512"
                    height="512"
                    class="m-auto w-16"
                    alt="premium illustration"
                />
                <p class="text-center text-gray-600 dark:text-gray-300">
                    Wire your account to support 5 developers with a year's worth of unlimited access
                    to tailus blocks!
                </p>
                <div class="absolute inset-x-0 bottom-6 w-full px-6 sm:static sm:px-0">
                    <button class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                    <span class="relative text-base font-semibold text-white dark:text-dark">Start plan</span>
                    </button>
                </div>
                </div>

                <div class="-mt-16 pb-20 sm:mt-0 sm:w-5/12 sm:pb-0">
                <div
                    class="relative h-full before:absolute before:left-0 before:top-1 before:my-auto before:h-0.5 before:w-full before:rounded-full before:bg-gray-200 dark:before:bg-gray-700 sm:pt-0 sm:before:inset-y-0 sm:before:h-[85%] sm:before:w-0.5"
                >
                    <div class="relative -mt-1 h-full overflow-x-auto pt-7 pb-6 sm:-ml-1 sm:pl-1">
                    <ul
                        class="flex h-full w-max justify-center space-x-2 px-6 sm:w-full sm:flex-col sm:space-x-0 sm:space-y-6 sm:px-8"
                    >
                        <li>
                        <div class="relative">
                            <input checked hidden class="peer" type="radio" name="devs" id="devs20" />
                            <label
                            for="devs20"
                            class="block w-full cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary"
                            >
                            <span class="mx-auto text-sm font-semibold">20 developers</span>
                            </label>
                            <div
                            aria-hidden="true"
                            class="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary transition peer-checked:scale-100 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                            ></div>
                        </div>
                        </li>
                        <li>
                        <div class="relative">
                            <input hidden class="peer" type="radio" name="devs" id="devs15" />
                            <label
                            for="devs15"
                            class="block cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary"
                            >
                            <span class="mx-auto block w-max text-sm font-semibold">15 developers</span>
                            </label>
                            <div
                            aria-hidden="true"
                            class="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary transition peer-checked:scale-100 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                            ></div>
                        </div>
                        </li>
                        <li>
                        <div class="relative">
                            <input hidden class="peer" type="radio" name="devs" id="devs10" />
                            <label
                            for="devs10"
                            class="block cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary"
                            >
                            <span class="mx-auto block w-max text-sm font-semibold">10 developers</span>
                            </label>
                            <div
                            aria-hidden="true"
                            class="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary transition peer-checked:scale-100 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                            ></div>
                        </div>
                        </li>
                        <li>
                        <div class="relative">
                            <input hidden class="peer" type="radio" name="devs" id="devs5" />
                            <label
                            for="devs5"
                            class="block cursor-pointer rounded-full bg-sky-50 dark:bg-gray-700 py-2 px-4 text-center text-sky-800 dark:text-sky-300 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary"
                            >
                            <span class="mx-auto block w-max text-sm font-semibold">5 developers</span>
                            </label>
                            <div
                            aria-hidden="true"
                            class="absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white dark:border-gray-800 bg-primary transition peer-checked:scale-100 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                            ></div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
