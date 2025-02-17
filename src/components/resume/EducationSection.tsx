
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
// import { toast } from "sonner";
import type { ResumeData, EducationType } from '@/utils/data';

interface EducationSectionProps {
  education: ResumeData['education'];
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export const EducationSection = ({ education, setResume }: EducationSectionProps) => {
  const addEducation = () => {
    const newId = education.length > 0 ? Math.max(...education.map(edu => edu.id)) + 1 : 1;
    const newEducation: EducationType = {
      id: newId,
      degree: '',
      school: '',
      date: ''
    };
    
    setResume(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }));
    alert("New education added");
  };

  const updateEducation = (id: number, field: keyof EducationType, value: string) => {
    setResume(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (id: number) => {
    setResume(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
    alert("Education deleted successfully");
  };

  return (
    <section className="mb-6 p-4 bg-white rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Education</h2>
      {education.map((edu) => (
        <div key={edu.id} className="mb-4 p-3 rounded-md border border-gray-200">
          <div className="grid gap-4">
            <div>
              <label htmlFor={`degree-${edu.id}`} className="block text-sm font-medium text-gray-700">Degree</label>
              <Input
                type="text"
                id={`degree-${edu.id}`}
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor={`school-${edu.id}`} className="block text-sm font-medium text-gray-700">School</label>
              <Input
                type="text"
                id={`school-${edu.id}`}
                value={edu.school}
                onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor={`date-${edu.id}`} className="block text-sm font-medium text-gray-700">Date</label>
              <Input
                type="text"
                id={`date-${edu.id}`}
                value={edu.date}
                onChange={(e) => updateEducation(edu.id, 'date', e.target.value)}
                className="mt-1"
                placeholder="e.g., 2014 - 2018"
              />
            </div>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => removeEducation(edu.id)}
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
        onClick={addEducation}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Education
      </Button>
    </section>
  );
};
