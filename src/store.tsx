import { create } from "zustand";

interface AudioState {
  isPlaying: boolean;
  audio: HTMLAudioElement | null;
  setAudio: () => void;
  playAudio: () => void;
  pauseAudio: () => void;
}

export const useAudioStore = create<AudioState>((set, get) => ({
  isPlaying: false,
  audio: null,
  setAudio: () => {
    const { audio } = get();
    if (!audio) {
      set({ audio: new Audio("/door.mp3") });
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
}));
