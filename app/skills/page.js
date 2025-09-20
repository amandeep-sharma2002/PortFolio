export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Page Header */}
      <header className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-2">My Skills</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Technologies and tools I work with
        </p>
      </header>

      {/* Skills Section */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Frontend */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Frontend</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard skill="React" level={90} />
            <SkillCard skill="Next.js" level={85} />
            <SkillCard skill="Vue.js" level={70} />
            <SkillCard skill="HTML/CSS" level={95} />
          </div>
        </section>

        {/* Backend */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Backend</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard skill="Laravel" level={90} />
            <SkillCard skill="Node.js" level={80} />
            <SkillCard skill="PHP" level={85} />
            <SkillCard skill="Express.js" level={75} />
          </div>
        </section>

        {/* Databases */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Databases</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard skill="MySQL" level={90} />
            <SkillCard skill="MongoDB" level={75} />
            <SkillCard skill="PostgreSQL" level={80} />
            <SkillCard skill="Redis" level={60} />
          </div>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tools & Others</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard skill="Git" level={90} />
            <SkillCard skill="Docker" level={70} />
            <SkillCard skill="Linux" level={80} />
            <SkillCard skill="VS Code" level={95} />
          </div>
        </section>
      </main>
    </div>
  );
}

// SkillCard component
function SkillCard({ skill, level }) {
  return (
    <div className="p-4 rounded-lg shadow-sm bg-white dark:bg-gray-800">
      <p className="font-medium mb-2">{skill}</p>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div
          className="h-2 bg-foreground rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-1">{level}%</p>
    </div>
  );
}
