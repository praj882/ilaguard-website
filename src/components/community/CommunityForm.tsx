"use client";

import { useState } from "react";
import type { CommunityMember } from "@/types/community";
import { addCommunityMember } from "@/services/communityService";

const interestsList = [
  "Embedded Systems",
  "AI",
  "IoT",
  "Smart Agriculture",
  "PCB Design",
  "Robotics",
];

export default function CommunityForm() {
  const [formData, setFormData] = useState<CommunityMember>({
    fullName: "",
    email: "",
    profession: "",
    interests: [],
    linkedin: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleInterest = (interest: string) => {
    const exists = formData.interests.includes(interest);

    const updatedInterests = exists
      ? formData.interests.filter((item) => item !== interest)
      : [...formData.interests, interest];

    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.profession) {
      newErrors.profession = "Please select your profession.";
    }

    if (formData.interests.length === 0) {
      newErrors.interests = "Please select at least one interest.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
	e.preventDefault();

	if (!validate()) return;

	try {
		setLoading(true);

		await addCommunityMember(formData);

		alert("🎉 Welcome to IlaGuard Community!");

		setFormData({
		  fullName: "",
		  email: "",
		  profession: "",
		  interests: [],
		  linkedin: "",
		  message: "",
		});

		setErrors({});
	} catch (error) {
		console.error(error);
		alert("Something went wrong. Please try again.");
	} finally {
		setLoading(false);
	}
  };

  return (
    <section id="join" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900">
            Join Our Community
          </h2>

          <p className="mt-4 text-gray-600">
            Become part of the IlaGuard Labs community and receive updates
            about AI, Embedded Systems, IoT, internships, blogs, and future
            innovations.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-2xl shadow-lg p-8 space-y-6"
        >

          {/* Full Name */}

          <div>
            <label className="block mb-2 font-semibold">
              Full Name *
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            {errors.fullName && (
              <p className="text-red-600 text-sm mt-1">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}

          <div>
            <label className="block mb-2 font-semibold">
              Email Address *
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Profession */}

          <div>
            <label className="block mb-2 font-semibold">
              Profession *
            </label>

            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="">Select Profession</option>
              <option value="Student">Student</option>
              <option value="Engineer">Engineer</option>
              <option value="Farmer">Farmer</option>
              <option value="Researcher">Researcher</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="Other">Other</option>
            </select>

            {errors.profession && (
              <p className="text-red-600 text-sm mt-1">
                {errors.profession}
              </p>
            )}
          </div>

          {/* Interests */}

          <div>
            <label className="block mb-3 font-semibold">
              Areas of Interest *
            </label>

            <div className="grid grid-cols-2 gap-3">

              {interestsList.map((interest) => (

                <label
                  key={interest}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => toggleInterest(interest)}
                  />

                  <span>{interest}</span>

                </label>

              ))}

            </div>

            {errors.interests && (
              <p className="text-red-600 text-sm mt-2">
                {errors.interests}
              </p>
            )}
          </div>

          {/* LinkedIn */}

          <div>
            <label className="block mb-2 font-semibold">
              LinkedIn (Optional)
            </label>

            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Message */}

          <div>
            <label className="block mb-2 font-semibold">
              Message (Optional)
            </label>

            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Button */}

          <button
			  type="submit"
			  disabled={loading}
			  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold text-lg transition"
			>
			  {loading ? "Joining..." : "Join Community"}
		  </button>

        </form>

      </div>
    </section>
  );
}