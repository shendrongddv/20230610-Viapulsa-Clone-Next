import { Star } from "lucide-react";
import Image from "next/image";

interface CommentCardProps {
  id: number;
  name: string;
  gender: string;
  body: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  id,
  name,
  gender,
  body,
}) => {
  return (
    <div className="h-full w-full divide-y rounded-lg p-4">
      <div className="flex gap-4">
        <Image
          src={`https://randomuser.me/api/portraits/thumb/${gender}/${id}.jpg`}
          alt={name}
          width={50}
          height={50}
          className="aspect-square h-10 w-10 rounded-full object-cover shadow"
        />
        <div className="flex flex-col">
          <span className="font-display font-semibold text-primary-foreground">
            {name}
          </span>
          <div className="flex gap-0.5">
            <Star className="h-4 w-4 text-yellow-500" />
            <Star className="h-4 w-4 text-yellow-500" />
            <Star className="h-4 w-4 text-yellow-500" />
            <Star className="h-4 w-4 text-yellow-500" />
            <Star className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
      </div>
      <p className="mt-4 pt-4">{body}</p>
    </div>
  );
};

export default CommentCard;
