import React, { useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function StudentForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    course: "",
    year: "",
    enrollDate: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Student Uploaded");
      window.dispatchEvent(new Event("student-updated"));

      // Reset form
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        course: "",
        year: "",
        enrollDate: "",
      });
    } else {
      alert("Error adding Student");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add Student</h2>

      <input
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
        required
      />

      <input
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="course"
        placeholder="Course"
        value={form.course}
        onChange={handleChange}
        required
      />

      <input
        name="year"
        placeholder="Year"
        value={form.year}
        onChange={handleChange}
        required
      />

      <input
        name="enrollDate"
        type="date"
        value={form.enrollDate}
        onChange={handleChange}
        required
      />

      <button type="submit">ADD</button>
    </form>
  );
}
