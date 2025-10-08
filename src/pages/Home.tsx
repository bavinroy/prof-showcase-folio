import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import professorPhoto from "@/assets/professor-photo.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-up">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4">
                    R . BAVIN KUMAR
                  </h1>
                  <p className="text-xl md:text-2xl text-primary font-medium mb-6">
                    Assistant Professor of Computer Science
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Passionate researcher and educator specializing in artificial intelligence, 
                    machine learning, and human-computer interaction. Dedicated to advancing 
                    knowledge and inspiring the next generation of innovators.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link to="/projects">
                    <Button size="lg" className="group">
                      View Research
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative animate-fade-in">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background ring-1 ring-border">
                  <img
                    src={professorPhoto}
                    alt="Dr. Sarah Thompson"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20" />
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary rounded-full blur-3xl opacity-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Academic Excellence</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Research Publications</h3>
                <p className="text-muted-foreground">
                  Over 25 peer-reviewed publications in top-tier conferences and journals, 
                  contributing to advances in machine learning and AI ethics.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Student Mentorship</h3>
                <p className="text-muted-foreground">
                  Dedicated to guiding graduate and undergraduate students through 
                  groundbreaking research projects and career development.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Awards & Recognition</h3>
                <p className="text-muted-foreground">
                  Recipient of the NSF CAREER Award and Best Paper Award at leading 
                  AI conferences for innovative research contributions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
