
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
 
import type { ResumeData } from '@/utils/data';

interface ExperienceSectionProps {
  experience: ResumeData['experience'];
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export const ExperienceSection = ({ experience, setResume }: ExperienceSectionProps) => {
  const addExperience = () => {
    const newId = experience.length > 0 ? Math.max(...experience.map(exp => exp.id)) + 1 : 1;
    const newExperience = {
      id: newId,
      role: '',
      company: '',
      date: '',
      achievements: []
    };
    
    setResume(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));
    alert("New experience added");
  };

  const updateExperience = (id: number, field: keyof ResumeData['experience'][0], value: string | string[]) => {
    setResume(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (id: number) => {
    setResume(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
    alert("Experience deleted successfully");
  };

  return (
    <section className="mb-6 p-4 bg-white rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Experience</h2>
      {experience.map((exp) => (
        <div key={exp.id} className="mb-4 p-3 rounded-md border border-gray-200">
          <div className="grid gap-4">
            <div>
              <label htmlFor={`role-${exp.id}`} className="block text-sm font-medium text-gray-700">Role</label>
              <Input
                type="text"
                id={`role-${exp.id}`}
                value={exp.role}
                onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor={`company-${exp.id}`} className="block text-sm font-medium text-gray-700">Company</label>
              <Input
                type="text"
                id={`company-${exp.id}`}
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor={`date-${exp.id}`} className="block text-sm font-medium text-gray-700">Date</label>
              <Input
                type="text"
                id={`date-${exp.id}`}
                value={exp.date}
                onChange={(e) => updateExperience(exp.id, 'date', e.target.value)}
                className="mt-1"
                placeholder="e.g., 2020 - Present"
              />
            </div>
            <div>
              <label htmlFor={`achievements-${exp.id}`} className="block text-sm font-medium text-gray-700">Achievements</label>
              <Textarea
                id={`achievements-${exp.id}`}
                value={exp.achievements.join('\n')}
                onChange={(e) => updateExperience(exp.id, 'achievements', e.target.value.split('\n'))}
                className="mt-1"
                placeholder="Enter each achievement on a new line"
              />
            </div>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => removeExperience(exp.id)}
            className="mt-3"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      ))}
      <Button
        variant="secondary"
        size="sm"
        onClick={addExperience}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Experience
      </Button>
    </section>
  );
};
