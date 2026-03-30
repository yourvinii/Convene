import { useRef } from "react";

export default function App() {
  const videoRef = useRef(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    console.log(stream.getVideoTracks())
    console.log(stream.getAudioTracks())
    console.log(stream.active)
    console.log(stream.id)
    console.log(stream.clone())

    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: "400px",
          aspectRatio: "16/9",
        }}
      />
      <button onClick={startCamera}>Start Camera</button>
    </>
  );
}
