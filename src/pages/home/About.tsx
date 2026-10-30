function About() {
  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-purple-500 uppercase tracking-[5px] text-sm mb-4">
          About Us
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          We create.
          <br />
          We innovate.
          <br />
          We move forward.
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-12">
          We believe that technology is more than just code.
          It's a tool for creating new opportunities, solving problems
          and building a better future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl">
            <h2 className="text-3xl font-bold text-purple-500">01</h2>
            <h3 className="text-xl font-semibold mt-4">Innovation</h3>
            <p className="text-gray-400 mt-2">
              Always exploring new ideas and possibilities.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl">
            <h2 className="text-3xl font-bold text-purple-500">02</h2>
            <h3 className="text-xl font-semibold mt-4">Creativity</h3>
            <p className="text-gray-400 mt-2">
              Turning imagination into something real.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl">
            <h2 className="text-3xl font-bold text-purple-500">03</h2>
            <h3 className="text-xl font-semibold mt-4">Freedom</h3>
            <p className="text-gray-400 mt-2">
              Creating our own paths without limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About