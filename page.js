export default function Home() {
  return (
    <main className="bg-gradient-to-b from-sky-100 to-white min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-[url('/plane-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="text-5xl md:text-7xl font-bold text-white relative z-10">
          Fly Smarter. Fly Skyline.
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white relative z-10">
          Book your dream destination in minutes
        </p>
        <div className="mt-8 flex bg-white rounded-full shadow-lg p-2 relative z-10">
          <input
            type="text"
            placeholder="Where to?"
            className="px-4 py-2 rounded-full outline-none flex-1"
          />
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full">
            Search
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {[
          { title: "Best Deals", icon: "💸" },
          { title: "Worldwide Destinations", icon: "🌍" },
          { title: "24/7 Support", icon: "☎️" },
          { title: "Easy Booking", icon: "🛫" },
        ].map((item, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-bold text-lg">{item.title}</h3>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Skyline Airlines — All Rights Reserved</p>
      </footer>
    </main>
  );
}