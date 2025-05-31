# Backedn_Web

# Express Task & Goal API

Una pequeña API REST construida con **Node.js** y **Express**, que maneja dos recursos principales:

- **Tasks** (tareas)
- **Goals** (objetivos)

La API requiere un header de autorización simple para acceder a cualquier ruta.

---

## 🛠️ Requisitos

- Node.js (v14 o superior recomendado)
- npm

---

## 🚀 Instalación

git clone https://github.com/MenfisGualip/Backend_Web.git
npm install

## Ejecución

npm start

## Por defecto, la API se ejecutará en:

http://localhost:3001

## Autenticación

Authorization: 123

## Rutas

## Base URL: /tasks

Método	   Ruta	            Descripción
GET	/getTasks	    Obtener todas las tareas
POST	/addTask	    Crear una nueva tarea
DELETE	/deleteTask/:id	    Eliminar una tarea por su ID


## Base URL: /goals

Método	   Ruta             Descripción
GET	/getGoals	    Obtener todos los objetivos
POST	/addGoal	    Crear un nuevo objetivo
DELETE	/deleteGoal/:id	    Eliminar un objetivo por su ID
