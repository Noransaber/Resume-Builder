"use client"
import React from 'react'
import { TemplateComponentProps } from '../types'
import { generateCSSVariables, TemplateUtils } from '../utils'
import styles from './ModernTemplate.module.css'

export const ModernTemplate: React.FC<TemplateComponentProps> = ({ userData, config }) => {
  // Generate CSS variables from config
  const cssVariables = generateCSSVariables(config)

  return (
    <div 
      className={styles.template}
      style={cssVariables}
    >
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.name}>
            {userData.personal.firstName} {userData.personal.lastName}
          </h1>
          
          <div className={styles.contactInfo}>
            {userData.personal.email && (
              <span className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {userData.personal.email}
              </span>
            )}
            
            {userData.personal.phone && (
              <span className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {userData.personal.phone}
              </span>
            )}
            
            {userData.personal.location && (
              <span className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {userData.personal.location}
              </span>
            )}
          </div>

          {(userData.personal.website || userData.personal.linkedin) && (
            <div className={styles.links}>
              {userData.personal.website && (
                <a href={userData.personal.website} className={styles.link}>
                  <svg className={styles.linkIcon} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                  {userData.personal.website}
                </a>
              )}
              
              {userData.personal.linkedin && (
                <a href={userData.personal.linkedin} className={styles.link}>
                  <svg className={styles.linkIcon} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {userData.personal.summary && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Summary</h2>
          <div className={styles.sectionContent}>
            <p className={styles.summary}>{userData.personal.summary}</p>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {userData.experience.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          <div className={styles.sectionContent}>
            {userData.experience.map((exp) => (
              <div key={exp.id} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <div className={styles.experienceTitle}>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
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
            ))}
          </div>
        </section>
      )}

      {/* Education Section */}
      {userData.education.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.sectionContent}>
            {userData.education.map((edu) => (
              <div key={edu.id} className={styles.educationItem}>
                <div className={styles.educationHeader}>
                  <div className={styles.educationTitle}>
                    <h3 className={styles.degree}>
                      {edu.degree}{edu.field && ` in ${edu.field}`}
                    </h3>
                    <h4 className={styles.institution}>{edu.institution}</h4>
                  </div>
                  <div className={styles.educationMeta}>
                    <span className={styles.duration}>
                      {TemplateUtils.formatDateRange(edu.startDate, edu.endDate, edu.current)}
                    </span>
                    {edu.location && (
                      <span className={styles.location}>{edu.location}</span>
                    )}
                  </div>
                </div>
                {edu.gpa && (
                  <p className={styles.gpa}>GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills Section */}
      {(userData.technicalSkills.length > 0 || userData.softSkills.length > 0) && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.sectionContent}>
            {userData.technicalSkills.length > 0 && (
              <div className={styles.skillGroup}>
                <h3 className={styles.skillGroupTitle}>Technical Skills</h3>
                <div className={styles.skillTags}>
                  {userData.technicalSkills.map((skill, index) => (
                    <span key={index} className={`${styles.skillTag} ${styles.technicalSkill}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {userData.softSkills.length > 0 && (
              <div className={styles.skillGroup}>
                <h3 className={styles.skillGroupTitle}>Soft Skills</h3>
                <div className={styles.skillTags}>
                  {userData.softSkills.map((skill, index) => (
                    <span key={index} className={`${styles.skillTag} ${styles.softSkill}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Languages Section */}
      {userData.languages.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Languages</h2>
          <div className={styles.sectionContent}>
            <div className={styles.languageGrid}>
              {userData.languages.map((lang) => (
                <div key={lang.id} className={styles.languageItem}>
                  <span className={styles.languageName}>{lang.name}</span>
                  <span className={styles.languageProficiency}>{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {userData.projects.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.sectionContent}>
            {userData.projects.map((project) => (
              <div key={project.id} className={styles.projectItem}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  {project.link && (
                    <a href={project.link} className={styles.projectLink}>
                      <svg className={styles.linkIcon} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                {project.technologies && (
                  <p className={styles.projectTechnologies}>
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {userData.customSections.map((section) => (
        <section key={section.id} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <div className={styles.sectionContent}>
            {section.type === 'text' ? (
              <p className={styles.customSectionText}>{section.content}</p>
            ) : (
              <ul className={styles.customSectionList}>
                {section.items?.map((item, index) => (
                  <li key={index} className={styles.customSectionListItem}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {/* Certifications */}
      {userData.certifications.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <div className={styles.sectionContent}>
            <ul className={styles.certificationList}>
              {userData.certifications.map((cert, index) => (
                <li key={index} className={styles.certificationItem}>{cert}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  )
}

