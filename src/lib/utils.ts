/**
 * Shared utility functions and constants
 */

// Site configuration
export const SITE_URL = 'https://junzhebeh.com';
export const AUTHOR_NAME = 'Jun Zhe Beh';
export const TWITTER_HANDLE = '';
export const SITE_IMAGE_PATH = '/images/me.jpeg';
export const SITE_IMAGE_DIMENSIONS = {
  width: 1024,
  height: 1024,
} as const;

// Canonical one-line bio, shared across page metadata, OpenGraph, and JSON-LD.
export const SITE_DESCRIPTION =
  'Industrial Engineering student at the University at Buffalo and Supplier Quality Engineering Intern at Corning, focused on AI systems, manufacturing, supplier quality, and operations.';

// Image dimension constants
export const AVATAR_SIZE = {
  hero: 120,
  footer: 80,
  sidebar: 200,
} as const;

export const PROJECT_IMAGE = {
  width: 600,
  height: 400,
} as const;

// Skill competency
export const MAX_COMPETENCY = 5;

/**
 * Formats a date string to a human-readable format.
 * Parses as UTC to avoid timezone shifts.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  // Parse as UTC to avoid timezone shifts
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
