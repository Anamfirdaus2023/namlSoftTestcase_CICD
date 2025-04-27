const baseUrl = process.env.NODE_ENV === "production" 
?  'https://namlsoft.com/api' // production 
// : 'https://13.234.119.234:8000'; //stage api 
: 'http://localhost:8000'
export default baseUrl;