"use client"
import React from 'react'
import { TemplateComponentProps } from '../types'
import { generateCSSVariables, TemplateUtils } from '../utils'
import styles from './CreativeTemplate.module.css'

export const CreativeTemplate: React.FC<TemplateComponentProps> = ({ userData, config }) => {
  // Generate CSS variables from config
  const cssVariables = generateCSSVariables(config)

  return (
    <div 
      className={styles.template}
      style={cssVariables}
    >
      {/* Creative Header with Geometric Design */}
      <header className={styles.header}>
        <div className={styles.headerBackground}>
          <div className={styles.geometricShape}></div>
          <div className={styles.geometricShape2}></div>
        </div>
        
        <div className={styles.headerContent}>
          <div className={styles.nameSection}>
            <h1 className={styles.name}>
              {userData.personal.firstName}
              <span className={styles.lastName}>{userData.personal.lastName}</span>
            </h1>
            <div className={styles.creativeLine}></div>
          </div>
          
          <div className={styles.contactGrid}>
            {userData.personal.email && (
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span>{userData.personal.email}</span>
              </div>
            )}
            
            {userData.personal.phone && (
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span>{userData.personal.phone}</span>
              </div>
            )}
            
            {userData.personal.location && (
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{userData.personal.location}</span>
              </div>
            )}
            
            {userData.personal.website && (
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{userData.personal.website}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Creative Summary with Artistic Border */}
      {userData.personal.summary && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Creative Vision</h2>
            <div className={styles.titleAccent}></div>
          </div>
          <div className={styles.summaryCard}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.summary}>{userData.personal.summary}</p>
          </div>
        </section>
      )}

      {/* Two-Column Layout for Main Content */}
      <div className={styles.mainContent}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Experience Section with Creative Timeline */}
          {userData.experience.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Experience Journey</h2>
                <div className={styles.titleAccent}></div>
              </div>
              <div className={styles.timelineContainer}>
                {userData.experience.map((exp, index) => (
                  <div key={exp.id} className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                      <div className={styles.markerDot}></div>
                      <div className={styles.markerLine}></div>
                    </div>
                    <div className={styles.experienceCard}>
                      <div className={styles.experienceHeader}>
                        <h3 className={styles.position}>{exp.position}</h3>
                        <div className={styles.company}>{exp.company}</div>
                        <div className={styles.experienceMeta}>
                          <span className={styles.duration}>
                            {TemplateUtils.formatDateRange(exp.startDate, exp.endDate, exp.current)}
                          </span>
                          {exp.location && (
                            <span className={styles.location}>{exp.location}</span>
                          )}
                        </div>
                      </div>
                      {exp.description && (
                        <p className={styles.experienceDescription}>{exp.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects Section with Portfolio Cards */}
          {userData.projects.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Portfolio Showcase</h2>
                <div className={styles.titleAccent}></div>
              </div>
              <div className={styles.portfolioGrid}>
                {userData.projects.map((project) => (
                  <div key={project.id} className={styles.portfolioCard}>
                    <div className={styles.portfolioHeader}>
                      <h3 className={styles.projectName}>{project.name}</h3>
                      {project.link && (
                        <a href={project.link} className={styles.projectLink}>
                          <svg viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className={styles.projectDescription}>{project.description}</p>
                    {project.technologies && (
                      <div className={styles.techTags}>
                        {project.technologies.split(',').map((tech, index) => (
                          <span key={index} className={styles.techTag}>{tech.trim()}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Skills Section with Creative Visualization */}
          {(userData.technicalSkills.length > 0 || userData.softSkills.length > 0) && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Creative Skills</h2>
                <div className={styles.titleAccent}></div>
              </div>
              <div className={styles.skillsContainer}>
                {userData.technicalSkills.length > 0 && (
                  <div className={styles.skillCategory}>
                    <h3 className={styles.skillCategoryTitle}>Technical</h3>
                    <div className={styles.skillCloud}>
                      {userData.technicalSkills.map((skill, index) => (
                        <span 
                          key={index} 
                          className={`${styles.skillBubble} ${styles.technicalSkill}`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {userData.softSkills.length > 0 && (
                  <div className={styles.skillCategory}>
                    <h3 className={styles.skillCategoryTitle}>Creative</h3>
                    <div className={styles.skillCloud}>
                      {userData.softSkills.map((skill, index) => (
                        <span 
                          key={index} 
                          className={`${styles.skillBubble} ${styles.creativeSkill}`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Education Section */}
          {userData.education.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Education</h2>
                <div className={styles.titleAccent}></div>
              </div>
              <div className={styles.educationContainer}>
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
                        {edu.gpa && <span className={styles.gpa}>GPA: {edu.gpa}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages Section with Creative Bars */}
          {userData.languages.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Languages</h2>
                <div className={styles.titleAccent}></div>
              </div>
              <div className={styles.languagesContainer}>
                {userData.languages.map((lang) => (
                  <div key={lang.id} className={styles.languageItem}>
                    <div className={styles.languageHeader}>
                      <span className={styles.languageName}>{lang.name}</span>
                      <span className={styles.languageProficiency}>{lang.proficiency}</span>
                    </div>
                    <div className={styles.proficiencyBar}>
                      <div 
                        className={styles.proficiencyFill}
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
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <div className={styles.titleAccent}></div>
              </div>
              <div className={styles.customSection}>
                {section.type === 'text' ? (
                  <p className={styles.customText}>{section.content}</p>
                ) : (
                  <ul className={styles.customList}>
                    {section.items?.map((item, index) => (
                      <li key={index} className={styles.customListItem}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Creative Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerPattern}></div>
        {userData.certifications.length > 0 && (
          <div className={styles.certificationsSection}>
            <h3 className={styles.certificationsTitle}>Certifications & Awards</h3>
            <div className={styles.certificationsGrid}>
              {userData.certifications.map((cert, index) => (
                <div key={index} className={styles.certificationBadge}>
                  <div className={styles.badgeIcon}>🏆</div>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </footer>
    </div>
  )
}

