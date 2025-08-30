import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Code, Camera, Heart, Star, Award, ExternalLink, Github, Dribbble } from 'lucide-react'
import { TemplateProps } from './index'

const DesignerShowcase: React.FC<TemplateProps> = ({ userData }) => {
  if (!userData) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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

  const projectVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 p-4 md:p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Palette className="w-16 h-16 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
            {userData.personal.firstName} {userData.personal.lastName}
          </h1>
          <p className="text-2xl text-gray-600 mb-6 font-light">
            Creative Designer & Visual Storyteller
          </p>
          <div className="flex justify-center space-x-6 text-gray-600">
            {userData.personal.email && (
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <span>✉️</span>
                <span>{userData.personal.email}</span>
              </motion.div>
            )}
            {userData.personal.website && (
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Globe className="w-4 h-4" />
                <span>{userData.personal.website}</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* About Section */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Me</h2>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              {userData.personal.summary}
            </p>
          </div>
        </motion.section>

        {/* Skills Showcase */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Design Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userData.technicalSkills && userData.technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">
                  {index % 4 === 0 && '🎨'}
                  {index % 4 === 1 && '💻'}
                  {index % 4 === 2 && '📱'}
                  {index % 4 === 3 && '✨'}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-4/5"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        {userData.experience && userData.experience.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Experience</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 to-pink-400 h-full rounded-full"></div>
              <div className="space-y-12">
                {userData.experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    variants={itemVariants}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <motion.div
                        className="bg-white rounded-2xl p-6 shadow-xl border border-purple-100"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.position}</h3>
                        <p className="text-lg text-purple-600 font-semibold mb-2">{exp.company}</p>
                        <p className="text-gray-600 mb-4">{exp.location}</p>
                        <p className="text-sm text-gray-500 mb-4">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </p>
                        <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                      </motion.div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Projects Showcase */}
        {userData.projects && userData.projects.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userData.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-purple-100 group"
                  variants={projectVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <div className="text-6xl">
                      {index % 3 === 0 && '🎨'}
                      {index % 3 === 1 && '📱'}
                      {index % 3 === 2 && '💻'}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.split(', ').map((tech, techIndex) => (
                        <span key={techIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
                        whileHover={{ x: 5 }}
                      >
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Education */}
        {userData.education && userData.education.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Education</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {userData.education.map((edu, index) => (
                <motion.div
                  className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 border border-pink-200"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-pink-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.field}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                  <p className="text-gray-600">{edu.location}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Languages & Soft Skills */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {userData.languages && userData.languages.length > 0 && (
            <motion.section
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Languages</h2>
              <div className="space-y-4">
                {userData.languages.map((lang, index) => (
                  <div key={lang.id} className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-700">{lang.name}</span>
                    <div className="flex">
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
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {userData.softSkills && userData.softSkills.length > 0 && (
            <motion.section
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Creative Skills</h2>
              <div className="flex flex-wrap gap-3">
                {userData.softSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Custom Sections */}
        {userData.customSections && userData.customSections.map((section, index) => (
          <motion.section
            key={section.id}
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{section.title}</h2>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12">
              {section.type === 'text' ? (
                <p className="text-xl text-gray-700 leading-relaxed text-center">
                  {section.content}
                </p>
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
                        <Heart className="w-6 h-6 text-pink-500 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        ))}

        {/* Footer CTA */}
        <motion.section
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Let's Create Something Amazing Together</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to bring your creative vision to life? Let's collaborate!
            </p>
            <motion.button
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default DesignerShowcase
