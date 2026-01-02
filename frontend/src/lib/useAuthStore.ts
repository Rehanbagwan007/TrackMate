import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { login as apiLogin, me } from '@/lib/api'; // Assuming you have an api file with login and me functions

interface User {
  id: string;
  email: string;
  name: string;
  role: 'INSTITUTE_ADMIN' | 'HOD' | 'FACULTY' | 'STUDENT';
  avatar?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  _hydrated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
  setHydrated: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      _hydrated: false,

      setHydrated: () => set({ _hydrated: true }),

      login: async (email, password) => {
        const { token, user } = await apiLogin(email, password);
        set({ user, token });
      },

      logout: () => {
        set({ user: null, token: null });
      },

      checkAuth: async () => {
        try {
          const token = get().token;
          if (token) {
            const user = await me(token);
            set({ user });
          } else {
            set({ user: null });
          }
        } catch (error) {
          set({ user: null, token: null });
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    }
  )
);
