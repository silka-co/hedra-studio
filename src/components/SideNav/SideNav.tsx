import { useState, useRef, useCallback, useEffect, type FC } from 'react';
import { SideNavItem } from '../SideNavItem/SideNavItem';
import { FlyoutPanel } from '../FlyoutPanel/FlyoutPanel';
import { NAV_ITEMS, BOTTOM_NAV_ITEMS, type NavItem } from '../../constants/navigation';
import styles from './SideNav.module.css';

export interface SideNavProps {
  /** The id of the currently active section. */
  activeItem: string;
  /** Called when the user clicks a nav item to make it active. */
  onActiveChange: (id: string) => void;
}

/** Milliseconds to wait before closing the flyout after the pointer leaves. */
const FLYOUT_CLOSE_DELAY = 120;

/**
 * Vertical sidebar rail with icons + labels and an animated flyout panel.
 * Hover state is managed here so the flyout and its triggering item share
 * the same highlighted appearance while the pointer is over either one.
 */
export const SideNav: FC<SideNavProps> = ({ activeItem, onActiveChange }) => {
  const [hoveredItem, setHoveredItem] = useState<NavItem | null>(null);
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openFlyout = useCallback((item: NavItem) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setHoveredItem(item);
    setFlyoutOpen(true);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setFlyoutOpen(false);
      setHoveredItem(null);
      closeTimerRef.current = null;
    }, FLYOUT_CLOSE_DELAY);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <div className={styles.root}>
      {/* Sidebar rail */}
      <nav className={styles.rail} aria-label="Main navigation">
        {/* Top items */}
        <div className={styles.topItems}>
          {NAV_ITEMS.map((item) => (
            <SideNavItem
              key={item.id}
              item={item}
              isHovered={hoveredItem?.id === item.id}
              isActive={activeItem === item.id}
              onMouseEnter={() => openFlyout(item)}
              onMouseLeave={scheduleClose}
              onClick={() => onActiveChange(item.id)}
            />
          ))}
        </div>

        {/* Bottom items */}
        <div className={styles.bottomItems}>
          {BOTTOM_NAV_ITEMS.map((item) => (
            <SideNavItem
              key={item.id}
              item={item}
              isHovered={hoveredItem?.id === item.id}
              isActive={activeItem === item.id}
              onMouseEnter={() => openFlyout(item)}
              onMouseLeave={scheduleClose}
              onClick={() => onActiveChange(item.id)}
            />
          ))}
        </div>
      </nav>

      {/* Flyout panel */}
      <FlyoutPanel
        item={hoveredItem}
        isOpen={flyoutOpen}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      />
    </div>
  );
};
