import React from 'react'
import { motion } from 'framer-motion'
import { Target, TrendingUp, DollarSign, Users, Award, Trophy, Star, Zap, BarChart3, Handshake } from 'lucide-react'
import { TemplateProps } from './index'

const SalesProfessional: React.FC<TemplateProps> = ({ userData }) => {
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

  const metricVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-4 md:p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Sales Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-green-200/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10"></div>
            <motion.div
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl relative z-10"
              whileHover={{ scale: 1.1, rotate: 15 }}
            >
              <Target className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 relative z-10">
              {userData.personal.firstName} {userData.personal.lastName}
            </h1>
            <p className="text-2xl text-gray-600 mb-6 font-light relative z-10">
              Results-Driven Sales Professional
            </p>
            <div className="flex justify-center space-x-8 text-gray-600 relative z-10">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-green-600">$2.5M</div>
                <div className="text-sm">Revenue Generated</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-emerald-600">150+</div>
                <div className="text-sm">Clients Acquired</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-teal-600">95%</div>
                <div className="text-sm">Quota Achievement</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Sales Mission */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 md:p-12 shadow-xl border border-green-200">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-800">Sales Philosophy</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              {userData.personal.summary}
            </p>
          </div>
        </motion.section>

        {/* Key Performance Metrics */}
        <motion.section
          className="mb-16"
          variants={metricVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Performance Metrics</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: 'Revenue', value: '$2.5M+', color: 'from-green-500 to-emerald-500' },
              { icon: Target, title: 'Deals Closed', value: '180+', color: 'from-emerald-500 to-teal-500' },
              { icon: Users, title: 'New Clients', value: '150+', color: 'from-teal-500 to-cyan-500' },
              { icon: Trophy, title: 'Awards Won', value: '8', color: 'from-cyan-500 to-blue-500' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-xl border border-green-100 text-center"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Professional Experience */}
        {userData.experience && userData.experience.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Sales Experience</h2>
            <div className="space-y-8">
              {userData.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-green-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.position}</h3>
                        <p className="text-lg text-green-600 font-semibold">{exp.company}</p>
                        <p className="text-gray-600">{exp.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-xl">
                        <p className="text-green-800 font-semibold">
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

        {/* Sales Skills */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Sales Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Core Sales Skills */}
            {userData.technicalSkills && userData.technicalSkills.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-green-600 mr-3" />
                  Sales Techniques
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {userData.technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-semibold text-green-800">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Soft Skills */}
            {userData.softSkills && userData.softSkills.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Handshake className="w-6 h-6 text-emerald-600 mr-3" />
                  Relationship Building
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {userData.softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-emerald-100 to-teal-100 p-4 rounded-xl text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-semibold text-emerald-800">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>

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
                  className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border border-green-200"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-green-600 mr-3" />
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
                  className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 text-center min-w-[200px]"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{lang.name}</h3>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full mx-1 ${
                          i < (lang.proficiency === 'Native' ? 5 :
                              lang.proficiency === 'Fluent' ? 4 :
                              lang.proficiency === 'Advanced' ? 3 :
                              lang.proficiency === 'Intermediate' ? 2 : 1)
                            ? 'bg-green-500' : 'bg-gray-300'
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

        {/* Success Stories / Projects */}
        {userData.projects && userData.projects.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userData.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-green-100 group"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-32 bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center">
                    <div className="text-4xl">
                      {index % 3 === 0 && '💰'}
                      {index % 3 === 1 && '📈'}
                      {index % 3 === 2 && '🏆'}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.split(', ').map((tech, techIndex) => (
                        <span key={techIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
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

        {/* Custom Sections */}
        {userData.customSections && userData.customSections.map((section, index) => (
          <motion.section
            key={section.id}
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{section.title}</h2>
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 md:p-12 border border-green-200">
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
                        <Trophy className="w-6 h-6 text-green-600 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        ))}

        {/* Sales CTA */}
        <motion.section
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Drive Results?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how I can help your organization achieve its sales goals and drive revenue growth.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Meeting
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
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

export default SalesProfessional
