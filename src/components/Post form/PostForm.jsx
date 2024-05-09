import { useForm } from 'react-hook-form'
import Input  from '../Input'
import { service } from '../../../Appwrite/service'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import RTE from './RTE'
import Select from '../Select'
import Button from '../Button'
import { useSelector } from 'react-redux'

function PostForm({ post }) {
    console.log('post',post)
    const navigate = useNavigate();
    const {control,setValue,watch,register,getValues,handleSubmit}=useForm({
        defaultValues:{
            title:post?post.title:"",
            slug:post?post.slug:"",
            content:post?post.content:"",
            status:post?post.status:"active"

        }
    })
    
    const userData=useSelector((state)=>state.auth.userData)
    
    const submit = async (data) => {
        console.log('submit is clicked')
        if (post) {
            
            const file =  data.image[0] ?await service.uploadFile(data.image[0]) : null;
            if (file) {
                await service.deleteFile(post.$id)
            }
            const dbPost = await service.updatePost(post.$id, {
                ...data,
                image: file ? file.$id : null
            })

            if (dbPost) {
                navigate(`/post/${dbPost.$id} `)
            }
        }
        else {
            console.log(data);
            const file =  data.image[0] ?await service.uploadFile(data.image[0]) : null
            if (file) {
                const fileId = file.$id;
                data.image = fileId;
            }
            const dbPost = await service.createNewPost({
                userId: userData.$id,
                ...data,
            })
            if (dbPost) {
                navigate(`/posts/${dbPost.$id}`)
            }
        }
    }
    const slugifyForm = useCallback((text) => {
        if (text && typeof text === 'string'){
            return text.trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-")
        }
        return ""
    }, [])
    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name == 'title') {
                setValue('slug', slugifyForm(value.title))
            }
        }
        )
        
        return ()=> subscription.unsubscribe()
    }, [watch, setValue, slugifyForm,post])
    return (
        <>
    <div className="w-2/3 px-2">
         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
             <Input
                type='text'
                label='title of the Posts'
                placeholder='title'
                {...register('title', {
                    required: true
                })}
            />
            
            <Input
                type='text'
                label='slug'
                placeholder='slug'
                {...register('slug', {
                    required: true,

                })}
                onInput={(e) => {
                    setValue('slug', slugifyForm(e.target.value), { shouldValidate: true })
                }}
            />
            
            <RTE
                label='content:'
                name='content'
                control={control}
                defaultValue={getValues("content")}
            />
            <div className="w-1/3 px-2">
            <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
            </div>
             {post && (
                <div className="w-full mb-4">
                    <img
                        src={service.getPreview(post.image)}
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
            </form>
            </div>
        </>

    )
}

export default PostForm