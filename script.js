// Unsplash API
const count = 10;
const apiKey = "SUvMs7ekfLrPhl3E-o_ued5k3_0uyOxjW1j32oV-6Vc";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos From Unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error here
  }
}

// On Load
getPhotos();
