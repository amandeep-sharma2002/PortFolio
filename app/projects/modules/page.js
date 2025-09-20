export default function ModulesPage() {
  // Example modules data
  const modules = [
    {
      title: "Enhanced Orders Export",
      description:
        "Module to export hotel orders with advanced filters and Excel integration for QloApps.",
      tech: ["PHP", "Laravel", "Excel"],
      github: "#",
      demo: "#",
      image: "/modules/orders-export.png",
    },
    {
      title: "Partial Booking Support",
      description:
        "Custom QloApps module to handle partial bookings and update order statuses dynamically.",
      tech: ["PHP", "MySQL", "QloApps"],
      github: "#",
      demo: "#",
      image: "/modules/partial-booking.png",
    },
    {
      title: "Smart Lock Integration",
      description:
        "Module to integrate QloApps PMS with TTLock & Windows DLL API for guest room access.",
      tech: ["PHP", "Python", "API"],
      github: "#",
      demo: "#",
      image: "/modules/smart-lock.png",
    },
    {
      title: "Custom Hotel Services",
      description:
        "Module to manage hourly services, additional charges, and optional service availability in QloApps.",
      tech: ["PHP", "JS", "MySQL"],
      github: "#",
      demo: "#",
      image: "/modules/hotel-services.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Page Header */}
      <header className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-2">Modules</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Software modules and plugins I have built
        </p>
      </header>

      {/* Modules Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((module, index) => (
          <ModuleCard key={index} module={module} />
        ))}
      </main>
    </div>
  );
}

// Module Card Component
function ModuleCard({ module }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
      {module.image && (
        <img
          src={module.image}
          alt={module.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
          {module.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {module.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-4">
          {module.github && (
            <a
              href={module.github}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          )}
          {module.demo && (
            <a
              href={module.demo}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
