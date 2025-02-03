
import { useState } from "react";
export default function AddBlog(){

        const [title,setTitle] = useState('');
        const [content,setContent] = useState('');
    
        const handleSubmit = (e) => {
          e.preventDefault();
    
    
          
            fetch("http://localhost:8080/blogs", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: "My First Blog",
                content: "This is a test blog content.",
              }),
            })
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => console.error("Error:", error));
    
        };


    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              required
            />
            <button type="submit">Add </button>
          </form>
        </div>
    );
}