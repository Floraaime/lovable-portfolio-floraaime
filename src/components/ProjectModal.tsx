import React from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
  images: string[];
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ images, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-lg p-4 md:p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>
        <div className="space-y-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project image ${index + 1}`}
              className="w-full h-auto object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 