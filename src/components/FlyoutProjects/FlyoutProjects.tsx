import type { FC } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './FlyoutProjects.module.css';

interface Project {
  name: string;
  date: string;
  /** Tailwind-style hex thumbnail background colour. */
  thumbClass: string;
}

const PROJECTS: Project[] = [
  { name: 'Summer Campaign', date: 'Feb 18', thumbClass: styles.thumbBlue },
  { name: 'Product Demo v2', date: 'Feb 15', thumbClass: styles.thumbPurple },
  { name: 'Social Reels', date: 'Feb 12', thumbClass: styles.thumbAmber },
];

/**
 * Projects flyout content: a header with a "New" button and a list of
 * recent projects with thumbnail previews.
 */
export const FlyoutProjects: FC = () => (
  <div className={styles.root}>
    <div className={styles.header}>
      <span className={styles.ownerLabel}>Elise's Projects</span>
      <button className={styles.newBtn} type="button">
        <Icon name="plus" size={12} />
        New
      </button>
    </div>

    {PROJECTS.map((p) => (
      <div key={p.name} className={styles.projectRow}>
        <div className={[styles.thumb, p.thumbClass].join(' ')} />
        <div>
          <p className={styles.projectName}>{p.name}</p>
          <p className={styles.projectDate}>{p.date}</p>
        </div>
      </div>
    ))}
  </div>
);
