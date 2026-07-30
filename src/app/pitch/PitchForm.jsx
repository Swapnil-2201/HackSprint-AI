import { useState } from "react";

export default function PitchForm({ onGenerate }) {
  const [formData, setFormData] = useState({
    startupName: "",
    problem: "",
    solution: "",
    audience: "",
    businessModel: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onGenerate) {
      onGenerate(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="startupName"
        placeholder="Startup Name"
        value={formData.startupName}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />

      <textarea
        name="problem"
        placeholder="Problem"
        value={formData.problem}
        onChange={handleChange}
        className="w-full border rounded p-2"
        rows={3}
      />

      <textarea
        name="solution"
        placeholder="Solution"
        value={formData.solution}
        onChange={handleChange}
        className="w-full border rounded p-2"
        rows={3}
      />

      <input
        type="text"
        name="audience"
        placeholder="Target Audience"
        value={formData.audience}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />

      <input
        type="text"
        name="businessModel"
        placeholder="Business Model"
        value={formData.businessModel}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Generate Pitch
      </button>
    </form>
  );
}