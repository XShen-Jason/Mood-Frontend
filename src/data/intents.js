export const INTENT_DATA = {
    joy: {
        title: "有些快乐，就该这样分享",
        subtitle: "这份喜悦，你打算如何安放？",
        categoryLabel: "开心 / 喜悦",
        icon: "sentiment_very_satisfied",
        options: [
            { id: 'send_to_them', text: "发送给TA", helper: "想把这份满溢的快乐，原封不动地传递给TA" },
            { id: 'self_record', text: "记录自我", helper: "把此刻的灿烂写进日记，奖励未来的自己" },
            { id: 'celebrate', text: "庆祝 / 纪念", helper: "标记这个时刻，让它在平淡生活中闪闪发光" },
            { id: 'share', text: "分享 / 展示", helper: "整理成精美页面，在社交平台上展示给所有人" },
            { id: 'explore', text: "探索模式", helper: "不想预设意图，先去看看有哪些有趣的模板" }
        ],
        templates: [
            { id: 'celebration_fireworks', name: '花火灿烂', icon: 'celebration', desc: '绚烂烟火，点燃快乐回忆。', color: 'secondary' },
            { id: 'polaroid_wall', name: '拍立得影集', icon: 'photo_library', desc: '每一张合照都是一个心动的节点。', color: 'tertiary' },
            { id: 'breeze_diary', name: '微风手账', icon: 'menu_book', desc: '留住那天的阳光与微风。', color: 'secondary' }
        ]
    },
    love: {
        title: "最深的情感，最美的表达",
        subtitle: "你心里的那份爱，现在是什么频率？",
        categoryLabel: "爱 / 想念",
        icon: "favorite",
        options: [
            { id: 'send_to_them', text: "发送给TA", helper: "写给TA的一封信，有些话不便当面开口" },
            { id: 'self_record', text: "记录自我", helper: "记录下爱意萌动的瞬间，这是属于我的秘密" },
            { id: 'celebrate', text: "庆祝 / 纪念", helper: "属于我们的专属周年，值得最深刻的纪念" },
            { id: 'share', text: "分享 / 展示", helper: "向世界展示我们的浪漫故事" },
            { id: 'explore', text: "探索模式", helper: "寻觅更多表达爱意的新奇方式" }
        ],
        templates: [
            { id: 'starry_confession', name: '星空告白', icon: 'auto_awesome', desc: '星空下的告白，最极致浪漫。', color: 'primary' },
            { id: 'love_letter', name: '情书时代', icon: 'favorite', desc: '字字句句，皆是少年意气。', color: 'secondary' },
            { id: 'neon_heart', name: '霓虹心跳', icon: 'monitor_heart', desc: '大胆跳动的心，直白的爱意。', color: 'tertiary' }
        ]
    },
    guilt: {
        title: "所有的裂痕，都是光照进来的地方",
        subtitle: "想打破僵局，或许只需要一点点勇气。",
        categoryLabel: "愧疚 / 道歉",
        icon: "sentiment_dissatisfied",
        options: [
            { id: 'send_to_them', text: "发送给TA", helper: "通过一个安静的页面，传递没能说出的对不起" },
            { id: 'repair', text: "沟通 / 修复", helper: "希望能重申我的心意，给彼此一个和好的台阶" },
            { id: 'self_record', text: "记录自我", helper: "记录下这次反思，以免在未来再次犯错" },
            { id: 'self_heal', text: "自我疗愈", helper: "原谅那个不够完美的自己，重新出发" },
            { id: 'explore', text: "探索模式", helper: "看看有没有更温和的方式，能化解此刻的尴尬" }
        ],
        templates: [
            { id: 'rainy_apology', name: '雨夜低语', icon: 'water_drop', desc: '润物无声，诚意满分。', color: 'primary' },
            { id: 'warm_light', name: '微光倾听', icon: 'wb_incandescent', desc: '在微光中等待对方的回应。', color: 'secondary' }
        ]
    },
    sadness: {
        title: "每一段回忆，都有它的重量",
        subtitle: "有些离别，是为了更好的怀念。",
        categoryLabel: "伤感 / 回忆",
        icon: "auto_stories",
        options: [
            { id: 'send_to_them', text: "发送给TA", helper: "最后的郑重道别，或者一段未完待续的回音" },
            { id: 'self_record', text: "记录自我", helper: "珍藏那些美好的碎影，作为日后成长的慰藉" },
            { id: 'self_heal', text: "自我疗愈", helper: "释放积压的情绪，在这片空间里彻底倾诉" },
            { id: 'share', text: "分享 / 展示", helper: "祭奠一段情感，或者对往昔时光的一场致敬" },
            { id: 'explore', text: "探索模式", helper: "在慢节奏的模板中，给情绪找一个出口" }
        ],
        templates: [
            { id: 'vintage_film', name: '复古胶卷', icon: 'movie', desc: '泛黄的胶片，记录隽永的记忆。', color: 'primary' },
            { id: 'broken_glass', name: '时光拼图', icon: 'extension', desc: '拼合碎片，重现模糊的过往。', color: 'tertiary' },
            { id: 'sunset_glow', name: '落日余晖', icon: 'wb_twilight', desc: '温柔的黄昏，静谧的离场。', color: 'tertiary' }
        ]
    },
    stress: {
        title: "慢下来，给心灵一个出口",
        subtitle: "压力很大的时候，这里是你的秘密港湾。",
        categoryLabel: "压力 / 焦虑",
        icon: "nest_eco_leaf",
        options: [
            { id: 'self_heal', text: "自我疗愈", helper: "通过文字将焦虑转化为平静，找回对生活的掌控感" },
            { id: 'self_record', text: "记录自我", helper: "把烦恼都写下来，然后通通关在网页里" },
            { id: 'share', text: "分享 / 展示", helper: "输出你的压力，或许能遇到同频共鸣的人" },
            { id: 'explore', text: "探索模式", helper: "不想思考，只想随便逛逛，找点治愈的感觉" }
        ],
        templates: [
            { id: 'lofi_room', name: 'Lofi 房间', icon: 'headphones', desc: '伴随节拍，让情绪彻底放松。', color: 'secondary' },
            { id: 'minimal_white', name: '极简白纸', icon: 'check_box_outline_blank', desc: '留白，给紧绷的神经透透气。', color: 'primary' }
        ]
    },
    calm: {
        title: "于平淡中，发现温暖的力量",
        subtitle: "心境平和的时候，你想记录些什么？",
        categoryLabel: "平静 / 感谢",
        icon: "spa",
        options: [
            { id: 'send_to_them', text: "发送给TA", helper: "向曾经给予过帮助的TA，道一声久违的感谢" },
            { id: 'self_record', text: "记录自我", helper: "记下那些微小的美好，它们构成了生活的底色" },
            { id: 'celebrate', text: "庆祝 / 纪念", helper: "简单而神圣地纪念此刻的内心平和" },
            { id: 'share', text: "分享 / 展示", helper: "分享一种宁静的生活态度，传递正向能量" },
            { id: 'explore', text: "探索模式", helper: "看看还有哪些极简风格，能衬托当下的心境" }
        ],
        templates: [
            { id: 'constellation_map', name: '星轨连线', icon: 'share', desc: '每一颗星，代表一个感恩的瞬间。', color: 'tertiary' },
            { id: 'minimal_white', name: '极简白纸', icon: 'check_box_outline_blank', desc: '平和的心境，简单的表达。', color: 'primary' }
        ]
    },
    neutral: {
        title: "开始一段，未定义的旅程",
        subtitle: "不确定要去向何方？让我们先看看风景。",
        categoryLabel: "探索 / 空白",
        icon: "explore",
        options: [
            { id: 'explore', text: "探索模式", helper: "直接前往模板大厅，挑选你第一眼心动的风格" }
        ],
        templates: []
    }
};

