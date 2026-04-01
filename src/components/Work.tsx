import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "WelcomeDüs",
    category: "Agentic City Guide",
    award: "🥈 2nd Place · Infosys Hackathon, Düsseldorf",
    description:
      "AI-powered city guide for newcomers and tourists. Processed 5,000+ location data points with NLP pipelines and live API integrations for real-time event, route, and service recommendations.",
    tools: ["Python", "NLP", "Pandas", "APIs", "Data Analytics"],
    gradient: "linear-gradient(135deg, #0f2c5e 0%, #1a5276 50%, #0e6655 100%)",
    accent: "#5eead4",
    image: "/images/Dusseldorf.jpeg",
    link: "https://www.linkedin.com/in/krish-gaba/",
  },
  {
    title: "AI Job Application Agent",
    category: "Agentic AI Automation",
    award: "🥈 2nd Place · Masumi Hackathon · $1,500",
    description:
      "Agentic system that auto-applies to job postings from a single URL. Extracts job descriptions, analyzes requirements, and generates tailored CVs — reducing manual effort by 80%+.",
    tools: ["Python", "LLM APIs", "NLP", "Automation", "Data Parsing"],
    gradient: "linear-gradient(135deg, #1a0533 0%, #4a235a 50%, #6c3483 100%)",
    accent: "#c39bd3",
    image: "/images/Masume.jpeg",
    link: "https://www.linkedin.com/in/krish-gaba/",
  },
  {
    title: "Host My Metropolregion",
    category: "Civic Tech · Data Platform",
    award: "🏆 €500 Prize · Hannover Government Hackathon",
    description:
      "Infrastructure mapping platform analyzing 10,000+ regional data points. Geo-mapping dashboards to identify investment zones — selected for follow-up with NLStBV for real-world implementation.",
    tools: ["Python", "Data Analysis", "HTML", "CSS", "Data Visualization"],
    gradient: "linear-gradient(135deg, #0b3c2b 0%, #1e8449 50%, #117a65 100%)",
    accent: "#58d68d",
    image: "/images/Metropoly.jpeg",
    link: "https://www.linkedin.com/in/krish-gaba/",
  },
  {
    title: "Federated ML Security",
    category: "Security Research",
    award: "🔬 CISPA Helmholtz Center for Information Security",
    description:
      "Researched FL attack vectors — model poisoning, backdoor attacks, privacy leakage — across 10+ simulated nodes. Improved threat detection by 30%+; measured up to 25% accuracy degradation under adversarial conditions.",
    tools: ["Python", "Federated Learning", "PyTorch", "Security Analysis"],
    gradient: "linear-gradient(135deg, #1a0a00 0%, #6e2f1a 50%, #922b21 100%)",
    accent: "#f1948a",
    image: "/images/cispa_FederatedML.jpeg",
    link: "https://www.linkedin.com/in/krish-gaba/",
  },
  {
    title: "Hack the Stack",
    category: "Cybersecurity · AI · Cloud",
    award: "🎓 CISPA × DocuWare Hackathon",
    description:
      "Hybrid hackathon at the intersection of cybersecurity, AI, and cloud infrastructure. Tackled challenges: AI Against Targeted Attacks, BYOK for Dynamic Clouds, Federated Learning for Sensitive Documents, and Adaptive Access Control.",
    tools: ["Python", "Cloud Security", "AI", "Federated Learning"],
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #1b2a4a 50%, #2c3e6b 100%)",
    accent: "#7fb3f5",
    image: null,
    link: "https://www.linkedin.com/in/krish-gaba/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <p className="carousel-award">{project.award}</p>
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-desc">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Stack</span>
                          <div className="carousel-tags">
                            {project.tools.map((tool, i) => (
                              <span
                                key={i}
                                className="carousel-tag"
                                style={{ borderColor: project.accent, color: project.accent }}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Card */}
                    <div className="carousel-image-wrapper">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="disable"
                        className="project-card"
                        style={{ background: project.image ? "transparent" : project.gradient }}
                      >
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="project-card-img"
                          />
                        ) : (
                          <div
                            className="project-card-glow"
                            style={{ background: project.accent }}
                          />
                        )}
                        <div className="project-card-content">
                          <span
                            className="project-card-title"
                            style={{ color: project.image ? "#fff" : project.accent }}
                          >
                            {project.title}
                          </span>
                          <span className="project-card-cat">
                            {project.category}
                          </span>
                        </div>
                        <div className="project-card-link">
                          <MdArrowOutward />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_project, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
                style={
                  index === currentIndex
                    ? {
                        background: projects[currentIndex].accent,
                        borderColor: projects[currentIndex].accent,
                        boxShadow: `0 0 8px ${projects[currentIndex].accent}66`,
                      }
                    : {}
                }
              />
            ))}
          </div>

          {/* Project counter */}
          <div className="carousel-counter">
            <span style={{ color: projects[currentIndex].accent }}>
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="carousel-counter-sep">/</span>
            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
