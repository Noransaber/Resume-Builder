// Tech Innovator Template
// Modern tech-focused design with dark theme and code-friendly styling

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Linkedin, Calendar, Award, Briefcase, GraduationCap, FileText, ExternalLink, Code, Terminal, Github, Users, Languages } from 'lucide-react'
import { TemplateProps } from '../index'
import styles from './TechTemplate.module.css'

const TechTemplate: React.FC<TemplateProps> = ({ userData }) => {
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
          <div className={styles.terminalHeader}>
            <div className={styles.terminalControls}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <span className={styles.terminalTitle}>~/resume</span>
          </div>
          <div className={styles.terminalContent}>
            <div className={styles.commandLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>whoami</span>
            </div>
            <h1 className={styles.name}>
              {userData.personal.firstName}.{userData.personal.lastName}
            </h1>
          </div>
        </div>
        
        {userData.personal.summary && (
          <div className={styles.summarySection}>
            <div className={styles.commandLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>cat about.txt</span>
            </div>
            <p className={styles.summary}>
              {userData.personal.summary}
            </p>
          </div>
        )}
        
        {/* Contact Information */}
        <div className={styles.contactSection}>
          <div className={styles.commandLine}>
            <span className={styles.prompt}>$</span>
            <span className={styles.command}>ls contact/</span>
          </div>
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
      </header>

      {/* Technical Skills Section */}
      {userData.technicalSkills?.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.commandLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>cat skills.json</span>
            </div>
            <h2 className={styles.sectionTitle}>
              <Code className={styles.sectionIcon} />
              Technical Skills
            </h2>
          </div>
          
          <div className={styles.codeBlock}>
            <pre className={styles.codeContent}>
{`{
  "languages": [${userData.technicalSkills?.filter(skill => 
    ['javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'go', 'rust', 'php', 'ruby'].some(lang => 
      skill.toLowerCase().includes(lang)
    )
  ).map(skill => `"${skill}"`).join(', ') || ''}],
  "frameworks": [${userData.technicalSkills?.filter(skill => 
    ['react', 'vue', 'angular', 'node', 'express', 'django', 'flask', 'spring', 'laravel'].some(framework => 
      skill.toLowerCase().includes(framework)
    )
  ).map(skill => `"${skill}"`).join(', ') || ''}],
  "tools": [${userData.technicalSkills?.filter(skill => 
    ['git', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'jenkins', 'terraform'].some(tool => 
      skill.toLowerCase().includes(tool)
    )
  ).map(skill => `"${skill}"`).join(', ') || ''}],
  "other": [${userData.technicalSkills?.filter(skill => 
    !['javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'go', 'rust', 'php', 'ruby',
      'react', 'vue', 'angular', 'node', 'express', 'django', 'flask', 'spring', 'laravel',
      'git', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'jenkins', 'terraform'].some(tech => 
        skill.toLowerCase().includes(tech)
      )
  ).map(skill => `"${skill}"`).join(', ') || ''}]
}`}
            </pre>
          </div>
        </motion.section>
      )}

      {/* Experience Section */}
      {userData.experience.some(exp => exp.company || exp.position) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.commandLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>git log --oneline experience/</span>
            </div>
            <h2 className={styles.sectionTitle}>
              <Briefcase className={styles.sectionIcon} />
              Work Experience
            </h2>
          </div>
          
          <div className={styles.gitLog}>
            {userData.experience.map((exp, index) => (
              exp.company || exp.position ? (
                <div key={exp.id} className={styles.commitEntry}>
                  <div className={styles.commitHash}>
                    {Math.random().toString(36).substr(2, 7)}
                  </div>
                  <div className={styles.commitContent}>
                    <div className={styles.commitHeader}>
                      <h3 className={styles.commitTitle}>
                        feat: {exp.position || 'Position'} @ {exp.company || 'Company'}
                      </h3>
                      <div className={styles.commitMeta}>
                        <span className={styles.commitDate}>
                          {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                        </span>
                        {exp.location && (
                          <span className={styles.commitLocation}>
                            📍 {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                    {exp.description && (
                      <div className={styles.commitDescription}>
                        <p>{exp.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : null
            ))}
          </div>
        </motion.section>
      )}

      {/* Projects Section */}
      {userData.projects.some(project => project.name || project.description) && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.commandLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>ls projects/</span>
            </div>
            <h2 className={styles.sectionTitle}>
              <FileText className={styles.sectionIcon} />
              Featured Projects
            </h2>
          </div>
          
          <div className={styles.projectsList}>
            {userData.projects.map((project, index) => (
              project.name || project.description ? (
                <div key={project.id} className={styles.projectItem}>
                  <div className={styles.projectHeader}>
                    <div className={styles.projectTitle}>
                      <Github className={styles.projectIcon} />
                      <h3>{project.name || 'Project Name'}</h3>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <ExternalLink className={styles.linkIcon} />
                        View Code
                      </a>
                    )}
                  </div>
                  
                  {project.description && (
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                  )}
                  
                  {project.technologies && (
                    <div className={styles.projectTech}>
                      <span className={styles.techLabel}>Stack:</span>
                      <code className={styles.techStack}>
                        {project.technologies}
                      </code>
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
          transition={{ delay: 0.3 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.commandLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>cat education.md</span>
            </div>
            <h2 className={styles.sectionTitle}>
              <GraduationCap className={styles.sectionIcon} />
              Education
            </h2>
          </div>
          
          <div className={styles.educationList}>
            {userData.education.map((edu, index) => (
              edu.institution || edu.degree ? (
                <div key={edu.id} className={styles.educationItem}>
                  <div className={styles.educationHeader}>
                    <h3 className={styles.educationDegree}>
                      ## {edu.degree || 'Degree'} {edu.field && `in ${edu.field}`}
                    </h3>
                    <div className={styles.educationMeta}>
                      <span className={styles.educationDate}>
                        {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                      </span>
                    </div>
                  </div>
                  <p className={styles.educationSchool}>
                    **{edu.institution || 'Institution'}**
                  </p>
                  {edu.location && (
                    <p className={styles.educationLocation}>
                      📍 {edu.location}
                    </p>
                  )}
                  {edu.gpa && (
                    <p className={styles.educationGpa}>
                      GPA: `{edu.gpa}`
                    </p>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </motion.section>
      )}

      {/* Soft Skills Section */}
      {userData.softSkills?.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.commandLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>cat soft_skills.md</span>
            </div>
            <h2 className={styles.sectionTitle}>
              <Users className={styles.sectionIcon} />
              Soft Skills
            </h2>
          </div>
          
          <div className={styles.markdownBlock}>
            <div className={styles.markdownContent}>
              {userData.softSkills.map((skill, index) => (
                <p key={index} className={styles.markdownLine}>
                  - **{skill}**
                </p>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Languages Section */}
      {userData.languages?.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.commandLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>cat languages.yaml</span>
            </div>
            <h2 className={styles.sectionTitle}>
              <Languages className={styles.sectionIcon} />
              Languages
            </h2>
          </div>
          
          <div className={styles.yamlBlock}>
            <pre className={styles.yamlContent}>
{`languages:
${userData.languages.map(lang => `  - name: "${lang.name}"
    proficiency: "${lang.proficiency}"`).join('\n')}`}
            </pre>
          </div>
        </motion.section>
      )}

      {/* Custom Sections */}
      {userData.customSections?.map((section, index) => (
        <motion.section
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <div className={styles.commandLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.command}>cat {section.title.toLowerCase().replace(/\s+/g, '_')}.md</span>
            </div>
            <h2 className={styles.sectionTitle}>
              <FileText className={styles.sectionIcon} />
              {section.title}
            </h2>
          </div>
          
          <div className={styles.markdownBlock}>
            <div className={styles.markdownContent}>
              {section.type === 'list' && section.items ? (
                section.items.map((item, itemIndex) => (
                  <p key={itemIndex} className={styles.markdownLine}>
                    - {item}
                  </p>
                ))
              ) : (
                <div className={styles.markdownText}>
                  {section.content.split('\n').map((line, lineIndex) => (
                    <p key={lineIndex} className={styles.markdownLine}>
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  )
}

export default TechTemplate
