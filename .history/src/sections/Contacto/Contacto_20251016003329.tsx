"use client";

import SectionTitle from "@/components/common/SectionTitle";
import { motion } from "framer-motion";
import React, { useState, useCallback, useMemo } from "react";
// Importar iconos de una librería más estándar (ej: Lucide/Feather) para SVG más limpios
// Aquí usamos los mismos paths SVG, pero el concepto es usar librerías de iconos.
// import { Instagram, Linkedin, GitHub, X } from "lucide-react"; // Asumiendo que usamos Lucide

// --- Configuración de Animación (Mantener) ---
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true as const, amount: 0.3 },
};

// ===================================================================
//                        ✨ HOOK DE FORMULARIO MEJORADO ✨
// ===================================================================

type FormStatus = "idle" | "loading" | "success" | "error";
type FormData = { name: string; email: string; message: string };

const useContactForm = (initialData: FormData) => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = useCallback((data: FormData) => {
    const newErrors: Partial<FormData> = {};
    if (!data.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = "Ingresá un email válido.";
    if (!data.message.trim())
      newErrors.message = "El mensaje no puede estar vacío.";
    return newErrors;
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Limpiar el error del campo tan pronto como el usuario escribe
      if (errors[name as keyof FormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setErrors({}); // Limpiar errores anteriores

      const validationErrors = validate(formData);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setStatus("error"); // Marcar como error de validación
        return;
      }

      setStatus("loading");

      try {
        const response = await fetch("/api/contacto", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus("success");
          setFormData(initialData); // Resetear formulario
        } else {
          // Leer un mensaje de error más específico si la API lo proporciona
          // const errorData = await response.json();
          // console.error("API Error:", errorData);
          setStatus("error");
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        setStatus("error");
        setErrors({ message: "No se pudo conectar con el servidor." });
      }
    },
    [formData, validate, initialData]
  );

  return { formData, handleChange, handleSubmit, status, errors };
};

// ===================================================================
//                        ✨ COMPONENTES ATÓMICOS ✨
// ===================================================================

// Input genérico para reutilización y manejo de errores
const FormInput: React.FC<{
  label: string;
  id: string;
  name: keyof FormData;
  type: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  required?: boolean;
  disabled: boolean;
  isTextArea?: boolean;
  rows?: number;
  error?: string;
}> = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  isTextArea,
  rows = 4,
  error,
}) => {
  const InputComponent = isTextArea ? "textarea" : "input";

  // Clase base para el input/textarea
  const baseClasses =
    "w-full px-4 py-3 rounded-lg bg-black/30 border text-white/90 placeholder-white/40 focus:ring focus:ring-opacity-50 transition duration-200 text-[clamp(0.9rem,1.8vw,1rem)]";

  // Clases dinámicas según el estado
  const stateClasses = error
    ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/30"
    : "border-white/20 focus:border-emerald-400 focus:ring-emerald-400/30";

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-white/90 mb-2"
      >
        {label}
      </label>
      <InputComponent
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`${baseClasses} ${stateClasses}`}
        disabled={disabled}
        {...(isTextArea ? { rows } : {})}
      />
      {error && <p className="mt-1 text-xs text-rose-400">{error}</p>}
    </div>
  );
};

