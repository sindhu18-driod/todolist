# React Todo List Application

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [System Design](#system-design)
- [Implementation Explanation](#implementation-explanation)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)

## Overview

This is a simple Todo List application built using React. It allows users to add, update, mark as done, search, and delete tasks. The application state is managed using React's `useState` hook.

## Features

- Add new tasks
- Mark tasks as done or undone
- Edit tasks
- Delete tasks
- Search tasks

## System Design

### Components

1. **App**: The main component that contains the entire application logic and state.

### State Management

- **task**: A string that holds the current task being added.
- **todos**: An array of task objects. Each task object has the following structure:
  ```javascript
  {
    text: string, // The text of the task
    isDone: boolean, // Indicates if the task is done
    isEditing: boolean // Indicates if the task is being edited
  }
