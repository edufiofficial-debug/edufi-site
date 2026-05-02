export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Edufi Classes</h1>
      <h2>Admissions Open – Hisar</h2>

      <p>6th – 12th | JEE | NEET</p>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919501941186"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "15px 18px",
          borderRadius: "50px",
          fontWeight: "bold",
          textDecoration: "none",
          zIndex: 9999
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}