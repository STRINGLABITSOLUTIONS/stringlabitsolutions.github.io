import React from 'react'

export default function LogoCloud() {
    const logo1 = 'https://tailus.io/sources/blocks/sponsors/preview/images/clients/airbnb.svg';
    const logo2 = 'https://tailus.io/sources/blocks/sponsors/preview/images/clients/microsoft.svg';
    const logo3 = 'https://tailus.io/sources/blocks/sponsors/preview/images/clients/ge.svg';
    const logo4 = 'https://tailus.io/sources/blocks/sponsors/preview/images/clients/bissell.svg';
    const logo5 = 'https://tailus.io/sources/blocks/sponsors/preview/images/clients/bissell.svg';
    const logo6 = 'https://tailus.io/sources/blocks/sponsors/preview/images/clients/automatic.svg';
  return (
    <div class="relative flex flex-col items-center overflow-hidden py-20 md:py-40 bg-gray-100 dark:bg-gray-900">
        <div class="container relative z-[1] m-auto px-6 md:px-12">
            <div class="m-auto text-center md:w-8/12 lg:w-6/12">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                Our heroes <span class="text-primary">contribute</span> to the development of tailus
                </h2>
            </div>
            <div class="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
                <div class="flex flex-wrap justify-center gap-6">
                <div
                    class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                >
                    <img
                    src={logo1}
                    class="contrast-0 transition group-hover:contrast-100"
                    loading="lazy"
                    alt="logo airbnb"
                    />
                </div>
                <div
                    class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                >
                    <img
                    src={logo2}
                    class="contrast-0 transition group-hover:contrast-100"
                    loading="lazy"
                    alt="logo microsoft"
                    />
                </div>
                <div
                    class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                >
                    <img
                    src={logo3}
                    class="contrast-0 transition group-hover:contrast-100"
                    loading="lazy"
                    alt="logo ge"
                    />
                </div>
                <div
                    class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                >
                    <img
                    src={logo4}
                    class="contrast-0 transition group-hover:contrast-100"
                    loading="lazy"
                    alt="logo bissell"
                    />
                </div>
                <div
                    class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                >
                    <img
                    src={logo5}
                    class="contrast-0 transition group-hover:contrast-100"
                    loading="lazy"
                    alt="logo bissell"
                    />
                </div>
                <div
                    class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
                >
                    <img
                    src={logo6}
                    class="contrast-0 transition group-hover:contrast-100"
                    loading="lazy"
                    alt="logo automatic"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
                                      
  )
}
