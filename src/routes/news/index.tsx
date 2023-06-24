import prisma from "~/lib/prismaClient";
import HeaderComponent from "./HeaderComponent";
import PostComponent from "./PostComponent";
import ImageCarousel from "./ImageCarousel";

export default async function NewsPage() {
  const posts = await prisma.post.findMany();

  return (
    <>
      <HeaderComponent />
      <main id="content" class="mt-16">
        <div class="bg-gray-50 py-4 hidden">
          <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div class="mx-auto table text-center text-sm">
              <a class="uppercase" href="#top">
                Advertisement
              </a>
              <a href="#top">
                <img src="/images/ads/ads_728.jpg" alt="advertisement area" />
              </a>
            </div>
          </div>
        </div>

        <div class="bg-white">
          <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div class="flex flex-row flex-wrap">
              <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                <div class="w-full py-3">
                  <h2 class="text-gray-800 text-2xl font-bold">
                    <span class="inline-block h-5 border-l-3 border-red-600 mr-2" />
                    Europe
                  </h2>
                </div>
                <div class="flex flex-row flex-wrap -mx-3">
                  {posts.slice(0, 6).map(function (post, i) {
                    return <PostComponent key={i} post={post} />;
                  })}
                </div>
              </div>
              <div class="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
                <div class="w-full bg-gray-50 h-full">
                  <div class="text-sm py-6 sticky">
                    <div class="w-full text-center">
                      <a class="uppercase" href="#top">
                        Advertisement
                      </a>
                      <a href="#top">
                        <img
                          class="mx-auto"
                          src="/images/ads/250.jpg"
                          alt="advertisement area"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative bg-gray-50">
          <div class="bg-black bg-opacity-70">
            <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
              <div class="flex flex-row flex-wrap">
                <div class="flex-shrink max-w-full w-full py-12 overflow-hidden">
                  <div class="w-full py-3">
                    <h2 class="text-white text-2xl font-bold text-shadow-black">
                      <span class="inline-block h-5 border-l-3 border-red-600 mr-2" />
                      American
                    </h2>
                  </div>
                  {<ImageCarousel posts={posts.slice(18, 24)} />}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white py-6">
          <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div class="flex flex-row flex-wrap">
              <div class="flex-shrink max-w-full w-full overflow-hidden">
                <div class="w-full py-3">
                  <h2 class="text-gray-800 text-2xl font-bold">
                    <span class="inline-block h-5 border-l-3 border-red-600 mr-2" />
                    Africa
                  </h2>
                </div>
                <div class="flex flex-row flex-wrap -mx-3">
                  {posts.slice(6, 12).map(function (post, i) {
                    return <PostComponent key={i} post={post} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 py-6">
          <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div class="flex flex-row flex-wrap">
              <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                <div class="w-full py-3">
                  <h2 class="text-gray-800 text-2xl font-bold">
                    <span class="inline-block h-5 border-l-3 border-red-600 mr-2" />
                    Latest news
                  </h2>
                </div>
                <div class="flex flex-row flex-wrap -mx-3">
                  <div class="flex-shrink max-w-full w-full px-3 pb-5">
                    <div class="relative hover-img max-h-98 overflow-hidden">
                      <a href="#top">
                        <img
                          class="max-w-full w-full mx-auto h-auto"
                          src="/images/dummy/img15.jpg"
                          alt="description"
                        />
                      </a>
                      <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                        <a href="#top">
                          <h2 class="text-3xl font-bold capitalize text-white mb-3">
                            Amazon Shoppers Are Ditching Designer Belts for This
                            Best-Selling
                          </h2>
                        </a>
                        <p class="text-gray-100 hidden sm:inline-block">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This very
                          helpfull for generate default content..
                        </p>
                        <div class="pt-2">
                          <div class="text-gray-100">
                            <div class="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {posts.slice(12, 18).map(function (post, i) {
                    return <PostComponent key={i} post={post} />;
                  })}
                </div>
              </div>
              <div class="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8 order-first">
                <div class="w-full bg-white">
                  <div class="mb-6">
                    <div class="p-4 bg-gray-100">
                      <h2 class="text-lg font-bold">Most Popular</h2>
                    </div>
                    <ul class="post-number">
                      <li class="border-b border-gray-100 hover:bg-gray-50">
                        <a
                          class="text-lg font-bold px-6 py-3 flex flex-row items-center"
                          href="#top"
                        >
                          Why the world would end without political polls
                        </a>
                      </li>
                      <li class="border-b border-gray-100 hover:bg-gray-50">
                        <a
                          class="text-lg font-bold px-6 py-3 flex flex-row items-center"
                          href="#top"
                        >
                          Meet The Man Who Designed The Ducati Monster
                        </a>
                      </li>
                      <li class="border-b border-gray-100 hover:bg-gray-50">
                        <a
                          class="text-lg font-bold px-6 py-3 flex flex-row items-center"
                          href="#top"
                        >
                          2020 Audi R8 Spyder spy shots release
                        </a>
                      </li>
                      <li class="border-b border-gray-100 hover:bg-gray-50">
                        <a
                          class="text-lg font-bold px-6 py-3 flex flex-row items-center"
                          href="#top"
                        >
                          Lamborghini makes Huracán GT3 racer faster for 2019
                        </a>
                      </li>
                      <li class="border-b border-gray-100 hover:bg-gray-50">
                        <a
                          class="text-lg font-bold px-6 py-3 flex flex-row items-center"
                          href="#top"
                        >
                          ZF plans $14 billion autonomous vehicle push, concept
                          van
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="text-sm py-6 sticky">
                  <div class="w-full text-center">
                    <a class="uppercase" href="#top">
                      Advertisement
                    </a>
                    <a href="#top">
                      <img
                        class="mx-auto"
                        src="/images/ads/250.jpg"
                        alt="advertisement area"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer class="bg-black text-gray-400">
        <div
          id="footer-content"
          class="relative pt-8 xl:pt-16 pb-6 xl:pb-12"
        >
          <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
            <div class="flex flex-wrap flex-row lg:justify-between -mx-3">
              <div class="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
                <div class="flex items-center mb-2">
                  <span class="text-3xl leading-normal mb-2 font-bold text-gray-100 mt-2">
                    TailNews
                  </span>
                </div>
                <p>
                  Tailwind News Template for build great newspapper, magazine
                  and news portal.
                </p>
                <ul class="space-x-3 mt-6 mb-6 Lg:mb-0">
                  <li class="inline-block">
                    <a
                      target="_blank"
                      class="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href="https://facebook.com"
                      title="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="inline-block">
                    <a
                      target="_blank"
                      class="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href="https://twitter.com"
                      title="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="inline-block">
                    <a
                      target="_blank"
                      class="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href="https://youtube.com"
                      title="Youtube"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="inline-block">
                    <a
                      target="_blank"
                      class="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href="https://instagram.com"
                      title="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
                        />
                        <path
                          fill="currentColor"
                          d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
                        />
                        <path
                          fill="currentColor"
                          d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="flex-shrink max-w-full w-full lg:w-3/5 px-3">
                <div class="flex flex-wrap flex-row">
                  <div class="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 class="text-base leading-normal mb-3 uppercase text-gray-100">
                      Product
                    </h4>
                    <ul>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Landing</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Pages</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Sections</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Sign Up</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Login</a>
                      </li>
                    </ul>
                  </div>
                  <div class="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 class="text-base leading-normal mb-3 uppercase text-gray-100">
                      Support
                    </h4>
                    <ul>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Documentation</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Changelog</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Tools</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Icons</a>
                      </li>
                    </ul>
                  </div>
                  <div class="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 class="text-base leading-normal mb-3 uppercase text-gray-100">
                      Includes
                    </h4>
                    <ul>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Utilities</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Components</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Example code</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Updates</a>
                      </li>
                    </ul>
                  </div>
                  <div class="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 class="text-base leading-normal mb-3 uppercase text-gray-100">
                      Legal
                    </h4>
                    <ul>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Privacy Policy</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">Terms of Use</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">License</a>
                      </li>
                      <li class="py-1 hover:text-white">
                        <a href="#top">GDPR</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-dark">
          <div class="container py-4 border-t border-gray-200 border-opacity-10">
            <div class="row">
              <div class="col-12 col-md text-center">
                <p class="d-block my-3">
                  Copyright © Your Company | All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
