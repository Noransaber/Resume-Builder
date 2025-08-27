// Modern Professional Template
// Clean, contemporary design with primary color accents and professional typography

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Linkedin, Calendar, Award, Briefcase, GraduationCap, FileText, ExternalLink } from 'lucide-react'
import { TemplateProps } from '../index'
import styles from './ModernTemplate.module.css'

const ModernTemplate: React.FC<TemplateProps> = ({ userData }) => {
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
        <div className={styles.nameSection}>
          <h1 className={styles.name}>
            {userData.personal.firstName} {userData.personal.lastName}
          </h1>
          {userData.personal.summary && (
            <p className={styles.summary}>
              {userData.personal.summary}
            </p>
          )}
        </div>
        
        {/* Contact Information */}
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
                LinkedIn Profile
              </a>
            </div>
          )}
        </div>
      </header>

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
                        <Calendar className={styles.metaIcon} />
                        {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                      </div>
                      {exp.location && (
                        <div className={styles.itemLocation}>
                          <MapPin className={styles.metaIcon} />
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
                        <Calendar className={styles.metaIcon} />
                        {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                      </div>
                      {edu.location && (
                        <div className={styles.itemLocation}>
                          <MapPin className={styles.metaIcon} />
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
            Skills
          </h2>
          
          <div className={styles.skillsGrid}>
            {userData.skills.map((skill, index) => (
              <span
                key={index}
                className={styles.skillTag}
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
            Projects
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
                        <ExternalLink className={styles.metaIcon} />
                        View Project
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
        </motion.section>
      )}
    </div>
  )
}

export default ModernTemplate
