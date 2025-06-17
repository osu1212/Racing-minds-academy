    // Access camera
    let video = document.getElementById('video');
    let stream; // to store the camera stream

// Open Camera only when user clicks
function openCamera (){
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((mediaStream) => {
        stream = mediaStream;
        video.srcObject = mediaStream;
        video.style.display = 'block';
        document.getElementById('successMsg').style.display = 'none';
      })
      .catch((err) => {
        alert("Camera access denied or not supported.");
        console.error(err);
      });
    }
    // Capture image from video and stop camera
    function captureFace() {
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');
      canvas.style.display = 'block';
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Convert to base64
      const imageData = canvas.toDataURL('image/png');
      document.getElementById('faceImage').value = imageData;

      //stop the camera
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.style.display = 'none';
      alert("Face captured successfully!");
      }
    }
