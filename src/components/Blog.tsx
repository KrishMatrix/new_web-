import { useState } from "react";
import { MdArrowOutward, MdClose, MdArrowBack } from "react-icons/md";
import { blogPosts, BlogPost } from "../data/blogData";
import "./styles/Blog.css";

const Blog = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const openPost = (post: BlogPost) => {
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closePost = () => setActivePost(null);

  // Render markdown-like content (bold, paragraphs, headings)
  const renderContent = (text: string) => {
    return text.split("\n\n").map((block, i) => {
      if (block.startsWith("**") && block.endsWith("**")) {
        return <h4 key={i} className="blog-post-h4">{block.slice(2, -2)}</h4>;
      }
      // Inline bold
      const parts = block.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={j}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      return <p key={i} className="blog-post-para">{parts}</p>;
    });
  };

  return (
    <div className="blog-section section-container" id="blog">
      {/* ── Post Detail Overlay ── */}
      {activePost && (
        <div className="blog-overlay">
          <div className="blog-overlay-inner">
            <button className="blog-back" onClick={closePost} data-cursor="disable">
              <MdArrowBack /> Back
            </button>
            <button className="blog-close" onClick={closePost} data-cursor="disable">
              <MdClose />
            </button>
            <div className="blog-post-header">
              <div className="blog-post-meta">
                <span className="blog-post-date">{activePost.date}</span>
                <span className="blog-dot">·</span>
                <span className="blog-post-date">{activePost.readTime}</span>
              </div>
              <h1 className="blog-post-title">{activePost.title}</h1>
              <div className="blog-post-tags">
                {activePost.tags.map((tag, i) => (
                  <span key={i} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="blog-post-body">
              {renderContent(activePost.content)}
            </div>
          </div>
        </div>
      )}

      {/* ── Blog List ── */}
      <div className="blog-container">
        <h2>
          Blog &amp; <span>Insights</span>
        </h2>
        <p className="blog-subtitle">
          Writing about AI, data science, hackathons, and things I'm learning.
        </p>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <button
              key={post.id}
              className="blog-card"
              onClick={() => openPost(post)}
              data-cursor="disable"
            >
              <div className="blog-card-top">
                <div className="blog-card-meta">
                  <span className="blog-card-date">{post.date}</span>
                  <span className="blog-dot">·</span>
                  <span className="blog-card-date">{post.readTime}</span>
                </div>
                <div className="blog-card-arrow">
                  <MdArrowOutward />
                </div>
              </div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-summary">{post.summary}</p>
              <div className="blog-card-tags">
                {post.tags.map((tag, i) => (
                  <span key={i} className="blog-tag">{tag}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
