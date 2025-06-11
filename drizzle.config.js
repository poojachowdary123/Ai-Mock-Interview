/**@type { import("drizzle-kit").config} */
export default {
    schema:"./utils/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://ai-mock-interview_owner:npg_xQL02PRVHCiN@ep-polished-sea-a8nvk8ug-pooler.eastus2.azure.neon.tech/ai-mock-interview?sslmode=require',
    }
};