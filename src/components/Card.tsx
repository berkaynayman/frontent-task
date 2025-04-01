import { FaEdit } from 'react-icons/fa';

interface CardProps {
  title: string;
  children: React.ReactNode;
  onEdit: () => void;
}

const Card: React.FC<CardProps> = ({ title, children, onEdit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <FaEdit
          className="text-blue-500 cursor-pointer hover:text-blue-700"
          onClick={onEdit}
        />
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Card;
