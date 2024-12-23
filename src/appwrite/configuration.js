import config from "../config/config";
import { Client, ID, Databases, Storage, Query }   from "appwrite";

export class Service{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost ({title, slug, content, featuredImage, status, userId}) {
        
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    
                }
            )
        } catch (error) {
            console.log("Error creating post", error);
        }
}

async updatePost(slug, {title, content, featuredImage, status}){
    try {
        return await this.databases.updateDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }
        )
    } catch (error) {
        console.log("Error updating post", error);
        
    }
}

 async deletPost(slug){
    try {
        await this.databases.deleteDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug
        )
        return true;
    } catch (error) {
        console.log("Error deleting post", error);
        return false;
    }
 }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Error getting post", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Error getting posts", error);
            
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteStorageId,
                ID.unique(),
                file
            )
        } catch (error) {
           console.log("Error uploading file", error);
            
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
            config.appwriteStorageId,
            fileId
           ) 
           return true;
        } catch (error) {
            console.log("Error deleting file", error);
            
        }
}

    async getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteStorageId,
            fileId
        )
    }

}

const service = new Service();
export default service;