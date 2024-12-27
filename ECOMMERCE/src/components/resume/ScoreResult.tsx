import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import type { ResumeScore } from '../../types';

interface ScoreResultProps {
  score: ResumeScore;
}

export function ScoreResult({ score }: ScoreResultProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="h-8 w-8 text-green-500" />;
    if (score >= 60) return <AlertCircle className="h-8 w-8 text-yellow-500" />;
    return <XCircle className="h-8 w-8 text-red-500" />;
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          {getScoreIcon(score.score)}
        </div>
        <h2 className="text-3xl font-bold mb-2">ATS Score</h2>
        <div className={`text-5xl font-bold ${getScoreColor(score.score)}`}>
          {score.score}%
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Missing Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {score.missingKeywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Suggestions</h3>
          <ul className="space-y-2">
            {score.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span className="text-gray-700">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
        >
          Upload Another Resume
        </button>
      </div>
    </div>
  );
}