import { create } from "zustand";

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// TODO: leart what is the zustand is?
const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
