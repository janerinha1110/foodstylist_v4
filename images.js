// Function to dynamically find image based on id
function getImageUrl(id) {
  const imagesBaseUrl = './assets/images/';
  const staticBaseUrl = './assets/static/';
  
  // Special mapping for positions that use static folder
  if (id === 4) {
    return `${staticBaseUrl}1.png`; // Position 4 uses static image 1
  }
  if (id === 12) {
    return `${staticBaseUrl}2.png`; // Position 12 uses static image 2
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