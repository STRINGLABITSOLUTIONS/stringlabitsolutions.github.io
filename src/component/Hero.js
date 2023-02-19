import NavBar from './NavBar'

export default function hero() {
    const bg = 'https://officesnapshots.com/wp-content/uploads/2012/06/cheil06-700x344.jpg';
    const icon1 = 'https://tailus.io/sources/blocks/job-board/preview/images/clients/microsoft.png';
    const icon2 = 'https://tailus.io/sources/blocks/job-board/preview/images/clients/grabyo.png';
    const icon3 = 'https://tailus.io/sources/blocks/job-board/preview/images/clients/lifegroups.png';
    const icon4 = 'https://tailus.io/sources/blocks/job-board/preview/images/clients/lilly.png';
    const icon5 = 'https://tailus.io/sources/blocks/job-board/preview/images/clients/grabyo.png';
  return (
    <div className='h-screen overflow-hidden'>
        <header className='w-screen'>
            <NavBar/>
        </header>
        <div className="relative">
            <img className="absolute inset-0 w-screen h-screen object-cover object-top" src={bg} width="400" height="500" alt="hero background image"/>
            <div aria-hidden="true" className="absolute inset-0 w-screen h-screen bg-purple-900 bg-opacity-30 backdrop-blur-lg"></div>
            <div className="relative container m-auto px-6 md:px-12 lg:px-6">
                <div className="mb-12 pt-40 space-y-16 md:mb-20 md:pt-56 lg:w-8/12 lg:mx-auto">
                    <h1 className="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl">
                        Don't look again for your next freelance projects, you got them.
                    </h1>

                    <form className="w-full">
                        <div className="relative flex p-1 rounded-xl bg-white shadow-2xl md:p-2">
                            <div id="catJobBox" className="hidden text-gray-600 relative md:flex justify-between items-center min-w-max select-none">
                                <input type="checkbox" name="" id="toggleJobLstCat" className="peer hidden outline-none"></input>
                                <input type="text" name="" id="catJobName" value="Design" className="pl-3 w-full bg-white text-base font-medium cursor-pointer" readonly></input>
                                <label for="toggleJobLstCat" className="absolute top-0 left-0 w-full h-full"></label>
                                <span className="min-w-max">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <div id="catJobLst" className="absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1 top-full left-0 w-full bg-white bg-opacity-80 rounded-lg py-2">
                                    <ul className="flex flex-col w-full">
                                        <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Design</li>
                                        <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Development</li>
                                        <li className="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">Marketing</li>
                                    </ul>
                                </div>
                            </div>
                            <input placeholder="Your favorite position" className="w-full p-4 outline-none text-gray-600" type="text"></input>
                            <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-lg text-center transition bg-gradient-to-br from-pink-500 to-purple-500 hover:to-purple-600 active:from-pink-700 focus:from-pink-600 md:px-12">
                                <span className="hidden text-white font-semibold md:block">
                                    Search
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-white md:hidden bi bi-search" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="pt-20">
                    <div className="md:px-12">
                        <span className="block text-center font-medium text-pink-50">Trusted by your favorite giants</span>
                        <div className="mt-8 -mx-6 px-6 overflow-x-auto md:overflow-x-hidden">
                            <div className="w-max flex justify-center flex-wrap items-center gap-4 md:w-auto md:gap-6 lg:gap-8">
                                <div className="flex items-center">
                                    <img className="w-36 grayscale contrast-200 brightness-200" src={icon1} alt="client logo" loading="lazy" width="100" height="122"/>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-28 grayscale contrast-200 brightness-200" src={icon2} alt="client logo" loading="lazy" width="100" height="219"/>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-32 grayscale contrast-200 brightness-200" src={icon3} alt="client logo" loading="lazy" width="100" height="219"/>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-24 grayscale contrast-200 brightness-200" src={icon4} alt="client logo" loading="lazy" width="100" height="219"/>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-28 grayscale contrast-200 brightness-200" src={icon5} alt="client logo" loading="lazy" width="100" height="219"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
