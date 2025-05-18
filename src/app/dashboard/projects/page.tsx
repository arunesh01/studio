
import { CardComponent } from "@/components/CardComponent";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle, PlusCircle, Filter } from "lucide-react";
import Link from "next/link";

const projects = [
  { 
    id: "P001", 
    title: "Website Redesign for Acme Corp", 
    status: "In Progress", 
    progress: 65, 
    deadline: "2024-08-15", 
    team: ["Alice", "Bob"], 
    icon: <Clock className="h-5 w-5 text-blue-500" />,
    client: "Acme Corp"
  },
  { 
    id: "P002", 
    title: "Cloud Migration for Beta LLC", 
    status: "Completed", 
    progress: 100, 
    deadline: "2024-05-30", 
    team: ["Charlie"], 
    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    client: "Beta LLC"
  },
  { 
    id: "P003", 
    title: "Cybersecurity Audit for Gamma Inc", 
    status: "Pending", 
    progress: 10, 
    deadline: "2024-09-01", 
    team: ["David", "Eve"], 
    icon: <AlertCircle className="h-5 w-5 text-yellow-500" />,
    client: "Gamma Inc"
  },
  { 
    id: "P004", 
    title: "Mobile App Development", 
    status: "In Progress", 
    progress: 30, 
    deadline: "2024-11-20", 
    team: ["Frank", "Grace"], 
    icon: <Clock className="h-5 w-5 text-blue-500" />,
    client: "Delta Solutions"
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Projects</h1>
          <p className="text-muted-foreground">Track and manage all ongoing and completed projects.</p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add New Project
            </Button>
        </div>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <CardComponent
            key={project.id}
            title={project.title}
            icon={project.icon}
            className="shadow-md hover:shadow-lg transition-shadow"
            link={`/dashboard/projects/${project.id}`}
            linkText="View Details"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Client: {project.client}</span>
                <Badge variant={project.status === "Completed" ? "default" : (project.status === "Pending" ? "outline" : "secondary")}>
                  {project.status}
                </Badge>
              </div>
              <div>
                <div className="flex justify-between text-sm text-muted-foreground mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} aria-label={`${project.progress}% complete`} />
              </div>
              <p className="text-sm text-muted-foreground">Deadline: {new Date(project.deadline).toLocaleDateString()}</p>
              <div className="text-sm text-muted-foreground">
                Team: {project.team.join(", ")}
              </div>
            </div>
          </CardComponent>
        ))}
      </div>
    </div>
  );
}
