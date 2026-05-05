"use client";

export default function Home() {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const studentClass = (document.getElementById("class") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;

    const message = `Hi, I want admission:
Name: ${name}
Class: ${studentClass}
Phone: ${phone}`;

    window.open(
      `https://wa.me/919501941186?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main style={{ fontFamily: "Arial" }}>

      {/* HEADER */}
      <div style={{ padding: "20px", background: "#000", color: "#fff" }}>
        <h2>Edufi Classes</h2>
      </div>

      {/* HERO SECTION */}
      <div style={{ padding: "60px", textAlign: "center", background: "#f5f5f5" }}>
        <h1>Admissions Open 2026</h1>
        <p>Class 6th–12th | JEE | NEET</p>
      </div>

      {/* FEATURES */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Why Choose Edufi?</h2>
        <p>✔ Expert Faculty</p>
        <p>✔ Small Batches</p>
        <p>✔ Weekly Tests</p>
      </div>

      {/* FORM */}
      <div style={{ padding: "40px", textAlign: "center", background: "#f9f9f9" }}>
        <h2>Apply for Admission</h2>

        <form onSubmit={handleSubmit}>
          <input id="name" placeholder="Student Name" required /><br /><br />
          <input id="class" placeholder="Class" required /><br /><br />
          <input id="phone" placeholder="Phone Number" required /><br /><br />

          <button type="submit">Apply on WhatsApp</button>
        </form>
      </div>

      {/* FOOTER */}
      <div style={{ padding: "20px", textAlign: "center", background: "#000", color: "#fff" }}>
        <p>Contact: 9501941186</p>
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919501941186"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          padding: "12px",
          borderRadius: "50%"
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          width="40"
          alt="whatsapp"
        />
      </a>
<a
  href="https://wa.me/919501941186"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    padding: "12px",
    borderRadius: "50%",
    zIndex: 9999
  }}
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
    width="40"
    alt="whatsapp"
  />
</a>
    </main>
  );
}