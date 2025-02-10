# Collaborative Code Editor

A real-time collaborative code editor using **Socket.io** and **Node.js** that enables multiple users to collaborate on coding projects simultaneously.

## Features
- **Real-time Collaboration**: Users can join the session and see updates from all other connected users.
- **User Tracking**: Displays active collaborators.
- **Message Broadcasting**: Users can send messages that are visible to all participants.

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** installed on your system.

### Clone the Repository
```bash
git clone https://github.com/your-username/collaborative-code-editor.git
cd collaborative-code-editor
```

### Install Dependencies
```bash
npm install
```

### Run the Server
```bash
node server.js
```

By default, the server runs on port **3500**.

## Environment Variables
Create a **.env** file in the root directory and define the following variable:
```
NODE_ENV=development
```
- In development, CORS allows requests from `http://127.0.0.1:5500`
- In production, CORS restrictions apply

## Usage
1. Start the server using `node server.js`.
2. Clients connect to the server and send messages or collaborate in real-time.
3. Connected users are tracked, and changes are broadcasted to all participants.
4. Disconnecting removes the user from the session.

## WebSocket Events
| Event Name               | Description                                    |
|-------------------------|--------------------------------|
| `connection`           | A user joins the session       |
| `message`              | Sends a message to all users   |
| `disconnect`           | Removes the user from the session |
| `rerender collaborators` | Updates the list of active users |

## Technologies Used
- **Node.js**
- **Socket.io**
- **HTTP Server**

## License
This project is licensed under the MIT License. See `LICENSE` for details.

---

Feel free to modify the project as needed and contribute to its improvement!

