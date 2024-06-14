import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800 mb-4">401</h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-8">Oops! We do not have permission to access the camera. Please allow access when open this verivication</p>
        <a href="#" className="px-6 py-3 bg-blue-400 text-white rounded-full hover:bg-blue-700 transition duration-300">
          Refresh
        </a>
      </div>
    </main>
  );
}
