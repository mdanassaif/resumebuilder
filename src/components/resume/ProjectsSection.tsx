
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
 
import type { ResumeData, ProjectType } from '@/utils/data';

interface ProjectsSectionProps {
  projects: ResumeData['projects'];
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export const ProjectsSection = ({ projects, setResume }: ProjectsSectionProps) => {
  const updateProject = (type: ProjectType, value: string, index: number) => {
    setResume(prev => ({
      ...prev,
      projects: {
        ...prev.projects,
        [type]: prev.projects[type].map((project, i) => i === index ? value : project)
      }
    }));
  };

  const addProject = (type: ProjectType) => {
    setResume(prev => ({
      ...prev,
      projects: {
        ...prev.projects,
        [type]: [...prev.projects[type], '']
      }
    }));
   alert("New project added");
  };

  const removeProject = (type: ProjectType, index: number) => {
    setResume(prev => ({
      ...prev,
      projects: {
        ...prev.projects,
        [type]: prev.projects[type].filter((_, i) => i !== index)
      }
    }));
   alert("Project deleted successfully");
  };

  return (
    <section className="mb-6 p-4 bg-white rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Projects</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-md font-medium mb-2">Open Source Projects</h3>
          {projects.openSource.map((project, index) => (
            <div key={index} className="flex items-center mb-2">
              <Input
                type="text"
                value={project}
                onChange={(e) => updateProject('openSource', e.target.value, index)}
                className="mr-2"
                placeholder="Enter open source project details"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeProject('openSource', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => addProject('openSource')}
            className="w-full mt-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Open Source Project
          </Button>
        </div>
        
        <div className="border-t pt-6">
          <h3 className="text-md font-medium mb-2">Personal Projects</h3>
          {projects.personal.map((project, index) => (
            <div key={index} className="flex items-center mb-2">
              <Input
                type="text"
                value={project}
                onChange={(e) => updateProject('personal', e.target.value, index)}
                className="mr-2"
                placeholder="Enter personal project details"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeProject('personal', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => addProject('personal')}
            className="w-full mt-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Personal Project
          </Button>
        </div>
      </div>
    </section>
  );
};
