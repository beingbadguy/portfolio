import { create } from "zustand";
import { supabase } from "./supabse/supabseClient";

interface AudioState {
  isLight: boolean;
  isPlaying: boolean;
  audio: HTMLAudioElement | null;
  duration: number;
  currentTime: number;
  visitor: number;
  setTheme: () => void;
  getTheme: () => void;
  setAudio: () => void;
  playAudio: () => void;
  pauseAudio: () => void;
  updateTime: () => void;
  addVisitorToDB: () => void;
  fetchVisitors: () => void;
}

export const useAudioStore = create<AudioState>((set, get) => ({
  isLight: true,
  isPlaying: false,
  audio: null,
  duration: 0,
  currentTime: 0,
  visitor: 0,
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

  addVisitorToDB: async () => {
    try {
      const res = await fetch("https://api64.ipify.org?format=json");
      const data = await res.json();
      const ip = data.ip;

      // Store in Supabase
      const { data: existing } = await supabase
        .from("visitors")
        .select("*")
        .eq("visitor", ip);

      if (existing && existing.length === 0) {
        const { error } = await supabase
          .from("visitors")
          .insert([{ visitor: ip }]);
        if (error) console.error("Insert Error:", error);
      }
    } catch (err) {
      console.error("IP fetch error:", err);
    }
  },
  fetchVisitors: async () => {
    try {
      const { data, error } = await supabase.from("visitors").select("*");
      if (error) console.error("Fetch Error:", error);
      // console.log(data);

      if (data) {
        set({ visitor: data.length });
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  },
}));
