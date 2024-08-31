import { useState } from "react";

const Blog=()=>{
    const [blog,setBlog] = useState([]);
    const [heading , setHeading] = useState("");
    const [inputImg , setInputImg] = useState("");
    const [textArea , setTextArea] = useState("");
    const [catBan , setCatBan] = useState("");
    
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

    const handleCatBangladesh = ()=>{
        setCatBan();
    }


    return(
        <>
        <div className="inputArea flex">  

            <div className="w-96 text-left bg-slate-50 p-5 rounded-lg shadow-lg m-2">
                <input onChange={handleHeadingInput} value={heading} type="text" placeholder="Enter Post Heading" className="border-2 p-2 rounded-md border-gray-900 w-40 mr-1" />
                
                <input onChange={handleInputImg} value={inputImg} type="text" placeholder="Enter post image link" className="border-2 p-2 rounded-md border-gray-900 w-44" /> <br />

                <textarea onChange={handleTextArea} value={textArea} placeholder="Write Post Description...." className="mt-2 border-2 border-gray-900 p-2 rounded-md w-full"></textarea>
                <select className="border-2 p-2 rounded-md border-gray-900 mr-2">
                    <option>Select Category</option>
                    <option onChange={handleCatBangladesh} value="Bangladesh">বাংলাদেশ</option>
                    <option value="International">আন্তর্জাতিক</option>
                </select>
                <button onClick={handlePostCreateBtn} className="bg-blue-700 px-5 py-2 text-white rounded-md font-bold">Create</button>
            </div>
            <div className="w-96 text-left bg-slate-50 p-5 rounded-lg shadow-lg m-2">
                <button className="bg-red-700 px-2 py-1 text-white rounded-md text-xs">বাংলাদেশ</button>
                <div className="m-2">
                    <div className="blog-item flex mt-2">
                        <img className="w-20 h-16 rounded-md" src="https://images.prothomalo.com/prothomalo-bangla%2F2024-08-31%2Fbiy2egt8%2Fispr.jpg?rect=0%2C0%2C1620%2C1080&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0" alt="" />
                        <h2 className="text-sm mx-2 my-1">বন্যা মোকাবিলায় সশস্ত্র বাহিনীর ক্যাম্প বাড়ানো হয়েছে
                        </h2>
                    </div>
                    <div className="blog-item flex mt-2">
                        <img className="w-20 h-16 rounded-md" src="https://images.prothomalo.com/prothomalo-bangla%2F2024-08-31%2Fljxmb2tp%2F%E0%A7%A6%E0%A7%A6%E0%A7%A9.jpeg?rect=1070%2C0%2C2474%2C1649&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0" alt="" />
                        <h2 className="text-sm mx-2 my-1">একনায়কতন্ত্র চলেছে সংবিধানের আড়ালে
                        </h2>
                    </div>
                </div>
            </div>

            <div className="w-96 text-left bg-slate-50 p-5 rounded-lg shadow-lg m-2">
                <button className="bg-lime-700 px-2 py-1 text-white rounded-md text-xs">আন্তর্জাতিক</button>
                <div className="m-2">
                    <div className="blog-item flex mt-2">
                        <img className="w-20 h-16 rounded-md" src="https://images.prothomalo.com/prothomalo-bangla%2F2024-08-31%2Fjwlpyq88%2F1-1-2024-08-30T101006Z_1778691814_RC29Q9A4DZSR_RTRMADP_3_ISRAEL-PALESTINIANS.JPG?rect=0%2C0%2C880%2C587&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0" alt="" />
                        <h2 className="text-sm mx-2 my-1">‘বাড়ি ফিরে দেখি ঘরই নেই’</h2>
                    </div>
                    <div className="blog-item flex mt-2">
                        <img className="w-20 h-16 rounded-md" src="https://images.prothomalo.com/prothomalo-bangla%2F2021-11%2F9f32646a-f734-4a67-95e6-c369327491a6%2Fus.jfif?rect=0%2C0%2C779%2C519&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0" alt="" />
                        <h2 className="text-sm mx-2 my-1">তরুণদের মন জিতেছেন কমলা</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="blog-area flex">
            
            {blog.length> 0 ? blog.map((item,index)=>{
                return(
                <div key={index} className="w-96 text-left bg-slate-50 p-5 rounded-lg shadow-lg m-2">
                    
                <img className="text-center rounded-md" src={item.inputImg} alt="" />
                <h1 className="text-orange-800 py-3 font-bold text-base">{item.heading}</h1>
                <p className="text-sm">{item.textArea}</p>
            </div>
                );

            }):(
                <p className="w-96 text-left bg-slate-50 p-5 rounded-lg shadow-lg m-2">No data found</p>
            ) 
        }
            

            
            
            
        </div>
        </>
    );
}
export default Blog;