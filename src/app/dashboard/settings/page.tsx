"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  User,
  Shield,
  Bell,
  Palette,
  FileText,
  CreditCard,
  Download,
  Upload,
  Eye,
  EyeOff,
  Save,
  RotateCcw,
  Check,
  X,
  Sun,
  Moon,
  Monitor,
  Globe,
  Lock,
  Mail,
  Phone,
  MapPin,
  Camera,
  Edit3,
  Trash2,
  AlertTriangle,
  Sparkles,
  Settings,
  ChevronRight,
  ChevronDown,
  Volume2,
  VolumeX,
  Languages,
  Database,
  Cloud,
  Wifi,
  Calendar,
  Crown,
  Clock,
  WifiOff,
} from "lucide-react";
import { useAuthStore } from "@/stores/authStore";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { PageWrapper } from "@/components/ui/PageLoader";
import { toast } from "react-hot-toast";
import { doc, getDoc, setDoc, DocumentData } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { db } from "@/lib/firebase";
import {
  saveUserProfileToCookies,
  loadUserProfileFromCookies,
  UserProfileCookies,
} from "@/lib/cookies";
// Mock user data - in a real app, this would come from your backend
const mockUserData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  avatar: "/images/avatars/default-avatar.svg",
  bio: "Passionate software engineer with 5+ years of experience in full-stack development.",
  website: "https://johndoe.dev",
  linkedin: "https://linkedin.com/in/johndoe",
  twitter: "@johndoe",
  joinDate: "January 2023",
  resumeCount: 12,
  profileViews: 156,
};

