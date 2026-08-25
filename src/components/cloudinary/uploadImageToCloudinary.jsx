const uploadImageToCloudinary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "medical care"); 
  data.append("cloud_name", "dx4zjyfvt"); 

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dx4zjyfvt/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Cloudinary Upload Error:", errorText);
      throw new Error(`Cloudinary upload failed: ${errorText}`);
    }

    const result = await res.json();

    if (result.secure_url) {
      console.log("Uploaded image URL:", result.secure_url);
      return result.secure_url;
    } else {
      throw new Error("Image URL not returned from Cloudinary");
    }
  } catch (error) {
    console.error("Error uploading image:", error.message);
    throw error;
  }
};

export default uploadImageToCloudinary;
