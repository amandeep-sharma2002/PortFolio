export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      {/* Navbar */}
      <header className="w-full px-8 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold">Aman Deep Sharma</h1>
        <nav className="space-x-6">
          <a href="/about" className="hover:text-gray-500">About</a>
          <a href="/skills" className="hover:text-gray-500">Skills</a>
          <a href="/projects" className="hover:text-gray-500">Projects</a>
          <a href="/contact" className="hover:text-gray-500">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m Aman 👋
        </h2>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
          Software Engineer specializing in Laravel, React, Next.js, and
          building scalable web applications with modern tools like Docker and Git.
        </p>
        <div className="space-x-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-foreground text-background rounded-lg shadow hover:opacity-80"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-foreground rounded-lg hover:bg-foreground hover:text-background"
          >
            Contact Me
          </a>
        </div>
      </main>

      {/* Quick Skills Preview */}
      <section className="py-12 px-6 text-center bg-gray-50 dark:bg-gray-900">
        <h3 className="text-2xl font-semibold mb-6">Skills Snapshot</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
            <p className="font-medium">Frontend</p>
            <p className="text-sm text-gray-500">React, Next.js, Vue</p>
          </div>
          <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
            <p className="font-medium">Backend</p>
            <p className="text-sm text-gray-500">PHP, Laravel, Node.js</p>
          </div>
          <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
            <p className="font-medium">Databases</p>
            <p className="text-sm text-gray-500">MySQL, MongoDB</p>
          </div>
          <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
            <p className="font-medium">Tools</p>
            <p className="text-sm text-gray-500">Git, Docker, Linux</p>
          </div>
        </div>
      </section>
    </div>
  );
}
