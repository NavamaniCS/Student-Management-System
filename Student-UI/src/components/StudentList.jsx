import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  async function loadStudents() {
    const url = search ? `${API}?name=${search}` : API;

    const res = await fetch(url);
    const data = await res.json();
    setStudents(data);
  }

  async function deleteStudent(id) {
    if (!confirm("Are you sure you want to delete?")) return;

    const res = await fetch(`${API}/${id}`, { method: "DELETE" });

    if (res.ok) {
      alert("Deleted successfully");
      loadStudents();
    }
  }

  useEffect(() => {
    loadStudents();

    window.addEventListener("student-updated", loadStudents);

    return () => window.removeEventListener("student-updated", loadStudents);
  }, [search]);

  return (
    <div>
      <h2>Student List</h2>

      <input
        placeholder="Search by First Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "20px" }}
      />

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>STUDENT ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Year</th>
            <th>Date Joined</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.firstName} {s.lastName}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>{s.year}</td>
              <td>{s.enrolledDate}</td>
              <td>
                <button onClick={() => deleteStudent(s.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
