import NavigationBar from '../parts/navigation/navigation-bar';

export default function About() {
  return (
    <>
      <NavigationBar />
      <section className="flex flex-col items-center justify-center min-h-screen dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
        <div className="relative bg-white/90 dark:bg-gray-900/90 shadow-2xl rounded-3xl p-10 max-w-2xl w-full mt-16 mb-16 overflow-hidden">
          {/* Decorative gradient blur */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-400 opacity-20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col items-center mb-8">
            <img
              src="https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/about-assets/about-1-G77PccuMJlaLJL837ggwbf85I8P6w7.jpg"
              alt="About Pet Adoption"
              className="w-28 h-28 mb-4 rounded-full border-4 border-orange-200 shadow-lg object-cover"
            />
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-2 text-center tracking-tight">
              About Pet Adoption App
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-md">
              Connecting pets with loving families, one adoption at a time.
            </p>
          </div>
          <div className="text-gray-700 dark:text-gray-200 text-base leading-relaxed space-y-5">
            <p>
              At <span className="font-semibold text-orange-600 dark:text-orange-400">Pet Adoption App</span>, our mission is to ensure every pet finds a forever home. We work with shelters and rescue organizations to make the adoption process simple, transparent, and joyful for both pets and people.
            </p>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Curated list of adorable pets</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Guidance on responsible pet ownership</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Easy, confident adoption process</span>
            </div>
            <p>
              <span className="font-semibold text-blue-600 dark:text-blue-400">Ready to adopt?</span> Visit our{" "}
              <a
                href="/pages/contact"
                className="text-orange-600 dark:text-orange-400 hover:underline font-semibold"
              >
                Contact Page
              </a>{" "}
              to get in touch or ask questions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}