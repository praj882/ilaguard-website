"use client";

import { useState } from "react";

export default function JoinCommunityForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    profession: "",
    interests: [] as string[],
    newsletter: true,
  });

  const interests = [
    "Embedded Systems",
    "Modern C++",
    "Embedded C",
    "Linux",
    "IoT",
    "AI",
    "Smart Agriculture",
    "PCB Design",
  ];

  function handleInterest(value: string) {
    if (form.interests.includes(value)) {
      setForm({
        ...form,
        interests: form.interests.filter((i) => i !== value),
      });
    } else {
      setForm({
        ...form,
        interests: [...form.interests, value],
      });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-xl p-10"
    >
      <h2 className="text-3xl font-bold mb-2">
        Become a Member
      </h2>

      <p className="text-gray-600 mb-10">
        Stay updated with blogs, internships, AI innovations,
        Embedded Systems, IoT projects and future opportunities.
      </p>

      {/* Name */}

      <div className="mb-6">
        <label className="font-semibold block mb-2">
          Full Name
        </label>

        <input
          type="text"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full border rounded-xl p-4"
          placeholder="Enter your name"
        />
      </div>

      {/* Email */}

      <div className="mb-6">
        <label className="font-semibold block mb-2">
          Email Address
        </label>

        <input
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full border rounded-xl p-4"
          placeholder="Enter your email"
        />
      </div>

      {/* Profession */}

      <div className="mb-6">
        <label className="font-semibold block mb-2">
          Profession
        </label>

        <select
          value={form.profession}
          onChange={(e) =>
            setForm({
              ...form,
              profession: e.target.value,
            })
          }
          className="w-full border rounded-xl p-4"
        >
          <option value="">Select Profession</option>

          <option>Student</option>
          <option>Software Engineer</option>
          <option>Embedded Engineer</option>
          <option>Electronics Engineer</option>
          <option>Farmer</option>
          <option>Researcher</option>
          <option>Entrepreneur</option>
          <option>Educator</option>
          <option>Other</option>
        </select>
      </div>

      {/* Interests */}

      <div className="mb-8">
        <label className="font-semibold block mb-4">
          Areas of Interest
        </label>

        <div className="grid md:grid-cols-2 gap-3">

          {interests.map((interest) => (
            <label
              key={interest}
              className="flex items-center gap-3 border rounded-xl p-3 cursor-pointer hover:bg-green-50"
            >
              <input
                type="checkbox"
                checked={form.interests.includes(interest)}
                onChange={() => handleInterest(interest)}
              />

              {interest}
            </label>
          ))}

        </div>
      </div>

      {/* Newsletter */}

      <div className="mb-8">
        <label className="flex gap-3 items-start">

          <input
            type="checkbox"
            checked={form.newsletter}
            onChange={(e) =>
              setForm({
                ...form,
                newsletter: e.target.checked,
              })
            }
          />

          <span>
            I agree to receive newsletters, technical blogs,
            internship updates and product announcements.
          </span>

        </label>
      </div>

      <button
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition"
      >
        Join Community
      </button>

    </form>
  );
}