
import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
import { Eye, EyeOff, Download } from "lucide-react";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from '@/components/ResumePDF';
import type { ResumeData } from '@/utils/data';

interface ResumeHeaderProps {
  showPreview: boolean;
  setShowPreview: (show: boolean) => void;
  resume: ResumeData;
}

export const ResumeHeader = ({ showPreview, setShowPreview, resume }: ResumeHeaderProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-yellow-600">
                <path fill="currentColor" d="m8.632 6.026l2.082 8.331l8.143-2.382V12A6.858 6.858 0 1 1 8.632 6.026"/>
                <path fill="currentColor" d="m10.457 5.315l1.757 6.257l6.326-1.633a6.8 6.8 0 0 0-.715-1.556L13.5 9.643l-1.17-4.491a7 7 0 0 0-1.873.167z"/>
              </svg>
              <span className="text-xl font-bold text-gray-900">ResumeBuilder</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowPreview(!showPreview)}
              className="transition-all duration-200 hover:bg-gray-100"
            >
              {showPreview ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </Button>
            <PDFDownloadLink document={<ResumePDF resume={resume} />} fileName="resume.pdf">
              {({ loading }) => (
                <Button className="bg-yellow-600 hover:bg-yellow-700 transition-colors">
                  {loading ? "Generating..." : (
                    <>
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </>
                  )}
                </Button>
              )}
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
