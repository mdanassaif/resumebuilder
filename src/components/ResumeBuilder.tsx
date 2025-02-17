
'use client';

import React, { useState, useEffect, useRef } from 'react';
// import { motion } from "framer-motion";
import { defaultExperiencedTemplate, type ResumeData } from '@/utils/data';
import { ResumeHeader } from './resume/ResumeHeader';
import { BasicInfoForm } from './resume/BasicInfoForm';
import { ResumePreview } from './resume/ResumePreview';
import { ExperienceSection } from './resume/ExperienceSection';
import { SkillsSection } from './resume/SkillsSection';
import { ProjectsSection } from './resume/ProjectsSection';
import { EducationSection } from './resume/EducationSection';
import { CertificationsSection } from './resume/CertificationsSection';

export const ResumeBuilder = () => {
  const [resume, setResume] = useState<ResumeData>(defaultExperiencedTemplate);
  const [showPreview, setShowPreview] = useState(true);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Current resume state:", resume);
  }, [resume]);

  const updateBasics = (field: keyof ResumeData['basics'], value: string) => {
    setResume(prev => ({
      ...prev,
      basics: {
        ...prev.basics,
        [field]: value
      }
    }));
  };

  const updateSummary = (summary: string) => {
    setResume(prev => ({ ...prev, summary }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ResumeHeader 
        showPreview={showPreview}
        setShowPreview={setShowPreview}
        resume={resume}
      />

<div className="pt-20 px-4 flex-1 h-[calc(100vh-5rem)]"> {/* Adjusted height */}
<div className={`grid ${showPreview ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-8 h-full`}>
<div 
          className="overflow-y-auto custom-scrollbar h-[calc(100vh-8rem)] pb-8" // Added fixed height
        >
            <BasicInfoForm
              basics={resume.basics}
              summary={resume.summary}
              updateBasics={updateBasics}
              updateSummary={updateSummary}
            />

            <ExperienceSection
              experience={resume.experience}
              setResume={setResume}
            />

            <SkillsSection
              skills={resume.skills}
              setResume={setResume}
            />

            <ProjectsSection
              projects={resume.projects}
              setResume={setResume}
            />

            <EducationSection
              education={resume.education}
              setResume={setResume}
            />
<CertificationsSection
  certifications={resume.certifications}
  setResume={setResume}
/>
          </div>

          {/* Preview Column */}
          {showPreview && (
          <div className="overflow-y-auto custom-scrollbar h-[calc(100vh-8rem)] pb-8"> {/* Added fixed height */}
            <ResumePreview
              resume={resume}
              previewRef={previewRef}
            />
          </div>
        )}
        </div>
      </div>
    </div>
  );
};
