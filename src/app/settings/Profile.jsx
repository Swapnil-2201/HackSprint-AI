// src/app/settings/Profile.jsx

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Briefcase,
  Camera,
  Edit,
  Save,
  ShieldCheck,
} from "lucide-react";
import toast from "react-hot-toast";

import Button from "@components/shared/Button";

const Profile = () => {
  const [loading, setLoading] = useState(false);

  const [profile, setProfile] = useState({
    name: "Harsh Kumar",
    email: "harsh@example.com",
    phone: "+91 9876543210",
    location: "Kanpur, Uttar Pradesh",
    university: "VIT Bhopal University",
    role: "Full Stack Developer",
    joined: "July 2026",
    bio: "Passionate developer focused on AI, Full Stack Development and Hackathon Projects.",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      // Replace with Backend API
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      toast.success("Profile Updated Successfully!");
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white shadow-xl">

        <div className="flex flex-col items-center gap-6 lg:flex-row">

          <div className="relative">

            <img
              src="https://ui-avatars.com/api/?background=4f46e5&color=fff&size=200&name=Harsh+Kumar"
              alt="Profile"
              className="h-36 w-36 rounded-full border-4 border-white object-cover"
            />

            <button className="absolute bottom-2 right-2 rounded-full bg-white p-2 text-blue-600 shadow-lg">
              <Camera size={18} />
            </button>

          </div>

          <div className="flex-1">

            <h1 className="text-4xl font-bold">
              {profile.name}
            </h1>

            <p className="mt-2 text-blue-100">
              {profile.role}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm">
                <ShieldCheck size={16} />
                Verified User
              </span>

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
                Hackathon Member
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 text-center shadow dark:bg-slate-900">
          <Award className="mx-auto mb-3 text-yellow-500" />
          <h3 className="text-3xl font-bold dark:text-white">
            18
          </h3>
          <p className="text-slate-500">
            Projects
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow dark:bg-slate-900">
          <Briefcase className="mx-auto mb-3 text-blue-500" />
          <h3 className="text-3xl font-bold dark:text-white">
            9
          </h3>
          <p className="text-slate-500">
            Hackathons
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow dark:bg-slate-900">
          <GraduationCap className="mx-auto mb-3 text-green-500" />
          <h3 className="text-3xl font-bold dark:text-white">
            CSE
          </h3>
          <p className="text-slate-500">
            Department
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow dark:bg-slate-900">
          <Calendar className="mx-auto mb-3 text-purple-500" />
          <h3 className="text-3xl font-bold dark:text-white">
            2026
          </h3>
          <p className="text-slate-500">
            Joined
          </p>
        </div>

      </div>

      {/* Information */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold dark:text-white">
            Personal Information
          </h2>

          <Button variant="outline">
            <Edit size={18} />
            Edit
          </Button>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <div className="relative">
              <User className="absolute left-4 top-4 text-slate-400" size={18} />

              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-400" size={18} />

              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone
            </label>

            <div className="relative">
              <Phone className="absolute left-4 top-4 text-slate-400" size={18} />

              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Location
            </label>

            <div className="relative">
              <MapPin className="absolute left-4 top-4 text-slate-400" size={18} />

              <input
                name="location"
                value={profile.location}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              University
            </label>

            <input
              name="university"
              value={profile.university}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Profession
            </label>

            <input
              name="role"
              value={profile.role}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

        </div>

        <div className="mt-6">

          <label className="mb-2 block text-sm font-medium">
            Bio
          </label>

          <textarea
            rows={5}
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />

        </div>

        <div className="mt-8">

          <Button
            onClick={handleSave}
            loading={loading}
          >
            <Save size={18} />
            Save Profile
          </Button>

        </div>

      </div>

    </div>
  );
};

export default Profile;