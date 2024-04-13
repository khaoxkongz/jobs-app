import { CardProps } from '../interfaces/component';

const Card = ({ children, bg = 'bg-gray-100' }: CardProps) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Card;
