export const config = {

  "postgress": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres"
    
  },

  "jwt": {
    "secret": process.env.JWT_SECRET
  },
  
  "URL": process.env.API_URL


}
