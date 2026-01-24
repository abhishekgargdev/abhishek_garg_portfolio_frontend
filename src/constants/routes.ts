// Public Routes
export const HOME_URL = '/';
export const LOGIN_URL = '/login';
export const FORGOT_PASSWORD_URL = '/forgot-password';

// Private/Admin Routes
export const DASHBOARD_APP_URL = '/dashboard';
export const HERO_URL = '/dashboard/hero';
export const ABOUT_URL = '/dashboard/about-me';
export const EXPERIENCE_URL = '/dashboard/experience';
export const SKILLS_URL = '/dashboard/skills';
export const PROJECTS_URL = '/dashboard/projects';
export const CERTIFICATES_URL = '/dashboard/certificates';
export const BLOG_URL = '/dashboard/blog';
export const ACHIEVEMENTS_URL = '/dashboard/achievements';
export const TESTIMONIALS_URL = '/dashboard/testimonials';
export const CONTACT_URL = '/dashboard/contact';
export const PDF_VIEWER_URL = '/dashboard/pdf-viewer';
export const LINKEDIN_URL = '/dashboard/linkedin';

// Route Groups
export const AUTH_ROUTES = [LOGIN_URL, FORGOT_PASSWORD_URL];
export const PRIVATE_ROUTES = [
  DASHBOARD_APP_URL,
  HERO_URL,
  ABOUT_URL,
  EXPERIENCE_URL,
  SKILLS_URL,
  PROJECTS_URL,
  CERTIFICATES_URL,
  BLOG_URL,
  ACHIEVEMENTS_URL,
  TESTIMONIALS_URL,
  CONTACT_URL,
  PDF_VIEWER_URL,
  LINKEDIN_URL,
];
