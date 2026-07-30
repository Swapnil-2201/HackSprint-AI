// src/app/pitch/DownloadPitch.jsx

import { Download, FileText } from "lucide-react";
import jsPDF from "jspdf";

const DownloadPitch = ({ pitch }) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(22);
    doc.text("HackSprint AI Coach", 20, y);

    y += 15;

    doc.setFontSize(18);
    doc.text("Project Pitch Report", 20, y);

    y += 15;

    const sections = [
      {
        title: "Project Title",
        content: pitch.title,
      },
      {
        title: "Problem Statement",
        content: pitch.problem,
      },
      {
        title: "Solution",
        content: pitch.solution,
      },
      {
        title: "Target Audience",
        content: pitch.targetAudience,
      },
      {
        title: "Unique Selling Point",
        content: pitch.usp,
      },
      {
        title: "Technology Stack",
        content: pitch.techStack,
      },
      {
        title: "Business Model",
        content: pitch.businessModel,
      },
      {
        title: "Future Scope",
        content: pitch.futureScope,
      },
      {
        title: "Conclusion",
        content: pitch.conclusion,
      },
    ];

    sections.forEach((section) => {
      if (y > 260) {
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(15);
      doc.setFont(undefined, "bold");
      doc.text(section.title, 20, y);

      y += 8;

      doc.setFont(undefined, "normal");
      doc.setFontSize(12);

      const lines = doc.splitTextToSize(
        section.content || "N/A",
        170
      );

      doc.text(lines, 20, y);

      y += lines.length * 7 + 10;
    });

    doc.save(`${pitch.title || "Pitch"}-Report.pdf`);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
    >
      <Download size={18} />
      Download PDF
    </button>
  );
};

export default DownloadPitch;