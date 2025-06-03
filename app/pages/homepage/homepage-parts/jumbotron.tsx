import Image from "next/image";
export default function Jumbotron() {
  return (
    <>
      <div className="relative z-0 before:absolute before:w-full before:h-full before:inset-0 before:bg-black/50 before:z-10">
        <Image 
          src="https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/jumbotron/bg-jtn-7pO5tRwUcdXjc0IKFM4QiRDAmIk4lr.jpg" 
          alt="Banner Image"
          width={1920} 
          height={1080} 
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        />
        <div className="min-h-[380px] relative z-20 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white sm:text-4xl text-2xl font-semibold mb-6">
            Find Your New Best Friend Today!
          </h2>
          <p className="text-base text-center text-slate-200 leading-relaxed">
            Welcome to the Pet Adoption App. Browse our collection of lovable pets looking for a forever home. Whether you’re searching for a playful puppy, a gentle senior dog, or a cuddly kitten, we’re here to help you make a lifelong connection.
          </p>
          <button
            type="button"
            className="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-medium outline-none bg-orange-600 hover:bg-orange-700 border-2 border-orange-600 transition-all duration-300 cursor-pointer"
          >
            Start Your Search
          </button>
        </div>
      </div>
    </>
  );
}