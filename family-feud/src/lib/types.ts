export interface Question {
    text: string;
    answers: Array<Answer | null>;
}

export interface Answer {
    text: string;
    surveyCount: number;
}