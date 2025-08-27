// Minimalist Clean Template
// Simple and elegant design focusing on content over decoration

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Linkedin, Calendar, Award, Briefcase, GraduationCap, FileText, ExternalLink } from 'lucide-react'
import { TemplateProps } from '../index'
import styles from './MinimalTemplate.module.css'

const MinimalTemplate: React.FC<TemplateProps> = ({ userData }) => {
  if (!userData) return null

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  const formatDateRange = (startDate: string, endDate: string, current: boolean) => {
    const start = formatDate(startDate)
    const end = current ? 'Present' : formatDate(endDate)
    return `${start} - ${end}`
  }

  return (
    <div className={styles.container} data-resume-preview>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.name}>
          {userData.personal.firstName} {userData.personal.lastName}
        </h1>
        
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          {userData.personal.email && (
            <span>{userData.personal.email}</span>
          )}
          {userData.personal.phone && (
            <span>{userData.personal.phone}</span>
          )}
          {userData.personal.location && (
            <span>{userData.personal.location}</span>
          )}
          {userData.personal.website && (
            <span>{userData.personal.website.replace(/^https?:\/\//, '')}</span>
          )}
          {userData.personal.linkedin && (
            <span>LinkedIn</span>
          )}
        </div>
        
        {userData.personal.summary && (
          <p className={styles.summary}>
            {userData.personal.summary}
          </p>
        )}
      </header>

      {/* Experience Section */}
      {userData.experience.some(exp => exp.company || exp.position) && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          
          <div className={styles.sectionContent}>
            {userData.experience.map((exp, index) => (
              exp.company || exp.position ? (
                <div key={exp.id} className={styles.item}>
                  <div className={styles.itemHeader}>
                    <div>
                      <h3 className={styles.itemTitle}>
                        {exp.position || 'Position'}
                      </h3>
                      <p className={styles.itemSubtitle}>
                        {exp.company || 'Company'}
                      </p>
                    </div>
                    <div className={styles.itemMeta}>
                      <div className={styles.itemDate}>
                        {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                      </div>
                      {exp.location && (
                        <div className={styles.itemLocation}>
                          {exp.location}
                        </div>
                      )}
                    </div>
                  </div>
                  {exp.description && (
                    <p className={styles.itemDescription}>
                      {exp.description}
                    </p>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </section>
      )}

      {/* Education Section */}
      {userData.education.some(edu => edu.institution || edu.degree) && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          
          <div className={styles.sectionContent}>
            {userData.education.map((edu, index) => (
              edu.institution || edu.degree ? (
                <div key={edu.id} className={styles.item}>
                  <div className={styles.itemHeader}>
                    <div>
                      <h3 className={styles.itemTitle}>
                        {edu.degree || 'Degree'} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className={styles.itemSubtitle}>
                        {edu.institution || 'Institution'}
                      </p>
                    </div>
                    <div className={styles.itemMeta}>
                      <div className={styles.itemDate}>
                        {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                      </div>
                      {edu.location && (
                        <div className={styles.itemLocation}>
                          {edu.location}
                        </div>
                      )}
                    </div>
                  </div>
                  {edu.gpa && (
                    <p className={styles.itemDescription}>
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </section>
      )}

      {/* Skills Section */}
      {userData.skills.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          
          <div className={styles.skillsList}>
            {userData.skills.join(' • ')}
          </div>
        </section>
      )}

      {/* Projects Section */}
      {userData.projects.some(project => project.name || project.description) && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          
          <div className={styles.sectionContent}>
            {userData.projects.map((project, index) => (
              project.name || project.description ? (
                <div key={project.id} className={styles.item}>
                  <div className={styles.itemHeader}>
                    <div>
                      <h3 className={styles.itemTitle}>
                        {project.name || 'Project Name'}
                      </h3>
                      {project.technologies && (
                        <p className={styles.itemSubtitle}>
                          {project.technologies}
                        </p>
                      )}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        View →
                      </a>
                    )}
                  </div>
                  {project.description && (
                    <p className={styles.itemDescription}>
                      {project.description}
                    </p>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default MinimalTemplate
