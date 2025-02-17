
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import type { ResumeData, SkillType } from '@/utils/data';

interface SkillsSectionProps {
  skills: ResumeData['skills'];
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export const SkillsSection = ({ skills, setResume }: SkillsSectionProps) => {
  const updateSkills = (type: SkillType, value: string, index: number) => {
    setResume(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [type]: prev.skills[type].map((skill, i) => i === index ? value : skill)
      }
    }));
  };

  const addSkill = (type: SkillType) => {
    setResume(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [type]: [...prev.skills[type], '']
      }
    }));
    alert("New skill added");
  };

  const removeSkill = (type: SkillType, index: number) => {
    setResume(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [type]: prev.skills[type].filter((_, i) => i !== index)
      }
    }));
    alert("Skill deleted successfully");
  };

  return (
    <section className="mb-6 p-4 bg-white rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Skills</h2>
      <div className="grid gap-6">
        <div>
          <h3 className="text-md font-medium mb-2">Technical Skills</h3>
          {skills.technical.map((skill, index) => (
            <div key={index} className="flex items-center mb-2">
              <Input
                type="text"
                value={skill}
                onChange={(e) => updateSkills('technical', e.target.value, index)}
                className="mr-2"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeSkill('technical', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => addSkill('technical')}
            className="w-full mt-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Technical Skill
          </Button>
        </div>
        
        <div>
          <h3 className="text-md font-medium mb-2">Soft Skills</h3>
          {skills.soft.map((skill, index) => (
            <div key={index} className="flex items-center mb-2">
              <Input
                type="text"
                value={skill}
                onChange={(e) => updateSkills('soft', e.target.value, index)}
                className="mr-2"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeSkill('soft', index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            variant="secondary"
            size="sm"
            onClick={() => addSkill('soft')}
            className="w-full mt-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Soft Skill
          </Button>
        </div>
      </div>
    </section>
  );
};
