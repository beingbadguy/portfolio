import { create } from "zustand";

interface AudioState {
  isPlaying: boolean;
  audio: HTMLAudioElement | null;
  duration: number;
  currentTime: number;
  setAudio: () => void;
  playAudio: () => void;
  pauseAudio: () => void;
  updateTime: () => void;
}

export const useAudioStore = create<AudioState>((set, get) => ({
  isPlaying: false,
  audio: null,
  duration: 0,
  currentTime: 0,

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
