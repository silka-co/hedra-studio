import type { FC } from 'react';
import { FlyoutSearch } from '../components/FlyoutSearch/FlyoutSearch';
import { FlyoutProjects } from '../components/FlyoutProjects/FlyoutProjects';
import { FlyoutMedia } from '../components/FlyoutMedia/FlyoutMedia';
import { FlyoutEmptyState } from '../components/FlyoutEmptyState/FlyoutEmptyState';

/**
 * Maps each nav item id to the React component rendered inside the flyout panel.
 * Add a new entry here whenever a new nav item is wired up.
 */
export const FLYOUT_CONTENT: Record<string, FC> = {
  home: () => <FlyoutEmptyState label="Home" />,
  search: () => <FlyoutSearch />,
  projects: () => <FlyoutProjects />,
  media: () => <FlyoutMedia />,
  elements: () => <FlyoutEmptyState label="Elements" />,
  text: () => <FlyoutEmptyState label="Text" />,
  audio: () => <FlyoutEmptyState label="Audio" />,
  uploads: () => <FlyoutEmptyState label="Uploads" />,
  settings: () => <FlyoutEmptyState label="Settings" />,
};
