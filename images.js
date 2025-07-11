// Function to dynamically find image based on id
function getImageUrl(id) {
  const imagesBaseUrl = './assets/images/';
  const staticBaseUrl = './assets/static/';
  
  // Since we can't easily check file existence in static context,
  // we'll use a simple approach - just construct the URL with common extensions
  // The browser will handle the actual file existence check
  
  // You can add specific mappings here if needed, or it will default to jpg
  const specificExtensions = {
    1: 'png',
    2: 'png',
    3: 'png',
    7: 'png'
    // Add more as needed: id: 'extension'
  };
  
  // Use specific extension if defined, otherwise default to jpg
  const extension = specificExtensions[id] || 'jpg';
  
  // Use static folder for images 1, 2, and 3
  if (id === 1 || id === 2 || id === 3) {
    return `${staticBaseUrl}${id}.${extension}`;
  }
  
  return `${imagesBaseUrl}${id}.${extension}`;
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
  // The image_url will be automatically generated as ./assets/images/X.{extension}
].map(img => ({
  ...img,
  image_url: getImageUrl(img.id)
})); 