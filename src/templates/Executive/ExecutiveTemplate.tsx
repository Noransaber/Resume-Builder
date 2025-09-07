"use client"
import React from 'react'
import { TemplateComponentProps } from '../types'
import { generateCSSVariables, TemplateUtils } from '../utils'
import styles from './ExecutiveTemplate.module.css'

export const ExecutiveTemplate: React.FC<TemplateComponentProps> = ({ userData, config }) => {
  // Generate CSS variables from config
  const cssVariables = generateCSSVariables(config)

  return (
    <div 
      className={styles.template}
      style={cssVariables}
    >
      {/* Executive Header with Premium Styling */}
      <header className={styles.header}>
        <div className={styles.headerBackground}>
          <div className={styles.goldAccent}></div>
        </div>
        
        <div className={styles.headerContent}>
          <div className={styles.nameSection}>
            <h1 className={styles.name}>
              {userData.personal.firstName}
              <span className={styles.lastName}>{userData.personal.lastName}</span>
            </h1>
            <div className={styles.executiveLine}></div>
          </div>
          
          <div className={styles.contactSection}>
            <div className={styles.contactRow}>
              {userData.personal.email && (
                <div className={styles.contactItem}>
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
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span>{userData.personal.phone}</span>
                </div>
              )}
            </div>
            
            <div className={styles.contactRow}>
              {userData.personal.location && (
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{userData.personal.location}</span>
                </div>
              )}
              
              {userData.personal.linkedin && (
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <a href={userData.personal.linkedin} className={styles.contactLink}>LinkedIn Profile</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      {userData.personal.summary && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Executive Summary</h2>
            <div className={styles.sectionDivider}></div>
          </div>
          <div className={styles.executiveSummary}>
            <div className={styles.summaryQuote}>"</div>
            <p className={styles.summary}>{userData.personal.summary}</p>
          </div>
        </section>
      )}

      {/* Professional Experience */}
      {userData.experience.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Professional Experience</h2>
            <div className={styles.sectionDivider}></div>
          </div>
          <div className={styles.experienceContainer}>
            {userData.experience.map((exp, index) => (
              <div key={exp.id} className={styles.experienceCard}>
                <div className={styles.experienceNumber}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className={styles.experienceContent}>
                  <div className={styles.experienceHeader}>
                    <div className={styles.experienceTitle}>
                      <h3 className={styles.position}>{exp.position}</h3>
                      <div className={styles.company}>{exp.company}</div>
                    </div>
                    <div className={styles.experienceMeta}>
                      <div className={styles.duration}>
                        {TemplateUtils.formatDateRange(exp.startDate, exp.endDate, exp.current)}
                      </div>
                      {exp.location && (
                        <div className={styles.location}>{exp.location}</div>
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

      {/* Two-Column Section */}
      <div className={styles.twoColumnSection}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Education */}
          {userData.education.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Education & Credentials</h2>
                <div className={styles.sectionDivider}></div>
              </div>
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
                        <span className={styles.educationYear}>
                          {TemplateUtils.formatDateRange(edu.startDate, edu.endDate, edu.current)}
                        </span>
                        {edu.gpa && (
                          <span className={styles.gpa}>GPA: {edu.gpa}</span>
                        )}
                        {edu.location && (
                          <span className={styles.eduLocation}>{edu.location}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {userData.certifications.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Certifications & Awards</h2>
                <div className={styles.sectionDivider}></div>
              </div>
              <div className={styles.certificationList}>
                {userData.certifications.map((cert, index) => (
                  <div key={index} className={styles.certificationItem}>
                    <div className={styles.certIcon}>🏆</div>
                    <span className={styles.certText}>{cert}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Core Competencies */}
          {(userData.technicalSkills.length > 0 || userData.softSkills.length > 0) && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Core Competencies</h2>
                <div className={styles.sectionDivider}></div>
              </div>
              <div className={styles.competenciesContainer}>
                {userData.technicalSkills.length > 0 && (
                  <div className={styles.competencyGroup}>
                    <h3 className={styles.competencyTitle}>Technical Leadership</h3>
                    <div className={styles.competencyGrid}>
                      {userData.technicalSkills.map((skill, index) => (
                        <div key={index} className={styles.competencyItem}>
                          <div className={styles.competencyBullet}></div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {userData.softSkills.length > 0 && (
                  <div className={styles.competencyGroup}>
                    <h3 className={styles.competencyTitle}>Executive Skills</h3>
                    <div className={styles.competencyGrid}>
                      {userData.softSkills.map((skill, index) => (
                        <div key={index} className={styles.competencyItem}>
                          <div className={styles.competencyBullet}></div>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Languages */}
          {userData.languages.length > 0 && (
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Languages</h2>
                <div className={styles.sectionDivider}></div>
              </div>
              <div className={styles.languageList}>
                {userData.languages.map((lang) => (
                  <div key={lang.id} className={styles.languageItem}>
                    <div className={styles.languageContent}>
                      <span className={styles.languageName}>{lang.name}</span>
                      <span className={styles.languageProficiency}>{lang.proficiency}</span>
                    </div>
                    <div className={styles.languageLevel}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <div 
                          key={i}
                          className={`${styles.levelDot} ${
                            i < TemplateUtils.getProficiencyLevel(lang.proficiency) ? styles.active : ''
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Key Projects & Achievements */}
      {userData.projects.length > 0 && (
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Key Projects & Achievements</h2>
            <div className={styles.sectionDivider}></div>
          </div>
          <div className={styles.projectsContainer}>
            {userData.projects.map((project, index) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectNumber}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
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
                    <div className={styles.projectTechnologies}>
                      <strong>Key Technologies:</strong> {project.technologies}
                    </div>
                  )}
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
            <div className={styles.sectionDivider}></div>
          </div>
          <div className={styles.customSectionContent}>
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

      {/* Executive Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerText}>
            Confidential Executive Resume
          </div>
          <div className={styles.footerDivider}></div>
          <div className={styles.footerContact}>
            {userData.personal.email && (
              <span>{userData.personal.email}</span>
            )}
            {userData.personal.phone && userData.personal.email && (
              <span className={styles.footerSeparator}>|</span>
            )}
            {userData.personal.phone && (
              <span>{userData.personal.phone}</span>
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}

