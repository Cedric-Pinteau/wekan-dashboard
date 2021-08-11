import { HttpParams } from "@angular/common/http";

export interface Label {
    _id: string;
    color?: string;
    name: string;
}

export interface UserLogin {
    id: string;
    token: string;
    tokenExpires: Date;
}

export interface UserLoginInfo {
    email: string;
    password: string;

}

export interface Board {
    _id: string;
    title: string;
}

export interface Member {
    userId: string;
    isActive: boolean;
    isAdmin: boolean;
    isNoComments: boolean;
    isCommentOnly: boolean;
    isWorker?: boolean;
}

export interface CustomField {
    _id: string;
    value: string;
}

export interface Vote {
    question: string;
    positive: any[];
    negative: any[];
    end?: any;
    public: boolean;
    allowNonBoardMembers: boolean;
}

export interface Poker {
    question: boolean;
    one: any[];
    two: any[];
    three: any[];
    five: any[];
    eight: any[];
    thirteen: any[];
    twenty: any[];
    forty: any[];
    oneHundred: any[];
    unsure: any[];
    end?: any;
    allowNonBoardMembers: boolean;
}

export interface Card {
    _id: string;
    title: string;
    members: any[];
    labelIds: string[];
    customFields: CustomField[];
    listId: string;
    sort: number;
    swimlaneId: string;
    type: string;
    archived: boolean;
    parentId: string;
    coverId: string;
    createdAt: string;
    modifiedAt: string;
    dateLastActivity: string;
    description: string;
    requestedBy: string;
    assignedBy: string;
    assignees: any[];
    spentTime?: any;
    isOvertime: boolean;
    userId: string;
    subtaskSort: number;
    linkedId: string;
    vote: Vote;
    poker: Poker;
    targetId_gantt: any[];
    linkType_gantt: any[];
    linkId_gantt: any[];
    color?: string;
    startAt?: any;
    dueAt?: any;
    endAt?: any;
}

export interface WipLimit {
    value: number;
    enabled: boolean;
    soft: boolean;
}

export interface List {
    _id: string;
    archived?: boolean;
    createdAt?: string;
    title: string;
    sort?: number;
    starred?: boolean;
    swimlaneId?: string;
    updatedAt?: string;
    modifiedAt?: string;
    wipLimit?: WipLimit;
    type?: string;
    archivedAt?: string;
}

export interface Swimlane {
    _id: string;
    archived: boolean;
    createdAt: string;
    title: string;
    sort: number;
    color?: string;
    updatedAt: string;
    modifiedAt: string;
    type: string;
}

export interface Source {
    system: string;
}

export interface Activity {
    _id: string;
    userId?: string;
    activityType?: string;
    cardId?: string;
    checklistId?: string;
    checklistItemId?: string;
    checklistItemName?: string;
    listId?: string;
    swimlaneId?: string;
    createdAt?: string;
    modifiedAt?: string;
    labelId?: string;
    checklistName?: string;
    listName?: string;
    cardTitle?: string;
    swimlaneName?: string;
    type?: string;
    title?: string;
    source?: Source;
    attachmentId?: string;
    oldListId?: string;
    activityTypeId?: string;
}

export interface Settings {
}

export interface CustomField2 {
    _id: string;
    name: string;
    type: string;
    settings: Settings;
    showOnCard: boolean;
    showLabelOnMiniCard: boolean;
    automaticallyOnCard: boolean;
    alwaysOnCard: boolean;
    createdAt: string;
    modifiedAt: string;
}

export interface Attachment {
    _id: string;
    cardId: string;
    file: string;
    name: string;
    type: string;
}

export interface Rule {
    _id: string;
    title: string;
    triggerId: string;
    actionId: string;
    createdAt: string;
    modifiedAt: string;
}

export interface Checklist {
    _id: string;
    title: string;
    cardId: string;
    sort: number;
    createdAt: string;
    modifiedAt: string;
    userId?: string;
}

export interface ChecklistItem {
    _id: string;
    title: string;
    checklistId: string;
    cardId: string;
    sort: number;
    isFinished: boolean;
    createdAt: string;
    modifiedAt: string;
    userId?: string;
}

export interface Trigger {
    _id: string;
    activityType: string;
    cardTitle?: string;
    swimlaneName?: string;
    listName?: string;
    desc: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    checklistItemName?: string;
}

export interface Action {
    _id: string;
    actionType?: string;
    emailTo?: string;
    emailSubject?: string;
    emailMsg?: string;
    desc?: string;
    createdAt?: string;
    modifiedAt?: string;
    selectedColor?: string;
    checklistName?: string;
    checklistItems?: string;
}

export interface Profile {
    fullname?: string;
    initials?: string;
    avatarUrl?: string;
}

export interface User {
    _id: string;
    username: string;
    profile?: Profile;
}

export interface FullBoard {
    _format?: string;
    _id: string;
    archived?: boolean;
    color?: string;
    createdAt?: string;
    labels?: Label[];
    members?: Member[];
    presentParentTask?: string;
    modifiedAt?: string;
    permission?: string;
    slug?: string;
    title?: string;
    subtasksDefaultBoardId?: any;
    subtasksDefaultListId?: any;
    dateSettingsDefaultBoardId?: any;
    dateSettingsDefaultListId?: any;
    allowsSubtasks?: boolean;
    allowsAttachments?: boolean;
    allowsChecklists?: boolean;
    allowsComments?: boolean;
    allowsDescriptionTitle?: boolean;
    allowsDescriptionText?: boolean;
    allowsActivities?: boolean;
    allowsLabels?: boolean;
    allowsCreator?: boolean;
    allowsAssignee?: boolean;
    allowsMembers?: boolean;
    allowsRequestedBy?: boolean;
    allowsCardSortingByNumber?: boolean;
    allowsAssignedBy?: boolean;
    allowsReceivedDate?: boolean;
    allowsStartDate?: boolean;
    allowsEndDate?: boolean;
    allowsDueDate?: boolean;
    isOvertime?: boolean;
    type?: string;
    sort?: number;
    cards?: Card[];
    lists?: List[];
    swimlanes?: Swimlane[];
    activities?: Activity[];
    customFields?: CustomField2[];
    attachments?: Attachment[];
    comments?: any[];
    rules?: Rule[];
    checklists?: Checklist[];
    checklistItems?: ChecklistItem[];
    subtaskItems?: any[];
    triggers?: Trigger[];
    actions?: Action[];
    users?: User[];
}


