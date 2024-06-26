import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { Blog } from './App/Exercise/Blog';
import { OrderForm } from './App/Exercise/OrderForm';
import { FAQ } from './App/Exercise/FAQ';
import { TechStack } from './App/TechStack';
import { MaterialUi } from './App/MaterialUi';
import { Settings } from './App/Settings';
import { Exercise } from './App/Exercise';
import { Games } from './App/Games';
import { Course } from './App/Course';
import { AboutMe } from './App/AboutMe';
import { MoreOrLess } from './App/Games/MoreOrLess';
import { MemoryGame } from './App/Games/MemoryGame';
import { HitTheMoleGame } from './App/Games/HitTheMoleGame';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          {/* See in App */}
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercise/*" element={<Exercise />} />
          <Route path="games/*" element={<Games />} />
          <Route path="course/*" element={<Course />} />
          <Route path="tech-stack/*" element={<TechStack />} />
          <Route path="about-me/*" element={<AboutMe />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="faq/*" element={<FAQ />} />
          <Route path="order-form/*" element={<OrderForm />} />
          <Route path="games/*" element={<Games />} />
          {/* See in Games */}
          <Route path="games/more-or-less-game*" element={<MoreOrLess />} />
          <Route path="games/memory-game*" element={<MemoryGame />} />
          <Route path="games/git-the-mole-game*" element={<HitTheMoleGame />} />
          {/* Additional */}
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="material-ui/*" element={<MaterialUi />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
