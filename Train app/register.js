const axios = require('axios');

// Define the John Doe Railway Server API base URL.
const API_BASE_URL = 'http://20.244.56.144/train';

const companyDetails = {
  companyName: 'Train Central',
  ownerName: 'Sarvesh M',
  rollNo: '224003179',
  ownerEmail: '2240030179@sastra.ac.in',
  accessCode: 'XGgVsc',
};


async function registerCompany() {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, companyDetails);
    const { clientID, clientSecret } = response.data;

    console.log('Registered successfully:');
    console.log('Client ID:', clientID);
    console.log('Client Secret:', clientSecret);
  } catch (error) {
    console.error('Registration failed:', error.message);
  }
}

registerCompany();
