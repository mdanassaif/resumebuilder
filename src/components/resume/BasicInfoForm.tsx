
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ResumeData } from '@/utils/data';

interface BasicInfoFormProps {
  basics: ResumeData['basics'];
  summary: string;
  updateBasics: (field: keyof ResumeData['basics'], value: string) => void;
  updateSummary: (summary: string) => void;
}

export const BasicInfoForm = ({ basics, summary, updateBasics, updateSummary }: BasicInfoFormProps) => {
  return (
    <section className="mb-6 p-4 bg-white rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Basic Information</h2>
      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input
            type="text"
            id="name"
            value={basics.name}
            onChange={(e) => updateBasics('name', e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <Input
            type="text"
            id="title"
            value={basics.title}
            onChange={(e) => updateBasics('title', e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Input
            type="email"
            id="email"
            value={basics.email}
            onChange={(e) => updateBasics('email', e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn</label>
          <Input
            type="url"
            id="linkedin"
            value={basics.linkedin}
            onChange={(e) => updateBasics('linkedin', e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Professional Summary</label>
          <Textarea
            id="summary"
            value={summary}
            onChange={(e) => updateSummary(e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
    </section>
  );
};
