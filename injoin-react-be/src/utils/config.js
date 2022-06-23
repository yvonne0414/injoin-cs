const SS_BASE_URL = process.env.REACT_APP_SS_URL || 'http://localhost:3001';
const CS_BASE_URL = process.env.REACT_APP_FE_URL || 'http://localhost:3000';
export const API_URL = SS_BASE_URL + '/api';
export const BE_IMAGE_URL = CS_BASE_URL + '/images/be';
