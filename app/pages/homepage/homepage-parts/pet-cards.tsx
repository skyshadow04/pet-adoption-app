import Image from "next/image";
import Link from "next/link";


// This is a temporary array of pets for demonstration purposes.
const pets = [
  {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    img: "https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/homepage-assets/dog-2-4CKYarGtM8S4xJGUbewmMRj8Ig5TdF.jpg",
    tag: "Adopt Me",
    tagColor: "bg-orange-500",
  },
  {
    id: 2,
    name: "Max",
    breed: "Golden Retriever",
    age: "2 years",
    img: "https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/homepage-assets/dog-1-o80AruQW3fUqXqWzhBrG3qqGCB5vX7.jpg",
    tag: "Popular",
    tagColor: "bg-green-500",
  },
  {
    id: 3,
    name: "Mittens",
    breed: "Siamese Cat",
    age: "1 year",
    img: "https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/homepage-assets/cat-1-KFpOapF8YwHn8qqFV0LFCA3mmZ78Sf.jpg",
    tag: "New",
    tagColor: "bg-purple-500",
  },
{
    id: 4,
    name: "Mittens",
    breed: "Siamese Cat",
    age: "1 year",
    img: "https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/homepage-assets/cat-1-KFpOapF8YwHn8qqFV0LFCA3mmZ78Sf.jpg",
    tag: "New",
    tagColor: "bg-purple-500",
  },
  {
    id: 5,
    name: "Max",
    breed: "Golden Retriever",
    age: "2 years",
    img: "https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/homepage-assets/dog-1-o80AruQW3fUqXqWzhBrG3qqGCB5vX7.jpg",
    tag: "Popular",
    tagColor: "bg-green-500",
  },
{
    id: 6,
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    img: "https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/homepage-assets/dog-2-4CKYarGtM8S4xJGUbewmMRj8Ig5TdF.jpg",
    tag: "Adopt Me",
    tagColor: "bg-orange-500",
  },
];

export default function PetCards() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-extrabold mb-10 text-center tracking-tight">
        Featured Pets
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="group bg-white dark:bg-gray-900 shadow-xl rounded-3xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 dark:border-gray-800 relative overflow-hidden"
          >
            <div className="relative w-full h-56 mb-4 overflow-hidden rounded-2xl">
              <Image
                src={pet.img}
                alt={pet.name}
                width={500}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <span
                className={`absolute top-3 left-3 ${pet.tagColor} text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold`}
              >
                {pet.tag}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-1 text-gray-800 dark:text-gray-100">{pet.name}</h2>
            <p className="text-gray-500 dark:text-gray-300 mb-2">{pet.breed}</p>
            <p className="text-gray-400 dark:text-gray-400 mb-4">{pet.age}</p>
            <Link
              href={{
                pathname: `/pages/homepage/${pet.id}`,
                query: { 
                  name: pet.name,
                  breed: pet.breed,
                  age: pet.age,
                  img: pet.img,
                  tag: pet.tag,
                  tagColor: pet.tagColor
                }
              }}
              className="px-6 py-2 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow transition-all duration-200"
            >
              View Profile
            </Link>
            {/* Decorative gradient blur */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-400 opacity-20 rounded-full blur-2xl pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}