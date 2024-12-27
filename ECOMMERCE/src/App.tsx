import React, { useState } from 'react';
import { LoginForm } from './components/auth/LoginForm';
import { SignupForm } from './components/auth/SignupForm';
import { ResumeUpload } from './components/resume/ResumeUpload';
import { ScoreResult } from './components/resume/ScoreResult';
import type { User, ResumeScore } from './types';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [score, setScore] = useState<ResumeScore | null>(null);

  const handleAuth = (email: string, password: string) => {
    // Mock authentication
    setUser({ id: '1', email });
  };

  const handleResumeSubmit = (jobTitle: string, file: File) => {
    // Mock resume analysis
    setScore({
      score: 75,
      missingKeywords: ['Python', 'Machine Learning', 'AWS'],
      suggestions: [
        'Include more specific technical skills related to the job requirements',
        'Add quantifiable achievements from your previous roles',
        'Incorporate industry-standard tools and technologies'
      ]
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        {isLogin ? (
          <LoginForm onSubmit={handleAuth} onToggleForm={() => setIsLogin(false)} />
        ) : (
          <SignupForm onSubmit={handleAuth} onToggleForm={() => setIsLogin(true)} />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      {!score ? (
        <ResumeUpload onSubmit={handleResumeSubmit} />
      ) : (
        <ScoreResult score={score} />
      )}
    </div>
  );
}

export default App;