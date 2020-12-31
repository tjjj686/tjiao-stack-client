const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-tj",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://bni4gq6o7i.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_Xk1Xmcw6B",
      APP_CLIENT_ID: "51uk3garddvo4q3cfqsnipgb9n",
      IDENTITY_POOL_ID: "us-east-1:972c239e-567c-4e02-9aad-1e7e7791bb3e",
    },
  };
  
  export default config;