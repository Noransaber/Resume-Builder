// Creative Portfolio Template
// Bold, creative design with visual elements and modern styling for creative professionals

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Linkedin, Calendar, Award, Briefcase, GraduationCap, FileText, ExternalLink, Palette, Code, Camera } from 'lucide-react'
import { TemplateProps } from '../index'
import styles from './CreativeTemplate.module.css'

const CreativeTemplate: React.FC<TemplateProps> = ({ userData }) => {
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

  // Creative icons for different skill categories
  const getSkillIcon = (skill: string) => {
    const skillLower = skill.toLowerCase()
    if (skillLower.includes('design') || skillLower.includes('figma') || skillLower.includes('photoshop') || skillLower.includes('illustrator')) {
      return <Palette className="w-3 h-3" />
    }
    if (skillLower.includes('code') || skillLower.includes('javascript') || skillLower.includes('react') || skillLower.includes('html') || skillLower.includes('css')) {
      return <Code className="w-3 h-3" />
    }
    if (skillLower.includes('photo') || skillLower.includes('video') || skillLower.includes('media')) {
      return <Camera className="w-3 h-3" />
    }
    return <Award className="w-3 h-3" />
  }

  return (
    <div className={styles.container} data-resume-preview>
      {/* Decorative background elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.triangle}></div>
      </div>

      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.nameSection}>
          <h1 className={styles.name}>
            {userData.personal.firstName} <span className={styles.lastName}>{userData.personal.lastName}</span>
          </h1>
          {userData.personal.summary && (
            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <Palette className="w-6 h-6" />
              </div>
              <p className={styles.summary}>
                {userData.personal.summary}
              </p>
            </div>
          )}
        </div>
        
        {/* Contact Information */}
        <div className={styles.contactSection}>
          <div className={styles.contactGrid}>
            {userData.personal.email && (
              <motion.div 
                className={styles.contactCard}
                whileHover={{ scale: 1.05 }}
              >
                <Mail className={styles.contactIcon} />
                <a href={`mailto:${userData.personal.email}`} className={styles.contactLink}>
                  {userData.personal.email}
                </a>
              </motion.div>
            )}
            {userData.personal.phone && (
              <motion.div 
                className={styles.contactCard}
                whileHover={{ scale: 1.05 }}
              >
                <Phone className={styles.contactIcon} />
                <a href={`tel:${userData.personal.phone}`} className={styles.contactLink}>
                  {userData.personal.phone}
                </a>
              </motion.div>
            )}
            {userData.personal.location && (
              <motion.div 
                className={styles.contactCard}
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className={styles.contactIcon} />
                <span>{userData.personal.location}</span>
              </motion.div>
            )}
            {userData.personal.website && (
              <motion.div 
                className={styles.contactCard}
                whileHover={{ scale: 1.05 }}
              >
                <Globe className={styles.contactIcon} />
                <a 
                  href={userData.personal.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.contactLink}
                >
                  Portfolio
                </a>
              </motion.div>
            )}
            {userData.personal.linkedin && (
              <motion.div 
                className={styles.contactCard}
                whileHover={{ scale: 1.05 }}
              >
                <Linkedin className={styles.contactIcon} />
                <a 
                  href={userData.personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.contactLink}
                >
                  LinkedIn
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      {/* Experience Section */}
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
            <h2 className={styles.sectionTitle}>Experience</h2>
          </div>
          
          <div className={styles.timeline}>
            {userData.experience.map((exp, index) => (
              exp.company || exp.position ? (
                <motion.div 
                  key={exp.id} 
                  className={styles.timelineItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
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
                      <div className={styles.itemDescription}>
                        {exp.description.split('\n').map((paragraph, idx) => (
                          <p key={idx} className={styles.descriptionParagraph}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
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
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrapper}>
              <Award className={styles.sectionIcon} />
            </div>
            <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          </div>
          
          <div className={styles.skillsGrid}>
            {userData.skills.map((skill, index) => (
              <motion.div
                key={index}
                className={styles.skillCard}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className={styles.skillIcon}>
                  {getSkillIcon(skill)}
                </div>
                <span className={styles.skillText}>{skill}</span>
              </motion.div>
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
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrapper}>
              <FileText className={styles.sectionIcon} />
            </div>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
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
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                >
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>
                      {project.name || 'Project Name'}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <ExternalLink className={styles.projectLinkIcon} />
                      </a>
                    )}
                  </div>
                  
                  {project.technologies && (
                    <div className={styles.projectTech}>
                      {project.technologies.split(',').map((tech, techIndex) => (
                        <span key={techIndex} className={styles.techTag}>
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {project.description && (
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                  )}
                </motion.div>
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
          transition={{ delay: 0.4 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrapper}>
              <GraduationCap className={styles.sectionIcon} />
            </div>
            <h2 className={styles.sectionTitle}>Education</h2>
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
                    <h3 className={styles.educationDegree}>
                      {edu.degree || 'Degree'} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p className={styles.educationSchool}>
                      {edu.institution || 'Institution'}
                    </p>
                    <div className={styles.educationMeta}>
                      <span className={styles.educationDate}>
                        {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                      </span>
                      {edu.location && (
                        <span className={styles.educationLocation}>
                          {edu.location}
                        </span>
                      )}
                    </div>
                    {edu.gpa && (
                      <p className={styles.educationGpa}>
                        GPA: {edu.gpa}
                      </p>
                    )}
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

export default CreativeTemplate
