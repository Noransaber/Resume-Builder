"use client"
import React from 'react'
import { TemplateComponentProps } from '../types'
import { generateCSSVariables, TemplateUtils } from '../utils'
import styles from './TechTemplate.module.css'

export const TechTemplate: React.FC<TemplateComponentProps> = ({ userData, config }) => {
  // Generate CSS variables from config
  const cssVariables = generateCSSVariables(config)

  return (
    <div 
      className={styles.template}
      style={cssVariables}
    >
      {/* Tech Header with Terminal Style */}
      <header className={styles.header}>
        <div className={styles.terminalWindow}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalButtons}>
              <span className={styles.terminalButton}></span>
              <span className={styles.terminalButton}></span>
              <span className={styles.terminalButton}></span>
            </div>
            <span className={styles.terminalTitle}>~/resume</span>
          </div>
          
          <div className={styles.terminalContent}>
            <div className={styles.terminalLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>whoami</span>
            </div>
            <h1 className={styles.name}>
              {userData.personal.firstName}.{userData.personal.lastName}
            </h1>
            
            <div className={styles.contactGrid}>
              {userData.personal.email && (
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>email:</span>
                  <span className={styles.contactValue}>{userData.personal.email}</span>
                </div>
              )}
              
              {userData.personal.phone && (
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>phone:</span>
                  <span className={styles.contactValue}>{userData.personal.phone}</span>
                </div>
              )}
              
              {userData.personal.location && (
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>location:</span>
                  <span className={styles.contactValue}>{userData.personal.location}</span>
                </div>
              )}
              
              {userData.personal.website && (
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>website:</span>
                  <a href={userData.personal.website} className={styles.contactLink}>
                    {userData.personal.website}
                  </a>
                </div>
              )}
              
              {userData.personal.linkedin && (
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>linkedin:</span>
                  <a href={userData.personal.linkedin} className={styles.contactLink}>
                    /in/{userData.personal.linkedin.split('/').pop()}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Summary with Code Block Style */}
      {userData.personal.summary && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.comment}>//</span> About
          </h2>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.codeTitle}>summary.md</span>
            </div>
            <div className={styles.codeContent}>
              <p className={styles.summary}>{userData.personal.summary}</p>
            </div>
          </div>
        </section>
      )}

      {/* Main Grid Layout */}
      <div className={styles.mainGrid}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Experience with Git-like Timeline */}
          {userData.experience.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.comment}>//</span> Experience
              </h2>
              <div className={styles.gitTimeline}>
                {userData.experience.map((exp, index) => (
                  <div key={exp.id} className={styles.commitItem}>
                    <div className={styles.commitHash}>
                      {Math.random().toString(16).substr(2, 7)}
                    </div>
                    <div className={styles.commitContent}>
                      <div className={styles.commitHeader}>
                        <h3 className={styles.position}>{exp.position}</h3>
                        <div className={styles.commitMeta}>
                          <span className={styles.branch}>{exp.company}</span>
                          <span className={styles.commitDate}>
                            {TemplateUtils.formatDateRange(exp.startDate, exp.endDate, exp.current)}
                          </span>
                        </div>
                      </div>
                      {exp.location && (
                        <div className={styles.commitLocation}>📍 {exp.location}</div>
                      )}
                      {exp.description && (
                        <div className={styles.commitMessage}>{exp.description}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects with Repository Cards */}
          {userData.projects.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.comment}>//</span> Repositories
              </h2>
              <div className={styles.repoGrid}>
                {userData.projects.map((project) => (
                  <div key={project.id} className={styles.repoCard}>
                    <div className={styles.repoHeader}>
                      <div className={styles.repoIcon}>📁</div>
                      <h3 className={styles.repoName}>{project.name}</h3>
                      {project.link && (
                        <a href={project.link} className={styles.repoLink}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className={styles.repoDescription}>{project.description}</p>
                    {project.technologies && (
                      <div className={styles.techStack}>
                        {project.technologies.split(',').map((tech, index) => (
                          <span key={index} className={styles.techBadge}>
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className={styles.repoStats}>
                      <span className={styles.repoStat}>⭐ {Math.floor(Math.random() * 100)}</span>
                      <span className={styles.repoStat}>🍴 {Math.floor(Math.random() * 50)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Skills with Code Syntax */}
          {(userData.technicalSkills.length > 0 || userData.softSkills.length > 0) && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.comment}>//</span> Tech Stack
              </h2>
              <div className={styles.codeBlock}>
                <div className={styles.codeHeader}>
                  <span className={styles.codeTitle}>skills.json</span>
                </div>
                <div className={styles.codeContent}>
                  <div className={styles.jsonContent}>
                    {userData.technicalSkills.length > 0 && (
                      <div className={styles.jsonSection}>
                        <span className={styles.jsonKey}>"technical"</span>: [
                        <div className={styles.jsonArray}>
                          {userData.technicalSkills.map((skill, index) => (
                            <div key={index} className={styles.jsonItem}>
                              <span className={styles.jsonString}>"{skill}"</span>
                              {index < userData.technicalSkills.length - 1 && ','}
                            </div>
                          ))}
                        </div>
                        ]{userData.softSkills.length > 0 && ','}
                      </div>
                    )}
                    
                    {userData.softSkills.length > 0 && (
                      <div className={styles.jsonSection}>
                        <span className={styles.jsonKey}>"soft"</span>: [
                        <div className={styles.jsonArray}>
                          {userData.softSkills.map((skill, index) => (
                            <div key={index} className={styles.jsonItem}>
                              <span className={styles.jsonString}>"{skill}"</span>
                              {index < userData.softSkills.length - 1 && ','}
                            </div>
                          ))}
                        </div>
                        ]
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Education */}
          {userData.education.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.comment}>//</span> Education
              </h2>
              <div className={styles.educationList}>
                {userData.education.map((edu) => (
                  <div key={edu.id} className={styles.educationCard}>
                    <div className={styles.educationIcon}>🎓</div>
                    <div className={styles.educationContent}>
                      <h3 className={styles.degree}>
                        {edu.degree}{edu.field && ` in ${edu.field}`}
                      </h3>
                      <div className={styles.institution}>{edu.institution}</div>
                      <div className={styles.educationMeta}>
                        <span className={styles.duration}>
                          {TemplateUtils.formatDateRange(edu.startDate, edu.endDate, edu.current)}
                        </span>
                        {edu.gpa && (
                          <span className={styles.gpa}>GPA: {edu.gpa}</span>
                        )}
                        {edu.location && (
                          <span className={styles.location}>📍 {edu.location}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages with Progress Bars */}
          {userData.languages.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.comment}>//</span> Languages
              </h2>
              <div className={styles.languageList}>
                {userData.languages.map((lang) => (
                  <div key={lang.id} className={styles.languageItem}>
                    <div className={styles.languageHeader}>
                      <span className={styles.languageName}>{lang.name}</span>
                      <span className={styles.languageProficiency}>{lang.proficiency}</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill}
                        style={{ width: `${TemplateUtils.getProficiencyLevel(lang.proficiency) * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Custom Sections */}
          {userData.customSections.map((section) => (
            <section key={section.id} className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.comment}>//</span> {section.title}
              </h2>
              <div className={styles.codeBlock}>
                <div className={styles.codeContent}>
                  {section.type === 'text' ? (
                    <p className={styles.customText}>{section.content}</p>
                  ) : (
                    <ul className={styles.customList}>
                      {section.items?.map((item, index) => (
                        <li key={index} className={styles.customListItem}>
                          <span className={styles.listBullet}>></span> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          ))}

          {/* Certifications */}
          {userData.certifications.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.comment}>//</span> Certifications
              </h2>
              <div className={styles.certificationGrid}>
                {userData.certifications.map((cert, index) => (
                  <div key={index} className={styles.certBadge}>
                    <span className={styles.certIcon}>🏆</span>
                    <span className={styles.certText}>{cert}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Footer with Terminal Command */}
      <footer className={styles.footer}>
        <div className={styles.terminalFooter}>
          <span className={styles.prompt}>$</span>
          <span className={styles.command}>git commit -m "Updated resume"</span>
          <span className={styles.output}> ✓ Resume successfully updated</span>
        </div>
      </footer>
    </div>
  )
}

