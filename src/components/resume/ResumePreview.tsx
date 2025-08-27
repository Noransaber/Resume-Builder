"use client"
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Linkedin, Calendar, Award, Briefcase, GraduationCap, FileText } from 'lucide-react'

interface ResumePreviewProps {
  data: any
  template: any
}

export function ResumePreview({ data, template }: ResumePreviewProps) {
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

  // Template-specific styling
  const getTemplateStyles = (style: string) => {
    switch (style) {
      case 'modern-professional':
        return {
          container: 'bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto',
          header: 'border-b-2 border-primary pb-6 mb-6',
          name: 'text-3xl font-bold text-gray-900 dark:text-white mb-2',
          sectionTitle: 'text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2',
          sectionIcon: 'w-6 h-6 text-primary',
          itemBorder: 'border-l-4 border-primary pl-4',
          skillTag: 'px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium'
        }
      case 'executive-suite':
        return {
          container: 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl p-10 max-w-4xl mx-auto',
          header: 'border-b-4 border-primary pb-8 mb-8',
          name: 'text-4xl font-bold text-gray-900 dark:text-white mb-3',
          sectionTitle: 'text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3',
          sectionIcon: 'w-7 h-7 text-primary',
          itemBorder: 'border-l-4 border-primary pl-6',
          skillTag: 'px-4 py-2 bg-primary/15 text-primary rounded-lg text-sm font-semibold'
        }
      case 'creative-portfolio':
        return {
          container: 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto',
          header: 'border-b-2 border-gradient-to-r from-primary to-pink-600 pb-6 mb-6',
          name: 'text-3xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent mb-2',
          sectionTitle: 'text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2',
          sectionIcon: 'w-6 h-6 text-primary',
          itemBorder: 'border-l-4 border-gradient-to-r from-primary to-pink-600 pl-4',
          skillTag: 'px-3 py-1 bg-gradient-to-r from-primary to-pink-600 text-white rounded-full text-sm font-medium'
        }
      case 'minimalist-clean':
        return {
          container: 'bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 max-w-4xl mx-auto',
          header: 'border-b border-gray-300 dark:border-gray-600 pb-4 mb-6',
          name: 'text-2xl font-semibold text-gray-900 dark:text-white mb-2',
          sectionTitle: 'text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2',
          sectionIcon: 'w-5 h-5 text-gray-600 dark:text-gray-400',
          itemBorder: 'border-l-2 border-gray-300 dark:border-gray-600 pl-4',
          skillTag: 'px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm'
        }
      case 'tech-innovator':
        return {
          container: 'bg-gradient-to-br from-gray-900 to-black text-white rounded-lg shadow-2xl p-8 max-w-4xl mx-auto',
          header: 'border-b-2 border-primary pb-6 mb-6',
          name: 'text-3xl font-bold text-white mb-2',
          sectionTitle: 'text-2xl font-bold text-white mb-4 flex items-center gap-2',
          sectionIcon: 'w-6 h-6 text-primary',
          itemBorder: 'border-l-4 border-primary pl-4',
          skillTag: 'px-3 py-1 bg-primary text-white rounded-full text-sm font-medium'
        }
      case 'classic-elegant':
        return {
          container: 'bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700 p-8 max-w-4xl mx-auto',
          header: 'border-b-2 border-gray-400 dark:border-gray-500 pb-6 mb-6',
          name: 'text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2',
          sectionTitle: 'text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2',
          sectionIcon: 'w-6 h-6 text-gray-600 dark:text-gray-400',
          itemBorder: 'border-l-2 border-gray-400 dark:border-gray-500 pl-4',
          skillTag: 'px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-sm font-medium'
        }
      default:
        return {
          container: 'bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto',
          header: 'border-b-2 border-primary pb-6 mb-6',
          name: 'text-3xl font-bold text-gray-900 dark:text-white mb-2',
          sectionTitle: 'text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2',
          sectionIcon: 'w-6 h-6 text-primary',
          itemBorder: 'border-l-4 border-primary pl-4',
          skillTag: 'px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium'
        }
    }
  }

  const styles = getTemplateStyles(template.style || 'modern-professional')

  return (
    <div className={styles.container} data-resume-preview>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.name}>
          {data.personal.firstName} {data.personal.lastName}
        </h1>
        {data.personal.summary && (
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {data.personal.summary}
          </p>
        )}
        
        {/* Contact Information */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
          {data.personal.email && (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href={`mailto:${data.personal.email}`} className="hover:text-primary transition-colors">
                {data.personal.email}
              </a>
            </div>
          )}
          {data.personal.phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href={`tel:${data.personal.phone}`} className="hover:text-primary transition-colors">
                {data.personal.phone}
              </a>
            </div>
          )}
          {data.personal.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{data.personal.location}</span>
            </div>
          )}
          {data.personal.website && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <a href={data.personal.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                {data.personal.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
          {data.personal.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Experience Section */}
      {data.experience.some((exp: any) => exp.company || exp.position) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className={styles.sectionTitle}>
            <Briefcase className={styles.sectionIcon} />
            Professional Experience
          </h2>
          
          <div className="space-y-6">
                                    {data.experience.map((exp: any, index: number) => (
                          exp.company || exp.position ? (
                            <div key={exp.id} className={styles.itemBorder}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.position || 'Position'}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {exp.company || 'Company'}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      )}
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </motion.div>
      )}

      {/* Education Section */}
      {data.education.some((edu: any) => edu.institution || edu.degree) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className={styles.sectionTitle}>
            <GraduationCap className={styles.sectionIcon} />
            Education
          </h2>
          
          <div className="space-y-6">
                                    {data.education.map((edu: any, index: number) => (
                          edu.institution || edu.degree ? (
                            <div key={edu.id} className={styles.itemBorder}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree || 'Degree'} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {edu.institution || 'Institution'}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                      </div>
                      {edu.location && (
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      )}
                    </div>
                  </div>
                  {edu.gpa && (
                    <p className="text-gray-600 dark:text-gray-300">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </motion.div>
      )}

      {/* Skills Section */}
      {data.skills.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className={styles.sectionTitle}>
            <Award className={styles.sectionIcon} />
            Skills
          </h2>
          
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill: string, index: number) => (
              <span
                key={index}
                className={styles.skillTag}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Projects Section */}
      {data.projects.some((project: any) => project.name || project.description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className={styles.sectionTitle}>
            <FileText className={styles.sectionIcon} />
            Projects
          </h2>
          
          <div className="space-y-6">
                                    {data.projects.map((project: any, index: number) => (
                          project.name || project.description ? (
                            <div key={project.id} className={styles.itemBorder}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.name || 'Project Name'}
                      </h3>
                      {project.technologies && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {project.technologies}
                        </p>
                      )}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors text-sm"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                  {project.description && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>
              ) : null
            ))}
          </div>
        </motion.div>
      )}

      {/* Template Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Template: {template.name} • {template.category}
        </p>
      </motion.div>
    </div>
  )
}

