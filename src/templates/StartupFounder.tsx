import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Target, TrendingUp, Users, Lightbulb, Award, ExternalLink, DollarSign, Zap } from 'lucide-react'
import { TemplateProps } from './index'

const StartupFounder: React.FC<TemplateProps> = ({ userData }) => {
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-4 md:p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Header */}
        <motion.div
          className="text-center mb-16 relative"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-3xl blur-3xl"></div>
          <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-orange-200/50">
            <motion.div
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Rocket className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
              {userData.personal.firstName} {userData.personal.lastName}
            </h1>
            <p className="text-2xl text-gray-600 mb-6 font-light">
              Visionary Entrepreneur & Startup Founder
            </p>
            <div className="flex justify-center space-x-8 text-gray-600">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-orange-600">$2.5M</div>
                <div className="text-sm">Funding Raised</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-red-600">50+</div>
                <div className="text-sm">Team Members</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-pink-600">3</div>
                <div className="text-sm">Companies Founded</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-8 md:p-12 shadow-xl border border-orange-200">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-800">Mission & Vision</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              {userData.personal.summary}
            </p>
          </div>
        </motion.section>

        {/* Key Achievements */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Key Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Growth', value: '300%', desc: 'Year-over-year growth' },
              { icon: Users, title: 'Users', value: '100K+', desc: 'Active users worldwide' },
              { icon: DollarSign, title: 'Revenue', value: '$5M+', desc: 'Annual recurring revenue' }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 text-center"
                variants={metricVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{achievement.value}</div>
                <div className="text-xl font-semibold text-orange-600 mb-2">{achievement.title}</div>
                <div className="text-gray-600">{achievement.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        {userData.experience && userData.experience.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Entrepreneurial Journey</h2>
            <div className="space-y-8">
              {userData.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.position}</h3>
                        <p className="text-lg text-orange-600 font-semibold">{exp.company}</p>
                        <p className="text-gray-600">{exp.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-xl">
                        <p className="text-orange-800 font-semibold">
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

        {/* Skills & Expertise */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            {userData.technicalSkills && userData.technicalSkills.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-orange-600 mr-3" />
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {userData.technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-xl text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-semibold text-orange-800">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Leadership Skills */}
            {userData.softSkills && userData.softSkills.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Users className="w-6 h-6 text-red-600 mr-3" />
                  Leadership Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {userData.softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded-xl text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-semibold text-red-800">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>

        {/* Projects/Companies */}
        {userData.projects && userData.projects.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Portfolio Companies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userData.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-orange-100 group"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-32 bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.split(', ').map((tech, techIndex) => (
                        <span key={techIndex} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        className="inline-flex items-center text-orange-600 hover:text-orange-800 font-semibold"
                        whileHover={{ x: 5 }}
                      >
                        Learn More <ExternalLink className="w-4 h-4 ml-2" />
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
                  className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 border border-orange-200"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-orange-600 mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
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
                  className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 text-center min-w-[200px]"
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
                            ? 'bg-orange-500' : 'bg-gray-300'
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
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-8 md:p-12 border border-orange-200">
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
                        <Award className="w-6 h-6 text-orange-600 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        ))}

        {/* Contact CTA */}
        <motion.section
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to turn your ideas into reality? Let's connect and discuss your next big venture.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
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

export default StartupFounder
