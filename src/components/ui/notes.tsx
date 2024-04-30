import { Textarea } from "./textarea";
import { Button } from "./button";
import { ReactNode } from "react";

interface NotesProp {
  closeFn(): void;
  key: string;
  children: ReactNode;
}

const Notes = ({ children, closeFn }: NotesProp) => {
  return (
    <div className="flex-center default-gap w-full">
      <Textarea className="pr-16">{children}</Textarea>
      <Button onClick={closeFn} size={"icon"} variant={"destructive"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </Button>
    </div>
  );
};

export default Notes;
