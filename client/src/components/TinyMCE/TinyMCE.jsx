import { useRef } from "react"
import { Editor } from "@tinymce/tinymce-react"
import { useState } from "react";

const TinyMCE = () => {
    const editorRef=useRef();
    const [a,setA]=useState()
  return (
    <div>
        <Editor
         onEditorChange={(newText) => setA(newText)}
         initialValue="<p>This is the initial content of the editor.</p>"
         apiKey="t6okxmezjfhajn8bk23u3dkejv0oc9c1qhs7gmmh9qskcfdp"
       />
        <button onClick={()=>console.log(a)}>gas</button>
    </div>
  )
}

export default TinyMCE