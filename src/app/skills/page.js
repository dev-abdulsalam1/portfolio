import { Code2, Database, Layout, Server, GitBranch, Blocks } from "lucide-react";


const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
<<<<<<< HEAD
    items: ["Node.js", "Express", "REST APIs",],
=======
    items: ["Node.js", "Express", "REST APIs", "GraphQL"],
>>>>>>> 52b5a41 (last polsih portfolio)
  },
  {
    category: "Database",
    icon: Database,
<<<<<<< HEAD
    items: ["MongoDB", "PostgreSQL", "Supabase"],
=======
    items: ["MongoDB", "PostgreSQL", "Redis", "Supabase"],
>>>>>>> 52b5a41 (last polsih portfolio)
  },
  {
    category: "Tools",
    icon: Code2,
    items: ["Git", "Docker", "VS Code", "Postman"],
  },
  {
    category: "Version Control",
    icon: GitBranch,
<<<<<<< HEAD
    items: ["GitHub", "CI/CD", "GitHub Actions"],
=======
    items: ["GitHub", "GitLab", "CI/CD", "GitHub Actions"],
>>>>>>> 52b5a41 (last polsih portfolio)
  },
  {
    category: "Other",
    icon: Blocks,
    items: ["Figma", "Responsive Design", "SEO", "Testing"],
  },
];

export default function Skills() {

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            My Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-muted-foreground">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className="group p-8 rounded-2xl border-2 border-border hover:border-foreground transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-muted group-hover:bg-foreground transition-colors duration-300">
                    <Icon className="h-6 w-6 group-hover:text-background transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
