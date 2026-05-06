"use client";

console.log("EDUFI HOME LOADED");

import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    studentClass: "",
    phone: ""
  });

  const handleChange =
    (field: "name" | "studentClass" | "phone") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const msg = `Admission Enquiry:
Name: ${formData.name}
Class: ${formData.studentClass}
Phone: ${formData.phone}`;

    window.open(
      `https://wa.me/919501941186?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setShowForm(false);
    setFormData({ name: "", studentClass: "", phone: "" });
  };

  return (
    <main style={{ fontFamily: "Arial" }}>

      {/* HERO */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: "#f5f5f5" }}>
        <h1>🚀 Edufi Classes Admissions Open 2026</h1>
        <p>Class 6th–12th | JEE | NEET | Foundation</p>

        <button
          onClick={() => setShowForm(true)}
          style={{
            marginTop: 20,
            padding: "12px 25px",
            background: "#ff9800",
            border: 0,
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Enroll Now (Free Counselling)
        </button>
      </section>

      {/* TRUST STRIP */}
      <section style={{ padding: 30, textAlign: "center", background: "#000", color: "#fff" }}>
        ⭐ 1000+ Students | 🏆 Top Results | 📚 Expert Faculty | 🎯 Weekly Tests
      </section>

      {/* COURSES */}
      <section style={{ padding: 50, textAlign: "center" }}>
        <h2>Our Courses</h2>
        <p>📘 Class 6–8 Foundation</p>
        <p>📗 Class 9–10 Boards</p>
        <p>📙 Class 11–12 Science</p>
        <p>⚡ JEE / NEET Preparation</p>
      </section>

      {/* WHY US */}
      <section style={{ padding: 50, background: "#f9f9f9", textAlign: "center" }}>
        <h2>Why Students Choose Edufi</h2>
        <p>✔ Experienced Teachers</p>
        <p>✔ Small Batches</p>
        <p>✔ Personal Attention</p>
        <p>✔ Weekly Tests & Analysis</p>
        <p>✔ Doubt Sessions</p>
      </section>

      {/* RESULTS */}
      <section style={{ padding: 50, textAlign: "center" }}>
        <h2>🏆 Student Results</h2>
        <p>• 90%+ Students Score Above 80%</p>
        <p>• School Topper Students</p>
        <p>• JEE/NEET Selections</p>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: 50, background: "#f5f5f5", textAlign: "center" }}>
        <h2>What Parents Say</h2>
        <p>“Best coaching in Hisar. My child improved a lot.”</p>
        <p>“Excellent teaching and discipline.”</p>
        <p>“Highly recommended for boards & competition.”</p>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: 60, textAlign: "center", background: "#000", color: "#fff" }}>
        <h2>🎯 Limited Seats Available</h2>
        <button
          onClick={() => setShowForm(true)}
          style={{
            marginTop: 20,
            padding: "12px 25px",
            background: "#25D366",
            border: 0,
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Book Free Demo Class
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: 20, textAlign: "center" }}>
        📞 9501941186 | 📍 Hisar | Edufi Classes
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919501941186?text=Hi%20I%20want%20admission"
        target="_blank"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#25D366",
          padding: 15,
          borderRadius: "50%",
          color: "#fff"
        }}
      >
        💬
      </a>

      {/* POPUP FORM */}
      {showForm && (
        <div
          onClick={() => setShowForm(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: 25,
              borderRadius: 10,
              width: 300
            }}
          >
            <h3>Admission Form</h3>

            <form onSubmit={handleSubmit}>
              <input placeholder="Name" required onChange={handleChange("name")} />
              <input placeholder="Class" required onChange={handleChange("studentClass")} />
              <input placeholder="Phone" required onChange={handleChange("phone")} />

              <button type="submit" style={{ marginTop: 10 }}>
                Submit on WhatsApp
              </button>
            </form>

            <button onClick={() => setShowForm(false)} style={{ marginTop: 10 }}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}