import {Client,Account,ID,Databases,Storage, Query} from  "appwrite"
import { conf } from "../config/config";



class Service{
    client=new Client();
    account;
    databases;
    storage;
    constructor(){
        this.client
        .setEndpoint(conf.url) // Your API Endpoint
        .setProject(conf.project_id) // Your project ID
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
        
        
    }
    async createNewPost({featuredImage,status,title,content,slug,userId}){
        try {
            const newPost=await  this.databases.createDocument(conf.database_id, conf.collection_id, slug, {
                featuredImage,status,title,content,userId
            });
            return newPost;
        } catch (error) {
            console.log("Creating new post error",error)
        }

    }
    async updatePost(slug,{featuredImages,status,title,content,userId}){
        
        try {
            const post=await this.databases.updateDocument(conf.database_id,conf.collection_id,slug,{featuredImages,status,title,content,userId});
            if(post){
                return post;
            }
        } catch (error) {
            console.log("Error while updating post");
        }
    }
    async deletePost(slug){
        try {
            return this.databases.deleteDocument(conf.database_id, conf.collection_id,slug);
            
        } catch (error) {
            console.log("Error while deleting post",error);
        }
    }
        
    async getPost({slug}){
        try {
            console.log(slug);
            return await this.databases.getDocument(
                conf.database_id,
                conf.collection_id,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }   

    async getPosts(){
        try {
            return await this.databases.listDocuments(conf.database_id, conf.collection_id);
            
        } catch (error) {
            console.log("error while showing post",error);
        }

    }

    async uploadFile(file){
        try {
            
            return this.storage.createFile(
                conf.bucket_id,
                ID.unique(),
                file
                    );

        } catch (error) {
            console.log("Error while uploading File",error)
        }
        
    }
    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Error while deleting File")
        }
    }
    getPreview(fileId){
        try {
            return  this.storage.getFilePreview(conf.bucket_id, fileId);

        } catch (error) {
            console.log("Error in File preview",error)
        }
    }
}

const service=new Service();
export {service}