import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Coffee, Code, Palette, Users, Star, Award, Lightbulb, Zap } from 'lucide-react'
import { TemplateProps } from './index'

const StudentFresh: React.FC<TemplateProps> = ({ userData }) => {
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

  const bubbleVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 10, -10, 0],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-pink-50 p-4 md:p-8 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-xl"
          variants={bubbleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-violet-300/30 to-purple-300/30 rounded-full blur-xl"
          variants={bubbleVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-300/30 to-violet-300/30 rounded-full blur-xl"
          variants={bubbleVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Fresh Student Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-purple-200/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10"></div>
            <motion.div
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl relative z-10"
              whileHover={{ scale: 1.1, rotate: 15 }}
            >
              <GraduationCap className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 bg-clip-text text-transparent mb-4 relative z-10">
              {userData.personal.firstName} {userData.personal.lastName}
            </h1>
            <p className="text-2xl text-gray-600 mb-6 font-light relative z-10">
              Recent Graduate & Aspiring Professional
            </p>
            <div className="flex justify-center space-x-8 text-gray-600 relative z-10">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-purple-600">3.8</div>
                <div className="text-sm">GPA</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-violet-600">2024</div>
                <div className="text-sm">Grad Year</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-pink-600">5+</div>
                <div className="text-sm">Projects</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Fresh Perspective */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-200">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-800">Fresh Perspective</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              {userData.personal.summary}
            </p>
          </div>
        </motion.section>

        {/* Academic Journey */}
        {userData.education && userData.education.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Academic Journey</h2>
            <div className="space-y-8">
              {userData.education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                        <p className="text-lg text-purple-600 font-semibold">{edu.field}</p>
                        <p className="text-gray-600">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-xl">
                        <p className="text-purple-800 font-semibold">
                          {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                        </p>
                      </div>
                      {edu.gpa && (
                        <div className="mt-2">
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                            GPA: {edu.gpa}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600">{edu.location}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Skills & Interests */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Skills & Interests</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            {userData.technicalSkills && userData.technicalSkills.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Code className="w-6 h-6 text-purple-600 mr-3" />
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {userData.technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-purple-100 to-violet-100 p-4 rounded-xl text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-semibold text-purple-800">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Soft Skills */}
            {userData.softSkills && userData.softSkills.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Users className="w-6 h-6 text-pink-600 mr-3" />
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {userData.softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-xl text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-semibold text-pink-800">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>

        {/* Projects & Experience */}
        {userData.projects && userData.projects.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Projects & Experience</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userData.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-purple-100 group"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <div className="text-4xl">
                      {index % 4 === 0 && '💻'}
                      {index % 4 === 1 && '🎨'}
                      {index % 4 === 2 && '📊'}
                      {index % 4 === 3 && '🚀'}
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
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Experience */}
        {userData.experience && userData.experience.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Experience</h2>
            <div className="space-y-6">
              {userData.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-200"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.position}</h3>
                      <p className="text-purple-600 font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-600 text-sm">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 font-medium">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Languages */}
        {userData.languages && userData.languages.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Languages</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {userData.languages.map((lang, index) => (
                <motion.div
                  key={lang.id}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 text-center min-w-[200px]"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{lang.name}</h3>
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
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12 border border-purple-200">
              {section.type === 'text' ? (
                <div className="bg-white/80 rounded-2xl p-8 shadow-lg">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {section.content}
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
                        <Award className="w-6 h-6 text-purple-600 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        ))}

        {/* Fresh Graduate CTA */}
        <motion.section
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Start My Career Journey</h2>
            <p className="text-xl mb-8 opacity-90">
              Eager to bring fresh perspectives, enthusiasm, and new skills to your team.
              Let's discuss how I can contribute to your organization's success.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default StudentFresh
