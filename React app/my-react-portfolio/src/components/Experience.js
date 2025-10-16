import React, { useEffect, useState } from "react";

const techSkills = [
  { name: "HTML", level: 85 },
  { name: "CSS3", level: 75 },
  { name: "JavaScript", level: 90 },
  { name: "PHP", level: 50 }
];

const softSkills = [
  { name: "Communication", level: 80 },
  { name: "Problem Solving", level: 85 },
  { name: "Teamwork", level: 75 },
  { name: "Adaptability", level: 70 }
];

const hobbies = [
  { name: "Gaming", level: 80 },
  { name: "Music Production", level: 75 },
  { name: "Reading", level: 70 },
  { name: "Hiking", level: 65 }
];

const skillSets = [
  { title: "Technical Skills", skills: techSkills },
  { title: "Soft Skills", skills: softSkills },
  { title: "Hobbies", skills: hobbies }
];

export default function Experience() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % skillSets.length), 5000);
    return () => clearInterval(id);
  }, []);

  const current = skillSets[index];

  return (
    <section id="experience" className="container">
      <div className="section-card">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:16, flexWrap:"wrap"}}>
          <div style={{flex:1}}>
            <h3>Experience</h3>
            <div className="experience-item">
              <div className="experience-header" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div>
                  <h4>Frontend Developer</h4>
                  <h5 style={{marginTop:4}}>Self-employed</h5>
                </div>
                <div className="badge">2023 - Present</div>
              </div>
              <ul className="experience-details" style={{marginTop:10}}>
                <li>Built responsive websites using modern HTML, CSS and JavaScript.</li>
                <li>Delivered projects for small businesses and personal clients.</li>
              </ul>
            </div>
          </div>

          <div style={{width:340}}>
            <div className="section-card skills">
              <h4 id="skill-rotator-title">{current.title}</h4>
              {current.skills.map(s => (
                <div key={s.name} style={{marginBottom:10}}>
                  <div style={{display:"flex", justifyContent:"space-between"}}><span>{s.name}</span><span>{s.level}%</span></div>
                  <div className="progress"><div className="progress-bar" style={{width: `${s.level}%`}}>{s.level}%</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}