import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. Data Science & AI</h4>
                <h5>Saarland University, Germany</h5>
              </div>
            </div>
            <p>
              Currently pursuing a Bachelor's in Data Science and Artificial
              Intelligence at one of Germany's leading technical universities,
              building expertise in machine learning, statistics, and applied AI.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Federated ML Security Research</h4>
                <h5>CISPA Helmholtz Center for Information Security</h5>
              </div>
            </div>
            <p>
              Researched security and privacy vulnerabilities in Federated Learning
              across 10+ simulated client nodes. Designed and implemented evaluations
              of key FL attack vectors — model poisoning, backdoor attacks, and
              privacy leakage — improving threat detection understanding by 30%+.
              Built 20+ experimental simulations; measured up to 25% accuracy loss
              under poisoning scenarios and tested mitigation strategies.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Masumi Hackathon — AI Job Agent</h4>
                <h5>2nd Place · $1,500 Prize</h5>
              </div>
            </div>
            <p>
              Designed an Agentic AI job application system that automatically applies
              to postings from a single URL. Built autonomous workflows with LLM-based
              text generation and NLP pipelines to generate tailored CVs and cover
              letters, reducing manual effort by 80%+.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Infosys Hackathon — Agentic City Guide</h4>
                <h5>2nd Place · Düsseldorf</h5>
              </div>
            </div>
            <p>
              Developed WelcomeDüs — an AI-powered city guide for newcomers and
              tourists. Processed 5,000+ location and user-preference data points,
              integrated live city APIs, and implemented NLP pipelines in Python.
              Awarded 2nd Place among 50+ teams.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hannover Government Hackathon</h4>
                <h5>"Host My Metropolregion" · €500 Prize</h5>
              </div>
            </div>
            <p>
              Built a data-driven infrastructure mapping platform analyzing 10,000+
              regional data points to identify investment opportunities. Delivered
              geo-mapping dashboards in 48 hours; awarded the €500 Government
              Innovation Prize and selected for follow-up discussions with NLStBV
              for potential real-world implementation.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Studienkolleg T-Kurs</h4>
                <h5>University of Paderborn, Germany</h5>
              </div>
            </div>
            <p>
              Completed the German university preparation course (T-Kurs) with a
              technical focus, building the academic foundation for studying Data
              Science and AI in Germany.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
