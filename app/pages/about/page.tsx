import NavigationBar from '../parts/navigation/navigation-bar';

export default function About() {
  return (
    <>
      <NavigationBar />
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-blue-100 px-4">
        <div className="bg-white/90 shadow-xl rounded-2xl p-10 max-w-2xl w-full mt-16 mb-16">
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/about-assets/about-1-G77PccuMJlaLJL837ggwbf85I8P6w7.jpg"
              alt="About Pet Adoption"
              className="w-24 h-24 mb-4"
            />
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2 text-center">
              About Pet Adoption App
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Connecting pets with loving families, one adoption at a time.
            </p>
          </div>
          <div className="text-gray-700 text-base leading-relaxed space-y-4">
            <p>
              At <span className="font-semibold text-orange-600">Pet Adoption App</span>, our mission is to ensure every pet finds a forever home. We work with shelters and rescue organizations to make the adoption process simple, transparent, and joyful for both pets and people.
            </p>
            <p>
              Browse our curated list of adorable pets, learn about responsible pet ownership, and take the first step toward welcoming a new family member. Our platform is designed to help you connect, apply, and adopt with confidence.
            </p>
            <p>
              <span className="font-semibold text-blue-600">Ready to adopt?</span> Visit our{" "}
              <a
                href="/pages/contact"
                className="text-orange-600 hover:underline font-semibold"
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