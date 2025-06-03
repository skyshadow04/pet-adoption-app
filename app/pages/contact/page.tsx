import NavigationBar from '../parts/navigation/navigation-bar';

export default function Contact() {
  return (
    <>
      <NavigationBar />
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-orange-100 px-4">
        <div className="bg-white/90 shadow-xl rounded-2xl p-10 max-w-xl w-full mt-16 mb-16">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Have questions or want to get in touch? Fill out the form below and our team will respond soon!
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}