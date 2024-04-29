# Photo Gallery Application - Full Stack Image Gallery App Tutorial using React and Firebase

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


4. Start the development server:
   ```bash
   npm run dev
   ```

App Live Demo Link - https://vingi-bangi-gallery-app.vercel.app/ 


## Creating Components

Create two components: SignUp.tsx and Home.tsx.
In SignUp.tsx, designed the signup form using Daisy UI components.
In Home.tsx, created a layout with a hero section and a container to display uploaded images.

## Firebase Authentication

Created a sign-up functionality using Firebase to allow users to register with email and password.

## Image Uploading with Firestore

Implement image uploading functionality using Firebase Storage.
When an image is uploaded, store the image URL in Firestore along with the user's email address.

## Displaying Uploaded Images

Fetch uploaded image data from Firestore and display the images on the home page.
Display the email address of the user who uploaded each image.

## Built With

- [React](https://reactjs.org/) - The web framework used.
- [Firebase](https://firebase.google.com/) - For authentication and storage solutions.
- Custom Hooks - To manage authentication state and image uploads efficiently.
- Daisy UI - CSS framework used for styling the application.

## Images of the Gallery  App

![Screenshot 2024-04-29 115529](https://github.com/KDvs123/Gallery-App/assets/119438971/6342efd8-bc7d-4807-b936-c84930867107)

![Screenshot 2024-04-29 121649](https://github.com/KDvs123/Gallery-App/assets/119438971/47e36560-78b1-4ac8-800b-f0e1fcafffc4)



  
