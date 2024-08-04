interface TaskType {
  id: string;
  title: string;
  completed: boolean;
  deleteTaskFunc?: (id: string) => void;
  toggleDoneTaskFunc?: (id: string) => void;
}
export type { TaskType };

interface FooterProps {
  year?: string;
  fullName?: string;
  studentId?: string;
}
export type { FooterProps };

interface TaskInputProps {}
export type { TaskInputProps };

// add UserCardDetailProps

// add UserCardProps
