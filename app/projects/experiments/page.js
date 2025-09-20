export default function ExperimentsPage() {
  // Example experiments data
  const experiments = [
    {
      title: "Weather App",
      description:
        "A simple weather forecasting app using OpenWeatherMap API and React.",
      tech: ["React", "API", "CSS"],
      github: "#",
      demo: "#",
      image: "/projects/weather-app.png",
    },
    {
      title: "Markdown Editor",
      description:
        "A live markdown editor with preview built with React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "#",
      demo: "#",
      image: "/projects/markdown-editor.png",
    },
    {
      title: "Todo App with Local Storage",
      description:
        "A lightweight todo app using vanilla JS and localStorage for persistence.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "#",
      demo: "#",
      image: "/projects/todo-app.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Page Header */}
      <header className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-2">Experiments</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Side projects and small experiments I’ve built
        </p>
      </header>

      {/* Experiments Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiments.map((experiment, index) => (
          <ExperimentCard key={index} experiment={experiment} />
        ))}
      </main>
    </div>
  );
}

// Experiment Card Component
function ExperimentCard({ experiment }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
      {experiment.image && (
        <img
          src={experiment.image}
          alt={experiment.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-2">{experiment.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
          {experiment.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {experiment.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-4">
          {experiment.github && (
            <a
              href={experiment.github}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          )}
          {experiment.demo && (
            <a
              href={experiment.demo}
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
