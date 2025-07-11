// Function to dynamically find image based on id
function getImageUrl(id) {
  const imagesBaseUrl = './assets/images/';
  const staticBaseUrl = './assets/static/';
  
  // Use static folder for images 1, 2, 3, 4, and 12 (these are .png files)
  if (id === 1 || id === 2 || id === 3 || id === 4 || id === 12) {
    return `${staticBaseUrl}${id}.png`;
  }
  
  // All other images are .jpeg files in the images folder
  return `${imagesBaseUrl}${id}.jpeg`;
}

// Generate array for all 36 images
export const images = Array.from({length: 36}, (_, index) => {
  const id = index + 1;
  return {
    id: id,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah.",
    image_url: getImageUrl(id)
  };
}); 