// Executive Suite Template
// Premium template designed for C-level executives and senior leadership roles

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Linkedin, Calendar, Award, Briefcase, GraduationCap, FileText, ExternalLink, Crown, Target, Users } from 'lucide-react'
import { TemplateProps } from '../index'
import styles from './ExecutiveTemplate.module.css'

const ExecutiveTemplate: React.FC<TemplateProps> = ({ userData }) => {
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
      {/* Premium Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.nameSection}>
            <div className={styles.nameWrapper}>
              <Crown className={styles.crownIcon} />
              <h1 className={styles.name}>
                {userData.personal.firstName} {userData.personal.lastName}
              </h1>
            </div>
            {userData.personal.summary && (
              <div className={styles.executiveSummary}>
                <h2 className={styles.summaryTitle}>Executive Profile</h2>
                <p className={styles.summary}>
                  {userData.personal.summary}
                </p>
              </div>
            )}
          </div>
          
          {/* Contact Information */}
          <div className={styles.contactCard}>
            <h3 className={styles.contactTitle}>Contact Information</h3>
            <div className={styles.contactList}>
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
          </div>
        </div>
      </header>

      {/* Executive Experience */}
      {userData.experience.some(exp => exp.company || exp.position) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrapper}>
              <Briefcase className={styles.sectionIcon} />
            </div>
            <h2 className={styles.sectionTitle}>Executive Leadership Experience</h2>
          </div>
          
          <div className={styles.experienceTimeline}>
            {userData.experience.map((exp, index) => (
              exp.company || exp.position ? (
                <motion.div 
                  key={exp.id} 
                  className={styles.experienceCard}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.positionInfo}>
                      <h3 className={styles.positionTitle}>
                        {exp.position || 'Executive Position'}
                      </h3>
                      <div className={styles.companyInfo}>
                        <Target className={styles.companyIcon} />
                        <span className={styles.companyName}>
                          {exp.company || 'Company'}
                        </span>
                      </div>
                    </div>
                    <div className={styles.tenureInfo}>
                      <div className={styles.dateRange}>
                        <Calendar className={styles.dateIcon} />
                        {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                      </div>
                      {exp.location && (
                        <div className={styles.location}>
                          <MapPin className={styles.locationIcon} />
                          {exp.location}
                        </div>
                      )}
                    </div>
                  </div>
                  {exp.description && (
                    <div className={styles.achievementsList}>
                      <h4 className={styles.achievementsTitle}>Key Achievements & Responsibilities</h4>
                      <div className={styles.achievementContent}>
                        {exp.description.split('\n').map((achievement, idx) => (
                          <p key={idx} className={styles.achievementItem}>
                            {achievement}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : null
            ))}
          </div>
        </motion.section>
      )}

      {/* Core Competencies */}
      {userData.skills.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrapper}>
              <Award className={styles.sectionIcon} />
            </div>
            <h2 className={styles.sectionTitle}>Core Executive Competencies</h2>
          </div>
          
          <div className={styles.competenciesGrid}>
            {userData.skills.map((skill, index) => (
              <motion.div
                key={index}
                className={styles.competencyCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <Users className={styles.competencyIcon} />
                <span className={styles.competencyText}>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Strategic Projects */}
      {userData.projects.some(project => project.name || project.description) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrapper}>
              <FileText className={styles.sectionIcon} />
            </div>
            <h2 className={styles.sectionTitle}>Strategic Initiatives & Projects</h2>
          </div>
          
          <div className={styles.projectsGrid}>
            {userData.projects.map((project, index) => (
              project.name || project.description ? (
                <motion.div 
                  key={project.id} 
                  className={styles.projectCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <div className={styles.projectHeader}>
                    <div className={styles.projectTitleSection}>
                      <h3 className={styles.projectTitle}>
                        {project.name || 'Strategic Project'}
                      </h3>
                      {project.technologies && (
                        <div className={styles.projectScope}>
                          <span className={styles.scopeLabel}>Scope:</span>
                          <span className={styles.scopeText}>{project.technologies}</span>
                        </div>
                      )}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <ExternalLink className={styles.linkIcon} />
                        View Details
                      </a>
                    )}
                  </div>
                  
                  {project.description && (
                    <div className={styles.projectDescription}>
                      <h4 className={styles.impactTitle}>Business Impact</h4>
                      <p className={styles.impactText}>
                        {project.description}
                      </p>
                    </div>
                  )}
                </motion.div>
              ) : null
            ))}
          </div>
        </motion.section>
      )}

      {/* Education & Credentials */}
      {userData.education.some(edu => edu.institution || edu.degree) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrapper}>
              <GraduationCap className={styles.sectionIcon} />
            </div>
            <h2 className={styles.sectionTitle}>Education & Professional Development</h2>
          </div>
          
          <div className={styles.educationGrid}>
            {userData.education.map((edu, index) => (
              edu.institution || edu.degree ? (
                <motion.div 
                  key={edu.id} 
                  className={styles.educationCard}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.educationContent}>
                    <div className={styles.degreeInfo}>
                      <h3 className={styles.degreeTitle}>
                        {edu.degree || 'Degree'} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className={styles.institutionName}>
                        {edu.institution || 'Institution'}
                      </p>
                    </div>
                    <div className={styles.educationMeta}>
                      <div className={styles.graduationDate}>
                        <Calendar className={styles.dateIcon} />
                        {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                      </div>
                      {edu.location && (
                        <div className={styles.institutionLocation}>
                          <MapPin className={styles.locationIcon} />
                          {edu.location}
                        </div>
                      )}
                      {edu.gpa && (
                        <div className={styles.academicHonors}>
                          <Award className={styles.honorIcon} />
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : null
            ))}
          </div>
        </motion.section>
      )}
    </div>
  )
}

export default ExecutiveTemplate
