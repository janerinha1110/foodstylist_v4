// Function to automatically map images based on available files
function getImageUrl(id) {
  const imagesBaseUrl = './assets/images/';
  
  // Available files in the images folder (based on current directory listing)
  const availableFiles = {
    1: '1.jpeg',
    2: '2.jpeg', 
    3: '3.jpeg',
    4: '4.png',
    5: '5.jpeg',
    6: '6.jpeg',
    7: '7.jpeg',
    8: '8.jpeg',
    9: '9.jpeg',
    10: '10.jpeg',
    11: '11.jpeg',
    12: '12.png',
    13: '13.jpeg',
    14: '14.jpeg',
    15: '15.jpeg',
    16: '16.jpeg',
    17: '17.jpeg',
    18: '18.jpeg',
    19: '19.jpeg',
    20: '20.jpeg',
    21: '21.jpeg',
    22: '22.jpeg',
    23: '23.jpeg',
    24: '24.jpeg',
    25: '25.jpeg',
    26: '26.jpeg',
    27: '27.jpeg',
    28: '28.jpeg',
    29: '29.jpeg',
    30: '30.jpeg',
    31: '31.jpeg',
    32: '32.jpeg',
    33: '33.jpeg',
    34: '34.jpeg',
    35: '35.jpeg',
    36: '36.jpeg'
  };
  
  const fileName = availableFiles[id];
  if (fileName) {
    return `${imagesBaseUrl}${fileName}`;
  }
  
  // Fallback for missing files
  return `${imagesBaseUrl}${id}.jpeg`;
}

// Content for each image
const imageContents = {
  1: "Work for a restaurant called Lyla it's Mexican but its real roots are glamour and fun and that's the direction we went in for this group drinks shot",
  2: "A clean top shot for a clean brand Amadeo, where I was mainly playing with the colours of the tuna, menu and drink",
  3: "A drink focused shoot obviously called for some colour contrast, purple against orange. Making the drink the hero without losing the essence of lifestyle",
  4: "To know more\n📞 : 9769549605",
  5: "For the Chinese New Year festival shoot at the old school everyone's favourite Mainland china. If you can't tell, the red bao's were the hero here.",
  6: "A cool shoot for an Uber cool restaurant called Late checkout whose interiors literally represent what a late checkout at a hotel feels and looks.",
  7: "Shoot at Bastian chinois, where the texture of the table and the colour of the dim sums were enough to make the picture come alive",
  8: "A wallpaper shot for a fun brand called Josh that doesn't shy away from boldness so why should the styling",
  9: "A Christmas shoot at a Mexican restaurant, so we didn't want the Christmas elements to over power. Yet keeping the whole feast and colours to show the vibrant environment.",
  10: "Again a play with colours to complement the vibrant dish and to show some festive cheer without it overpowering the food.",
  11: "A personal favourite shoot for the bar 1633 who means business with their drinks therefore highlighting that through an action shot",
  12: "A testimonial by Vinayak grover",
  13: "That green gazpacho soup was a standout in look and taste. When we talk about main character this is what we mean. Work for Armani Cafe",
  14: "Potato bites but make it fun and playful. The colours of the blocks and background complementing the food item. For the brand Josh",
  15: "For a brand called Whiskitiers who didnt shy from experimentation and wanted something decadent and ingredient driven",
  16: "A drinks shoot for the restaurant Blah, with models. It gives vogue but drinks centric",
  17: "Eat with your eyes and devour!",
  18: "A matcha caviar tiramisu of that deep red colour had to be given all the attention. The Look, colours and presentation, how i wish you could taste it!",
  19: "Masala library doing a course menu highlighting ingredient from each state. We wanted to show representation and the twist through clean crisp styling.",
  20: "Entisi the brand whose packaging is as good as their product, this was a Diwali shoot taken up a notch.",
  21: "Less is more and this shot represents that. Sometimes you dont need much, just let the product speak for itself",
  22: "A sharing plate requires you to share it. Best meals are enjoyed together and we wanted to show that.",
  23: "This is one of my favourite shoots the restaurant wanted a very fun welcoming glamorous vibe, therefore i chose to layer the boxes almost like an installation.",
  24: "A dish that has so much going on needs breathing space and complementary background colours",
  25: "A very fun representation of a very common dish, this shot makes you stop and look. That's why you're here, reading this.",
  26: "Overlapping of plates but keeping a lot of negative space in the background to balance the imagery for a restaurant called Magna",
  27: "Sometimes clean precise neat styling does leaps and bounds, knowing when to stop is also an art",
  28: "A fun shot with hand elements, lots of dishes and warm colour tones to show, you can't just come here and have 1 burger. For B3 burgers",
  29: "My favourite image, the clean round risers making the chocolate macaroons stand out against the brown backdrop for Entisi.",
  30: "A Christmas shoot for Toujors with such a cute reindeer cake.",
  31: "Classics. The right outfit can complement the food. Like here the satin silver skirt complementing the martini for the brand Ocho.",
  32: "Papaya having a dim sum festival required me to show customers the range they got.",
  33: "A speakeasy called Charlee has a very undertoned but cool interiors and food so we tried highlighting both",
  34: "A fun top shot for a brand called Megumi, highlighting the variety of Asian tapas and mains",
  35: "A little play for Asia kitchen for the Chinese New Year.",
  36: "Nmacc knows what a real cheese platter looks like we tried to do it justice by keeping it minimal and clean."
};

// Generate array for all 36 images
export const images = Array.from({length: 36}, (_, index) => {
  const id = index + 1;
  return {
    id: id,
    image_content: imageContents[id] || "This was a cocktail oriented shoot featuring indigenous ingredients for the restaurant blah.",
    image_url: getImageUrl(id)
  };
}); 