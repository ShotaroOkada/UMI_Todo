export interface IProgressesTasks {
    [progressName:string]: string[] // ここのstringにはタスクの名前が入る
}

export interface ITasks {
    [areaName:string]: IProgressesTasks
}

export const initialState: ITasks = {
    doFirst: {
        idea: ['a', 'i', 'u', 'e', 'o'],
        planning: [],
        donePlan: [],
        doing: [],
        done: []
    },
    doLater: {
        idea: [],
        planning: [],
        donePlan: [],
        doing: [],
        done: []
    },
    delegate: {
        idea: [],
        planning: [],
        donePlan: [],
        doing: [],
        done: []
    },
    eliminate: {
        idea: [],
        planning: [],
        donePlan: [],
        doing: [],
        done: []
    }
}