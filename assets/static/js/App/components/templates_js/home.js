const { xml } = owl;

export const HomeTemplate = xml`
<div class="min-h-screen flex items-center justify-center">
    <div class="w-full max-w-7xl bg-white rounded-2xl shadow-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <!-- Left Column -->
        <div class="text-center md:text-left">
            <h1 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Welcome to CMS
            </h1>
            <p class="text-base md:text-lg text-gray-600 mb-8">
                Manage your content easily with our intuitive and powerful platform. Publish articles, organize pages, and grow your online presence effortlessly.
            </p>
            <div class="flex justify-center md:justify-start">
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl text-sm md:text-base transition-all">
                    Get Started
                </button>
            </div>
        </div>

        <!-- Right Column -->
        <div class="flex justify-center">
            <img src="./static/src/img/home-illustration.svg" alt="Home Illustration" class="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto" />
        </div>

    </div>
</div>
`;