# [Project Name]

## Overview

Ghost AI is a real-time collaborative system design workspace. Users describe a system in plain English, and an AI agent maps that system onto a shared canvas, collaborators refine the architecture, and the app generates a technical specification document from the resulting graph.

## Goals

1. Let authenticated users create and manage architecture projects.
2. Provide a collaborative real-time canvas for system design.
3. Let users import prebuilt starter system designs into the canvas.
4. Let AI generate an initial architecture from a natural language prompt.
5. Let collaborators refine the generated architecture.
6. Convert the final graph into a persistent Markdown technical spec.

## Core User Flow

1. User signs in.
2. User creates or selects a project.
3. User enters the project workspace.
4. User optionally imports a starter system design template into the canvas.
5. User prompts the AI to generate or extend the system design.
6. AI generates nodes and edges in the shared canvas.
7. Collaborators edit and refine the design.
8. User triggers spec generation.
9. App persists the generated Markdown spec.
10. User reviews or downloads the spec.

## Features

### Authentication and projects

- User sign-in and route protection.
- Project creation, ownership, and collaborator access.
- Project list and workspace navigation.

### Collaborative Canvas

- Shared real-time canvas using Liveblocks and React Flow.
- Live cursors, presence indicators, and node/edge editing.
- Canvas snapshots persisted to the filesystem.

### Starter System Designs

- A curated library of prebuilt system design templates.
- Users can import a starter template into the canvas at any point during editing.
- Templates are static canvas snapshots loaded directly into the active room.
- Covers common patterns: monolith, microservices, event-driven, serverless, and more.

### AI Architecture Generation

- AI generates a system design from a user-supplied prompt.
- Output is structured as canvas nodes and edges written into the shared room.
- Generation runs as a durable background task.

### Spec Generation

- The current canvas graph is converted into a Markdown technical specification.
- Specs are persisted as files and linked to the project in the database.
- Users can view and download generated specs.

## Scope

### In Scope

- Authentication and route protection
- Project creation and ownership
- Collaborator access by project
- Starter system design template library and import
- Real-time shared canvas with nodes, edges, and presence
- AI-powered architecture generation from prompts
- AI-powered Markdown spec generation from the canvas graph
- Persistent storage for project metadata and generated artifacts
- Spec download

### Out of Scope

- Billing and subscription systems
- Enterprise permission tiers beyond owner and collaborator
- Versioned spec history and review workflows
- Production object storage migration
- Mobile-native applications

## Success Criteria

1. Un usuario que ha iniciado sesión puede crear y abrir un proyecto.
2. Múltiples usuarios pueden colaborar en el mismo lienzo de manera simultánea.
3. Un usuario puede importar al lienzo un diseño inicial predefinido.
4. La inteligencia artificial puede generar una arquitectura en la sala compartida a partir de una instrucción (*prompt*).
5. El grafo se puede convertir en una especificación persistente en formato Markdown.
6. Los metadatos del proyecto y los artefactos generados se almacenan en las capas correspondientes.