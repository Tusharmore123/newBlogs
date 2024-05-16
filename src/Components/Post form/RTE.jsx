import React,{useRef} from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
function RTE({
    control,
    name,
    defaultVal="",
    label
}) {
    const editorRef = useRef(null);

  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    control={control}
    name={name||defaultVal}
    render={({field:{onChange}})=>(
        <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}

        initialValue={defaultVal}
        apiKey="jpfqe1bll3fskbr8hnse3bm6xqmis4cbsoz6oqgo2z0feom8"
        init={{
            initialValue: defaultVal,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
                
              ],
              toolbar:
              "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        
        />
    )}
    


    />
    </div>
  )
}

export default RTE