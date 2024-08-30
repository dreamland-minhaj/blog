import { useState } from "react";

const Blog=()=>{
    const [blog,setBlog] = useState([]);
    const [heading , setHeading] = useState("");
    const [inputImg , setInputImg] = useState("");
    const [textArea , setTextArea] = useState("");
    
    const handleHeadingInput = (e) => {
        setHeading(e.target.value);

    }
    const handleInputImg = (e) => {
        setInputImg(e.target.value);
    }
    const handleTextArea = (e) => {
        setTextArea(e.target.value);
    }
    const handlePostCreateBtn = () => {
        if(heading !== "" || inputImg !== "" || textArea !== ""){
            setBlog((prevState)=>{
                return[{heading,inputImg,textArea},...prevState];
            });
        }else{
            alert("All Fields are required");
        }
        
        setHeading("");
        setInputImg("");
        setTextArea("");
    };

    return(
        <>
         <div className="w-96 text-left bg-slate-50 p-5 rounded-lg shadow-lg">
            <input onChange={handleHeadingInput} value={heading} type="text" placeholder="Enter Post Heading" className="border-2 p-2 rounded-md border-gray-900 w-40 mr-1" />
            
            <input onChange={handleInputImg} value={inputImg} type="text" placeholder="Enter post image link" className="border-2 p-2 rounded-md border-gray-900 w-44" /> <br />

            <textarea onChange={handleTextArea} value={textArea} placeholder="Write Post Description...." className="mt-2 border-2 border-gray-900 p-2 rounded-md w-full"></textarea>
            <button onClick={handlePostCreateBtn} className="bg-blue-700 px-5 py-2 text-white rounded-md font-bold">Create</button>
        </div>

        <div className="blog-area flex">

            {blog.length> 0 ? blog.map((item,index)=>{
                return(
                <div key={index} className="w-96 text-left bg-slate-50 p-2 rounded-lg shadow-lg">
                <img className="text-center rounded-md" src={item.inputImg} alt="" />
                <h1 className="text-orange-800 py-3 font-bold text-base">{item.heading}</h1>
                <p className="text-sm">{item.textArea}</p>
            </div>
                );

            }):(
                <p className=" bg-slate-50 rounded-lg shadow-lg p-5 w-96 mt-2">No data found</p>
            ) 
        }
            

            
            
            
        </div>
        </>
    );
}
export default Blog;