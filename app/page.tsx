"use client";

import { useState } from "react";
import type React from "react";


export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    studentClass: "",
    phone: ""
  });

  const handleChange = (field: "name" | "studentClass" | "phone") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, studentClass, phone } = formData;
    const message = `Hi, I want admission:\nName: ${name}\nClass: ${studentClass}\nPhone: ${phone}`;

    window.open(
      `https://wa.me/919501941186?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setShowForm(false);
    setFormData({ name: "", studentClass: "", phone: "" });
  };

  return (
    <main style={{ fontFamily: "Arial" }}>
      {/* HEADER */}
      <div style={{ padding: "15px 30px", background: "#000", color: "#fff" }}>
        <h2>Edufi Classes</h2>
      </div>

      {/* HERO SECTION */}
      <div
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#f5f5f5"
        }}
      >
        <h1 style={{ fontSize: "40px" }}>Admissions Open 2026</h1>
        <p>Class 6th–12th | JEE | NEET</p>

        <button
          type="button"
          onClick={() => setShowForm(true)}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "#ff9800",
            border: "none",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Enroll Now
        </button>
      </div>

      {/* FEATURES */}
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Why Choose Edufi?</h2>
        <p>✅ Expert Faculty</p>
        <p>✅ Small Batches</p>
        <p>✅ Weekly Tests</p>
        <p>✅ Personal Attention</p>
      </div>

      {/* COURSES */}
      <div style={{ padding: "50px", background: "#f9f9f9", textAlign: "center" }}>
        <h2>Our Courses</h2>
        <p>Class 6th–8th Foundation</p>
        <p>Class 9th–10th Boards</p>
        <p>Class 11th–12th + JEE / NEET</p>
      </div>

      {/* FOOTER */}
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          background: "#000",
          color: "#fff"
        }}
      >
        <p>📞 9501941186</p>
        <p>Hisar</p>
      </div>

      {/* POPUP FORM */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(6px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999
          }}
          onClick={() => setShowForm(false)}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "12px",
              width: "320px",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <h3>Enquiry Form</h3>

            <form onSubmit={handleSubmit}>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange("name")}
                placeholder="Name"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc"
                }}
              />
              <input
                id="studentClass"
                name="studentClass"
                type="text"
                value={formData.studentClass}
                onChange={handleChange("studentClass")}
                placeholder="Class"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc"
                }}
              />
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange("phone")}
                placeholder="Phone Number"
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc"
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  background: "#25D366",
                  color: "white",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Submit
              </button>
            </form>

            <br />
            <button
              type="button"
              onClick={() => setShowForm(false)}
              style={{
                padding: "10px 20px",
                background: "#ddd",
                border: "none",
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/919501941186?text=Hi%20I%20want%20admission%20details"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          padding: "15px",
          borderRadius: "50%",
          zIndex: 99999,
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}
      >
        💬
      </a>
    </main>
  );
}
