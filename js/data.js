const projects = [
    {
        id: 1,
        title: "AI英雄联盟解说",
        desc: "从LOL比赛视频中提取解说员声音并降噪，用火山引擎声音复刻模型训练。结合LOL官方数据，AI按解说风格生成文案并播放声音。",
        category: "tech",
        tags: ["语音复刻", "火山引擎", "LOL"],
        mediaType: "video",
        src: "AI项目/项目1：AI英雄联盟解说/演示视频.mp4",
        link: null,
        gallery: [
            { type: 'video', src: 'AI项目/项目1：AI英雄联盟解说/演示视频.mp4' }
        ]
    },
    {
        id: 2,
        title: "AI颜值打分",
        desc: "视觉模型从脸型、三庭五眼、五官、面部立体感、肤色、发型、气质7个方面分析照片并打分，生成歌词式评价，随机3个人设吹捧，并给出妆造、拍照建议和名人参考。",
        category: "product",
        tags: ["计算机视觉", "H5交互", "趣味应用"],
        mediaType: "image",
        src: "AI项目/项目2：AI颜值打分/展示图1.jpg",
        link: "https://hea1e2.github.io/-/",
        gallery: [
            { type: 'image', src: 'AI项目/项目2：AI颜值打分/展示图1.jpg' },
            { type: 'image', src: 'AI项目/项目2：AI颜值打分/展示图2.jpg' },
            { type: 'image', src: 'AI项目/项目2：AI颜值打分/，扫码后跳转项目链接.jpg' }
        ]
    },
    {
        id: 3,
        title: "AI社交账号分析",
        desc: "一个'略带攻击力'的社交平台性格测试。输入抖音、微博、小红书主页链接，AI分析作品内容，参考7宗罪给出2字评价，对个性、兴趣、情感、价值观进行锐评，并给出人设速写和红楼梦式判词。",
        category: "product",
        tags: ["NLP", "社交分析", "性格测试"],
        mediaType: "image",
        src: "AI项目/项目3：AI社交账号分析/展示图1.png",
        link: "https://rosebud.ai/d/bd9ba58b-1f51-43b9-a364-ee01fd0126f6",
        gallery: [
            { type: 'image', src: 'AI项目/项目3：AI社交账号分析/展示图1.png' },
            { type: 'image', src: 'AI项目/项目3：AI社交账号分析/展示图2.jpg' },
            { type: 'image', src: 'AI项目/项目3：AI社交账号分析/展示图3.jpg' },
            { type: 'image', src: 'AI项目/项目3：AI社交账号分析/展示图4.jpg' },
            { type: 'image', src: 'AI项目/项目3：AI社交账号分析/体验二维码，扫码后跳转项目.jpg' }
        ]
    },
    {
        id: 4,
        title: "模仿蔡浩宇的AI游戏",
        desc: "模仿当时很火的《Whispers from the Star》，制作了低配版救援小游戏。玩家扮演指挥官，通过聊天指挥艾拉获救。游戏中藏了5个支付宝红包口令作为彩蛋。",
        category: "product",
        tags: ["游戏设计", "AI NPC", "互动叙事"],
        mediaType: "image",
        src: "AI项目/项目4：模仿蔡浩宇的AI游戏/展示图1.jpg",
        link: "https://rosebud.ai/d/b2481fd2-a8e0-4873-b034-72e6bb4d2b65",
        gallery: [
            { type: 'image', src: 'AI项目/项目4：模仿蔡浩宇的AI游戏/展示图1.jpg' },
            { type: 'image', src: 'AI项目/项目4：模仿蔡浩宇的AI游戏/展示图2.jpg' },
            { type: 'image', src: 'AI项目/项目4：模仿蔡浩宇的AI游戏/展示图3.jpg' },
            { type: 'image', src: 'AI项目/项目4：模仿蔡浩宇的AI游戏/体验二维码.png' }
        ]
    },
    {
        id: 5,
        title: "AI突破次元合照",
        desc: "COZE搭建的一套流程，AI抠图+AI融合图片，帮助用户让自己心爱的角色进入现实世界。",
        category: "social",
        tags: ["图像融合", "Stable Diffusion", "创意摄影"],
        mediaType: "image",
        src: "AI项目/项目5：AI突破次元合照/示例1合照.jpg",
        link: null,
        gallery: [
            { type: 'image', src: 'AI项目/项目5：AI突破次元合照/项目介绍.png' },
            { type: 'image', src: 'AI项目/项目5：AI突破次元合照/示例1人物图.jpg' },
            { type: 'image', src: 'AI项目/项目5：AI突破次元合照/示例1背景图.jpg' },
            { type: 'image', src: 'AI项目/项目5：AI突破次元合照/示例1合照.jpg' },
            { type: 'image', src: 'AI项目/项目5：AI突破次元合照/示例2人物图.jpg' },
            { type: 'image', src: 'AI项目/项目5：AI突破次元合照/示例2背景图.jpg' },
            { type: 'image', src: 'AI项目/项目5：AI突破次元合照/示例2合照.jpg' },
            { type: 'image', src: 'AI项目/项目5：AI突破次元合照/示例3人物图.jpg' },
            { type: 'image', src: 'AI项目/项目5：AI突破次元合照/示例3背景图.jpg' },
            { type: 'image', src: 'AI项目/项目5：AI突破次元合照/示例3合照.jpg' }
        ]
    },
    {
        id: 6,
        title: "硬件AI小智",
        desc: "根据教程买了些硬件，组装了AI对话硬件。",
        category: "hardware",
        tags: ["硬件集成", "AI助手", "DIY"],
        mediaType: "video",
        src: "AI项目/项目6：硬件AI小智/示例视频1.mp4",
        link: null,
        gallery: [
            { type: 'video', src: 'AI项目/项目6：硬件AI小智/示例视频1.mp4' },
            { type: 'video', src: 'AI项目/项目6：硬件AI小智/示例视频2.mp4' }
        ]
    },
    {
        id: 7,
        title: "帮网友AI复活亲人",
        desc: "在抖音和B站评论区帮网友做AI复活亲人，流程：AI修复照片→ChatGPT生成文案→百度飞桨复刻声音→DID/Heygen生成对口型视频。因为是23年的AI能力，现在看起来效果已经比较一般了。图文作品发抖音后获得3.7W播放、1638点赞。",
        category: "social",
        tags: ["AI公益", "声音复刻", "DID", "人文关怀"],
        mediaType: "video",
        src: "AI项目/项目7：帮网友AI复活亲人/视频1.mp4",
        link: "https://mp.weixin.qq.com/s/hPhe0tyc0UFzk8HgyLAgmA",
        gallery: [
            { type: 'image', src: 'AI项目/项目7：帮网友AI复活亲人/展示图1.jpg' },
            { type: 'image', src: 'AI项目/项目7：帮网友AI复活亲人/展示图2.jpg' },
            { type: 'image', src: 'AI项目/项目7：帮网友AI复活亲人/展示图3.jpg' },
            { type: 'image', src: 'AI项目/项目7：帮网友AI复活亲人/展示图4.jpg' },
            { type: 'video', src: 'AI项目/项目7：帮网友AI复活亲人/视频1.mp4' },
            { type: 'video', src: 'AI项目/项目7：帮网友AI复活亲人/视频2.mp4' }
        ]
    },
    {
        id: 8,
        title: "AI复刻歌手音色",
        desc: "23年4月AI孙燕姿比较火时，跟着B站教程本地部署了so-vits-svc模型，处理了毛不易的声音，训练了AI毛不易并翻唱了一些歌。",
        category: "tech",
        tags: ["Sovits", "AI音乐", "声音克隆"],
        mediaType: "video",
        src: "AI项目/项目8：AI复刻歌手音色唱歌/展示视频1年少有为-AI毛不易.mp4",
        link: null,
        gallery: [
            { type: 'video', src: 'AI项目/项目8：AI复刻歌手音色唱歌/展示视频1年少有为-AI毛不易.mp4' },
            { type: 'video', src: 'AI项目/项目8：AI复刻歌手音色唱歌/展示视频2三个人的晚餐AI毛不易.mp4' }
        ]
    },
    {
        id: 9,
        title: "AI模仿电影《情书》",
        desc: "训练了角色面容lora后，用flux生成图片，可灵生成视频。B站获得137点赞、20投币、216收藏、32转发。",
        category: "tech",
        tags: ["Flux", "可灵", "AI视频"],
        mediaType: "video",
        src: "AI项目/项目9：AI模仿电影《情书》/情书.mp4",
        link: null,
        gallery: [
            { type: 'video', src: 'AI项目/项目9：AI模仿电影《情书》/情书.mp4' }
        ]
    }
];

const aigcVideos = [
    "1.mp4", "2.mp4", "3.mp4", "4.mp4", "5.mp4", "6.mp4", "7.mp4", "8.mp4",
    "chenxiangyu.mp4", "guyue.mp4", "jiangchen.mp4", "lingxingyao.mp4", "luxiuran.mp4",
    "mofan.mp4", "shenzhizhou.mp4", "suyi.mp4", "xialuli.mp4", "xiaoyang.mp4",
    "一叶子.mp4", "于丹青.mp4", "刺青.mp4", "夜驰.mp4", "姜小橙.mp4", "山月.mp4",
    "庄筱雨.mp4", "徐梦.mp4", "心怡.mp4", "晴阳.mp4", "李米米.mp4", "林夏.mp4",
    "林小陌.mp4", "猫猫糖.mp4", "甜米咪.mp4", "白露.mp4", "秦杉杉.mp4", "窈窕.mp4",
    "绒绒.mp4", "美琪.mp4", "苏晴雯.mp4", "苏苏.mp4", "苏锦.mp4", "苦艾.mp4"
];
