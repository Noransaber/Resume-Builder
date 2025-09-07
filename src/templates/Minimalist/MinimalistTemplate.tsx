"use client"
import React from 'react'
import { TemplateComponentProps } from '../types'
import { generateCSSVariables, TemplateUtils } from '../utils'
import styles from './MinimalistTemplate.module.css'

export const MinimalistTemplate: React.FC<TemplateComponentProps> = ({ userData, config }) => {
  // Generate CSS variables from config
  const cssVariables = generateCSSVariables(config)

  return (
    <div 
      className={styles.template}
      style={cssVariables}
    >
      {/* Minimalist Header */}
      <header className={styles.header}>
        <h1 className={styles.name}>
          {userData.personal.firstName} {userData.personal.lastName}
        </h1>
        
        <div className={styles.contactInfo}>
          {userData.personal.email && (
            <span className={styles.contactItem}>{userData.personal.email}</span>
          )}
          {userData.personal.phone && (
            <span className={styles.contactItem}>{userData.personal.phone}</span>
          )}
          {userData.personal.location && (
            <span className={styles.contactItem}>{userData.personal.location}</span>
          )}
        </div>
        
        {(userData.personal.website || userData.personal.linkedin) && (
          <div className={styles.links}>
            {userData.personal.website && (
              <a href={userData.personal.website} className={styles.link}>
                {userData.personal.website}
              </a>
            )}
            {userData.personal.linkedin && (
              <a href={userData.personal.linkedin} className={styles.link}>
                LinkedIn
              </a>
            )}
          </div>
        )}
      </header>

      {/* Summary */}
      {userData.personal.summary && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Summary</h2>
          <p className={styles.summary}>{userData.personal.summary}</p>
        </section>
      )}

      {/* Experience */}
      {userData.experience.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.experienceList}>
            {userData.experience.map((exp) => (
              <div key={exp.id} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <div className={styles.experienceTitle}>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <p className={styles.company}>{exp.company}</p>
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

      {/* Education */}
      {userData.education.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationList}>
            {userData.education.map((edu) => (
              <div key={edu.id} className={styles.educationItem}>
                <div className={styles.educationHeader}>
                  <div className={styles.educationTitle}>
                    <h3 className={styles.degree}>
                      {edu.degree}{edu.field && ` in ${edu.field}`}
                    </h3>
                    <p className={styles.institution}>{edu.institution}</p>
                  </div>
                  <div className={styles.educationMeta}>
                    <span className={styles.duration}>
                      {TemplateUtils.formatDateRange(edu.startDate, edu.endDate, edu.current)}
                    </span>
                    {edu.location && (
                      <span className={styles.location}>{edu.location}</span>
                    )}
                    {edu.gpa && (
                      <span className={styles.gpa}>GPA: {edu.gpa}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {(userData.technicalSkills.length > 0 || userData.softSkills.length > 0) && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsContainer}>
            {userData.technicalSkills.length > 0 && (
              <div className={styles.skillGroup}>
                <h3 className={styles.skillGroupTitle}>Technical</h3>
                <div className={styles.skillList}>
                  {userData.technicalSkills.map((skill, index) => (
                    <span key={index} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {userData.softSkills.length > 0 && (
              <div className={styles.skillGroup}>
                <h3 className={styles.skillGroupTitle}>Soft Skills</h3>
                <div className={styles.skillList}>
                  {userData.softSkills.map((skill, index) => (
                    <span key={index} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Projects */}
      {userData.projects.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.projectList}>
            {userData.projects.map((project) => (
              <div key={project.id} className={styles.projectItem}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  {project.link && (
                    <a href={project.link} className={styles.projectLink}>
                      View
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

      {/* Languages */}
      {userData.languages.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Languages</h2>
          <div className={styles.languageList}>
            {userData.languages.map((lang) => (
              <div key={lang.id} className={styles.languageItem}>
                <span className={styles.languageName}>{lang.name}</span>
                <span className={styles.languageProficiency}>{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {userData.customSections.map((section) => (
        <section key={section.id} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          {section.type === 'text' ? (
            <p className={styles.customText}>{section.content}</p>
          ) : (
            <ul className={styles.customList}>
              {section.items?.map((item, index) => (
                <li key={index} className={styles.customListItem}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* Certifications */}
      {userData.certifications.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <ul className={styles.certificationList}>
            {userData.certifications.map((cert, index) => (
              <li key={index} className={styles.certificationItem}>{cert}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

