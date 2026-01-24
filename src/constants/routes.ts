// Public Routes
export const HOME_URL = '/';
export const LOGIN_URL = '/login';
export const FORGOT_PASSWORD_URL = '/forgot-password';
export const RESET_PASSWORD_URL = '/reset-password';

// Private/Admin Routes
export const DASHBOARD_APP_URL = '/dashboard';
export const HERO_URL = '/hero';
export const ABOUT_URL = '/about';
export const EXPERIENCE_URL = '/experience';
export const SKILLS_URL = '/skills';
export const PROJECTS_URL = '/projects';
export const CERTIFICATES_URL = '/certificates';
export const BLOG_URL = '/blog';
export const ACHIEVEMENTS_URL = '/achievements';
export const TESTIMONIALS_URL = '/testimonials';
export const CONTACT_URL = '/contact';
export const PDF_VIEWER_URL = '/pdf-viewer';
export const LINKEDIN_URL = '/linkedin';

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
