export interface IProgressesTasks {
    [progressName:string]: string[] // ここのstringにはタスクの名前が入る
}

export interface ITasks {
    [areaName:string]: IProgressesTasks
}
