

export default function PetCategory() {
  return (
    <div className="container mx-auto p-4 bg-blue-100">
      <h1 className="text-2xl font-bold mb-4">Pet Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col text-center items-center">
          <img
            src="https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/homepage-assets/dog-1-o80AruQW3fUqXqWzhBrG3qqGCB5vX7.jpg"
            alt="Dogs"
            className="rounded-t-lg mb-4 w-full h-48 object-cover"
          />
          <h2 className="text-xl font-semibold">Dogs</h2>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col text-center items-center">
          <img
            src="https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/homepage-assets/cat-1-KFpOapF8YwHn8qqFV0LFCA3mmZ78Sf.jpg"
            alt="Cats"
            className="rounded-t-lg mb-4 w-full h-48 object-cover"
          />
          <h2 className="text-xl font-semibold">Cats</h2>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col text-center items-center">
          <img
            src="https://cjzyc1shhmqalkdp.public.blob.vercel-storage.com/assets/homepage-assets/dog-2-4CKYarGtM8S4xJGUbewmMRj8Ig5TdF.jpg"
            alt="Birds"
            className="rounded-t-lg mb-4 w-full h-48 object-cover"
          />
          <h2 className="text-xl font-semibold">Birds</h2>
        </div>
      </div>
    </div>
  );
}