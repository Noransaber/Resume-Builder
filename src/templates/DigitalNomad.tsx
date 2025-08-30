import React from 'react'
import { motion } from 'framer-motion'
import { Plane, MapPin, Globe, Coffee, Laptop, Camera, Star, Award, ExternalLink, Wifi } from 'lucide-react'
import { TemplateProps } from './index'

const DigitalNomad: React.FC<TemplateProps> = ({ userData }) => {
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

  const travelVariants = {
    animate: {
      x: [0, 10, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-4 md:p-8 relative overflow-hidden">
      {/* Travel Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20"
          variants={travelVariants}
          animate="animate"
        >
          <Plane className="w-8 h-8 text-cyan-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20"
          variants={travelVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Globe className="w-10 h-10 text-blue-400" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-10"
          variants={travelVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Coffee className="w-6 h-6 text-indigo-400" />
        </motion.div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Digital Nomad Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-cyan-200/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10"></div>
            <motion.div
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl relative z-10"
              whileHover={{ scale: 1.1, rotate: 15 }}
            >
              <Laptop className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 relative z-10">
              {userData.personal.firstName} {userData.personal.lastName}
            </h1>
            <p className="text-2xl text-gray-600 mb-6 font-light relative z-10">
              Digital Nomad & Remote Work Professional
            </p>
            <div className="flex justify-center space-x-8 text-gray-600 relative z-10">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-cyan-600">25+</div>
                <div className="text-sm">Countries Visited</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm">Remote Work</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-indigo-600">5+</div>
                <div className="text-sm">Years Nomading</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Nomad Philosophy */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-3xl p-8 md:p-12 shadow-xl border border-cyan-200">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-cyan-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-800">Nomad Lifestyle</h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              {userData.personal.summary}
            </p>
          </div>
        </motion.section>

        {/* Travel & Remote Work Stats */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Remote Work Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Cities Lived', value: '15+', color: 'from-cyan-500 to-blue-500' },
              { icon: Wifi, title: 'Time Zones', value: '12+', color: 'from-blue-500 to-indigo-500' },
              { icon: Camera, title: 'Photos Taken', value: '10K+', color: 'from-indigo-500 to-purple-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-cyan-100 text-center"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills & Remote Expertise */}
        <motion.section
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Digital Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            {userData.technicalSkills && userData.technicalSkills.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-cyan-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Laptop className="w-6 h-6 text-cyan-600 mr-3" />
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {userData.technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-cyan-100 to-blue-100 p-4 rounded-xl text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-semibold text-cyan-800">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Remote Work Skills */}
            {userData.softSkills && userData.softSkills.length > 0 && (
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-cyan-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-3" />
                  Remote Work Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {userData.softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-xl text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-semibold text-blue-800">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>

        {/* Remote Projects */}
        {userData.projects && userData.projects.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Remote Projects & Work</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userData.projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-cyan-100 group"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="h-32 bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center">
                    <div className="text-4xl">
                      {index % 4 === 0 && '🌍'}
                      {index % 4 === 1 && '💼'}
                      {index % 4 === 2 && '📱'}
                      {index % 4 === 3 && '⚡'}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.split(', ').map((tech, techIndex) => (
                        <span key={techIndex} className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-semibold"
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

        {/* Experience */}
        {userData.experience && userData.experience.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Professional Experience</h2>
            <div className="space-y-8">
              {userData.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-cyan-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.position}</h3>
                        <p className="text-lg text-cyan-600 font-semibold">{exp.company}</p>
                        <p className="text-gray-600">{exp.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 px-4 py-2 rounded-xl">
                        <p className="text-cyan-800 font-semibold">
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
                  className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-8 border border-cyan-200"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-cyan-600 mr-3" />
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

        {/* Languages & Cultural Experience */}
        {userData.languages && userData.languages.length > 0 && (
          <motion.section
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Languages & Cultural Experience</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {userData.languages.map((lang, index) => (
                <motion.div
                  key={lang.id}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100 text-center min-w-[200px]"
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
            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-3xl p-8 md:p-12 border border-cyan-200">
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
                        <Plane className="w-6 h-6 text-cyan-600 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.section>
        ))}

        {/* Digital Nomad CTA */}
        <motion.section
          className="text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready for Remote Opportunities</h2>
            <p className="text-xl mb-8 opacity-90">
              With experience working across time zones and cultures, I'm ready to bring global perspective
              and remote work expertise to your team. Let's connect and explore possibilities!
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                className="bg-white text-cyan-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Travel Blog
              </motion.button>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default DigitalNomad
