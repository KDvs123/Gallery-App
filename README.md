# Photo Gallery Application

Welcome to the Photo Gallery Application, a dynamic web application built using React. This application allows users to securely upload and view images in a gallery format. With a focus on user experience and security, our application leverages Firebase for authentication and storage, ensuring that your memories are safely stored and easily accessible.

## Getting Started

This section will guide you through setting up the project locally on your machine.

### Prerequisites

- Ensure you have Node.js installed on your system.
- A Firebase project for backend services. Refer to [Firebase documentation](https://firebase.google.com/docs/web/setup) to set up a project.

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourgithubusername/photo-gallery-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd photo-gallery-app
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root of your project and populate it with your Firebase project configurations:
   ```plaintext
   REACT_APP_API_KEY=your_api_key
   REACT_APP_AUTH_DOMAIN=your_project_auth_domain
   REACT_APP_PROJECT_ID=your_project_id
   REACT_APP_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_APP_ID=your_app_id
   ```

5. Start the development server:
   ```bash
   npm start
   ```

Your app should now be running on [http://localhost:3000](http://localhost:3000).

## Features

- **User Authentication:** Secure login and signup functionality.
- **Image Upload:** Users can upload images to the gallery.
- **Real-time Gallery:** The gallery updates in real-time as images are added.
- **Responsive Design:** A clean and responsive user interface.

## Built With

- [React](https://reactjs.org/) - The web framework used.
- [Firebase](https://firebase.google.com/) - For authentication and storage solutions.
- Custom Hooks - To manage authentication state and image uploads efficiently.