const settingsSections = [
  {
    id: "profile",
    title: "Profile Information",
    description: "Manage your personal information and public profile",
    icon: User,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    description: "Control your privacy settings and account security",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Configure how and when you receive notifications",
    icon: Bell,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "appearance",
    title: "Appearance",
    description: "Customize the look and feel of your dashboard",
    icon: Palette,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "resume",
    title: "Resume Preferences",
    description: "Set default preferences for your resume creation",
    icon: FileText,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "billing",
    title: "Billing & Subscription",
    description: "Manage your subscription and billing information",
    icon: CreditCard,
    color: "from-teal-500 to-green-500",
  },
  {
    id: "data",
    title: "Data & Export",
    description: "Export your data or import from other platforms",
    icon: Database,
    color: "from-pink-500 to-rose-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 3, -3, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function SettingsPage() {
  const { user } = useAuthStore();
  const [activeSection, setActiveSection] = useState("profile");
  const [isLoading, setIsLoading] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  // Profile Settings State
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    website: "",
    linkedin: "",
    twitter: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    const loadUserData = () => {
      if (user) {
        // Load Firebase Auth data (name and email)
        const firebaseData = {
          name: user.displayName || "",
          email: user.email || "",
        };

        // Load cookie data (other profile fields)
        const cookieData = loadUserProfileFromCookies();

        // Merge both data sources with proper defaults
        setProfileData({
          name: firebaseData.name,
          email: firebaseData.email,
          phone: cookieData.phone || "",
          location: cookieData.location || "",
          bio: cookieData.bio || "",
          website: cookieData.website || "",
          linkedin: cookieData.linkedin || "",
          twitter: cookieData.twitter || "",
        });
      }
    };

    loadUserData();
  }, [user]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" && hasUnsavedChanges) {
        handleSaveSettings();
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [hasUnsavedChanges]);

  // Privacy Settings State
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    showEmail: true,
    showPhone: false,
    showLocation: true,
    allowMessaging: true,
    dataCollection: true,
    analyticsTracking: true,
  });

  // Notification Settings State
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    resumeUpdates: true,
    jobAlerts: true,
    marketingEmails: false,
    securityAlerts: true,
    weeklyDigest: true,
    soundNotifications: true,
  });

  // Appearance Settings State
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: "system",
    language: "en",
    fontSize: "medium",
    compactMode: false,
    animations: true,
    sidebarCollapsed: false,
  });

  // Resume Preferences State
  const [resumePreferences, setResumePreferences] = useState({
    defaultTemplate: "modern-professional",
    autoSave: true,
    spellCheck: true,
    exportFormat: "pdf",
    watermark: false,
    maxFileSize: "10mb",
  });

  // Handle form changes
  const handleProfileChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handlePrivacyChange = (field: string, value: any) => {
    setPrivacySettings((prev) => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleNotificationChange = (field: string, value: any) => {
    setNotificationSettings((prev) => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleAppearanceChange = (field: string, value: any) => {
    setAppearanceSettings((prev) => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const handleResumeChange = (field: string, value: any) => {
    setResumePreferences((prev) => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  // Save settings
  const handleSaveSettings = async () => {
    if (!user) {
      toast.error("User not authenticated");
      return;
    }

    setIsLoading(true);
    try {
      // Update Firebase Auth profile (name and email)
      await updateProfile(user, {
        displayName: profileData.name,
      });

      // Note: Email update requires re-authentication in Firebase
      // For now, we'll show a message if email was changed
      if (profileData.email !== user.email) {
        toast.error(
          "Email changes require re-authentication. Please contact support."
        );
      }

      // Save other profile data to cookies
      const cookieData: UserProfileCookies = {
        phone: profileData.phone,
        location: profileData.location,
        bio: profileData.bio,
        website: profileData.website,
        linkedin: profileData.linkedin,
        twitter: profileData.twitter,
      };

      saveUserProfileToCookies(cookieData);

      toast.success("Profile settings saved successfully!");
      setHasUnsavedChanges(false);
      setShowSaveDialog(false);
    } catch (error) {
      console.error("Error saving settings:", error);
      toast.error("Failed to save settings. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Reset settings
  const handleResetSettings = () => {
    if (user) {
      // Reset to Firebase Auth data and clear cookies
      setProfileData({
        name: user.displayName || "",
        email: user.email || "",
        phone: "",
        location: "",
        bio: "",
        website: "",
        linkedin: "",
        twitter: "",
      });

      // Clear cookie data
      saveUserProfileToCookies({});
    }
    setPrivacySettings({
      profileVisibility: "public",
      showEmail: true,
      showPhone: false,
      showLocation: true,
      allowMessaging: true,
      dataCollection: true,
      analyticsTracking: true,
    });
    setNotificationSettings({
      emailNotifications: true,
      pushNotifications: true,
      resumeUpdates: true,
      jobAlerts: true,
      marketingEmails: false,
      securityAlerts: true,
      weeklyDigest: true,
      soundNotifications: true,
    });
    setAppearanceSettings({
      theme: "system",
      language: "en",
      fontSize: "medium",
      compactMode: false,
      animations: true,
      sidebarCollapsed: false,
    });
    setResumePreferences({
      defaultTemplate: "modern-professional",
      autoSave: true,
      spellCheck: true,
      exportFormat: "pdf",
      watermark: false,
      maxFileSize: "10mb",
    });
    setHasUnsavedChanges(false);
    toast.success("Settings reset to defaults");
  };

  const renderProfileSection = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20">
        <div className="relative group">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-lg">
            <User className="w-12 h-12 text-white" />
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Camera className="w-4 h-4 text-white" />
          </motion.button>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {profileData.name || "No Name Set"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {profileData.bio || "No bio added yet"}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{profileData.email || "No email"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{profileData.phone || "No phone"}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{profileData.location || "No location"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
          <User className="w-6 h-6 text-purple-600" />
          Personal Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={profileData.name || ""}
              onChange={(e) => handleProfileChange("name", e.target.value)}
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={profileData.email || ""}
              onChange={(e) => handleProfileChange("email", e.target.value)}
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
              placeholder="Enter your email address"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Note: Email changes require re-authentication
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={profileData.phone || ""}
              onChange={(e) => handleProfileChange("phone", e.target.value)}
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Location
            </label>
            <input
              type="text"
              value={profileData.location || ""}
              onChange={(e) => handleProfileChange("location", e.target.value)}
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
              placeholder="Enter your location"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Bio
          </label>
          <textarea
            value={profileData.bio || ""}
            onChange={(e) => handleProfileChange("bio", e.target.value)}
            rows={4}
            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-none"
            placeholder="Tell us about yourself..."
          />
        </div>

        {/* Data Storage Information */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 rounded-2xl">
          <div className="flex items-start gap-3">
            <Database className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">
                Data Storage Information
              </h4>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                <strong>Firebase Auth:</strong> Name & Email (secure) •
                <strong>Browser Cookies:</strong> Phone, Location, Bio & Social
                Links (1 year)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
          <Globe className="w-6 h-6 text-purple-600" />
          Social Links
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Website
            </label>
            <input
              type="url"
              value={profileData.website || ""}
              onChange={(e) => handleProfileChange("website", e.target.value)}
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              LinkedIn Profile
            </label>
            <input
              type="url"
              value={profileData.linkedin || ""}
              onChange={(e) => handleProfileChange("linkedin", e.target.value)}
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Twitter Handle
            </label>
            <input
              type="text"
              value={profileData.twitter || ""}
              onChange={(e) => handleProfileChange("twitter", e.target.value)}
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
              placeholder="@yourhandle"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderPrivacySection = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Privacy Overview */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
          <Shield className="w-6 h-6 text-green-600" />
          Privacy Overview
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Data Protected
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your personal information is encrypted and secure
            </p>
          </div>

          <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Profile Visibility
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Control who can see your profile and resume
            </p>
          </div>

          <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Communication
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Manage how recruiters can contact you
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Profile Visibility
            </label>
            <select
              value={privacySettings.profileVisibility}
              onChange={(e) =>
                handlePrivacyChange("profileVisibility", e.target.value)
              }
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
            >
              <option value="public">
                Public - Anyone can view my profile
              </option>
              <option value="private">
                Private - Only recruiters can view
              </option>
              <option value="hidden">Hidden - Profile is not visible</option>
            </select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  Show Email Address
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Display your email on your public profile
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacySettings.showEmail}
                  onChange={(e) =>
                    handlePrivacyChange("showEmail", e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  Show Phone Number
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Display your phone number on your profile
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacySettings.showPhone}
                  onChange={(e) =>
                    handlePrivacyChange("showPhone", e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  Allow Direct Messages
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Let recruiters send you direct messages
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacySettings.allowMessaging}
                  onChange={(e) =>
                    handlePrivacyChange("allowMessaging", e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
          <Lock className="w-6 h-6 text-green-600" />
          Security Settings
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter current password"
                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Update Password
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  const renderNotificationsSection = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Notification Overview */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
          <Bell className="w-6 h-6 text-purple-600" />
          Notification Preferences
        </h3>

        <div className="space-y-6">
          {/* Email Notifications */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-600" />
              Email Notifications
            </h4>

            <div className="space-y-4 ml-7">
              <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-white">
                    Resume Updates
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get notified when your resume is viewed or downloaded
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notificationSettings.resumeUpdates}
                    onChange={(e) =>
                      handleNotificationChange(
                        "resumeUpdates",
                        e.target.checked
                      )
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-white">
                    Job Alerts
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive notifications about new job opportunities
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notificationSettings.jobAlerts}
                    onChange={(e) =>
                      handleNotificationChange("jobAlerts", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-white">
                    Security Alerts
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Important security notifications and account changes
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notificationSettings.securityAlerts}
                    onChange={(e) =>
                      handleNotificationChange(
                        "securityAlerts",
                        e.target.checked
                      )
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-white">
                    Weekly Digest
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Weekly summary of your account activity
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notificationSettings.weeklyDigest}
                    onChange={(e) =>
                      handleNotificationChange("weeklyDigest", e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Push Notifications */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              <Wifi className="w-5 h-5 text-purple-600" />
              Push Notifications
            </h4>

            <div className="space-y-4 ml-7">
              <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-white">
                    Enable Push Notifications
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive instant notifications in your browser
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notificationSettings.pushNotifications}
                    onChange={(e) =>
                      handleNotificationChange(
                        "pushNotifications",
                        e.target.checked
                      )
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-white">
                    Sound Notifications
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Play sound for important notifications
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notificationSettings.soundNotifications}
                    onChange={(e) =>
                      handleNotificationChange(
                        "soundNotifications",
                        e.target.checked
                      )
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Marketing */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              Marketing Communications
            </h4>

            <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl ml-7">
              <div>
                <h5 className="font-medium text-gray-800 dark:text-white">
                  Marketing Emails
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Receive updates about new features and offers
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationSettings.marketingEmails}
                  onChange={(e) =>
                    handleNotificationChange(
                      "marketingEmails",
                      e.target.checked
                    )
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderAppearanceSection = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Theme Settings */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
          <Palette className="w-6 h-6 text-orange-600" />
          Theme & Appearance
        </h3>

        <div className="space-y-8">
          {/* Theme Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
              Theme Preference
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  value: "light",
                  label: "Light",
                  icon: Sun,
                  desc: "Always use light theme",
                },
                {
                  value: "dark",
                  label: "Dark",
                  icon: Moon,
                  desc: "Always use dark theme",
                },
                {
                  value: "system",
                  label: "System",
                  icon: Monitor,
                  desc: "Follow system preference",
                },
              ].map(({ value, label, icon: Icon, desc }) => (
                <motion.div
                  key={value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAppearanceChange("theme", value)}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    appearanceSettings.theme === value
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                      : "border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-600/50"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon
                      className={`w-8 h-8 mb-3 ${
                        appearanceSettings.theme === value
                          ? "text-purple-600"
                          : "text-gray-500"
                      }`}
                    />
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {label}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Language
            </label>
            <select
              value={appearanceSettings.language}
              onChange={(e) =>
                handleAppearanceChange("language", e.target.value)
              }
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="it">Italiano</option>
              <option value="pt">Português</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
              <option value="zh">中文</option>
            </select>
          </div>

          {/* Font Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Font Size
            </label>
            <select
              value={appearanceSettings.fontSize}
              onChange={(e) =>
                handleAppearanceChange("fontSize", e.target.value)
              }
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </div>

          {/* Other Settings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  Compact Mode
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use smaller spacing and components
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={appearanceSettings.compactMode}
                  onChange={(e) =>
                    handleAppearanceChange("compactMode", e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  Animations
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Enable smooth animations and transitions
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={appearanceSettings.animations}
                  onChange={(e) =>
                    handleAppearanceChange("animations", e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  Sidebar Collapsed
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Keep the sidebar collapsed by default
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={appearanceSettings.sidebarCollapsed}
                  onChange={(e) =>
                    handleAppearanceChange("sidebarCollapsed", e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderResumeSection = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Resume Overview */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
          <FileText className="w-6 h-6 text-indigo-600" />
          Resume Preferences
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl">
            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Default Template
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Choose your preferred template for new resumes
            </p>
            <select
              value={resumePreferences.defaultTemplate}
              onChange={(e) =>
                handleResumeChange("defaultTemplate", e.target.value)
              }
              className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            >
              <option value="modern-professional">Modern Professional</option>
              <option value="corporate-executive">Corporate Executive</option>
              <option value="designer-showcase">Designer Showcase</option>
              <option value="sales-professional">Sales Professional</option>
              <option value="academic-scholar">Academic Scholar</option>
            </select>
          </div>

          <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Export Format
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Default format for resume downloads
            </p>
            <select
              value={resumePreferences.exportFormat}
              onChange={(e) =>
                handleResumeChange("exportFormat", e.target.value)
              }
              className="w-full px-3 py-2 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
            >
              <option value="pdf">PDF Document</option>
              <option value="docx">Word Document</option>
              <option value="html">HTML Web Page</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
            <div>
              <h4 className="font-medium text-gray-800 dark:text-white">
                Auto-Save
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Automatically save your work as you type
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={resumePreferences.autoSave}
                onChange={(e) =>
                  handleResumeChange("autoSave", e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
            <div>
              <h4 className="font-medium text-gray-800 dark:text-white">
                Spell Check
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enable automatic spell checking
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={resumePreferences.spellCheck}
                onChange={(e) =>
                  handleResumeChange("spellCheck", e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
            <div>
              <h4 className="font-medium text-gray-800 dark:text-white">
                Watermark
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Add watermark to exported resumes
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={resumePreferences.watermark}
                onChange={(e) =>
                  handleResumeChange("watermark", e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderBillingSection = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Billing Overview */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
          <CreditCard className="w-6 h-6 text-teal-600" />
          Billing & Subscription
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-2xl border border-teal-200 dark:border-teal-800/30">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Current Plan
            </h4>
            <p className="text-2xl font-bold text-teal-600 mb-2">Pro</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              $29/month
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800/30">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Next Billing
            </h4>
            <p className="text-2xl font-bold text-blue-600 mb-2">Dec 15</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">2024</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200 dark:border-purple-800/30">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Usage
            </h4>
            <p className="text-2xl font-bold text-purple-600 mb-2">12/25</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Resumes</p>
          </div>
        </div>

        {/* Billing Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-teal-500/25 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <CreditCard className="w-5 h-5" />
            Update Payment Method
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 border-2 border-teal-500 text-teal-600 dark:text-teal-400 font-bold py-4 px-6 rounded-2xl hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Download className="w-5 h-5" />
            Download Invoice
          </motion.button>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
          <Clock className="w-6 h-6 text-teal-600" />
          Payment History
        </h3>

        <div className="space-y-4">
          {[
            {
              date: "Nov 15, 2024",
              amount: "$29.00",
              status: "Paid",
              method: "**** 4242",
            },
            {
              date: "Oct 15, 2024",
              amount: "$29.00",
              status: "Paid",
              method: "**** 4242",
            },
            {
              date: "Sep 15, 2024",
              amount: "$29.00",
              status: "Paid",
              method: "**** 4242",
            },
          ].map((payment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white">
                    {payment.date}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {payment.method}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-800 dark:text-white">
                  {payment.amount}
                </p>
                <p className="text-sm text-green-600">{payment.status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderDataSection = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Data Overview */}
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
          <Database className="w-6 h-6 text-pink-600" />
          Data Management
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-pink-50 dark:bg-pink-900/20 rounded-2xl border border-pink-200 dark:border-pink-800/30">
            <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Export Data
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Download all your data including resumes, settings, and activity
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export All Data
            </motion.button>
          </div>

          <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl border border-purple-200 dark:border-purple-800/30">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              Import Data
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Import resumes and data from other platforms or backups
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full border-2 border-purple-500 text-purple-600 dark:text-purple-400 font-bold py-3 px-6 rounded-2xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Import Data
            </motion.button>
          </div>
        </div>

        {/* Data Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              12
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Resumes
            </div>
          </div>
          <div className="text-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              156
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Profile Views
            </div>
          </div>
          <div className="text-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              156MB
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Storage Used
            </div>
          </div>
          <div className="text-center p-4 bg-white/50 dark:bg-gray-700/50 rounded-2xl">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              2.1GB
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Available
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="border-t border-red-200 dark:border-red-800/30 pt-6">
          <h4 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Danger Zone
          </h4>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200 dark:border-red-800/30">
              <div>
                <h5 className="font-medium text-red-800 dark:text-red-200">
                  Delete Account
                </h5>
                <p className="text-sm text-red-600 dark:text-red-400">
                  Permanently delete your account and all data
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-red-500 text-white font-bold py-2 px-6 rounded-xl hover:bg-red-600 transition-colors duration-300 flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <PageWrapper isLoading={false} loadingType="general">
      <div className="relative min-h-screen overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/90 via-pink-50/80 to-rose-50/90 dark:from-gray-900/95 dark:via-purple-900/80 dark:to-pink-900/90" />

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-rose-400/10 to-fuchsia-500/10 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 4 }}
          />
        </div>

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="relative z-10 lg:ml-80 pt-32">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              {/* Enhanced Header Section */}
              <motion.div variants={itemVariants} className="mb-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Title Section */}
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl shadow-lg mb-6"
                    >
                      <Settings className="w-5 h-5" />
                      <span className="font-semibold">Settings</span>
                    </motion.div>

                    <h1 className="text-5xl lg:text-6xl font-black mb-4">
                      <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent block">
                        Customize Your
                      </span>
                      <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent block">
                        Experience
                      </span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                      Manage your account settings, privacy preferences, and
                      customize your dashboard to work exactly how you want it
                      to.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleResetSettings}
                      className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Reset to Default
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSaveSettings}
                      disabled={!hasUnsavedChanges}
                      className={`px-8 py-3 font-bold rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                        hasUnsavedChanges
                          ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-purple-500/25 hover:shadow-purple-500/40"
                          : "bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      <Save className="w-4 h-4" />
                      {isLoading ? "Saving..." : "Save Changes"}
                    </motion.button>
                  </div>
                </div>

                {/* Unsaved Changes Indicator */}
                {hasUnsavedChanges && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800/30 rounded-2xl flex items-center gap-3"
                  >
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <p className="text-yellow-800 dark:text-yellow-200">
                      You have unsaved changes. Don't forget to save your
                      settings!
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Settings Navigation */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex flex-wrap gap-2 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/20">
                  {settingsSections.map((section) => (
                    <motion.button
                      key={section.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex-1 min-w-[200px] p-4 rounded-2xl transition-all duration-300 ${
                        activeSection === section.id
                          ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                          : "text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-700/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <section.icon className="w-5 h-5" />
                        <div className="text-left">
                          <div className="font-semibold text-sm">
                            {section.title}
                          </div>
                          <div
                            className={`text-xs mt-1 ${
                              activeSection === section.id
                                ? "text-white/80"
                                : "text-gray-500 dark:text-gray-500"
                            }`}
                          >
                            {section.description}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Settings Content */}
              <div className="relative">
                {/* Profile Section */}
                {activeSection === "profile" && renderProfileSection()}

                {/* Privacy Section */}
                {activeSection === "privacy" && renderPrivacySection()}

                {/* Notifications Section */}
                {activeSection === "notifications" &&
                  renderNotificationsSection()}

                {/* Appearance Section */}
                {activeSection === "appearance" && renderAppearanceSection()}

                {/* Resume Section */}
                {activeSection === "resume" && renderResumeSection()}

                {/* Billing Section */}
                {activeSection === "billing" && renderBillingSection()}

                {/* Data Section */}
                {activeSection === "data" && renderDataSection()}
              </div>

              {/* Enhanced CTA Section */}
              <motion.div
                variants={itemVariants}
                className="mt-20 relative overflow-hidden"
              >
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 rounded-3xl" />

                {/* Floating Orbs */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl"
                    variants={floatingVariants}
                    animate="animate"
                  />
                  <motion.div
                    className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-2xl"
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: 2 }}
                  />
                </div>

                <div className="relative z-10 p-12 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl mb-8"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center"
                    >
                      <Sparkles className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="text-white font-bold">
                      Need Help with Settings?
                    </span>
                  </motion.div>

                  <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                    <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent block">
                      Have Questions About
                    </span>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                      Your Settings?
                    </span>
                  </h2>

                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                    Our support team is here to help you configure your account
                    perfectly. Get personalized assistance with any setting or
                    feature.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Contact Support</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <FileText className="w-5 h-5" />
                      <span>View Documentation</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}
