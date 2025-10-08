import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">About Me</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
                I am an Assistant Professor in the Department of Computer Science, where I lead 
                cutting-edge research in artificial intelligence and machine learning. My work focuses 
                on developing ethical AI systems that are transparent, fair, and beneficial to society.
              </p>

              {/* Education Section */}
              <section className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Education</h2>
                </div>
                
                <div className="space-y-6 ml-13">
                  <div className="border-l-2 border-primary/20 pl-6">
                    <p className="font-semibold text-lg">Ph.D. in Information Technology</p>
                    <p className="text-muted-foreground">Stanford University, 2018</p>
                    <p className="text-sm mt-1">Dissertation: "Ethical Frameworks for Machine Learning Systems"</p>
                  </div>
                  
                  <div className="border-l-2 border-primary/20 pl-6">
                    <p className="font-semibold text-lg">M.S. in Computer Science</p>
                    <p className="text-muted-foreground">MIT, 2014</p>
                  </div>
                  
                  <div className="border-l-2 border-primary/20 pl-6">
                    <p className="font-semibold text-lg">B.S. in Computer Science & Mathematics</p>
                    <p className="text-muted-foreground">UC Berkeley, 2012</p>
                    <p className="text-sm mt-1">Summa Cum Laude</p>
                  </div>
                </div>
              </section>

              {/* Experience Section */}
              <section className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Professional Experience</h2>
                </div>
                
                <div className="space-y-6 ml-13">
                  <div className="border-l-2 border-primary/20 pl-6">
                    <p className="font-semibold text-lg">Assistant Professor</p>
                    <p className="text-muted-foreground">University Name, 2019 - Present</p>
                    <p className="text-sm mt-2">
                      Leading research in AI ethics, machine learning, and human-computer interaction. 
                      Teaching graduate and undergraduate courses in artificial intelligence and data science.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/20 pl-6">
                    <p className="font-semibold text-lg">Postdoctoral Researcher</p>
                    <p className="text-muted-foreground">Carnegie Mellon University, 2018 - 2019</p>
                    <p className="text-sm mt-2">
                      Conducted research on fairness and transparency in machine learning algorithms.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/20 pl-6">
                    <p className="font-semibold text-lg">Research Intern</p>
                    <p className="text-muted-foreground">Google AI, Summer 2017</p>
                    <p className="text-sm mt-2">
                      Developed novel algorithms for improving model interpretability.
                    </p>
                  </div>
                </div>
              </section>

              {/* Research Interests Section */}
              <section className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Research Interests</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ethical AI and Algorithmic Fairness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Machine Learning Interpretability and Transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Human-Computer Interaction in AI Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Natural Language Processing for Social Good</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Privacy-Preserving Machine Learning</span>
                  </li>
                </ul>
              </section>

              {/* Awards Section */}
              <section className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Selected Honors & Awards</h2>
                </div>
                
                <div className="space-y-3 ml-13">
                  <div className="flex justify-between items-start">
                    <p>NSF CAREER Award</p>
                    <p className="text-muted-foreground">2023</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <p>Best Paper Award, NeurIPS</p>
                    <p className="text-muted-foreground">2022</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <p>Google Faculty Research Award</p>
                    <p className="text-muted-foreground">2021</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <p>Outstanding Teaching Award</p>
                    <p className="text-muted-foreground">2020</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
