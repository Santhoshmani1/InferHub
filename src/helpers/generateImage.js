async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    {
      headers: {
        Authorization: "Bearer "+ import.meta.env.VITE_HF_API_KEY,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return URL.createObjectURL(result);
}

export default async function generateImage(userPrompt) {
  try {
    const result = await query({ inputs: userPrompt });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
