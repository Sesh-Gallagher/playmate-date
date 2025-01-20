import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { CreateProfile } from './pages/CreateProfile';
import { Dashboard } from './pages/Dashboard';
import { Matches } from './pages/Matches';
import { PlayDate } from './pages/PlayDate';
import { Playdates } from './pages/Playdates';
import { GameCenter } from './pages/GameCenter';
import { Achievements } from './pages/Achievements';
import { ChildProfiles } from './pages/ChildProfiles';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminLogin } from './pages/admin/AdminLogin';

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/playdate" element={<PlayDate />} />
            <Route path="/playdates" element={<Playdates />} />
            <Route path="/game-center" element={<GameCenter />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/profiles" element={<ChildProfiles />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}