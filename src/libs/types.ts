interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
  deleteTaskFunc?: (id: string) => void;
  toggleDoneTaskFunc?: (id: string) => void;
}
export type { TaskProps };

interface FooterProps {
  year?: string;
  fullName?: string;
  studentId?: string;
}
export type { FooterProps };

interface TaskInputProps {
  addTaskFunc: (title: string)=> void;
}
export type { TaskInputProps };

// add UserCardDetailProps
interface UserCardProps{
  name:String;
  imgUrl:string;
  email:string;
  address:string;
}
export type {UserCardProps}
// add UserCardProps
interface UserCardDetailProps {
  email: string;
  address: string;
}
export type {UserCardDetailProps}
