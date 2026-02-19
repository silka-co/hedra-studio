import type { FC } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './FlyoutSearch.module.css';

const RECENT_ITEMS = ['Summer Vlog Edit', 'Product Launch', 'Brand Intro'];

/**
 * Search flyout content: a search input and a list of recent queries.
 */
export const FlyoutSearch: FC = () => (
  <div className={styles.root}>
    <div className={styles.searchBar}>
      <Icon name="search" size={14} />
      <input
        type="text"
        placeholder="Search everything..."
        className={styles.input}
        aria-label="Search"
      />
    </div>

    <p className={styles.sectionLabel}>Recent</p>

    {RECENT_ITEMS.map((item) => (
      <div key={item} className={styles.recentItem}>
        {item}
      </div>
    ))}
  </div>
);
