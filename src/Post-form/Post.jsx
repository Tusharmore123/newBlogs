import React ,{useState,useEffect, useCallback}from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useSelector } from 'react-redux'
import Select from '../components/Select'
import {useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { service } from '../../Appwrite/service'
import RTE from '../components/RTE'
import { appwriteObj } from '../../Appwrite/auth'
function Post({post}) {
    
    const navigate=useNavigate();
    const {control,setValue,watch,register,getValues,handleSubmit}=useForm({
        defaultValues:{
            title:post?post.title:"",
            slug:post?post.slug:"",
            content:post?post.content:"",
            status:post?post.status:"active"

        },
    })
    const userData=useSelector((state)=>state.auth.userData)
    
    console.log(userData);
    const submit=async(data)=>{
        if(post){
            const file=data.featuredImage[0] ?await service.uploadFile(
            data.featuredImage[0]):null

            if (file){
                service.deleteFile(post.$id);
            }
            const dbPost= await service.updatePost(post.$id,{
                ...data,
                featuredImages:file?file.$id:undefined
            })
            if (dbPost){
                navigate(`/post/${dbPost.$id} `)
            }
        }
        else{
            const file=data.featuredImage[0]?await service.uploadFile(data.featuredImage[0]):null
            console.log(data)
            if (file){
                const fileId=file.$id;
                data.featuredImage=fileId;
                const dbPost=service.createNewPost({
                    userId:userData.$id,
                    ...data,
                })
                console.log(dbPost);
                if (dbPost){

                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }

    }
    const slugifyForm=useCallback((text)=>{
        if(text && typeof text==='string')
        return text.trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g,"-")
        .replace(/\s/g,"-") 
        return ""    
    },[])

    useEffect(()=>{
        const subscription=watch((value,{name})=>{
            if (name=='title'){
                setValue(slug,slugifyForm(value.title))
            }
        }
    )
    return subscription.unsubscribe()
    },[watch,setValue,slugifyForm])
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
    <div className="w-2/3 px-2">
        <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugifyForm(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
    </div>
    <div className="w-1/3 px-2">
        <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("featuredImage", { required: !post })}
        />
        {post && (
            <div className="w-full mb-4">
                <img
                    src={service.getPreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-lg"
                />
            </div>
        )}
        <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
            {post ? "Update" : "Submit"}
        </Button>
    </div>
</form>
);
}
  
export default Post