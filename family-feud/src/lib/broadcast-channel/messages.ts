import type { Question } from "$lib/types";

export enum MessageType {
    NEW_QUESTION,
    REVEAL_ANSWER,
    HIDE_ANSWER,
    WRONG_ANSWER,
    REFRESH_POINTS
}

export interface NewQuestionMessage {
    type: MessageType.NEW_QUESTION,
    question: Question
}

export interface RevealAnswerMessage {
    type: MessageType.REVEAL_ANSWER,
    answerRank: number;
}

export interface HideAnswerMessage {
    type: MessageType.HIDE_ANSWER,
    answerRank: number;
}

export interface WrongAnswerMessage {
    type: MessageType.WRONG_ANSWER,
}

export interface RefreshPointsMessage {
    type: MessageType.REFRESH_POINTS,
    team1Points: number;
    team2Points: number;
    boardPoints: number;
}

export type Message = NewQuestionMessage | RevealAnswerMessage | HideAnswerMessage | WrongAnswerMessage | RefreshPointsMessage;