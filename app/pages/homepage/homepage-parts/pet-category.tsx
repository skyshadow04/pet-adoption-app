export default function PetCategory() {
  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800 dark:text-gray-100 tracking-tight">
        Pet Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Dog Card */}
        <div className="group bg-white dark:bg-gray-900 shadow-xl rounded-3xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 dark:border-gray-800">
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-2xl">
            <img
              src="https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/homepage-assets/dog-1-o80AruQW3fUqXqWzhBrG3qqGCB5vX7.jpg"
              alt="Dogs"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold">
              Popular
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Dogs</h2>
          <p className="text-gray-500 dark:text-gray-300 mb-4">
            Loyal, playful, and loving companions for all ages.
          </p>
          <button className="px-6 py-2 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow transition-all duration-200">
            View Dogs
          </button>
        </div>
        {/* Cat Card */}
        <div className="group bg-white dark:bg-gray-900 shadow-xl rounded-3xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 dark:border-gray-800">
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-2xl">
            <img
              src="https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/homepage-assets/cat-1-KFpOapF8YwHn8qqFV0LFCA3mmZ78Sf.jpg"
              alt="Cats"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold">
              New
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Cats</h2>
          <p className="text-gray-500 dark:text-gray-300 mb-4">
            Independent, curious, and affectionate furry friends.
          </p>
          <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow transition-all duration-200">
            View Cats
          </button>
        </div>
        {/* Bird Card */}
        <div className="group bg-white dark:bg-gray-900 shadow-xl rounded-3xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 dark:border-gray-800">
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-2xl">
            <img
              src="https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/homepage-assets/dog-2-4CKYarGtM8S4xJGUbewmMRj8Ig5TdF.jpg"
              alt="Birds"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold">
              Exotic
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Birds</h2>
          <p className="text-gray-500 dark:text-gray-300 mb-4">
            Colorful, cheerful, and melodious companions.
          </p>
          <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-all duration-200">
            View Birds
          </button>
        </div>
      </div>
    </div>
  );
}