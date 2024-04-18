import {Client,Account,ID} from  "appwrite"
import { conf } from "../config/config";


class Appwrite{
    client=new Client();
    account;
    constructor(){
        
        this.client
        .setEndpoint(conf.url) // Your API Endpoint
        .setProject(conf.project_id) // Your project ID
        console.log(this.client);
        this.account = new Account(this.client);
;

    }
    async getUserAccount(){
        try{
            const getAccount= await this.account.get();

            if(getAccount){
                return getAccount;
            }
            
        }
        catch(error){
            console.log("get user error",error)
            throw (error);
            
        }
        return null
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("this is login error",error);
        }

    }
    async createUser({email,password,name}){
        try {

            const user = await this.account.create(ID.unique(), email, password,name);
            if(user){
                this.login({email,password})
            }
            else{
                return user
            }
        } catch (error) {
            console.log("create user error",error)
            throw (error);
        }

    }
    async logout(){
        const logout=await this.account.deleteSessions();
        try {
            if(logout){
                return logout
            }
        } catch (error) {
            console.log("this is logout error",error)
        }
        return null;
    }

}
const appwriteObj=new Appwrite();
export {appwriteObj}