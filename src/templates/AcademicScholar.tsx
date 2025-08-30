import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award, Users, Microscope, Globe, Quote, Star, ExternalLink, FileText } from 'lucide-react'
import { TemplateProps } from './index'

const AcademicScholar: React.FC<TemplateProps> = ({ userData }) => {
  if (!userData) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  const publicationVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Academic Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-blue-200/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10"></div>
            <motion.div
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl relative z-10"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <GraduationCap className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 relative z-10">
              Dr. {userData.personal.firstName} {userData.personal.lastName}
            </h1>
            <p className="text-2xl text-gray-600 mb-6 font-light relative z-10">
              Distinguished Professor & Research Scholar
            </p>
            <div className="flex justify-center space-x-8 text-gray-600 relative z-10">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm">Publications</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-indigo-600">100+</div>
                <div className="text-sm">Citations</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-sm">Years Experience</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Academic Profile */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-200">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-800">Academic Profile</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              {userData.personal.summary}
            </p>
          </div>
        </motion.section>

        {/* Research Interests & Expertise */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Research & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Research Areas */}
            {userData.technicalSkills && userData.technicalSkills.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Microscope className="w-6 h-6 text-blue-600 mr-3" />
                  Research Areas
                </h3>
                <div className="space-y-4">
                  {userData.technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-xl"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="font-semibold text-blue-800">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Teaching Areas */}
            {userData.softSkills && userData.softSkills.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Users className="w-6 h-6 text-indigo-600 mr-3" />
                  Teaching Expertise
                </h3>
                <div className="space-y-4">
                  {userData.softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-xl"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="font-semibold text-indigo-800">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>

        {/* Academic Experience */}
        {userData.experience && userData.experience.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Academic Experience</h2>
            <div className="space-y-8">
              {userData.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.position}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                        <p className="text-gray-600">{exp.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-xl">
                        <p className="text-blue-800 font-semibold">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Education & Academic Achievements */}
        {userData.education && userData.education.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Education & Qualifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {userData.education.map((edu, index) => (
                <motion.div
                  className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 border border-blue-200"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.field}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                  <p className="text-gray-600">{edu.location}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                    {edu.gpa && ` • GPA: ${edu.gpa}`}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Publications & Research */}
        {userData.projects && userData.projects.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Publications & Research</h2>
            <div className="space-y-6">
              {userData.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100"
                  variants={publicationVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <FileText className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.split(', ').map((tech, techIndex) => (
                          <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        className="ml-4 text-blue-600 hover:text-blue-800"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Languages & International Experience */}
        {userData.languages && userData.languages.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Languages & International Experience</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {userData.languages.map((lang, index) => (
                <motion.div
                  key={lang.id}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 text-center min-w-[200px]"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-800">{lang.name}</h3>
                  </div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < (lang.proficiency === 'Native' ? 5 :
                              lang.proficiency === 'Fluent' ? 4 :
                              lang.proficiency === 'Advanced' ? 3 :
                              lang.proficiency === 'Intermediate' ? 2 : 1)
                            ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{lang.proficiency}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Custom Sections */}
        {userData.customSections && userData.customSections.map((section, index) => (
          <motion.section
            key={section.id}
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{section.title}</h2>
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl p-8 md:p-12 border border-blue-200">
              {section.type === 'text' ? (
                <div className="bg-white/80 rounded-2xl p-8 shadow-lg">
                  <Quote className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-xl text-gray-700 leading-relaxed italic">
                    "{section.content}"
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items?.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="bg-white rounded-xl p-6 shadow-lg"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center">
                        <Award className="w-6 h-6 text-blue-600 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        ))}

        {/* Academic Network CTA */}
        <motion.section
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Connect with Academic Community</h2>
            <p className="text-xl mb-8 opacity-90">
              Interested in collaboration, research opportunities, or academic partnerships?
              Let's connect and explore possibilities together.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Meeting
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Publications
              </motion.button>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default AcademicScholar
