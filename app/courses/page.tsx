import Image from "next/image";
import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      title: "Class 6 Maths",
      desc: "Strong foundation building with interactive live classes.",
      image: "/course1.jpg",
      price: "₹1999",
    },
    {
      title: "Class 6 Science",
      desc: "Fun and conceptual science learning with experiments.",
      image: "/course2.jpg",
      price: "₹1999",
    },
    {
      title: "Class 7 Maths",
      desc: "Concept clarity with tests and doubt sessions.",
      image: "/course3.jpg",
      price: "₹2499",
    },
    {
      title: "Class 7 Science",
      desc: "Complete science preparation with revision classes.",
      image: "/course1.jpg",
      price: "₹2499",
    },
    {
      title: "Class 8 Maths",
      desc: "Olympiad level practice and mentorship.",
      image: "/course2.jpg",
      price: "₹2999",
    },
    {
      title: "Class 8 Science",
      desc: "Physics, Chemistry & Biology preparation.",
      image: "/course3.jpg",
      price: "₹2999",
    },
    {
      title: "Class 9 Maths",
      desc: "CBSE preparation with complete syllabus coverage.",
      image: "/course1.jpg",
      price: "₹3499",
    },
    {
      title: "Class 9 Science",
      desc: "Numericals, concepts and live doubt solving.",
      image: "/course2.jpg",
      price: "₹3499",
    },
    {
      title: "Class 10 Maths",
      desc: "Board preparation with PYQs and mock tests.",
      image: "/course3.jpg",
      price: "₹3999",
    },
    {
      title: "Class 10 Science",
      desc: "Complete board preparation with live classes.",
      image: "/course1.jpg",
      price: "₹3999",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-black text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between">
          <h1 className="text-3xl font-bold text-yellow-400">
            Edufi Classes
          </h1>

          <div className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
          </div>
        </div>
      </nav>

      <section className="py-16 text-center">
        <h1 className="text-5xl font-bold">
          Our Premium Courses
        </h1>

        <p className="mt-4 text-gray-600 text-xl">
          Learn with India’s growing online coaching platform.
        </p>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-3xl font-bold">
                  {course.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {course.desc}
                </p>

                <h3 className="mt-5 text-2xl font-bold text-blue-700">
                  {course.price}
                </h3>

                <a
                  href="https://wa.me/919501941186"
                  target="_blank"
                  className="inline-block mt-6 bg-yellow-400 px-6 py-3 rounded-full font-bold"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}