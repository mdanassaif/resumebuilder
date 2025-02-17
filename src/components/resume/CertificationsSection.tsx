import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import type { ResumeData } from '@/utils/data';

interface CertificationsSectionProps {
  certifications: string[];
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export const CertificationsSection = ({ certifications, setResume }: CertificationsSectionProps) => {
  const addCertification = () => {
    setResume(prev => ({
      ...prev,
      certifications: [...prev.certifications, '']
    }));
    alert("New certification added");
  };

  const updateCertification = (index: number, value: string) => {
    setResume(prev => ({
      ...prev,
      certifications: prev.certifications.map((cert, i) => 
        i === index ? value : cert
      )
    }));
  };

  const removeCertification = (index: number) => {
    setResume(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index)
    }));
    alert("Certification deleted successfully");
  };

  return (
    <section className="mb-6 p-4 bg-white rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Certifications</h2>
      {certifications.map((cert, index) => (
        <div key={index} className="flex items-center mb-2">
          <Input
            type="text"
            value={cert}
            onChange={(e) => updateCertification(index, e.target.value)}
            className="mr-2"
            placeholder="Enter certification details"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => removeCertification(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button
        variant="secondary"
        size="sm"
        onClick={addCertification}
        className="w-full mt-2"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Certification
      </Button>
    </section>
  );
};