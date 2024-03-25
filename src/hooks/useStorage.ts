import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { db, storage } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "./useAuth";

const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<Error | null>(null);
  const { user}=useAuth();

  const startUpload = (file: File) => {
    if (!file) {
      return;
    }

    const fileId = uuidv4();
    const formatFile = file.type.split("/")[1];

    const storageRef = ref(storage, `images/${fileId}.${formatFile}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
       
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       setProgress(progress);
        
      },
      (error) => {
       setError(error);
      },
      async () => {
        const downloadURL=await getDownloadURL(uploadTask.snapshot.ref);
        
       
        setProgress(progress);
        
        await addDoc(collection(db, "images"), {
          imageUrl: downloadURL,
          createdAt: new Date(),
          userEmail: user?.email,
        });
      }
    );
  };

  return {
    progress,
    error,
    
    startUpload,
  };
};
export default useStorage;
