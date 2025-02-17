
 
import type { ResumeData } from '@/utils/data';

interface ResumePreviewProps {
  resume: ResumeData;
  previewRef: React.RefObject<HTMLDivElement>;
}

export const ResumePreview = ({ resume, previewRef }: ResumePreviewProps) => {
  return (
    <div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-y-auto custom-scrollbar bg-white rounded-lg shadow-sm p-8"
    >
      <div ref={previewRef} className="max-w-[650px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">{resume.basics.name}</h1>
          <p className="text-gray-600 mb-4">{resume.basics.title}</p>
          <div className="flex items-center justify-center space-x-4 text-gray-500 text-sm">
            <span>{resume.basics.email}</span>
            <span>•</span>
            <span>{resume.basics.linkedin}</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-3">Professional Summary</h2>
          <p className="text-gray-700 text-sm leading-relaxed">{resume.summary}</p>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-3">Professional Experience</h2>
          {resume.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-800">{exp.role}</span>
                  <span className="text-gray-600 mx-2">|</span>
                  <span className="text-gray-600">{exp.company}</span>
                </div>
                <span className="text-gray-500 text-sm">{exp.date}</span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-3">Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Technical Skills</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {resume.skills.technical.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Soft Skills</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {resume.skills.soft.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-3">Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Open Source</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {resume.projects.openSource.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Personal</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {resume.projects.personal.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-3">Education</h2>
          {resume.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="font-semibold text-gray-800">{edu.degree}</div>
              <div className="text-gray-600">{edu.school}</div>
              <div className="text-gray-500 text-sm">{edu.date}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-3">Certifications</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {resume.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
