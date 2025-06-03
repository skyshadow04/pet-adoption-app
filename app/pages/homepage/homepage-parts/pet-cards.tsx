import Image from "next/image";
export default function PetCards() {
  return (
    <>
        <div className="container mx-auto p-4 bg-amber-100">
            <h1 className="text-2xl font-bold mb-4">Featured Pets</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col text-center items-center">
                    <Image
                        src="/assets/homepage-assets/dog-1.jpg"
                        alt="Pet 1"
                        width={500}
                        height={400}
                        className="rounded-t-lg mb-4"></Image>
                    <h2 className="text-xl font-semibold">Buddy</h2>
                    <p>Breed: Golden Retriever</p>
                    <p>Age: 2 years</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col text-center items-center">
                    <Image
                        src="/assets/homepage-assets/dog-1.jpg"
                        alt="Pet 1"
                        width={500}
                        height={400}
                        className="rounded-t-lg mb-4"></Image>
                    <h2 className="text-xl font-semibold">Buddy</h2>
                    <p>Breed: Golden Retriever</p>
                    <p>Age: 2 years</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col text-center items-center">
                    <Image
                        src="/assets/homepage-assets/dog-1.jpg"
                        alt="Pet 1"
                        width={500}
                        height={400}
                        className="rounded-t-lg mb-4"></Image>
                    <h2 className="text-xl font-semibold">Buddy</h2>
                    <p>Breed: Golden Retriever</p>
                    <p>Age: 2 years</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col text-center items-center">
                    <Image
                        src="/assets/homepage-assets/dog-1.jpg"
                        alt="Pet 1"
                        width={500}
                        height={400}
                        className="rounded-t-lg mb-4"></Image>
                    <h2 className="text-xl font-semibold">Buddy</h2>
                    <p>Breed: Golden Retriever</p>
                    <p>Age: 2 years</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col text-center items-center">
                    <Image
                        src="/assets/homepage-assets/dog-1.jpg"
                        alt="Pet 1"
                        width={500}
                        height={400}
                        className="rounded-t-lg mb-4"></Image>
                    <h2 className="text-xl font-semibold">Buddy</h2>
                    <p>Breed: Golden Retriever</p>
                    <p>Age: 2 years</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 flex flex-col text-center items-center">
                    <Image
                        src="/assets/homepage-assets/dog-1.jpg"
                        alt="Pet 1"
                        width={500}
                        height={400}
                        className="rounded-t-lg mb-4"></Image>
                    <h2 className="text-xl font-semibold">Buddy</h2>
                    <p>Breed: Golden Retriever</p>
                    <p>Age: 2 years</p>
                </div>
            </div>

        </div>
    </>

  );
}