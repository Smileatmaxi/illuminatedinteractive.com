import React from 'react'

const FrequentlyAsked = () => {
    return (
        <div className="w-full justify-center p-2 sm:p-10 items-center">
            <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-20 md:px-8 md:py-40">
                <h2
                    className="text-center text-4xl font-medium tracking-tight text-neutral-600 dark:text-neutral-50 md:text-5xl">
                    Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-lg text-center text-base text-neutral-600 dark:text-neutral-50">
                    We are here to help you with any questions you may have. If you don&apos;t find what you need, feel free
                    to contact us via Mail at
                </p>
                <a href="mailto:contact@IlluminatedInteractive.com"
                   className="text-blue-500 underline mx-auto max-w-lg text-center text-base">contact@IlluminatedInteractive.com
                </a>

                <div className="mx-auto mt-10 w-full max-w-3xl">
                    <div
                        className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900">
                        <div className="mx-auto">
                            <div className="relative">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between">
                                        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                                            What is the official release date of the game?
                                        </h3>
                                        <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 width="24"
                                                 height="24"
                                                 fill="currentColor"
                                                 className="bi bi-chevron-down"
                                                 viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div
                                        className="text-neutral-500 dark:text-neutral-400 group-open:animate-fadeIn mt-2">
                                        Our game is not scheduled yet. We’re still building our basics. As a team of two
                                        people, it takes a lot of time to create something good, and we don&apos;t want to
                                        rush things!
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900">
                        <div className="mx-auto">
                            <div className="relative">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between">
                                        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                                            Which platforms will the game be available on?
                                        </h3>
                                        <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 width="24"
                                                 height="24"
                                                 fill="currentColor"
                                                 className="bi bi-chevron-down"
                                                 viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div
                                        className="text-neutral-500 dark:text-neutral-400 group-open:animate-fadeIn mt-2">
                                        The game will be released on PC. We are committed to ensuring a smooth and
                                        optimized experience. Possibly, the game may be available on other platforms in
                                        the future.
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900">
                        <div className="mx-auto">
                            <div className="relative">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between">
                                        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                                            What is the genre and storyline of the game?
                                        </h3>
                                        <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 width="24"
                                                 height="24"
                                                 fill="currentColor"
                                                 className="bi bi-chevron-down"
                                                 viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div
                                        className="text-neutral-500 dark:text-neutral-400 group-open:animate-fadeIn mt-2">
                                        Noctlan is an immersive horror game that combines rich storytelling with dynamic
                                        gameplay. Set in a jungle in the 1970s as an adventurer exploring an old
                                        forgotten Aztec temple, players will embark on
                                        an creepy journey filled with challenges and jump scares.
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900">
                        <div className="mx-auto">
                            <div className="relative">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between">
                                        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                                            Does the game feature multiplayer or online modes?
                                        </h3>
                                        <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 width="24"
                                                 height="24"
                                                 fill="currentColor"
                                                 className="bi bi-chevron-down"
                                                 viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div
                                        className="text-neutral-500 dark:text-neutral-400 group-open:animate-fadeIn mt-2">
                                        No, there is no co-op/multiplayer feature planned. Noctlan will be a solo
                                        experience.
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900">
                        <div className="mx-auto">
                            <div className="relative">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between">
                                        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                                            How can I pre-order or purchase the game?
                                        </h3>
                                        <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 width="24"
                                                 height="24"
                                                 fill="currentColor"
                                                 className="bi bi-chevron-down"
                                                 viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div
                                        className="text-neutral-500 dark:text-neutral-400 group-open:animate-fadeIn mt-2">
                                        As soon as we know our release window, you will be able to pre-order the game.
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900">
                        <div className="mx-auto">
                            <div className="relative">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between">
                                        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                                            Will there be any downloadable content (DLC) or expansion packs?
                                        </h3>
                                        <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 width="24"
                                                 height="24"
                                                 fill="currentColor"
                                                 className="bi bi-chevron-down"
                                                 viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div
                                        className="text-neutral-500 dark:text-neutral-400 group-open:animate-fadeIn mt-2">
                                        We plan to support Noctlan after its initial release with regular updates and
                                        bug fixes. There is no DLC or expansion pack planned at this time.
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900">
                        <div className="mx-auto">
                            <div className="relative">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between">
                                        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                                            Are there any demos or beta tests available before launch?
                                        </h3>
                                        <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 width="24"
                                                 height="24"
                                                 fill="currentColor"
                                                 className="bi bi-chevron-down"
                                                 viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div
                                        className="text-neutral-500 dark:text-neutral-400 group-open:animate-fadeIn mt-2">
                                        Yes, we periodically offer demo versions and beta testing phases. This not only
                                        allows you to preview the gameplay but also gives us valuable feedback to refine
                                        and enhance the final release.
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900">
                        <div className="mx-auto">
                            <div className="relative">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between">
                                        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                                            What age rating does the game have?
                                        </h3>
                                        <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 width="24"
                                                 height="24"
                                                 fill="currentColor"
                                                 className="bi bi-chevron-down"
                                                 viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div
                                        className="text-neutral-500 dark:text-neutral-400 group-open:animate-fadeIn mt-2">
                                        We’re not sure yet, but it will likely fall under the Mature category.
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>

                    <div
                        className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900">
                        <div className="mx-auto">
                            <div className="relative">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between">
                                        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                                            How can I get technical support or report any issues?
                                        </h3>
                                        <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 width="24"
                                                 height="24"
                                                 fill="currentColor"
                                                 className="bi bi-chevron-down"
                                                 viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div
                                        className="text-neutral-500 dark:text-neutral-400 group-open:animate-fadeIn mt-2">
                                        Our dedicated support team is here to help. For technical assistance, please
                                        visit the <b>Contact Us</b> section on our website, where you&apos;ll find
                                        troubleshooting guides and contact details for customer service.
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900">
                        <div className="mx-auto">
                            <div className="relative">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between">
                                        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                                            How much will Noctlan cost after it&apos;s release?
                                        </h3>
                                        <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 width="24"
                                                 height="24"
                                                 fill="currentColor"
                                                 className="bi bi-chevron-down"
                                                 viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div
                                        className="text-neutral-500 dark:text-neutral-400 group-open:animate-fadeIn mt-2">
                                        We plan to make it as affordable as possible, with a price of
                                        around <b>$14,99</b>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FrequentlyAsked
