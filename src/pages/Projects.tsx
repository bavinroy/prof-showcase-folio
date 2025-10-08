import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Fairness in Algorithmic Decision Making",
      description: "Developing frameworks and metrics to assess and improve fairness in machine learning algorithms across different demographic groups.",
      tags: ["AI Ethics", "Fairness", "Machine Learning"],
      funding: "NSF CAREER Award",
      year: "2023-2028",
      publications: 8,
    },
    {
      title: "Interpretable Deep Learning for Healthcare",
      description: "Creating explainable AI models for medical diagnosis that provide transparent reasoning for clinical decision support.",
      tags: ["Deep Learning", "Healthcare AI", "Interpretability"],
      funding: "NIH R01 Grant",
      year: "2022-2027",
      publications: 12,
    },
    {
      title: "Privacy-Preserving Machine Learning",
      description: "Researching techniques for training machine learning models while protecting individual privacy through differential privacy and federated learning.",
      tags: ["Privacy", "Security", "Federated Learning"],
      funding: "Google Faculty Research Award",
      year: "2021-2024",
      publications: 6,
    },
    {
      title: "Human-AI Collaboration Systems",
      description: "Designing interactive systems that effectively combine human expertise with AI capabilities for complex problem-solving tasks.",
      tags: ["HCI", "AI Systems", "Collaboration"],
      funding: "University Research Grant",
      year: "2020-2024",
      publications: 10,
    },
    {
      title: "Natural Language Understanding for Social Good",
      description: "Applying NLP techniques to analyze and address social issues, including misinformation detection and accessibility improvements.",
      tags: ["NLP", "Social Impact", "Text Analysis"],
      funding: "Industry Partnership",
      year: "2022-Present",
      publications: 7,
    },
    {
      title: "Robust Machine Learning Under Distribution Shift",
      description: "Developing ML models that maintain performance when deployed in environments different from training conditions.",
      tags: ["Robustness", "Domain Adaptation", "ML Theory"],
      funding: "DARPA Award",
      year: "2023-2026",
      publications: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Projects</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                My research focuses on developing ethical, transparent, and beneficial AI systems. 
                Below are current and recent projects that advance the state of the art in artificial 
                intelligence and machine learning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-300 border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    </div>
                    <CardDescription className="text-sm">
                      {project.year} • {project.funding}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{project.publications}</span> publications
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 p-8 bg-accent/30 rounded-xl border border-border">
              <h2 className="text-2xl font-bold mb-4">Collaboration Opportunities</h2>
              <p className="text-muted-foreground mb-4">
                I am always interested in collaborating with researchers, students, and industry partners 
                on innovative AI projects. If you're interested in working together or learning more about 
                any of these projects, please don't hesitate to reach out.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Graduate Students:</strong> I am currently accepting Ph.D. students for Fall 2025. 
                Please apply through the university admissions process and mention my name in your application.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
