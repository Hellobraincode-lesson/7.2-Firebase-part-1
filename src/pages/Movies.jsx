import React from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Movies() {
  const [user] = useAuthState(auth);
  const [videoUrl, setVideoUrl] = React.useState("");

    React.useEffect(() => {
      if (!user) return;

      const fetchVideo = async () => {
        const videoRef = ref(storage, "movies/Screen Recording 2025-07-13 192952.mp4");

        try {
          const url = await getDownloadURL(videoRef);
          setVideoUrl(url);
        } catch (error) {
          console.error("Error fetching video URL:", error);
        } 
        };

        fetchVideo();
    }, [user]);

    return (
        <div>
            <h1>Movies</h1>
            {videoUrl ? (
                <video controls width="600">
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Loading video...</p>
            )}
        </div>
    );
}

export default Movies;
