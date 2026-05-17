"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone, MapPin, Star, MessageCircle, Menu, X } from "lucide-react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    studentClass: "",
    phone: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `New Enquiry%0A%0AName: ${formData.name}%0AClass: ${formData.studentClass}%0APhone: ${formData.phone}`;

    window.open(`https://wa.me/919501941186?text=${message}`, "_blank");

    setFormData({
      name: "",
      studentClass: "",
      phone: "",
    });

    setShowForm(false);
  };

  return (
    <main className="bg-white text-[#0f172a] overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e3a8a] text-white overflow-hidden">
        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/95 backdrop-blur-xl border-b border-[#38bdf8]/20">
          <div className="max-w-7xl mx-auto px-4 md:px-12 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
                <span className="text-[#facc15]">Edufi</span>{" "}
                <span className="text-white">Classes</span>
              </h1>

              <button
                onClick={() => setShowMenu(!showMenu)}
                className="md:hidden bg-[#facc15] text-[#0f172a] px-4 py-2 rounded-full font-bold flex items-center gap-2"
              >
                {showMenu ? <X size={20} /> : <Menu size={20} />}
                Menu
              </button>

              <div className="hidden md:flex items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#facc15] hover:bg-[#fde047] text-[#0f172a] font-bold px-5 py-2 rounded-full transition hover:scale-105"
                >
                  Contact
                </Link>

                <Link
                  href="https://web.eduficlasses.com/courses/842135?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
                  className="bg-[#facc15] hover:bg-[#fde047] text-[#0f172a] font-bold px-5 py-2 rounded-full transition hover:scale-105"
                >
                  Courses
                </Link>

                <a
                  href="https://wa.me/919501941186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-5 py-2 rounded-full font-bold transition hover:scale-105"
                >
                  WhatsApp
                </a>

                <a
                  href="https://www.youtube.com/@edufi_classes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-5 py-2 rounded-full font-bold transition hover:scale-105"
                >
                  YouTube
                </a>

                <button
                  onClick={() => setShowForm(true)}
                  className="border border-[#facc15] text-[#facc15] hover:bg-[#facc15] hover:text-[#0f172a] px-5 py-2 rounded-full font-bold transition hover:scale-105"
                >
                  Enroll Now
                </button>
              </div>
            </div>

            {showMenu && (
              <div className="md:hidden grid grid-cols-2 gap-3 mt-4">
                <Link
                  href="/contact"
                  className="bg-[#facc15] text-[#0f172a] font-bold px-4 py-3 rounded-2xl text-center"
                >
                  Contact
                </Link>

                <Link
                  href="https://web.eduficlasses.com/courses/842135?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"
                  className="bg-[#facc15] text-[#0f172a] font-bold px-4 py-3 rounded-2xl text-center"
                >
                  Courses
                </Link>

                <a
                  href="https://wa.me/919501941186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#22c55e] text-white px-4 py-3 rounded-2xl font-bold text-center"
                >
                  WhatsApp
                </a>

                <a
                  href="https://www.youtube.com/@edufi_classes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#dc2626] text-white px-4 py-3 rounded-2xl font-bold text-center"
                >
                  YouTube
                </a>

                <button
                  onClick={() => setShowForm(true)}
                  className="col-span-2 border border-[#facc15] text-[#facc15] px-4 py-3 rounded-2xl font-bold"
                >
                  Enroll Now
                </button>
              </div>
            )}
          </div>
        </header>

        {/* DESKTOP SCHOLARSHIP BADGE */}
        <div className="absolute top-32 right-[18%] z-20 hidden md:block">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#facc15] to-[#f59e0b] text-[#0f172a] px-6 py-3 rounded-2xl font-extrabold shadow-2xl text-base animate-pulse">
            🏆 Scholarship Test for Bright Students
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center px-4 md:px-6 pt-28 md:pt-32 pb-16 md:pb-24">
          <div className="text-center md:text-left">
            <span className="inline-block bg-white/10 text-[#facc15] border border-[#facc15]/60 px-4 md:px-5 py-2 rounded-full font-bold mb-4 text-sm md:text-base">
              🚀 New Batch Open for Class 6th - 10th
            </span>

            <div className="md:hidden mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#facc15] to-[#f59e0b] text-[#0f172a] px-4 py-2 rounded-2xl font-extrabold shadow-xl text-sm animate-pulse">
                🏆 Scholarship Test
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Learn <span className="text-[#facc15]">Maths</span> &{" "}
              <span className="text-[#38bdf8]">Science</span>
              <br />
              <span className="bg-gradient-to-r from-[#facc15] via-[#38bdf8] to-white bg-clip-text text-transparent">
                The Smart Way
              </span>
            </h1>

            <p className="mt-6 md:mt-7 text-base md:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Live classes, weekly tests, personal mentorship and result-focused
              learning for CBSE students.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8">
              {[
                "📚 Live Classes",
                "📝 Weekly Tests",
                "🎯 Doubt Solving",
                "🏆 Top Results",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-[#38bdf8]/30 rounded-2xl p-3 md:p-4 text-center text-sm md:text-base font-bold hover:bg-[#38bdf8] hover:text-[#0f172a] hover:-translate-y-2 transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#facc15] hover:bg-[#fde047] text-[#0f172a] px-8 py-4 rounded-full font-extrabold text-base md:text-lg shadow-xl hover:scale-105 transition-all"
              >
                Enroll Now
              </button>

              <a
                href="https://wa.me/919501941186"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-full font-extrabold text-base md:text-lg shadow-xl hover:scale-105 transition-all text-center"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-5 mt-10 md:mt-12 max-w-xl mx-auto md:mx-0">
              {[
                { number: "5000+", label: "Students", color: "text-[#facc15]" },
                { number: "100%", label: "Results", color: "text-[#38bdf8]" },
                { number: "4.9★", label: "Ratings", color: "text-white" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl md:rounded-3xl p-3 md:p-5 hover:bg-white/20 hover:-translate-y-2 transition-all"
                >
                  <h2
                    className={`text-2xl md:text-4xl font-black ${stat.color}`}
                  >
                    {stat.number}
                  </h2>
                  <p className="text-blue-100 mt-1 text-xs md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative inline-block max-w-[320px] sm:max-w-[420px] md:max-w-none">
              <div className="absolute top-3 left-3 z-20 bg-[#facc15] text-[#0f172a] px-3 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl font-extrabold shadow-xl text-xs md:text-base">
                100% Result
              </div>

              <div className="absolute bottom-3 right-3 z-20 bg-[#38bdf8] text-[#0f172a] px-3 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl font-extrabold shadow-xl text-xs md:text-base">
                Personal Mentorship
              </div>

              <Image
                src="/teacher.png"
                alt="Teacher"
                width={500}
                height={600}
                className="w-full h-auto rounded-[2rem] shadow-2xl border-4 border-[#facc15] hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-14 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[#2563eb] font-extrabold mb-3">
            Our Programs
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#0f172a]">
            Popular Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-16">
            {[
              { title: "Class 9 Maths", img: "/course1.jpg" },
              { title: "Class 10 Board Maths", img: "/course2.jpg" },
              { title: "SSC CGL Quant", img: "/course3.jpg" },
            ].map((course, i) => (
             <div
  key={i}
  className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-white border border-blue-100 hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
>
  <div className="relative w-full h-72 md:h-80 bg-[#020617] overflow-hidden">
    <Image
      src={course.img}
      alt={course.title}
      fill
      className="object-cover object-center transition-transform duration-500 hover:scale-105"
    />
  </div>

  <div className="p-5 md:p-6">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a]">
                    {course.title}
                  </h3>

                  <p className="text-slate-600 mt-3 text-sm md:text-base">
                    Complete syllabus coverage with tests and mentorship.
                  </p>

                  <button
                    onClick={() => setShowForm(true)}
                    className="mt-6 w-full md:w-auto bg-[#0f172a] hover:bg-[#1e3a8a] text-white px-6 py-3 rounded-full font-bold"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT RESULTS */}
      <section className="py-14 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[#eff6ff] via-white to-[#dbeafe] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[#2563eb] font-extrabold mb-3">
            Results That Speak
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#0f172a]">
            Student Success Stories
          </h2>

          <p className="text-center text-slate-600 mt-4 text-base md:text-lg">
            Real progress. Real results. Real confidence.
          </p>

          <div className="mt-10 md:mt-16 -mx-4 md:-mx-6">
            <div className="flex gap-6 overflow-x-scroll px-4 md:px-6 pb-8 scroll-smooth">
              {[
                {
                  name: "Vivek",
                  marks: "98%",
                  img: "/student1.jpg",
                  badge: "Board Topper",
                  color: "from-[#38bdf8] to-[#2563eb]",
                },
                {
                  name: "Aditya",
                  marks: "99%",
                  img: "/student2.jpg",
                  badge: "Maths Star",
                  color: "from-[#facc15] to-[#f59e0b]",
                },
                {
                  name: "Sahiba",
                  marks: "97%",
                  img: "/student3.jpg",
                  badge: "Top Performer",
                  color: "from-[#60a5fa] to-[#2563eb]",
                },
                {
                  name: "Abhishek",
                  marks: "96%",
                  img: "/student4.jpg",
                  badge: "Science Genius",
                  color: "from-[#22c55e] to-[#16a34a]",
                },
                {
                  name: "Tanish",
                  marks: "95%",
                  img: "/student5.jpg",
                  badge: "CBSE Achiever",
                  color: "from-[#ec4899] to-[#db2777]",
                },
                {
                  name: "Shyna",
                  marks: "94%",
                  img: "/student6.jpg",
                  badge: "Top Scorer",
                  color: "from-[#a855f7] to-[#7e22ce]",
                },
              ].map((student, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[280px] md:min-w-[320px] max-w-[320px] flex-shrink-0 snap-center border border-blue-100"
                >
                  <div
                    className={`h-24 md:h-28 bg-gradient-to-br ${student.color}`}
                  />

                  <div className="relative -mt-14 md:-mt-16 flex justify-center">
                    <Image
                      src={student.img}
                      alt={student.name}
                      width={160}
                      height={160}
                      className="h-28 w-28 md:h-32 md:w-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-all duration-300"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <span className="inline-block bg-[#0f172a] text-white px-4 py-1 rounded-full text-xs md:text-sm font-bold">
                      {student.badge}
                    </span>

                    <h3 className="text-2xl font-extrabold mt-5 text-[#0f172a]">
                      {student.name}
                    </h3>

                    <p className="text-[#2563eb] font-extrabold text-lg mt-3">
                      Scored {student.marks} in Maths
                    </p>

                    <div className="flex justify-center mt-5 text-[#facc15]">
                      <Star fill="currentColor" />
                      <Star fill="currentColor" />
                      <Star fill="currentColor" />
                      <Star fill="currentColor" />
                      <Star fill="currentColor" />
                    </div>

                    <div className="mt-6 h-1 w-20 mx-auto rounded-full bg-[#38bdf8] group-hover:w-36 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="py-14 md:py-24 px-4 md:px-6 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[#facc15] font-extrabold mb-3">
            Student Voices
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-center">
            Student Video Testimonials
          </h2>

          <p className="text-center text-blue-100 mt-5 text-base md:text-lg">
            Hear directly from our successful students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-16">
            {[
              {
                src: "/testimonial1.mp4",
                name: "Kush Aggarwal",
                text: "Improved from 65% to 95%",
              },
              {
                src: "/testimonial2.mp4",
                name: "Priya Verma",
                text: "Scored 99 in Maths",
              },
              {
                src: "/testimonial3.mp4",
                name: "Aman Singh",
                text: "Cleared Foundation Exam",
              },
            ].map((video, i) => (
              <div
                key={i}
                className="bg-[#1e293b] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-[#38bdf8]/20 hover:-translate-y-2 md:hover:-translate-y-3 transition-all duration-300"
              >
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-64 md:h-72 object-contain bg-black"
                >
                  <source src={video.src} type="video/mp4" />
                </video>

                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {video.name}
                  </h3>

                  <p className="text-[#facc15] mt-2 text-sm md:text-base">
                    {video.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARENTS */}
      <section className="py-14 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[#2563eb] font-extrabold mb-3">
            Trusted By Parents
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#0f172a]">
            What Parents Say
          </h2>

          <p className="text-center text-slate-500 mt-4 text-base md:text-lg">
            Real feedback from parents and students
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10 md:mt-16">
            {[
              {
                review:
                  "Best coaching for Maths and Science. My child improved drastically.",
                name: "Parent of Class 10 Student",
              },
              {
                review: "Very supportive teachers and amazing doubt solving.",
                name: "JEE Aspirant",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-50 to-yellow-50 p-6 md:p-10 border border-blue-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 md:hover:-translate-y-3 transition-all duration-500"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <p className="text-lg md:text-2xl italic text-slate-700 leading-relaxed group-hover:text-[#0f172a] transition-colors duration-300">
                    “{item.review}”
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0f172a] text-yellow-400 flex items-center justify-center text-xl md:text-2xl font-bold group-hover:rotate-6 transition-transform duration-300">
                      {item.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-extrabold text-[#0f172a]">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-500">
                        Verified Feedback
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowForm(true)}
                    className="mt-8 w-full sm:w-auto bg-[#facc15] hover:bg-[#eab308] text-[#0f172a] px-6 py-3 rounded-full font-bold shadow-md hover:scale-105 transition-all duration-300"
                  >
                    Join Edufi Classes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-24 bg-[#0f172a] text-white text-center px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Start Your Success Journey Today
        </h2>

        <p className="mt-6 text-base md:text-xl text-blue-100">
          Limited seats available for the new batch.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="mt-10 w-full sm:w-auto bg-[#facc15] text-[#0f172a] px-10 py-4 rounded-full font-extrabold text-lg md:text-xl hover:bg-[#fde047] transition hover:scale-105"
        >
          Join Now
        </button>
      </section>

      {/* CONTACT */}
      <section className="py-14 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[#eff6ff] via-white to-[#dbeafe]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-center text-[#2563eb] font-extrabold mb-3">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a]">
            Contact Us
          </h2>

          <p className="mt-4 text-slate-600 text-base md:text-lg">
            Have questions? Connect with Edufi Classes instantly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-16">
            <a
              href="tel:+919501941186"
              className="group bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-blue-100 hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-[#38bdf8] to-[#2563eb] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Phone className="text-white" size={34} />
              </div>

              <h3 className="font-extrabold text-2xl md:text-3xl mt-7 text-[#0f172a]">
                Speak to Our Counsellor
              </h3>

              <p className="mt-5 text-slate-600 text-lg md:text-xl font-semibold">
                +91 95019 41186
              </p>

              <span className="inline-block mt-6 bg-[#2563eb] text-white px-6 py-2 rounded-full font-bold group-hover:bg-[#1e40af] transition">
                Call Now
              </span>
            </a>

            <a
              href="https://wa.me/919501941186"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-blue-100 hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <MessageCircle className="text-white" size={34} />
              </div>

              <h3 className="font-extrabold text-2xl md:text-3xl mt-7 text-[#0f172a]">
                WhatsApp
              </h3>

              <p className="mt-5 text-slate-600 text-lg md:text-xl">
                Get quick reply for admissions and batches.
              </p>

              <span className="inline-block mt-6 bg-[#16a34a] text-white px-6 py-2 rounded-full font-bold group-hover:bg-[#15803d] transition">
                Chat Now
              </span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Edufi%20Classes%20202%20Lajpat%20Nagar%20Hisar%20125001"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-blue-100 hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-[#facc15] to-[#f59e0b] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <MapPin className="text-[#0f172a]" size={34} />
              </div>

              <h3 className="font-extrabold text-2xl md:text-3xl mt-7 text-[#0f172a]">
                Location
              </h3>

              <p className="mt-5 text-slate-600 text-lg md:text-xl font-semibold">
                202, Lajpat Nagar, Hisar, India 125001
              </p>

              <span className="inline-block mt-6 bg-[#facc15] text-[#0f172a] px-6 py-2 rounded-full font-bold group-hover:bg-[#fde047] transition">
                Open Map
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] text-white py-8 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-[#facc15]">Edufi</span> Classes
        </h2>

        <p className="mt-3 text-blue-100 text-sm md:text-base">
          © 2026 Edufi Classes. All Rights Reserved.
        </p>
      </footer>

      {/* FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-5 top-4 text-2xl"
            >
              ×
            </button>

            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#0f172a]">
              Enroll Now
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Student Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-blue-100 p-4 rounded-xl"
              />

              <input
                type="text"
                placeholder="Class"
                required
                value={formData.studentClass}
                onChange={(e) =>
                  setFormData({ ...formData, studentClass: e.target.value })
                }
                className="w-full border border-blue-100 p-4 rounded-xl"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full border border-blue-100 p-4 rounded-xl"
              />

              <button
                type="submit"
                className="w-full bg-[#0f172a] hover:bg-[#1e3a8a] text-white py-4 rounded-xl font-bold text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919501941186"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 bg-[#22c55e] hover:bg-[#16a34a] p-4 md:p-5 rounded-full shadow-2xl z-50 transition hover:scale-110"
      >
        <MessageCircle className="text-white" size={30} />
      </a>
    </main>
  );
}