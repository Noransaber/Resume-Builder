// Cookie management utilities
export interface UserProfileCookies {
  phone?: string;
  location?: string;
  bio?: string;
  website?: string;
  linkedin?: string;
  twitter?: string;
}

// Set cookie with 1 year expiration
export const setCookie = (name: string, value: string, days: number = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

// Get cookie value
export const getCookie = (name: string): string | null => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// Delete cookie
export const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

// Save user profile data to cookies
export const saveUserProfileToCookies = (profileData: UserProfileCookies) => {
  const cookieData = {
    phone: profileData.phone || "",
    location: profileData.location || "",
    bio: profileData.bio || "",
    website: profileData.website || "",
    linkedin: profileData.linkedin || "",
    twitter: profileData.twitter || "",
  };

  setCookie("userProfile", JSON.stringify(cookieData), 365);
};

// Load user profile data from cookies
export const loadUserProfileFromCookies = (): UserProfileCookies => {
  const cookieData = getCookie("userProfile");
  if (!cookieData) {
    return {};
  }

  try {
    return JSON.parse(cookieData);
  } catch (error) {
    console.error("Error parsing user profile cookies:", error);
    return {};
  }
};

// Clear user profile cookies
export const clearUserProfileCookies = () => {
  deleteCookie("userProfile");
};
