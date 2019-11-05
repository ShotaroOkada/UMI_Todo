export interface ITasks {
    [areaName:string]: {
        [progressName:string]: string[] // ここのstringにはタスクの名前が入る
    }
}
