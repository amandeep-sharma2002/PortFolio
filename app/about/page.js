export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Page Header */}
      <header className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p className="text-gray-600 dark:text-gray-300">Get to know me better</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold">Hi, I'm Aman Deep Sharma</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a Full Stack Developer with experience in building modern web
            applications using technologies like Laravel, React, and Next.js.
            I enjoy solving complex problems, optimizing performance, and
            creating clean, maintainable code.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Besides coding, I am passionate about learning new technologies,
            contributing to open-source projects, and continuously improving my
            skills.
          </p>

          {/* Quick Skills Highlight */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-center">
              <p className="font-medium">Frontend</p>
              <p className="text-sm text-gray-500">React, Next.js, Vue</p>
            </div>
            <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-center">
              <p className="font-medium">Backend</p>
              <p className="text-sm text-gray-500">PHP, Laravel, Node.js</p>
            </div>
            <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-center">
              <p className="font-medium">Tools</p>
              <p className="text-sm text-gray-500">Git, Docker, Linux</p>
            </div>
          </div>
        </div>

        {/* Image / Avatar Section */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src="/profile.jpg" 
              alt="Aman Deep Sharma"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
