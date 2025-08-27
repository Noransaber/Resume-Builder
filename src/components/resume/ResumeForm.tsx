"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Trash2, X, User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, FileText, Globe, Linkedin } from 'lucide-react'

interface ResumeFormProps {
  data: any
  onUpdate: (section: string, data: any) => void
  isLoading: boolean
}

export function ResumeForm({ data, onUpdate, isLoading }: ResumeFormProps) {
  const [activeSection, setActiveSection] = useState('personal')

  const sections = [
    { id: 'personal', name: 'Personal Info', icon: User },
    { id: 'experience', name: 'Experience', icon: Briefcase },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'skills', name: 'Skills', icon: Award },
    { id: 'projects', name: 'Projects', icon: FileText }
  ]

  const updatePersonalInfo = (field: string, value: string) => {
    onUpdate('personal', {
      ...data.personal,
      [field]: value
    })
  }

  const updateExperience = (index: number, field: string, value: any) => {
    const newExperience = [...data.experience]
    newExperience[index] = {
      ...newExperience[index],
      [field]: value
    }
    onUpdate('experience', newExperience)
  }

  const addExperience = () => {
    const newExperience = [...data.experience, {
      id: Date.now().toString(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }]
    onUpdate('experience', newExperience)
  }

  const removeExperience = (index: number) => {
    const newExperience = data.experience.filter((_: any, i: number) => i !== index)
    onUpdate('experience', newExperience)
  }

  const updateEducation = (index: number, field: string, value: any) => {
    const newEducation = [...data.education]
    newEducation[index] = {
      ...newEducation[index],
      [field]: value
    }
    onUpdate('education', newEducation)
  }

  const addEducation = () => {
    const newEducation = [...data.education, {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      gpa: ''
    }]
    onUpdate('education', newEducation)
  }

  const removeEducation = (index: number) => {
    const newEducation = data.education.filter((_: any, i: number) => i !== index)
    onUpdate('education', newEducation)
  }

  const [newSkill, setNewSkill] = useState('')

  const updateSkills = (skills: string[]) => {
    onUpdate('skills', skills)
  }

  const addSkill = () => {
    if (newSkill.trim() && !data.skills.includes(newSkill.trim())) {
      const updatedSkills = [...data.skills, newSkill.trim()]
      updateSkills(updatedSkills)
      setNewSkill('')
    }
  }

  const removeSkill = (skillToRemove: string) => {
    const updatedSkills = data.skills.filter(skill => skill !== skillToRemove)
    updateSkills(updatedSkills)
  }

  const handleSkillKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addSkill()
    }
  }

  const updateProjects = (index: number, field: string, value: string) => {
    const newProjects = [...data.projects]
    newProjects[index] = {
      ...newProjects[index],
      [field]: value
    }
    onUpdate('projects', newProjects)
  }

  const addProject = () => {
    const newProjects = [...data.projects, {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: '',
      link: ''
    }]
    onUpdate('projects', newProjects)
  }

  const removeProject = (index: number) => {
    const newProjects = data.projects.filter((_: any, i: number) => i !== index)
    onUpdate('projects', newProjects)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading resume data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Section Navigation */}
      <div className="flex flex-wrap gap-2">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <motion.button
              key={section.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              {section.name}
            </motion.button>
          )
        })}
      </div>

      {/* Personal Information */}
      {activeSection === 'personal' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                value={data.personal.firstName}
                onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={data.personal.lastName}
                onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={data.personal.email}
              onChange={(e) => updatePersonalInfo('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="john.doe@email.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={data.personal.phone}
                onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Location
              </label>
              <input
                type="text"
                value={data.personal.location}
                onChange={(e) => updatePersonalInfo('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="New York, NY"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Website
              </label>
              <input
                type="url"
                value={data.personal.website}
                onChange={(e) => updatePersonalInfo('website', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="https://johndoe.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                LinkedIn
              </label>
              <input
                type="url"
                value={data.personal.linkedin}
                onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="https://linkedin.com/in/johndoe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Professional Summary
            </label>
            <textarea
              value={data.personal.summary}
              onChange={(e) => updatePersonalInfo('summary', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="A brief summary of your professional background and career objectives..."
            />
          </div>
        </motion.div>
      )}

      {/* Experience */}
      {activeSection === 'experience' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Work Experience</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addExperience}
              className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Experience
            </motion.button>
          </div>

          {data.experience.map((exp: any, index: number) => (
            <div key={exp.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Experience {index + 1}</h4>
                {data.experience.length > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeExperience(index)}
                    className="p-1 text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(index, 'company', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Position
                  </label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) => updateExperience(index, 'position', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Job Title"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) => updateExperience(index, 'location', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="City, State"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => updateExperience(index, 'current', e.target.checked)}
                      className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label className="text-sm text-gray-700 dark:text-gray-300">Current Position</label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Start Date
                    </label>
                    <input
                      type="month"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      End Date
                    </label>
                    <input
                      type="month"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                      disabled={exp.current}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    value={exp.description}
                    onChange={(e) => updateExperience(index, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Describe your responsibilities and achievements..."
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Education */}
      {activeSection === 'education' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addEducation}
              className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Education
            </motion.button>
          </div>

          {data.education.map((edu: any, index: number) => (
            <div key={edu.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Education {index + 1}</h4>
                {data.education.length > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeEducation(index)}
                    className="p-1 text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Institution
                  </label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="University Name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Degree
                    </label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Bachelor's"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Field of Study
                    </label>
                    <input
                      type="text"
                      value={edu.field}
                      onChange={(e) => updateEducation(index, 'field', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Computer Science"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={edu.location}
                      onChange={(e) => updateEducation(index, 'location', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="City, State"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      GPA
                    </label>
                    <input
                      type="text"
                      value={edu.gpa}
                      onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="3.8"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Start Date
                    </label>
                    <input
                      type="month"
                      value={edu.startDate}
                      onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      End Date
                    </label>
                    <input
                      type="month"
                      value={edu.endDate}
                      onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                      disabled={edu.current}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={edu.current}
                      onChange={(e) => updateEducation(index, 'current', e.target.checked)}
                      className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label className="text-sm text-gray-700 dark:text-gray-300">Current</label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Skills */}
      {activeSection === 'skills' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Skills</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Add Skills (Press Enter to add)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={handleSkillKeyDown}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Type a skill and press Enter"
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {data.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Projects */}
      {activeSection === 'projects' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Projects</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addProject}
              className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Project
            </motion.button>
          </div>

          {data.projects.map((project: any, index: number) => (
            <div key={project.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Project {index + 1}</h4>
                {data.projects.length > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeProject(index)}
                    className="p-1 text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={project.name}
                    onChange={(e) => updateProjects(index, 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Project Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    value={project.description}
                    onChange={(e) => updateProjects(index, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Describe the project and your role..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Technologies
                    </label>
                    <input
                      type="text"
                      value={project.technologies}
                      onChange={(e) => updateProjects(index, 'technologies', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="React, Node.js, MongoDB"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Project Link
                    </label>
                    <input
                      type="url"
                      value={project.link}
                      onChange={(e) => updateProjects(index, 'link', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="https://github.com/username/project"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

