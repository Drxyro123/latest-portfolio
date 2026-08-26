
const projects = [
    {
        title:"Maintenance Status Monitoring System",
        description:"A real-time monitoring system used to track machine breakdowns, maintenance status, repair progress, technician assignments, and downtime across production lines.",
        image:"/msms_dashboard.png",
        tags:["C#","C++","Arduino","VS Studio", "ASP.NET"],
    },
    {
        title:"Tape Casette Inventory Control System",
        description:"A system developed for a tape cassette manufacturing facility to automate inventory tracking, improve production accuracy, manage blade lifecycles, and enhance production visibility.",
        image:"/tcics.png",
        tags:["VB.NET","PHP","VS Studio","VS Code"],
    },
    // {
    //     title:"Outbound Request System",
    //     description:"",
    //     image:"/ors.png",
    //     tags:["PHP","VS Studio"],
    // },
]


export const Projects = () => {
    return( <section id="projects" className="py-32 relative overflow-hidden">
        {/*bg glows*/}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute buttom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
        {/*Section Header*/}
        <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                Creating smarter
                <span className="font-serif italic font-normal text-white"> digital system.</span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
                A selection of projects focused on developing responsive applications and system solutions that improve efficiency, usability, and operational workflow.
            </p>
          </div>
          {/*Section Header*/}
          <div className="grid md:grid-cols-2 gap-8">
 {projects.map((project, idx) => (
  <div
    key={idx}
    className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
  >
    {/* IMAGE */}
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
    </div>

    {/* CONTENT */}
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground">
        {project.description || "No description available."}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, tagIdx) => (
          <span
            key={tagIdx}
            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
))}
</div>
        </div>
        </section>
    );
};