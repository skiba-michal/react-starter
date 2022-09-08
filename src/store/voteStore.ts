import { mountStoreDevtool } from "simple-zustand-devtools";
import create from "zustand";

interface VoteStore {
  votes: number;
  addVotes: () => void;
  subtractVotes: () => void;
}

export const useVoteStore = create<VoteStore>(set => ({
  votes: 0,
  addVotes: () => set(state => ({ votes: state.votes + 1 })),
  subtractVotes: () => set(state => ({ votes: state.votes - 1 })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store1", useVoteStore);
}

