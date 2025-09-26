import Image from "next/image";

enum Importance {
    Important,
    Common
}

enum Difficulty {
    Easy,
    Normal,
    Hard,
    VeryHard
}

export interface Task {
    id: string;
    name: string;
    importance: Importance;
    subtasks: Task[];
    difficulty: Difficulty;
    endDate: Date;
}
