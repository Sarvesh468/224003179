const axios = require('axios');

// Define the John Doe Railway Server API base URL.
const API_BASE_URL = 'http://20.244.56.144/train/';

// Replace with your saved clientID and clientSecret.
const clientID = 'fd9463eb-3016-4d14-b58e-aecf53a04f3c';
const clientSecret = 'SUpQpgUhwtnOVYyf';

// Company details for authentication.
const companyDetails = {
  companyName: 'Train Central',
  clientID,
  ownerName: 'Sarvesh M',
  ownerEmail: '2240030179@sastra.ac.in',
  rollNo: '224003179',
  clientSecret,
};

// Function to obtain an authorization token.
async function obtainAuthToken() {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth`, companyDetails);
    const { token_type, access_token } = response.data;
    console.log('Authorization successful:');
    console.log('Token Type:', token_type);
    console.log('Access Token:', access_token);
  } catch (error) {
    if (error.response) {
      console.error('Authorization failed with status code:', error.response.status);
      console.error('Error details:', error.response.data);
    } else if (error.request) {
      console.error('No response received from the server.');
    } else {
      console.error('Error:', error.message);
    }
  }
}
obtainAuthToken();
