import { Code2, Lightbulb, Rocket, User } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Developing complete web solutions from frontend interfaces to backend integration.",
  },
  {
    icon: Rocket,
    title: "Responsive Design",
    description: "Building interfaces that adapt seamlessly across different screen sizes and devices.",
  },
  {
    icon: User,
    title: "Database Management",
    description: "Handling data efficiently using PostgreSQL and structured queries.",
  },
  {
    icon: Lightbulb,
    title: "Debugging & Troubleshooting",
    description: "Resolving errors in code, system behavior, and application performance",
  },
];

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*Left Column*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Turning ideas into scalable,
                    <span className="font-serif italic font-normal text-white"> 
                        {" "}
                        user-friendly applications.</span>
                </h2>
                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                        I am a Full Stack System Developer currently working at Brother Industry,
                         with hands-on experience in building and maintaining web-based applications. 
                         I specialize in developing responsive, user-friendly interfaces using technologies such as React.js and Tailwind CSS, 
                         while ensuring smooth integration with backend systems and databases.

                    </p>
                    <p>
                        In my current role, I contribute to real-world systems by supporting both frontend and backend functionalities,
                         resolving technical issues, and improving overall system performance. My experience also includes working with PostgreSQL, 
                         handling system processes, and troubleshooting features related to system connectivity and hardware integration.

                    </p>
                    <p>
                        I am adaptable and continuously learning, especially in environments with limited documentation, 
                        allowing me to quickly understand system workflows and deliver effective solutions. 
                        I am passionate about creating efficient, scalable, and user-centered digital systems.

                    </p>
                </div>
                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                        "To continuously improve as a developer while building reliable and user-friendly systems that deliver real-world impact."
                    </p>
                </div>
                </div>
                {/*Right Column - Highlights*/}
                <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" 
                style={{animationDelay:`${(idx + 1) * 100}ms`}}>
    
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                      <item.icon className="w-6 h-6 text-primary" />
                 </div>

                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>

                  </div>
                  ))}
                </div>
            </div>
        </div>
    </section>
    );
};