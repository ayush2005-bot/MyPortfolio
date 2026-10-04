import { Code, User, Briefcase } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 pc-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground font-semibold">
              Motivated and detail-oriented BCA Student with a strong foundation
              in computer applications and a growing expertise in Mern Stack
              Development.
            </p>
            <p className="text-muted-foreground font-semibold">
              Skilled in problem-solving, programming fundamentals, and building
              responsive web applications, Eager to apply academic knowledge and
              practical skills to real-world projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border rounded-2xl  p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                      Creating responsive websites and web applications with
                      modern frameworks.
                    </p>
                </div>
              </div>
            </div>
            <div className="gradient-border rounded-2xl  p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Programming Fundamentals
                    </h4>
                    <p className="text-muted-foreground">
                      Strong foundation in programming fundamentals, including
                      problem-solving, algorithm, data structures, and core
                      programming concepts.
                    </p>
                </div>
              </div>
            </div>
            <div className="gradient-border rounded-2xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Project Management
                    </h4>
                    <p className="text-muted-foreground">
                      Leading Projects from conception to completion with agile
                      methodologies.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
