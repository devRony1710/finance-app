# 💰 Finance-App

Gestor de finanzas personales construido con **React + TypeScript + Supabase**.

DEMO: https://finance-app-alpha-eight.vercel.app/

Credentials:

Email: user@test.com
Password: Test2025\*.

---

## 📌 Descripción

**Finance-App** es una aplicación web que permite a los usuarios:

- Registrar ingresos y gastos.
- Visualizar el resumen de su cuenta (balance, totales y gráficos).
- Ver los gastos más importantes por categoría (Top Expenses).
- Aplicar filtros por tipo de gasto.
- Autenticarse mediante Supabase para ver solo sus propios datos.

---

## 🛠 Instalación y Ejecución

```bash
# Clonar el repositorio
git clone https://github.com/devRony1710/finance-app.git
cd finance-app

# Instalar dependencias
yarn install  # o npm install

# Crear archivo de entorno
crear archivo .env en la raiz del proyecto

# Configurar variables
Si se necesitan, conversar en privado conmigo. rony1710.dev@gmail.com

# Ejecutar en modo desarrollo
yarn dev

# Generar build para producción
yarn build

# Ejecutar pruebas
yarn test
```

---

## 🧑‍💻 Stack Tecnológico

- **Frontend:** React (Vite + TypeScript)
- **Estado:** Context API
- **Routing:** React Router DOM v7
- **UI:** TailwindCSS
- **Gráficos:** Recharts
- **Backend (BaaS):** Supabase (Auth + PostgreSQL)
- **Testing:** Vitest + React Testing Library

---

## 🏗 Arquitectura del Proyecto

```bash
src/
├── api/ # Cliente Supabase & servicios
├── components/ # Componentes UI reutilizables
├── features/ # Módulos funcionales (auth, dashboard, transactions)
├── hooks/ # Hooks personalizados
├── context/ # Contextos (Auth)
├── templates/ # Plantillas que componen la ui (Login, Dashboard, etc)
├── layouts/ # Layouts que componen la ui (dashboard layout)
├── lib/ # Funciones auxiliares y helpers
├── utils/ # Funciones auxiliares
└── App.tsx   # Configuración de Vite y alias
```

---

## ✅ Funcionalidades Implementadas

- Autenticación (registro/login) con Supabase Auth.
- CRUD de transacciones (ingresos y egresos).
- Cálculo de **Balance General**: ingresos − egresos.
- Totales de **ingresos** y **egresos** individuales.
- Gráfico resumen mensual (ingresos vs egresos).
- Gráfico de **Top Expenses** por categoría.
- Políticas RLS para asegurar privacidad por usuario.

---

🧪 Testing

- Framework: Vitest
- Librería: React Testing Library
- Mock global de ResizeObserver para evitar errores con Recharts.
- Tests de funciones RPC (getBalanceRpc, getMonthlySummaryRpc, etc.).
- Tests de componentes que usan Router con MemoryRouter.

🎯 Buenas Prácticas

- Tipado estricto con TypeScript.
- Separación clara entre lógica de negocio y presentación.
- Uso de funciones SQL en Supabase para cálculos (balance, resumen).
- Políticas RLS para privacidad de datos.
- Pruebas unitarias de componentes y lógica.
- Alias de rutas (@/) configurado en Vite y TypeScript.

📂 Flujo de Ramas (Git)

- master → versión estable de producción
- develop → versión de desarrollo
- release/\* → versiones de lanzamiento
- feature/\* → nuevas funcionalidades

Convención de commits:
feat:, core:, wip:, etc.

### Decisiones técnicas.

- Se elige un stack simple ya que no se requiere una arquitectura compleja para el proyecto.
- Se elige typescript para el tipado estricto en todo momento de las props de los componentes y respuestas de los endpoints, así como los parámetros de las funciones.
- Se realizaron solo prueba a nivel de ciertos componentes y funciones que solicitan datos a supabase para demostrar mis habilidades en pruebas unitarias. (Por tiempos no se llevo a cabo un coverage más completo).
- Se decidió mantener el estado con context api ya que no se requería una arquitectura más compleja para el estado.
- Se eligió supabase como backend ya que es una plataforma de backend as a service que permite crear una base de datos y autenticación de manera rápida y sencilla.
- Se eligió react hook form para el manejo de formularios ya que es una librería que permite manejar formularios de manera sencilla y eficiente.
- Se eligió zod para la validación de formularios ya que cuenta con una sintaxis clara y fácil de entender y una api bastante completa.
- Se Utilizo tanstack query para manejar las peticiones a supabase y la cache de los datos.
- Se utiliza vitest para las pruebas unitarias de componentes y funciones.
- Se configuro el proyecto con prettier y eslint para mantener un codigo limpio y legible.
- Se creo adicionalmente una carpeta .vscode con un template_md para mantener automatico la creación de un buen readme en el momento de crear una PR.
