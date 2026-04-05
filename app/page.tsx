"use client";
import { motion } from "framer-motion";

export default function KoushaPortfolio() {
  const projects = [
    {
      title: "RIA — Retrospective Intelligence Agent",
      subtitle: "CLI-first codebase timeline intelligence",
      blurb:
        "A system for reconstructing how a codebase evolved across a timeline, transforming repository events into structured summaries and explorable insights.",
      tags: ["Python", "CLI", "LLM", "JSON"],
      emoji: "🍥",
    },
    {
      title: "GPU Thermal-Aware Scheduling",
      subtitle: "NSF Research Intern",
      blurb:
        "Thermal-aware GPU workload scheduling and temperature prediction research focused on improving system efficiency and reducing thermal load in data-center environments.",
      tags: ["Java", "Python", "ONNX", "ML Systems"],
      emoji: "🍬",
    },
    {
      title: "LiDAR 3D Detection Pipeline",
      subtitle: "NASA Research Associate",
      blurb:
        "A real-time LiDAR inference workflow for autonomous traffic monitoring using CenterPoint, custom data processing, and sensor-driven evaluation.",
      tags: ["Python", "LiDAR", "CenterPoint", "Computer Vision"],
      emoji: "🍭",
    },
    {
      title: "Plantify / Hackathon Work",
      subtitle: "Mobile and web builds",
      blurb:
        "Project work spanning Android development, accessible app design, and production-ready websites built in collaborative team environments.",
      tags: ["Kotlin", "Compose", "Firebase", "Web"],
      emoji: "🧁",
    },
  ];

  const links = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Resume", href: "/KOUSHASALIMKHANSWERESUME2026.pdf" },
    { label: "Email", href: "mailto:kousha.salimkhan.076@my.csun.edu" },
  ];

  const float = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const candy = [
    { emoji: "🍬", className: "top-20 left-[8%] text-5xl rotate-[-14deg]", duration: 6 },
    { emoji: "🍭", className: "top-40 right-[10%] text-6xl rotate-[12deg]", duration: 7 },
    { emoji: "🧁", className: "bottom-28 left-[15%] text-5xl rotate-[8deg]", duration: 5.5 },
    { emoji: "🍥", className: "bottom-16 right-[18%] text-5xl rotate-[-10deg]", duration: 6.5 },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#ffd3ea_0%,#f5d6ff_28%,#dff7ff_62%,#fff2b8_100%)] text-slate-800">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 left-[-8%] h-80 w-80 rounded-full bg-pink-400/45 blur-3xl"
          animate={{ scale: [1, 1.08, 1], x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-24 right-[-8%] h-96 w-96 rounded-full bg-yellow-300/50 blur-3xl"
          animate={{ scale: [1, 1.12, 1], x: [0, -16, 0], y: [0, 14, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-400/45 blur-3xl"
          animate={{ scale: [1, 1.1, 1], x: [0, -10, 0], y: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_32%)]" />

        {candy.map((item) => (
          <motion.div
            key={item.className}
            className={`absolute select-none ${item.className}`}
            animate={{ y: [0, -14, 0], rotate: [0, 4, 0], opacity: [0.78, 1, 0.78] }}
            transition={{ duration: item.duration, repeat: Infinity, ease: "easeInOut" }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      <main className="relative mx-auto flex max-w-7xl flex-col px-6 py-8 md:px-10 lg:px-12">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center justify-between rounded-[28px] border border-white/35 bg-white/45 px-4 py-3 shadow-[0_10px_40px_rgba(255,255,255,0.35)] backdrop-blur-xl md:px-6"
        >
          <div>
            <div className="bg-[linear-gradient(90deg,#ff4fa3,#9b5cff,#00b8ff)] bg-clip-text text-lg font-black text-transparent">
              Kousha 🍬
            </div>
            <div className="text-xs text-slate-600">SWE • ML Systems • Research</div>
          </div>
          <div className="hidden gap-3 md:flex">
            {links.map((link) => (
              <motion.a
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm transition"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.nav>

        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center rounded-full border border-white/40 bg-white/55 px-4 py-2 text-sm shadow"
            >
              🍭 playful design, serious engineering
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Candy-coated visuals.
                <br />
                <span className="bg-[linear-gradient(90deg,#ff4fa3,#a855f7,#22c3ff)] bg-clip-text text-transparent">
                  Real technical depth.
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
                I’m a Computer Science student at CSUN working across ML systems, LiDAR pipelines, backend-oriented
                engineering, and research-driven optimization. I like building software that feels polished, memorable,
                and deeply intentional.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-[linear-gradient(90deg,#ff4fa3,#ff7ccd)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,79,163,0.35)]"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#research"
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-[linear-gradient(90deg,#8b5cf6,#45caff)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(139,92,246,0.28)]"
              >
                Explore Research
              </motion.a>
            </div>

            <div className="grid max-w-2xl grid-cols-2 gap-4 pt-2 md:grid-cols-4">
              {[
                ["NASA", "Research"],
                ["NSF", "Internship"],
                ["IEEE", "Publication"],
                ["Wins", "Hackathons"],
              ].map(([title, desc], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1 }}
                  className="rounded-[22px] border border-white/40 bg-white/55 p-4 shadow-lg backdrop-blur-sm"
                >
                  <div className="text-lg font-bold">{title}</div>
                  <div className="text-sm text-slate-600">{desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[34px] border border-white/45 bg-white/50 p-5 shadow-[0_20px_60px_rgba(255,255,255,0.32)] backdrop-blur-2xl"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-400" />
                <div className="h-3 w-3 rounded-full bg-amber-300" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="rounded-[26px] border border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.58))] p-6">
                <div className="mb-4 text-sm font-semibold text-fuchsia-600">currently focused on</div>
                <div className="space-y-4">
                  {[
                    "ML systems and inference pipelines",
                    "Backend-oriented software engineering",
                    "LiDAR perception and real-time processing",
                    "Beautiful tools with technical rigor",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 6, scale: 1.02 }}
                      animate={{ y: [0, index % 2 === 0 ? -3 : 3, 0] }}
                      transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="projects" className="mt-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="mb-2 text-sm uppercase tracking-[0.25em] text-fuchsia-600">Selected Work</div>
              <h2 className="text-3xl font-black md:text-4xl">Projects with personality</h2>
            </div>
            <div className="hidden text-sm text-slate-500 md:block">Colorful on the outside, technically sharp underneath</div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
                className="group rounded-[30px] border border-white/40 bg-white/55 p-6 shadow-[0_18px_45px_rgba(255,255,255,0.24)] backdrop-blur-xl"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-purple-600">{project.subtitle}</div>
                  <div className="text-3xl">{project.emoji}</div>
                </div>
                <h3 className="mb-3 text-2xl font-black tracking-tight">{project.title}</h3>
                <p className="mb-5 leading-7 text-slate-700">{project.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      whileHover={{ scale: 1.06 }}
                      key={tag}
                      className="rounded-full border border-white/60 bg-[linear-gradient(90deg,rgba(255,121,198,0.18),rgba(99,102,241,0.14),rgba(34,211,238,0.18))] px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="research" className="mt-24 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[30px] border border-white/40 bg-white/55 p-6 shadow-lg backdrop-blur-xl"
          >
            <div className="mb-2 text-sm uppercase tracking-[0.25em] text-cyan-600">Research</div>
            <h2 className="mb-4 text-3xl font-black">Technical work with real-world grounding</h2>
            <p className="leading-7 text-slate-700">
              My research centers on machine learning systems, thermal-aware GPU scheduling, and real-time perception
              pipelines. I enjoy the intersection where theory turns into implementation, benchmarks, and working software.
            </p>
          </motion.div>

          <div className="grid gap-5">
            <motion.div
              whileHover={{ y: -6, rotate: -1 }}
              className="rounded-[30px] border border-fuchsia-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,215,241,0.65))] p-6 shadow-lg"
            >
              <div className="mb-2 text-sm font-medium text-fuchsia-700">NSF Research Internship</div>
              <div className="mb-3 text-2xl font-black">GPU temperature prediction and workload scheduling</div>
              <p className="leading-7 text-slate-700">
                Worked on thermal-aware scheduling algorithms and model-driven GPU temperature prediction, including
                cross-language inference with Java, Python, and ONNX. This work led to a publication in IEEE CCNC.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, rotate: 1 }}
              className="rounded-[30px] border border-cyan-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(208,247,255,0.7))] p-6 shadow-lg"
            >
              <div className="mb-2 text-sm font-medium text-cyan-700">NASA Research Associate</div>
              <div className="mb-3 text-2xl font-black">LiDAR perception for autonomous traffic monitoring</div>
              <p className="leading-7 text-slate-700">
                Developing 3D object detection workflows using LiDAR, CenterPoint, and custom data processing pipelines to
                support real-time autonomous system applications.
              </p>
            </motion.div>
          </div>
        </section>

        <motion.section
          {...float}
          className="mt-24 mb-10"
        >
          <div className="rounded-[34px] border border-white/40 bg-[linear-gradient(135deg,rgba(255,255,255,0.65),rgba(255,229,242,0.5),rgba(214,240,255,0.45))] p-8 shadow-[0_20px_60px_rgba(255,255,255,0.24)] backdrop-blur-xl md:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-2 text-sm uppercase tracking-[0.25em] text-slate-500">Let’s Connect</div>
                <h2 className="text-3xl font-black">Interested in SWE, ML systems, or research-driven builds?</h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                  I’m looking for opportunities where I can contribute to technically ambitious systems, keep growing as an
                  engineer, and build work that has both depth and character.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:kousha.salimkhan.076@my.csun.edu"
                  className="rounded-full bg-[linear-gradient(90deg,#ff4fa3,#a855f7)] px-5 py-3 text-sm font-semibold text-white shadow-lg"
                >
                  Email Me
                </motion.a>
                <motion.a
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  className="rounded-full border border-white/50 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700"
                >
                  View Resume
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
