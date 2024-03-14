export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="pt-8">
        <h1 className="text-3xl font-bold">Hi, I'm Cam Ziny</h1>
        <p className="mt-4">
          I'm a passionate software developer with a love for creating beautiful
          and functional web applications. With a background in computer science
          and a keen eye for design, I aim to bridge the gap between technology
          and user experience.
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">Project Name</h3>
            <p>Short description of the project.</p>
            <a
              href="/project-details"
              className="text-blue-500 hover:underline"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Contact</h2>
        <form className="mt-4"></form>
      </section>
    </div>
  );
}
