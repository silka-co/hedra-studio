import { useState } from 'react';
import { TopNav } from './components/TopNav/TopNav';
import { SideNav } from './components/SideNav/SideNav';
import { Canvas } from './components/Canvas/Canvas';
import styles from './App.module.css';

export default function App() {
  const [activeNavItem, setActiveNavItem] = useState('projects');
  const [aspectRatio, setAspectRatio] = useState('16/9');

  return (
    <div className={styles.app}>
      <TopNav aspectRatio={aspectRatio} onAspectRatioChange={setAspectRatio} />
      <div className={styles.body}>
        <SideNav activeItem={activeNavItem} onActiveChange={setActiveNavItem} />
        <Canvas aspectRatio={aspectRatio} />
      </div>
    </div>
  );
}
