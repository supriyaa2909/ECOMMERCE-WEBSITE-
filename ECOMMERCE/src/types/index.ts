export interface User {
  id: string;
  email: string;
}

export interface ResumeScore {
  score: number;
  missingKeywords: string[];
  suggestions: string[];
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}