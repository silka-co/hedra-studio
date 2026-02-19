/**
 * Design token system — raw values mirrored from tokens.css.
 *
 * Use CSS custom properties (var(--…)) inside .module.css files.
 * Use this object only when a raw numeric/string value is needed in JS
 * (e.g. SVG size props, inline computed layout, Storybook argTypes).
 */
export const tokens = {
  // ─── Primitives ───────────────────────────────────────────────────────────
  gray: {
    50: '#fafafa',
    100: '#f0f0f0',
    200: '#e0e0e0',
    300: '#c0c0c0',
    400: '#8a8a8a',
    500: '#6b6b6b',
    600: '#4a4a4a',
    700: '#333333',
    800: '#242424',
    850: '#1e1e1e',
    900: '#181818',
    950: '#121212',
    1000: '#0a0a0a',
  },
  blue: {
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
  },
  purple: {
    400: '#a78bfa',
    500: '#8b5cf6',
  },
  amber: {
    500: '#f59e0b',
    alphaLight: '#f59e0b30',
  },

  // ─── Semantic ─────────────────────────────────────────────────────────────
  bg: {
    app: '#0a0a0a',
    surface: '#141414',
    surfaceRaised: '#1a1a1a',
    surfaceOverlay: '#1e1e1e',
    hover: '#ffffff0d',
    active: '#ffffff14',
    selected: '#ffffff1a',
  },
  text: {
    primary: '#f0f0f0',
    secondary: '#8a8a8a',
    tertiary: '#6b6b6b',
    inverse: '#0a0a0a',
  },
  border: {
    default: '#ffffff0f',
    subtle: '#ffffff08',
    strong: '#ffffff1a',
  },
  accent: {
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    primaryAlphaLight: '#3b82f630',
    secondary: '#8b5cf6',
    secondaryAlphaLight: '#8b5cf630',
    secondaryAlphaMed: '#8b5cf640',
  },

  // ─── Spacing (px numbers for SVG / computed layout) ───────────────────────
  space: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 40,
  },

  // ─── Radius ───────────────────────────────────────────────────────────────
  radius: {
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    full: 9999,
  },

  // ─── Typography ───────────────────────────────────────────────────────────
  font: {
    family: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    size: {
      '2xs': 9,
      xs: 11,
      sm: 12,
      md: 13,
      lg: 14,
      xl: 16,
      '2xl': 18,
      '3xl': 22,
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  tracking: {
    wide: '0.05em',
    normal: '0.01em',
  },

  // ─── Shadows ──────────────────────────────────────────────────────────────
  shadow: {
    dropdown: '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)',
    canvas: '0 0 80px rgba(0, 0, 0, 0.3)',
  },

  // ─── Duration ─────────────────────────────────────────────────────────────
  duration: {
    fast: '0.15s',
    normal: '0.25s',
    slow: '0.3s',
  },

  // ─── Opacity ──────────────────────────────────────────────────────────────
  opacity: {
    dim: 0.4,
  },

  // ─── Flyout widths ────────────────────────────────────────────────────────
  flyout: {
    sm: 240,
    md: 300,
    lg: 380,
    xl: 480,
  },

  // ─── Sidebar ──────────────────────────────────────────────────────────────
  sidebar: {
    width: 52,
    iconSize: 20,
  },
  topNav: {
    height: 44,
  },

  // ─── Component-specific ───────────────────────────────────────────────────
  indicator: {
    width: 3,
  },
  dropdown: {
    height: 28,
  },
} as const;

export type Tokens = typeof tokens;
