  "use client";
export default function Home() {
  return (
   <main style={{ padding: "40px", textAlign: "center" }}>
  <h1>Edufi Classes</h1>
  <h2>Admissions Open - Hisar</h2>

  <p>6th - 12th | JEE | NEET</p>

  {/* Admission Form */}
  <form
    onSubmit={(e) => {
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
    }}
    style={{
      marginTop: "30px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      maxWidth: "300px",
      marginInline: "auto"
    }}
  >
    <input id="name" placeholder="Student Name" required style={{ padding: "10px" }} />
    <input id="class" placeholder="Class (e.g. 10th)" required style={{ padding: "10px" }} />
    <input id="phone" placeholder="Phone Number" required style={{ padding: "10px" }} />

    <button
      type="submit"
      style={{
        padding: "12px",
        backgroundColor: "#25D366",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      Apply on WhatsApp
    </button>
  </form>

  {/* WhatsApp Floating Button */}
  <a
    href="https://wa.me/919501941186"
    target="_blank"
    style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#25D366",
      padding: "12px",
      borderRadius: "50%",
      zIndex: 1000
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