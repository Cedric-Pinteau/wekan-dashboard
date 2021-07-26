export interface Email {
    address?: string;
    verified?: boolean;
}

export interface Profile {
    boardView?: string;
    listSortBy?: string;
    templatesBoardId?: string;
    cardTemplatesSwimlaneId?: string;
    listTemplatesSwimlaneId?: string;
    boardTemplatesSwimlaneId?: string;
    hiddenSystemMessages?: boolean;
    initials?: string;
    invitedBoards?: string[];
    starredBoards?: string[];
}

export interface SessionData {
}

export interface Board {
    isAdmin?: boolean;
    isActive?: boolean;
    isNoComments?: boolean;
    isCommentOnly?: boolean;
    isWorker?: boolean;
    boardId?: string;
}

export interface UserInfo {
    _id: string;
    createdAt?: Date;
    username: string;
    emails: Email[];
    isAdmin?: boolean;
    modifiedAt?: Date;
    profile?: Profile;
    authenticationMethod?: string;
    sessionData?: SessionData;
    boards?: Board[];
}