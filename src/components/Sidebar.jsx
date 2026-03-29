import { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    } else {
      console.log("Section not found:", id);
    }
  };

  return (
    <>
      <div className="menuIcon" onClick={() => setOpen(true)}>
        ☰
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      <div className={`sidebar ${open ? "active" : ""}`}>
        <div className="closeBtn" onClick={() => setOpen(false)}>
          ✖
        </div>

        <ul className="sidebarLinks">
          <li onClick={() => scrollToSection("hero")}>🏠 Hero</li>
          <li onClick={() => scrollToSection("features")}>⚡ Features</li>
          <li onClick={() => scrollToSection("quotes")}>💬 Quotes</li>
          <li onClick={() => scrollToSection("classes")}>🎓 Classes</li>
          <li onClick={() => scrollToSection("cta")}>🚀 CTA</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;