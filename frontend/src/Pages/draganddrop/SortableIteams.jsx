import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const SortableItem = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    
    cursor: "grab",
  };

  
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}  >
      {/* Custom content for each div */}
      {id === "about" && (
        <div className="bg-secondary flex flex-col md:rounded-2xl md:px-5 md:py-5  ">
          <div>
            <p>[About Us]</p>
          </div>

          <div>
            <p>
              At NIC Network and IT Consultants, we are a dynamic company with a
              passion for technology and innovation. Our goal is to empower
              businesses with cutting-edge solutions to enhance their online
              presence and streamline their IT infrastructure. With years of
              experience in the industry
            </p>
          </div>
        </div>
      )}
      {id === "services" && (
        <div className="bg-white flex flex-col md:rounded-2xl md:px-5 md:py-5  ">
          <div className="w-full">
            <p>[Our Services]</p>
          </div>

          <div className="w-full">
            <p>
                Evo Team <br />
                (Marketing Department)
              </p>
          </div>
        </div>
      )}
      {id === "video" && (
        <div class=" ">
          <div className="relative w-64 h-80 bg-blue-500 text-white flex items-center justify-center p-6 shadow-lg">
            {/* Inverted Corner Circles */}
            <div className="absolute top-0 left-0 w-10 h-10 bg-white rounded-br-full"></div>
            <div className="absolute top-0 right-0 w-10 h-10 bg-white rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 bg-white rounded-tr-full"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-tl-full"></div>

            {/* Card Content */}
            <h2 className="text-lg font-semibold text-center">Inverted Card</h2>
          </div>
        </div>
      )}
    </div>
  );
};
