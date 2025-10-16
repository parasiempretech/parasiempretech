// src/context/ModalContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// -----------------------------------------------------------------------------
// 1. Tipado del contexto (profesional y extendido)
// -----------------------------------------------------------------------------
interface ModalContextType {
  isModalOpen: boolean; // Estado actual del modal (abierto o cerrado)
  openModal: () => void; // Función para abrir el modal
  closeModal: () => void; // Función para cerrarlo
}

// -----------------------------------------------------------------------------
// 2. Creación del contexto
// -----------------------------------------------------------------------------
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// -----------------------------------------------------------------------------
// 3. Proveedor global (Provider)
// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
// 4. Hook personalizado para acceder fácilmente al contexto
// -----------------------------------------------------------------------------
export function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error(
      "useModal debe ser usado dentro de un ModalProvider. Revisá tu layout.tsx o page.tsx"
    );
  }

  return context;
}
