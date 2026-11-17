# 📹 Video Capture Online (VCO)

> **Visualización de video UVC y pantallas en tiempo real a 1080p @ 60fps, 100% en el navegador y con cero sobrecarga de cómputo.**

---

## 🎯 Motivo del Proyecto

En lo personal, muchas veces he querido visualizar el video mediante capturadoras de pantalla con dispositivos UVC, herramientas de escritorio populares como **OBS** resultan genial, pero para equipos de escasos recursos como con los que he tenido, me resulta pesado. Esto se debe a sus pipelines de composición en capas, filtros y recodificación en segundo plano, lo que provoca bajones de rendimiento y latencia en equipos limitados.

**Video Capture Online (VCO)** nace con una premisa clara: **exprimir el rendimiento al máximo utilizando exclusivamente la infraestructura nativa del navegador web**.

---

## ⚡ ¿Por qué funciona tan rápido?

A diferencia de otros programas que procesan cada fotograma por software en la CPU, VCO aprovecha el flujo directo de las APIs multimedia web:

1. **Acceso Nativo de Bajo Nivel**: Mediante `navigator.mediaDevices.getUserMedia` y `getDisplayMedia`, se obtiene el stream directo del dispositivo UVC o de la pantalla compartida.
2. **Pipeline Zero-Copy**: El flujo de video se asigna directamente a la propiedad `srcObject` del elemento HTML `<video>`.
3. **Aceleración por Hardware Directa**: La decodificación del stream (MJPEG/YUV) y su renderizado se delegan por completo al decodificador de hardware y a la GPU del sistema operativo a través del motor del navegador.
4. **Cero Sobrecarga de CPU**: Al eliminar la transcodificación y la composición por software, el consumo del procesador permanece en niveles mínimos, permitiendo un rendimiento sumamente eficaz.

---

## 👥 Público Objetivo

VCO está diseñado para:

* **Usuarios con Equipos Limitados o Antiguos**: Todo tipo de dispositivos de gama baja o con recursos limitados, desde celulares, laptops y computadoras de escritorio.
* **Visualización Directa y Monitoreo**: Personas que solo necesitan ver la señal de una capturadora UVC (consolas de videojuegos, cámaras DSLR, microscopios) o una segunda pantalla sin instalar aplicaciones pesadas.
* **Cero Instalación / Multiplataforma**: Funciona en cualquier sistema operativo moderno (macOS, Windows, Linux, Android e iOS) con solo abrir una URL.

---

## ✨ Características Principales

* 🔌 **Detección UVC y Pantallas**: Selección instantánea entre capturadoras USB, cámaras web y compartición de pantalla/ventanas del sistema.
* ⚙️ **Control de Resolución y FPS**: Configuración dinámica de resolución (1920×1080, 1280×720 o el máximo disponible) y tasa de refresco (60fps, 30fps, 24fps o el máximo disponible).
* 📊 **Métricas en Tiempo Real**: Panel discreto que muestra la resolución real y FPS activos entregados por el hardware.
* 🌙 **Interfaz limpia**: Se permite pantalla completa, además los controles se ocultan automáticamente tras 3 segundos de inactividad del cursor, los estilos son mínimos pero agradables.

---

## 📝 Registro de Cambios (Changelog)

### `v1.0.0` — 16 de Noviembre de 2026
* 🎉 **Primer Release / Commit Inicial**:
  * Implementación de la vista principal `index.astro` para captura y visualización fluida en tiempo real.
  * Selector inteligente de fuentes de entrada (dispositivos UVC, cámaras web y `getDisplayMedia` para ventanas/pantallas del sistema).
  * Panel de control flotante con auto-ocultado e indicadores de estado.
  * Atajos de teclado integrados (tecla `F` para pantalla completa).

---

## 🔮 Planes a Futuro

Aunque la versión actual está optimizada exclusivamente para la captura y visualización de ultra bajo consumo, el proyecto deja abiertas las siguientes posibilidades de desarrollo:

* ⏺️ **Módulo de Grabación Local**: Captura directa a disco usando la API `MediaRecorder` del navegador.
* 📡 **Transmisión Ligera**: Exploración de flujos P2P o WebRTC para compartir la señal de visualización.
* 🎨 **Personalización de Interfaz**: Opciones modulares para reorganizar la visualización de manera similar a layouts de transmisión.

---

## 👨‍💻 Autor

Creado y desarrollado por **Abel Trejo Vargas** ([trejodev.vercel.app](https://trejodev.vercel.app)).