import { useState, type FC } from 'react';
import styles from './FlyoutMedia.module.css';

type MediaTab = 'All' | 'Video' | 'Images';
const TABS: MediaTab[] = ['All', 'Video', 'Images'];
const GRID_ITEMS = [1, 2, 3, 4, 5, 6];

/**
 * Media flyout content: a tab bar (All / Video / Images) and a 2-column
 * grid of media thumbnail placeholders.
 */
export const FlyoutMedia: FC = () => {
  const [activeTab, setActiveTab] = useState<MediaTab>('All');

  return (
    <div className={styles.root}>
      <div className={styles.tabs} role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={tab === activeTab}
            className={[styles.tab, tab === activeTab ? styles.tabActive : ''].join(' ')}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.grid} role="tabpanel">
        {GRID_ITEMS.map((i) => (
          <div key={i} className={styles.gridItem} />
        ))}
      </div>
    </div>
  );
};
