// src/app/settings/Account.jsx

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
  Shield,
} from "lucide-react";
import toast from "react-hot-toast";

import Input from "@components/shared/Input";
import Button from "@components/shared/Button";

const Account = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "Harsh Kumar",
    email: "harsh@example.com",
    phone: "+91 9876543210",
    location: "Kanpur, India",
    bio: "Passionate Full Stack Developer and AI Enthusiast.",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // TODO:
      // Replace with Backend API

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      toast.success("Profile Updated Successfully!");
    } catch (error) {
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white shadow-xl">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/20 p-4">
            <User size={34} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              Account Settings
            </h1>

            <p className="mt-2 text-blue-100">
              Manage your personal information and profile.
            </p>
          </div>
        </div>
      </div>

      {/* Profile */}

      <div className="grid gap-8 lg:grid-cols-3">

        {/* Avatar */}

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <div className="flex flex-col items-center">

            <div className="relative">

              <img
                src="https://ui-avatars.com/api/?name=Harsh+Kumar&background=4f46e5&color=fff&size=200"
                alt="Profile"
                className="h-36 w-36 rounded-full object-cover"
              />

              <button className="absolute bottom-0 right-0 rounded-full bg-blue-600 p-3 text-white shadow-lg hover:bg-blue-700">
                <Camera size={18} />
              </button>

            </div>

            <h2 className="mt-5 text-xl font-bold dark:text-white">
              {formData.name}
            </h2>

            <p className="text-slate-500">
              Full Stack Developer
            </p>

            <div className="mt-6 flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              <Shield size={16} />
              Verified Account
            </div>

          </div>

        </div>

        {/* Form */}

        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <h2 className="mb-8 text-2xl font-bold dark:text-white">
            Personal Information
          </h2>

          <form
            onSubmit={handleSave}
            className="space-y-6"
          >

            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              icon={<User size={18} />}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              icon={<Mail size={18} />}
            />

            <Input
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              icon={<Phone size={18} />}
            />

            <Input
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              icon={<MapPin size={18} />}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Bio
              </label>

              <textarea
                rows={5}
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>

            <Button
              type="submit"
              loading={loading}
            >
              <Save size={18} />
              Save Changes
            </Button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Account;