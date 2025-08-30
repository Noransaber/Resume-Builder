import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, LinkedIn, Globe, Award, TrendingUp, Users } from 'lucide-react'
import { TemplateProps } from './index'

const CorporateExecutive: React.FC<TemplateProps> = ({ userData }) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-8">
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-12 relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <motion.h1
                  className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  variants={itemVariants}
                >
                  {userData.personal.firstName} {userData.personal.lastName}
                </motion.h1>
                <motion.p
                  className="text-xl text-slate-300 mb-4"
                  variants={itemVariants}
                >
                  {userData.personal.summary}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-4 text-sm"
                  variants={itemVariants}
                >
                  {userData.personal.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{userData.personal.email}</span>
                    </div>
                  )}
                  {userData.personal.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{userData.personal.phone}</span>
                    </div>
                  )}
                  {userData.personal.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{userData.personal.location}</span>
                    </div>
                  )}
                </motion.div>
              </div>
              <motion.div
                className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                variants={itemVariants}
              >
                <Award className="w-16 h-16 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="p-12">
          {/* Executive Summary */}
          <motion.section
            className="mb-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-slate-200 pb-2">
              Executive Summary
            </h2>
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-2xl border-l-4 border-slate-600">
              <p className="text-gray-700 leading-relaxed text-lg">
                {userData.personal.summary}
              </p>
            </div>
          </motion.section>

          {/* Experience */}
          {userData.experience && userData.experience.length > 0 && (
            <motion.section
              className="mb-12"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-slate-200 pb-2">
                Professional Experience
              </h2>
              <div className="space-y-8">
                {userData.experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-slate-600 font-semibold">
                          {exp.company}
                        </p>
                        <p className="text-slate-500">{exp.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-600 font-medium">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Education */}
          {userData.education && userData.education.length > 0 && (
            <motion.section
              className="mb-12"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-slate-200 pb-2">
                Education
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {userData.education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200"
                    variants={itemVariants}
                  >
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-lg text-slate-600 mb-1">{edu.institution}</p>
                    <p className="text-slate-500">{edu.location}</p>
                    <p className="text-slate-500 text-sm mt-2">
                      {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                      {edu.gpa && ` • GPA: ${edu.gpa}`}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Technical Skills */}
            {userData.technicalSkills && userData.technicalSkills.length > 0 && (
              <motion.section
                variants={itemVariants}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-slate-200 pb-2">
                  Technical Expertise
                </h2>
                <div className="flex flex-wrap gap-3">
                  {userData.technicalSkills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Soft Skills */}
            {userData.softSkills && userData.softSkills.length > 0 && (
              <motion.section
                variants={itemVariants}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-slate-200 pb-2">
                  Leadership Skills
                </h2>
                <div className="flex flex-wrap gap-3">
                  {userData.softSkills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
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

          {/* Languages */}
          {userData.languages && userData.languages.length > 0 && (
            <motion.section
              className="mb-12"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-slate-200 pb-2">
                Languages
              </h2>
              <div className="flex flex-wrap gap-4">
                {userData.languages.map((lang, index) => (
                  <motion.div
                    key={lang.id}
                    className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-xl font-medium"
                    variants={itemVariants}
                  >
                    {lang.name} - {lang.proficiency}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Custom Sections */}
          {userData.customSections && userData.customSections.map((section, index) => (
            <motion.section
              key={section.id}
              className="mb-12"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-slate-200 pb-2">
                {section.title}
              </h2>
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-2xl">
                {section.type === 'text' ? (
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default CorporateExecutive
