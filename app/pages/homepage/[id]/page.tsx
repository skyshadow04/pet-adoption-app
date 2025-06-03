"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import NavigationBar from "../../parts/navigation/navigation-bar";

export default function PetProfile() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get data from query params
  const name = searchParams.get("name");
  const breed = searchParams.get("breed");
  const age = searchParams.get("age");
  const img = searchParams.get("img");
  const tag = searchParams.get("tag");
  const tagColor = searchParams.get("tagColor");

  // Example extra details (you can expand this or fetch from a real API)
  const details = [
    {
      label: "Temperament",
      value: breed?.toLowerCase().includes("cat")
        ? "Calm, Curious, Independent"
        : breed?.toLowerCase().includes("retriever")
        ? "Friendly, Loyal, Energetic"
        : "Playful, Loving",
    },
    {
      label: "Vaccinated",
      value: "Yes",
    },
    {
      label: "Adoption Fee",
      value: "₱1,000",
    },
    {
      label: "Location",
      value: "Metro Manila",
    },
  ];

  if (!name || !breed || !age || !img) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Pet not found</h1>
        <p className="text-gray-500">No pet data was provided.</p>
      </div>
    );
  }

  return (
    <>
        <NavigationBar />
        <div className="flex flex-col items-center justify-center min-h-screen px-4 dark:bg-gray-900">
          <div className="relative dark:bg-gray-900/90 shadow-2xl rounded-3xl p-10 max-w-md w-full mt-16 mb-16 overflow-hidden">
              {/* Decorative gradient blur */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-400 opacity-20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-2xl pointer-events-none" />

              {/* Modern Back Button */}
              <button
              onClick={() => router.push("/")}
              className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-orange-600 dark:text-orange-400 font-semibold shadow hover:bg-orange-100 dark:hover:bg-gray-700 transition-all duration-200 border border-orange-200 dark:border-gray-700"
              >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
              </button>

              <div className="flex flex-col items-center mb-6">
              <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                  src={img}
                  alt={name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                  priority
                  />
                  {tag && (
                  <span className={`absolute top-3 left-3 ${tagColor} text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold`}>
                      {tag}
                  </span>
                  )}
              </div>
              <h1 className="text-3xl font-extrabold dark:text-gray-100 mb-2 text-center tracking-tight">
                  {name}
              </h1>
              <p className="text-lg text-orange-600 dark:text-orange-400 text-center font-semibold mb-1">{breed}</p>
              <p className="dark:text-gray-400 text-center mb-4">{age}</p>
              </div>
              <div className="mb-6">
              <ul className="space-y-2">
                  {details.map((d) => (
                  <li key={d.label} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="dark:text-gray-200">
                      <span className="font-semibold">{d.label}:</span> {d.value}
                      </span>
                  </li>
                  ))}
              </ul>
              </div>
              <button className="w-full py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-lg transition-all duration-200 text-lg">
              Adopt {name}
              </button>
          </div>
        </div>
    </>
  );
}