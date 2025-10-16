// src/context/ModalContext.tsx

"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// 1. Define el tipo del contexto
interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// 2. Crea el contexto
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// 3. Componente Proveedor (Provider)
export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

// 4. Hook para usar el contexto fácilmente
export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal debe ser usado dentro de un ModalProvider");
  }
  return context;
}

// ⚠️ Recordatorio: Debes envolver tu aplicación (en layout.tsx) con <ModalProvider> para que funcione.
