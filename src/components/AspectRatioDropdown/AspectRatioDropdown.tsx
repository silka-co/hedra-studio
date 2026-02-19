import { useState, useRef, useEffect, type FC } from 'react';
import { Icon } from '../Icon/Icon';
import { ASPECT_RATIOS } from '../../constants/navigation';
import styles from './AspectRatioDropdown.module.css';

export interface AspectRatioDropdownProps {
  /** The currently selected aspect ratio value, e.g. `"16/9"`. */
  value: string;
  /** Callback fired when the user selects a different ratio. */
  onChange: (value: string) => void;
}

/**
 * A compact dropdown that lets users pick a canvas aspect ratio.
 * Closes automatically when the user clicks outside.
 */
export const AspectRatioDropdown: FC<AspectRatioDropdownProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = ASPECT_RATIOS.find((r) => r.value === value) ?? ASPECT_RATIOS[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className={styles.root}>
      <button
        className={[styles.trigger, open ? styles.triggerOpen : ''].join(' ')}
        onClick={() => setOpen((o) => !o)}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Icon name="ratio" size={13} />
        <span>{current.label}</span>
        <span className={[styles.chevron, open ? styles.chevronOpen : ''].join(' ')}>
          <Icon name="chevronDown" size={12} />
        </span>
      </button>

      {open && (
        <div className={styles.menu} role="listbox">
          {ASPECT_RATIOS.map((ratio) => (
            <button
              key={ratio.value}
              role="option"
              aria-selected={ratio.value === value}
              className={[
                styles.menuItem,
                ratio.value === value ? styles.menuItemSelected : '',
              ].join(' ')}
              onClick={() => {
                onChange(ratio.value);
                setOpen(false);
              }}
              type="button"
            >
              <span className={ratio.value === value ? styles.menuItemLabelActive : styles.menuItemLabel}>
                {ratio.label}
              </span>
              <span className={styles.menuItemDesc}>{ratio.desc}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
