export interface IProgresses {
    [progressName:string]: string[] // ここのstringにはタスクの名前が入る
}

export interface ITasks {
    [areaName:string]: IProgresses
}
