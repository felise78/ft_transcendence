# ft_transcendence

A modern web-based Pong game platform with real-time multiplayer capabilities, user management, and advanced features.

## 📋 Project Overview

ft_transcendence is a comprehensive web application that brings the classic Pong game into the modern era. Built as the final project of the 42 curriculum, it demonstrates advanced web development concepts including real-time communication, user authentication, database management, and API design.

## 🚀 Features

### Core Game Features
- **Server-Side Pong**: Complete server-side game logic with API endpoints
- **Real-time Multiplayer**: Play against remote players with WebSocket communication  
- **Tournament System**: Organized tournaments with matchmaking
- **Live Chat**: Real-time messaging between players

### User Management
- **Standard Authentication**: Secure user registration and login
- **OAuth Integration**: Remote authentication with 42 OAuth
- **User Profiles**: Customizable profiles with avatars and statistics
- **Friend System**: Add friends and view online status
- **Match History**: Complete game history tracking

### Technical Stack
- **Backend Framework**: Django (Python)
- **Frontend Framework**: Bootstrap + Vanilla JavaScript
- **Database**: PostgreSQL
- **Real-time Communication**: WebSockets
- **Containerization**: Docker & Docker Compose

## 🛠️ Installation & Setup

### Prerequisites

- Make
- Docker
- Docker Compose
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/felise78/ft_transcendence.git
   cd ft_transcendence
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   # To use the Remote Authentication with 42 OAuth you will need to get your own credentials and so to register the app on your 42 intra 
   # see the doc : https://api.intra.42.fr/apidoc/guides/getting_started
   ```

3. **Launch the application**
   ```bash
   make
   ```

4. **Access the application**
   ```bash
   make info 
   #will show you the url to access the app  
   ```

## Subject Requirements 

### 🎯 Mandatory Requirements Met :

- ✅ Single-page application with browser navigation
- ✅ Compatible with latest Chrome version
- ✅ No unhandled errors or warnings
- ✅ Launched with single Docker command
- ✅ Real-time multiplayer Pong game
- ✅ Tournament system with user registration
- ✅ Secure user management
- ✅ HTTPS implementation

### 📝 Non-mandatory Module Implementation :

This project implements the following ft_transcendence modules:

- **[Major]** Server-Side Pong with API
- **[Major]** Use Django Framework for Backend  
- **[Minor]** Use Bootstrap Framework for Frontend
- **[Minor]** PostgreSQL Database Integration
- **[Major]** Standard User Management & Authentication
- **[Major]** Remote Authentication (42 OAuth)
- **[Major]** Remote Players Support
- **[Major]** Live Chat System