export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Page Header */}
      <header className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Get in touch with me
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message..."
                rows={5}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-foreground text-background rounded-lg shadow hover:opacity-80"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
          <div className="flex justify-center space-x-6 text-gray-600 dark:text-gray-300">
            <a href="https://github.com/yourusername" target="_blank" className="hover:text-gray-800 dark:hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-gray-800 dark:hover:text-white">
              LinkedIn
            </a>
            <a href="mailto:your@email.com" className="hover:text-gray-800 dark:hover:text-white">
              Email
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
