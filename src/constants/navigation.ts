/** Flyout panel width bucket — maps to --flyout-{size} CSS tokens. */
export type FlyoutSize = 'sm' | 'md' | 'lg' | 'xl';

/** A single item in the sidebar navigation rail. */
export interface NavItem {
  /** Unique identifier used to track active state and look up flyout content. */
  id: string;
  /** Human-readable label displayed below the icon. */
  label: string;
  /** Icon name passed to the Icon component. */
  icon: string;
  /** Determines which --flyout-{size} width the panel uses. */
  flyoutSize: FlyoutSize;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'home', flyoutSize: 'md' },
  { id: 'search', label: 'Search', icon: 'search', flyoutSize: 'md' },
  { id: 'projects', label: 'Projects', icon: 'folder', flyoutSize: 'lg' },
  { id: 'media', label: 'Media', icon: 'image', flyoutSize: 'lg' },
  { id: 'elements', label: 'Elements', icon: 'shapes', flyoutSize: 'xl' },
  { id: 'text', label: 'Text', icon: 'type', flyoutSize: 'md' },
  { id: 'audio', label: 'Audio', icon: 'music', flyoutSize: 'lg' },
  { id: 'uploads', label: 'Uploads', icon: 'upload', flyoutSize: 'md' },
];

export const BOTTOM_NAV_ITEMS: NavItem[] = [
  { id: 'settings', label: 'Settings', icon: 'settings', flyoutSize: 'sm' },
];

/** Available canvas aspect ratios presented in the TopNav dropdown. */
export interface AspectRatioOption {
  /** Short label shown in the trigger button (e.g. "16:9"). */
  label: string;
  /** CSS aspect-ratio value (e.g. "16/9"). */
  value: string;
  /** Friendly description shown in the dropdown (e.g. "Widescreen"). */
  desc: string;
}

export const ASPECT_RATIOS: AspectRatioOption[] = [
  { label: '16:9', value: '16/9', desc: 'Widescreen' },
  { label: '9:16', value: '9/16', desc: 'Vertical' },
  { label: '4:3', value: '4/3', desc: 'Standard' },
  { label: '1:1', value: '1/1', desc: 'Square' },
  { label: '21:9', value: '21/9', desc: 'Ultrawide' },
  { label: '4:5', value: '4/5', desc: 'Portrait' },
];
