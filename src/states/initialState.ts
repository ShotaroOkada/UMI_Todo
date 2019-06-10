import IAllTasks from "./AllTasks";

export const initialState: IAllTasks = {
    addTask: {
        name: '',
        area: 0,
        progress: 0 
    },
    area0Tasks: [
    ],
    area1Tasks: [
    ],
    area2Tasks: [
    ],
    area3Tasks: [
    ]
}

export const initialState2: IAllTasks = {
    addTask: {
        name: '',
        area: 0,
        progress: 0 
    },
    area0Tasks: [
        {name: '研究', progress: 0, area:0},
        {name: 'ゼミ用の資料作成', progress: 0, area:0},
        {name: 'ロボコン準備', progress: 0, area:0},
        {name: 'zanmiru PoCフロントエンド実装', progress: 0, area:0},
        {name: 'FinTech Todoアプリ実装', progress: 0, area:0},
    ],
    area1Tasks: [
        {name: '瞑想の習慣化', progress: 0, area:1},
        {name: '質の高い食生活', progress: 0, area:1},
        {name: 'ブログ執筆', progress: 0, area:1},
        {name: 'オーラリング買う', progress: 0, area:1},
        {name: 'オナ禁', progress: 0, area:1},
        {name: 'エロ禁', progress: 0, area:1},        
        {name: 'ワンハンドラビット習得', progress: 0, area:1},
        {name: 'CSSの学習', progress: 0, area:1},        
        {name: 'ストレッチの習慣化', progress: 0, area:1},
        {name: '読書の習慣化', progress: 0, area:1},
        {name: 'goによるAPI実装の学習', progress: 0, area:1},
    ],
    area2Tasks: [
        {name: '大場先生課題', progress: 0, area:2},
        {name: 'すうぃふとTA勤務表提出', progress: 0, area:2},
        {name: 'デザイン通論eラーニング', progress: 0, area:2},
        {name: '環境学特論課題', progress: 0, area:2},
        {name: '鱈とキノコ買ってくる', progress: 0, area:2},
    ],
    area3Tasks: [
        {name: 'ジムのお姉さんに話しかける', progress: 0, area:3},
        {name: 'ジムの後輩ちゃんとお話しする', progress: 0, area:3},
        {name: '好きな女の子とお話しする', progress: 0, area:3},
        {name: '可愛い女の子の動画を見る', progress: 0, area:3},
        {name: 'ぷよぷよ観戦', progress: 0, area:3},
        {name: 'シャドバプロリーグ観戦', progress: 0, area:3},
        {name: '自転車修理', progress: 0, area:3},
    ]
}

export const initialState3: IAllTasks = {
    addTask: {
        name: '',
        area: 0,
        progress: 0 
    },
    area0Tasks: [
        {name: '研究', progress: 1, area:0},
        {name: 'ゼミ用の資料作成', progress: 0, area:0},
        {name: 'ロボコン準備', progress: 0, area:0},
        {name: 'zanmiru PoCフロントエンド実装', progress: 4, area:0},
        {name: 'FinTech Todoアプリ実装', progress: 4, area:0},
    ],
    area1Tasks: [
        {name: '瞑想の習慣化', progress: 4, area:1},
        {name: '質の高い食生活', progress: 3, area:1},
        {name: 'ブログ執筆', progress: 2, area:1},
        {name: 'オーラリング買う', progress: 1, area:1},
        {name: 'オナ禁', progress: 3, area:1},
        {name: 'エロ禁', progress: 3, area:1},        
        {name: 'ワンハンドラビット習得', progress: 3, area:1},
        {name: 'CSSの学習', progress: 3, area:1},        
        {name: 'ストレッチの習慣化', progress: 3, area:1},
        {name: '読書の習慣化', progress: 4, area:1},
        {name: 'goによるAPI実装の学習', progress: 0, area:1},
    ],
    area2Tasks: [
        {name: '大場先生課題', progress: 4, area:2},
        {name: 'すうぃふとTA勤務表提出', progress: 3, area:2},
        {name: 'デザイン通論eラーニング', progress: 4, area:2},
        {name: '環境学特論課題', progress: 4, area:2},
        {name: '鱈とキノコ買ってくる', progress: 0, area:2},
    ],
    area3Tasks: [
        {name: 'ジムのお姉さんに話しかける', progress: 1, area:3},
        {name: 'ジムの後輩ちゃんとお話しする', progress: 3, area:3},
        {name: '好きな女の子とお話しする', progress: 1, area:3},
        {name: '可愛い女の子の動画を見る', progress: 3, area:3},
        {name: 'ぷよぷよ観戦', progress: 3, area:3},
        {name: 'シャドバプロリーグ観戦', progress: 3, area:3},
        {name: '自転車修理', progress: 0, area:3},
    ]
}