// Componente para el link de redes sociales
const SocialLink: React.FC<{
  href: string;
  label: string;
  iconPath: string;
  colorClass: string;
}> = ({ href, label, iconPath, colorClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={`w-8 h-8 ${colorClass} transition-transform duration-300 group-hover:scale-110`}
    >
      <path d={iconPath} />
    </svg>
  </a>
);

// ===================================================================
//                        ✨ COMPONENTE PRINCIPAL ✨
// ===================================================================

export default function Contacto() {
  const initialFormData: FormData = useMemo(
    () => ({ name: "", email: "", message: "" }),
    []
  );
  const { formData, handleChange, handleSubmit, status, errors } =
    useContactForm(initialFormData);

  // --- Texto dinámico del botón y clases ---
  const { buttonText, buttonClasses } = useMemo(() => {
    let text = "Enviar Mensaje";
    let classes = "";
    let isDisabled = status === "loading" || status === "success";

    switch (status) {
      case "loading":
        text = "Enviando...";
        classes = "opacity-60 cursor-not-allowed animate-pulse";
        break;
      case "success":
        text = "¡Mensaje Enviado! ✅";
        classes =
          "opacity-80 cursor-not-allowed bg-emerald-700/80 shadow-[0_0_15px_rgba(57,255,20,0.5)]";
        break;
      case "error":
        // Si hay error, permitir reintento, pero el texto puede reflejar el error de validación/envío
        text = "Reintentar Envío";
        classes = "bg-rose-600/80 hover:bg-rose-600";
        isDisabled = status === "success"; // Solo deshabilitar en success
        break;
      default:
        classes =
          "bg-emerald-500/80 hover:bg-emerald-500 shadow-[0_0_10px_rgba(57,255,20,0.3)]";
        break;
    }

    return {
      buttonText: text,
      buttonClasses: `w-full px-10 py-3 text-[clamp(1rem,2vw,1.1rem)] font-bold rounded-lg text-white transition-all duration-300 ${classes}`,
      isDisabled,
    };
  }, [status]);

  // Definición de las redes sociales para mapeo
  const socialMedia = [
    {
      href: "https://instagram.com/parasiempretech",
      label: "Instagram de ParaSiempreTech",
      colorClass: "text-[#E1306C] group-hover:text-[#ff75a7]",
      iconPath:
        "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7ZM17.75 6a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z",
    },
    {
      href: "https://www.linkedin.com/company/parasiempretech",
      label: "LinkedIn de ParaSiempreTech",
      colorClass: "text-[#0A66C2] group-hover:text-[#5EA3F0]",
      iconPath:
        "M20.447 20.452H17.21v-5.569c0-1.328-.027-3.038-1.852-3.038c-1.854 0-2.137 1.445-2.137 2.94v5.667H9.01V9h3.104v1.561h.043c.433-.82 1.492-1.687 3.07-1.687c3.283 0 3.887 2.16 3.887 4.971v6.607zM5.337 7.433a1.804 1.804 0 1 1 0-3.608a1.804 1.804 0 0 1 0 3.608zM6.839 20.452H3.832V9h3.007v11.452z",
    },
    {
      href: "https://github.com/ParaSiempreTech",
      label: "GitHub de ParaSiempreTech",
      colorClass: "text-gray-300 group-hover:text-white",
      iconPath:
        "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.235 1.84 1.235 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.76-1.604-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.47-2.382 1.235-3.222-.124-.303-.535-1.527.117-3.176 0 0 1.008-.323 3.301 1.23a11.48 11.48 0 0 1 3.003-.404c1.02.005 2.045.137 3.003.404 2.291-1.553 3.298-1.23 3.298-1.23.653 1.649.242 2.873.118 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.805 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    },
    {
      href: "https://x.com/parasiempretech",
      label: "Twitter (X) de ParaSiempreTech",
      colorClass: "text-white group-hover:text-sky-400",
      iconPath:
        "M18.244 2.25h3.308l-7.227 8.26l8.502 11.24H16.31l-5.188-6.79l-5.93 6.79H1.885l7.73-8.85L1.5 2.25h7.086l4.713 6.173L18.244 2.25zm-1.164 17.52h1.833L7.084 4.126H5.117l11.963 15.644z",
    },
  ];

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[clamp(4rem,8vw,8rem)] overflow-hidden"
    >
      {/* Fondo Glow dinámico (Aislado para mejor rendimiento) */}
      <motion.div
        className="absolute inset-0 opacity-[0.12] bg-gradient-to-br from-[#39ff14] via-[#00bfff] to-[#ff00cc] blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.12 }}
        transition={{ duration: 1 }}
      />
      <SectionTitle id="contacto-title" kicker="Hablemos de estrategia">
        Iniciá tu proyecto con una consulta 💡
      </SectionTitle>
      ---
      {/* --- FORMULARIO & CONTENIDO PRINCIPAL --- */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-[min(90%,600px)]"
        {...fadeIn}
      >
        <p className="text-[clamp(1rem,2.2vw,1.25rem)] text-foreground/85 leading-relaxed mb-8 text-center">
          Dejanos tu mensaje y un especialista te responderá **en menos de 24
          horas**. Es el primer paso hacia el éxito.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6 sm:p-8 rounded-xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-lg"
        >
          <FormInput
            label="Nombre completo"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Ej: Juan Pérez"
            disabled={status === "loading"}
            error={errors.name}
          />

          <FormInput
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Ej: contacto@empresa.com"
            disabled={status === "loading"}
            error={errors.email}
          />

          <FormInput
            label="Tu mensaje o proyecto"
            id="message"
            name="message"
            type="text" // Se usa 'text' para textarea en HTML, aunque en TS lo mapeamos.
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Contanos qué necesitás desarrollar (web, app, estrategia digital, etc.)..."
            disabled={status === "loading"}
            isTextArea
            error={errors.message}
          />

          {/* Mensajes de estado centralizados */}
          <div className="pt-2">
            {status === "success" && (
              <p className="text-emerald-400 font-semibold text-center">
                ¡Gracias por tu mensaje! **Hablamos pronto**. 🥳
              </p>
            )}
            {status === "error" && (
              <p className="text-rose-400 font-semibold text-center">
                Ocurrió un error. Intentá de nuevo o{" "}
                <span className="underline">contactanos directamente</span>.
              </p>
            )}
          </div>

          {/* Botón principal, usando las clases dinámicas de useMemo */}
          <motion.button
            type="submit"
            className={buttonClasses}
            disabled={buttonClasses.isDisabled}
            whileHover={
              status === "idle"
                ? { scale: 1.02, transition: { duration: 0.2 } }
                : {}
            }
            whileTap={status === "idle" ? { scale: 0.98 } : {}}
          >
            {buttonText}
          </motion.button>
        </form>
        <p className="text-sm text-foreground/60 mt-4 text-center">
          *Toda tu información es tratada bajo **estricta confidencialidad**.
        </p>
        ---
        {/* --- BLOQUE DE REDES SOCIALES MEJORADO --- */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-6 relative z-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent text-center tracking-tight">
            Nuestras Redes | Conocé la comunidad
          </h3>

          <div className="flex flex-wrap justify-center gap-8 mt-4">
            {/* Mapeo de links de redes sociales */}
            {socialMedia.map((social) => (
              <SocialLink key={social.label} {...social} />
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-400 text-center max-w-md">
            Próximamente estaremos compartiendo contenido en vivo en{" "}
            <span className="text-emerald-400 font-medium">Twitch</span>,{" "}
            <span className="text-sky-400 font-medium">Kick</span> y{" "}
            <span className="text-pink-400 font-medium">YouTube</span>.
            ¡Seguinos!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ===================================================================
//                        RESUMEN DE MEJORAS
// ===================================================================
