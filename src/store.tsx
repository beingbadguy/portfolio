import { create } from "zustand";

interface AudioState {
  isLight: boolean;
  isPlaying: boolean;
  audio: HTMLAudioElement | null;
  duration: number;
  currentTime: number;
  setTheme: () => void;
  getTheme: () => void;
  setAudio: () => void;
  playAudio: () => void;
  pauseAudio: () => void;
  updateTime: () => void;
}

export const useAudioStore = create<AudioState>((set, get) => ({
  isLight: true,
  isPlaying: false,
  audio: null,
  duration: 0,
  currentTime: 0,
  setTheme: () => {
    set({ isLight: !get().isLight });
    localStorage.setItem("theme", get().isLight ? "light" : "dark");
  },
  getTheme: () => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      set({ isLight: theme === "light" ? true : false });
    } else {
      set({ isLight: true });
    }
  },

  setAudio: () => {
    const { audio } = get();
    if (!audio) {
      const newAudio = new Audio("/door.mp3");

      newAudio.addEventListener("loadedmetadata", () => {
        set({ duration: newAudio.duration });
      });

      newAudio.addEventListener("timeupdate", () => {
        set({ currentTime: newAudio.currentTime });
      });

      set({ audio: newAudio });
    }
  },

  playAudio: () => {
    const { audio } = get();
    if (audio) {
      audio.play();
      set({ isPlaying: true });
    }
  },

  pauseAudio: () => {
    const { audio } = get();
    if (audio) {
      audio.pause();
      set({ isPlaying: false });
    }
  },

  updateTime: () => {
    const { audio } = get();
    if (audio) {
      set({ currentTime: audio.currentTime });
    }
  },
}));
