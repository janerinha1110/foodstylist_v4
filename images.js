// Function to dynamically find image based on id
function getImageUrl(id) {
  const imagesBaseUrl = './assets/images/';
  const staticBaseUrl = './assets/static/';
  
  // Use static folder for images 1, 2, and 3 (these are .png files)
  if (id === 1 || id === 2 || id === 3) {
    return `${staticBaseUrl}${id}.png`;
  }
  
  // All other images are .jpeg files in the images folder
  return `${imagesBaseUrl}${id}.jpeg`;
}

export const images = [
  {
    id: 4,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 5,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 6,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 1,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 7,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 8,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 9,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 10,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 11,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 4,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 5,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 2,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 6,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 7,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 8,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  },
  {
    id: 3,
    image_content: "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah."
  }
  // Add more image objects here as needed
  // Format: { id: X, image_content: "Description..." }
  // The image_url will be automatically generated as ./assets/images/X.jpeg or ./assets/static/X.png
].map(img => ({
  ...img,
  image_url: getImageUrl(img.id)
})); 