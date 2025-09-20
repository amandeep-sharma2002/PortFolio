import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "QloApps Smart Lock Integration",
      description: "Integrated QloApps PMS with TTLock & Windows DLL APIs.",
      tech: ["PHP", "Python", "API Integration"],
      github: "#",
      demo: "#",
      image: "/projects/lock-integration.png",
    },
    {
      title: "Enhanced Orders Export",
      description: "Module to export hotel orders with advanced filters.",
      tech: ["PHP", "Laravel", "Excel"],
      github: "#",
      demo: "#",
      image: "/projects/orders-export.png",
    },
    // Add more main projects...
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-2">My Projects</h1>
        <p className="text-gray-600 dark:text-gray-300">
          A selection of projects I have worked on
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

        {/* Special Links to Experiments and Modules */}
        <LinkCard
          title="Experiments"
          description="Side projects and small experiments I’ve built"
          href="/projects/experiments"
        />
        <LinkCard
          title="Modules"
          description="Software modules and plugins I have created"
          href="/projects/modules"
        />
      </main>
    </div>
  );
}

// Existing Project Card
function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
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

// Special Card for Linking to Other Pages
function LinkCard({ title, description, href }) {
  return (
    <Link
      href={href}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-center items-center hover:scale-105 transition-transform"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 text-center">{description}</p>
    </Link>
  );
}
