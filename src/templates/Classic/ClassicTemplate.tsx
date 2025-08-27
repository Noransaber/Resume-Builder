// Classic Elegant Template
// Traditional, professional design with serif typography and conservative styling

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Linkedin, Calendar, Award, Briefcase, GraduationCap, FileText, ExternalLink } from 'lucide-react'
import { TemplateProps } from '../index'
import styles from './ClassicTemplate.module.css'

const ClassicTemplate: React.FC<TemplateProps> = ({ userData }) => {
  if (!userData) return null

  const formatDate = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
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
        <div className={styles.nameSection}>
          <h1 className={styles.name}>
            {userData.personal.firstName} {userData.personal.lastName}
          </h1>
          {userData.personal.summary && (
            <div className={styles.summaryBox}>
              <h2 className={styles.summaryTitle}>Professional Summary</h2>
              <p className={styles.summary}>
                {userData.personal.summary}
              </p>
            </div>
          )}
        </div>
      </header>

      {/* Contact Information Bar */}
      <div className={styles.contactBar}>
        <div className={styles.contactGrid}>
          {userData.personal.email && (
            <div className={styles.contactItem}>
              <Mail className={styles.contactIcon} />
              <a href={`mailto:${userData.personal.email}`} className={styles.contactLink}>
                {userData.personal.email}
              </a>
            </div>
          )}
          {userData.personal.phone && (
            <div className={styles.contactItem}>
              <Phone className={styles.contactIcon} />
              <a href={`tel:${userData.personal.phone}`} className={styles.contactLink}>
                {userData.personal.phone}
              </a>
            </div>
          )}
          {userData.personal.location && (
            <div className={styles.contactItem}>
              <MapPin className={styles.contactIcon} />
              <span>{userData.personal.location}</span>
            </div>
          )}
          {userData.personal.website && (
            <div className={styles.contactItem}>
              <Globe className={styles.contactIcon} />
              <a 
                href={userData.personal.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.contactLink}
              >
                {userData.personal.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
          {userData.personal.linkedin && (
            <div className={styles.contactItem}>
              <Linkedin className={styles.contactIcon} />
              <a 
                href={userData.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.contactLink}
              >
                LinkedIn
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Experience Section */}
      {userData.experience.some(exp => exp.company || exp.position) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.section}
        >
          <h2 className={styles.sectionTitle}>
            <Briefcase className={styles.sectionIcon} />
            Professional Experience
          </h2>
          
          <div className={styles.sectionContent}>
            {userData.experience.map((exp, index) => (
              exp.company || exp.position ? (
                <div key={exp.id} className={styles.experienceItem}>
                  <div className={styles.itemHeader}>
                    <div className={styles.itemTitleGroup}>
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
                    <div className={styles.itemDescription}>
                      {exp.description.split('\n').map((paragraph, idx) => (
                        <p key={idx} className={styles.descriptionParagraph}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </motion.section>
      )}

      {/* Education Section */}
      {userData.education.some(edu => edu.institution || edu.degree) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={styles.section}
        >
          <h2 className={styles.sectionTitle}>
            <GraduationCap className={styles.sectionIcon} />
            Education
          </h2>
          
          <div className={styles.sectionContent}>
            {userData.education.map((edu, index) => (
              edu.institution || edu.degree ? (
                <div key={edu.id} className={styles.educationItem}>
                  <div className={styles.itemHeader}>
                    <div className={styles.itemTitleGroup}>
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
                    <p className={styles.gpaText}>
                      <strong>GPA:</strong> {edu.gpa}
                    </p>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </motion.section>
      )}

      {/* Skills Section */}
      {userData.skills.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.section}
        >
          <h2 className={styles.sectionTitle}>
            <Award className={styles.sectionIcon} />
            Core Competencies
          </h2>
          
          <div className={styles.skillsList}>
            {userData.skills.map((skill, index) => (
              <span
                key={index}
                className={styles.skillItem}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>
      )}

      {/* Projects Section */}
      {userData.projects.some(project => project.name || project.description) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={styles.section}
        >
          <h2 className={styles.sectionTitle}>
            <FileText className={styles.sectionIcon} />
            Notable Projects
          </h2>
          
          <div className={styles.sectionContent}>
            {userData.projects.map((project, index) => (
              project.name || project.description ? (
                <div key={project.id} className={styles.projectItem}>
                  <div className={styles.itemHeader}>
                    <div className={styles.itemTitleGroup}>
                      <h3 className={styles.itemTitle}>
                        {project.name || 'Project Name'}
                      </h3>
                      {project.technologies && (
                        <p className={styles.projectTech}>
                          <strong>Technologies:</strong> {project.technologies}
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
                        View Project →
                      </a>
                    )}
                  </div>
                  {project.description && (
                    <div className={styles.itemDescription}>
                      {project.description.split('\n').map((paragraph, idx) => (
                        <p key={idx} className={styles.descriptionParagraph}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </motion.section>
      )}
    </div>
  )
}

export default ClassicTemplate
