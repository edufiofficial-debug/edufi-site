"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-yellow-50 text-black px-6 py-16">
      <section className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          Contact Edufi Classes
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Have questions about courses, fees, or admission? Contact us now.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Get in Touch</h2>

            <p>
              <b>Phone:</b> 9501941186
            </p>

            <p>
              <b>WhatsApp:</b>{" "}
              <a
                href="https://wa.me/919501941186"
                target="_blank"
                className="text-blue-600 font-semibold"
              >
                Chat on WhatsApp
              </a>
            </p>

            <p>
              <b>Address:</b> Edufi Classes, Hisar
            </p>

            <p>
              <b>Courses:</b> Classes 6th–10th Maths, Reasoning, Govt Exam Prep
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

              const text = `New Contact Enquiry:%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

              window.open(`https://wa.me/919501941186?text=${text}`, "_blank");
            }}
            className="space-y-4"
          >
            <input
              name="name"
              required
              placeholder="Student / Parent Name"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full border rounded-xl px-4 py-3"
            />

            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
              className="w-full border rounded-xl px-4 py-3"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl"
            >
              Send on WhatsApp
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}