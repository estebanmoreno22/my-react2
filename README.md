# 🚀 MyReactApp

Aplicación desarrollada con **React + Vite** y desplegada en **GitHub Pages** usando la rama `gh-pages`.

🔗 **Demo en vivo:**  
https://fauriorrego-create.github.io/myReactApp/

---

## 📦 Tecnologías Utilizadas

- ⚛️ React
- ⚡ Vite
- 🎨 Bootstrap
- 🛠️ ESLint
- 🌍 GitHub Pages

---

## 📂 Estructura del Proyecto

```
src/
│
├── features/
│   ├── layout/
│   │   ├── components/
│   │   │   ├── Article.jsx
│   │   │   ├── Content.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   ├── hooks/
│   │   └── pages/
│   └── products/
│
├── shared/
│   └── styles/
│       ├── App.css
│       └── index.css
│
├── App.jsx
├── main.jsx
└── routes.jsx
```

---

# 🛠️ Cómo Subir el Proyecto a GitHub (Desde Cero)

Este proyecto fue creado localmente y luego subido a GitHub usando los siguientes pasos:

### 1️⃣ Inicializar Git en el proyecto

```bash
git init
```

### 2️⃣ Agregar todos los archivos

```bash
git add .
```

*(Los warnings LF → CRLF en Windows no son errores, se pueden ignorar.)*

### 3️⃣ Crear el primer commit

```bash
git commit -m "mi primer commit"
```

### 4️⃣ Cambiar la rama a main

```bash
git branch -M main
```

### 5️⃣ Conectar con el repositorio de GitHub

```bash
git remote add origin https://github.com/fauriorrego-create/myReactApp.git
```

### 6️⃣ Subir el proyecto a GitHub

```bash
git push -u origin main
```

---

# 🌍 Despliegue en GitHub Pages

Este proyecto utiliza la rama `gh-pages` para el despliegue.

### Publicar el proyecto:

```bash
npm run deploy
```

Esto:
- Ejecuta `vite build`
- Genera la carpeta `dist`
- Crea automáticamente la rama `gh-pages`

Luego en GitHub:

1. Ir a **Settings**
2. Ir a **Pages**
3. En *Source* seleccionar:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Guardar

---

## 📌 Scripts Disponibles

```bash
npm run dev       # Ejecuta en desarrollo
npm run build     # Genera versión producción
npm run preview   # Previsualiza el build
npm run deploy    # Publica en GitHub Pages
```

---

## 👨‍💻 Autor

**Andres Orrego**  
Proyecto académico – 2026  

---

## 📄 Licencia

Uso académico.