// src/app/idea/IdeaForm.jsx

import Input from "@components/shared/Input";
import Textarea from "@components/shared/Textarea";

const IdeaForm = ({ formData, onChange }) => {
  return (
    <div className="grid grid-cols-1 gap-6">

      {/* Project Title */}

      <Input
        label="Project Title *"
        name="title"
        placeholder="Enter your project title"
        value={formData.title}
        onChange={onChange}
      />

      {/* Domain */}

      <div>

        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Project Domain
        </label>

        <select
          name="domain"
          value={formData.domain}
          onChange={onChange}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        >
          <option value="">Select Domain</option>
          <option>Artificial Intelligence</option>
          <option>Machine Learning</option>
          <option>Healthcare</option>
          <option>FinTech</option>
          <option>Education</option>
          <option>Cyber Security</option>
          <option>IoT</option>
          <option>Blockchain</option>
          <option>Cloud Computing</option>
          <option>Web Development</option>
          <option>Mobile App</option>
          <option>Other</option>
        </select>

      </div>

      {/* Problem Statement */}

      <Textarea
        label="Problem Statement *"
        name="problem"
        rows={5}
        placeholder="Describe the problem your project is solving..."
        value={formData.problem}
        onChange={onChange}
      />

      {/* Proposed Solution */}

      <Textarea
        label="Proposed Solution *"
        name="solution"
        rows={5}
        placeholder="Explain how your project solves the problem..."
        value={formData.solution}
        onChange={onChange}
      />

      {/* Technologies */}

      <Input
        label="Technologies"
        name="technologies"
        placeholder="React, Node.js, MongoDB, Python, OpenCV..."
        value={formData.technologies}
        onChange={onChange}
      />

      {/* Target Users */}

      <Textarea
        label="Target Users"
        name="targetUsers"
        rows={4}
        placeholder="Who will use this project? Mention your target audience..."
        value={formData.targetUsers}
        onChange={onChange}
      />

    </div>
  );
};

export default IdeaForm;