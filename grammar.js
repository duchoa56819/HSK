const HSK_GRAMMAR=[
// HSK 1
{id:1,l:1,title:"是 (shì) - Câu khẳng định \"là\"",
rule:"Chủ ngữ + 是 + Tân ngữ",
explain:"Dùng để giới thiệu, xác nhận danh tính hoặc thuộc tính.",
examples:[
{cn:"我是学生。",py:"Wǒ shì xuéshēng.",vi:"Tôi là học sinh."},
{cn:"她是老师。",py:"Tā shì lǎoshī.",vi:"Cô ấy là giáo viên."},
{cn:"这是我的书。",py:"Zhè shì wǒ de shū.",vi:"Đây là sách của tôi."}
]},
{id:2,l:1,title:"不 (bù) - Phủ định",
rule:"Chủ ngữ + 不 + Động từ/Tính từ",
explain:"Dùng để phủ định hành động hoặc trạng thái (hiện tại/tương lai). Với 是 đọc là bú.",
examples:[
{cn:"我不去。",py:"Wǒ bú qù.",vi:"Tôi không đi."},
{cn:"他不是中国人。",py:"Tā bú shì Zhōngguó rén.",vi:"Anh ấy không phải người Trung Quốc."},
{cn:"今天不冷。",py:"Jīntiān bù lěng.",vi:"Hôm nay không lạnh."}
]},
{id:3,l:1,title:"没 (méi) - Phủ định quá khứ",
rule:"Chủ ngữ + 没(有) + Động từ",
explain:"Dùng để phủ định hành động đã xảy ra hoặc phủ định 有.",
examples:[
{cn:"我没看电影。",py:"Wǒ méi kàn diànyǐng.",vi:"Tôi chưa xem phim."},
{cn:"他没有钱。",py:"Tā méiyǒu qián.",vi:"Anh ấy không có tiền."},
{cn:"昨天没下雨。",py:"Zuótiān méi xià yǔ.",vi:"Hôm qua không mưa."}
]},
{id:4,l:1,title:"吗 (ma) - Câu hỏi Yes/No",
rule:"Câu khẳng định + 吗？",
explain:"Thêm 吗 vào cuối câu khẳng định để tạo câu hỏi đúng/sai.",
examples:[
{cn:"你是老师吗？",py:"Nǐ shì lǎoshī ma?",vi:"Bạn là giáo viên phải không?"},
{cn:"你喜欢中国菜吗？",py:"Nǐ xǐhuan Zhōngguó cài ma?",vi:"Bạn thích đồ ăn Trung Quốc không?"},
{cn:"明天你去学校吗？",py:"Míngtiān nǐ qù xuéxiào ma?",vi:"Ngày mai bạn đi học không?"}
]},
{id:5,l:1,title:"的 (de) - Sở hữu",
rule:"Danh từ/Đại từ + 的 + Danh từ",
explain:"Biểu thị quan hệ sở hữu, tương đương \"của\" trong tiếng Việt.",
examples:[
{cn:"我的妈妈",py:"wǒ de māma",vi:"Mẹ của tôi"},
{cn:"这是谁的杯子？",py:"Zhè shì shéi de bēizi?",vi:"Đây là cốc của ai?"},
{cn:"中国的天气很好。",py:"Zhōngguó de tiānqì hěn hǎo.",vi:"Thời tiết Trung Quốc rất tốt."}
]},
{id:6,l:1,title:"很 (hěn) + Tính từ",
rule:"Chủ ngữ + 很 + Tính từ",
explain:"Trong câu khẳng định dùng tính từ làm vị ngữ, thường phải thêm 很 trước tính từ.",
examples:[
{cn:"她很漂亮。",py:"Tā hěn piàoliang.",vi:"Cô ấy rất đẹp."},
{cn:"今天很热。",py:"Jīntiān hěn rè.",vi:"Hôm nay rất nóng."},
{cn:"汉语很难。",py:"Hànyǔ hěn nán.",vi:"Tiếng Trung rất khó."}
]},
{id:7,l:1,title:"在 (zài) - Vị trí & Đang làm",
rule:"Chủ ngữ + 在 + Nơi chốn / Chủ ngữ + 在 + Động từ",
explain:"(1) Chỉ vị trí: ở đâu. (2) Chỉ hành động đang diễn ra.",
examples:[
{cn:"我在家。",py:"Wǒ zài jiā.",vi:"Tôi ở nhà."},
{cn:"猫在桌子上。",py:"Māo zài zhuōzi shàng.",vi:"Con mèo ở trên bàn."},
{cn:"他在看书。",py:"Tā zài kàn shū.",vi:"Anh ấy đang đọc sách."}
]},
{id:8,l:1,title:"了 (le) - Hoàn thành",
rule:"Chủ ngữ + Động từ + 了 + Tân ngữ",
explain:"Đặt sau động từ để chỉ hành động đã hoàn thành.",
examples:[
{cn:"我吃了米饭。",py:"Wǒ chī le mǐfàn.",vi:"Tôi đã ăn cơm."},
{cn:"她买了三本书。",py:"Tā mǎi le sān běn shū.",vi:"Cô ấy đã mua ba cuốn sách."},
{cn:"我们到了北京。",py:"Wǒmen dào le Běijīng.",vi:"Chúng tôi đã đến Bắc Kinh."}
]},
{id:9,l:1,title:"想 (xiǎng) - Muốn",
rule:"Chủ ngữ + 想 + Động từ",
explain:"Biểu thị mong muốn, dự định làm gì đó.",
examples:[
{cn:"我想喝茶。",py:"Wǒ xiǎng hē chá.",vi:"Tôi muốn uống trà."},
{cn:"你想去哪里？",py:"Nǐ xiǎng qù nǎlǐ?",vi:"Bạn muốn đi đâu?"},
{cn:"他想学汉语。",py:"Tā xiǎng xué Hànyǔ.",vi:"Anh ấy muốn học tiếng Trung."}
]},
{id:10,l:1,title:"也 (yě) & 都 (dōu) - Cũng & Đều",
rule:"Chủ ngữ + 也/都 + Động từ",
explain:"也 = cũng, 都 = đều/tất cả. Đặt trước động từ.",
examples:[
{cn:"我也是学生。",py:"Wǒ yě shì xuéshēng.",vi:"Tôi cũng là học sinh."},
{cn:"我们都喜欢中国菜。",py:"Wǒmen dōu xǐhuan Zhōngguó cài.",vi:"Chúng tôi đều thích đồ ăn Trung Quốc."},
{cn:"她也想去。",py:"Tā yě xiǎng qù.",vi:"Cô ấy cũng muốn đi."}
]},
{id:11,l:1,title:"能 (néng) & 会 (huì) - Có thể",
rule:"Chủ ngữ + 能/会 + Động từ",
explain:"会 = biết làm (kỹ năng đã học). 能 = có khả năng/được phép.",
examples:[
{cn:"我会说汉语。",py:"Wǒ huì shuō Hànyǔ.",vi:"Tôi biết nói tiếng Trung."},
{cn:"你能来吗？",py:"Nǐ néng lái ma?",vi:"Bạn có thể đến không?"},
{cn:"他会做饭。",py:"Tā huì zuò fàn.",vi:"Anh ấy biết nấu cơm."}
]},
{id:12,l:1,title:"量词 (Lượng từ) - Measure Words",
rule:"Số từ + 量词 + Danh từ",
explain:"Tiếng Trung bắt buộc dùng lượng từ giữa số từ và danh từ. 个 là lượng từ phổ biến nhất.",
examples:[
{cn:"一个人",py:"yí gè rén",vi:"Một người"},
{cn:"两本书",py:"liǎng běn shū",vi:"Hai cuốn sách"},
{cn:"三杯茶",py:"sān bēi chá",vi:"Ba cốc trà"}
]},
// HSK 2
{id:13,l:2,title:"比 (bǐ) - So sánh hơn",
rule:"A + 比 + B + Tính từ",
explain:"So sánh A hơn B về một tính chất nào đó.",
examples:[
{cn:"他比我高。",py:"Tā bǐ wǒ gāo.",vi:"Anh ấy cao hơn tôi."},
{cn:"今天比昨天冷。",py:"Jīntiān bǐ zuótiān lěng.",vi:"Hôm nay lạnh hơn hôm qua."},
{cn:"坐飞机比坐火车快。",py:"Zuò fēijī bǐ zuò huǒchē kuài.",vi:"Đi máy bay nhanh hơn đi tàu."}
]},
{id:14,l:2,title:"因为...所以... - Vì...nên...",
rule:"因为 + Nguyên nhân，所以 + Kết quả",
explain:"Cặp liên từ chỉ nguyên nhân - kết quả.",
examples:[
{cn:"因为下雨，所以我不去。",py:"Yīnwèi xià yǔ, suǒyǐ wǒ bú qù.",vi:"Vì trời mưa nên tôi không đi."},
{cn:"因为他生病了，所以没来上课。",py:"Yīnwèi tā shēngbìng le, suǒyǐ méi lái shàng kè.",vi:"Vì anh ấy bị bệnh nên không đến lớp."},
{cn:"因为太贵了，所以我没买。",py:"Yīnwèi tài guì le, suǒyǐ wǒ méi mǎi.",vi:"Vì quá đắt nên tôi không mua."}
]},
{id:15,l:2,title:"虽然...但是... - Mặc dù...nhưng...",
rule:"虽然 + Mệnh đề 1，但是 + Mệnh đề 2",
explain:"Cặp liên từ chỉ sự nhượng bộ, tương phản.",
examples:[
{cn:"虽然很累，但是很开心。",py:"Suīrán hěn lèi, dànshì hěn kāixīn.",vi:"Mặc dù rất mệt nhưng rất vui."},
{cn:"虽然他很年轻，但是很有经验。",py:"Suīrán tā hěn niánqīng, dànshì hěn yǒu jīngyàn.",vi:"Mặc dù anh ấy rất trẻ nhưng rất có kinh nghiệm."},
{cn:"虽然汉语很难，但是我很喜欢。",py:"Suīrán Hànyǔ hěn nán, dànshì wǒ hěn xǐhuan.",vi:"Mặc dù tiếng Trung rất khó nhưng tôi rất thích."}
]},
{id:16,l:2,title:"越来越 (yuèláiyuè) - Ngày càng",
rule:"越来越 + Tính từ/Động từ",
explain:"Biểu thị mức độ tăng dần theo thời gian.",
examples:[
{cn:"天气越来越冷了。",py:"Tiānqì yuèláiyuè lěng le.",vi:"Thời tiết ngày càng lạnh."},
{cn:"他的汉语越来越好。",py:"Tā de Hànyǔ yuèláiyuè hǎo.",vi:"Tiếng Trung của anh ấy ngày càng tốt."},
{cn:"我越来越喜欢中国。",py:"Wǒ yuèláiyuè xǐhuan Zhōngguó.",vi:"Tôi ngày càng thích Trung Quốc."}
]},
{id:17,l:2,title:"正在 (zhèngzài) - Đang",
rule:"Chủ ngữ + 正在 + Động từ + (呢)",
explain:"Nhấn mạnh hành động đang diễn ra ngay lúc nói.",
examples:[
{cn:"我正在吃饭呢。",py:"Wǒ zhèngzài chīfàn ne.",vi:"Tôi đang ăn cơm."},
{cn:"他们正在开会。",py:"Tāmen zhèngzài kāi huì.",vi:"Họ đang họp."},
{cn:"她正在写作业呢。",py:"Tā zhèngzài xiě zuòyè ne.",vi:"Cô ấy đang viết bài tập."}
]},
{id:18,l:2,title:"一边...一边... - Vừa...vừa...",
rule:"一边 + Động từ 1 + 一边 + Động từ 2",
explain:"Hai hành động diễn ra đồng thời.",
examples:[
{cn:"他一边吃饭一边看电视。",py:"Tā yìbiān chīfàn yìbiān kàn diànshì.",vi:"Anh ấy vừa ăn cơm vừa xem tivi."},
{cn:"我一边听音乐一边工作。",py:"Wǒ yìbiān tīng yīnyuè yìbiān gōngzuò.",vi:"Tôi vừa nghe nhạc vừa làm việc."},
{cn:"她一边走一边打电话。",py:"Tā yìbiān zǒu yìbiān dǎ diànhuà.",vi:"Cô ấy vừa đi vừa gọi điện."}
]},
{id:19,l:2,title:"先...然后... - Trước...sau đó...",
rule:"先 + Động từ 1，然后 + Động từ 2",
explain:"Diễn tả thứ tự trước sau của các hành động.",
examples:[
{cn:"先吃饭，然后去上课。",py:"Xiān chīfàn, ránhòu qù shàng kè.",vi:"Ăn cơm trước, sau đó đi học."},
{cn:"我先做作业，然后看电影。",py:"Wǒ xiān zuò zuòyè, ránhòu kàn diànyǐng.",vi:"Tôi làm bài tập trước, sau đó xem phim."},
{cn:"先复习，然后考试。",py:"Xiān fùxí, ránhòu kǎoshì.",vi:"Ôn tập trước, sau đó thi."}
]},
{id:20,l:2,title:"如果...就... - Nếu...thì...",
rule:"如果 + Điều kiện，就 + Kết quả",
explain:"Câu điều kiện giả định.",
examples:[
{cn:"如果明天下雨，我就不去。",py:"Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù.",vi:"Nếu ngày mai mưa thì tôi không đi."},
{cn:"如果你有时间，就来我家吧。",py:"Rúguǒ nǐ yǒu shíjiān, jiù lái wǒ jiā ba.",vi:"Nếu bạn có thời gian thì đến nhà tôi nhé."},
{cn:"如果太贵，我就不买了。",py:"Rúguǒ tài guì, wǒ jiù bú mǎi le.",vi:"Nếu quá đắt thì tôi không mua nữa."}
]},
{id:21,l:2,title:"得 (de) - Bổ ngữ trình độ",
rule:"Động từ + 得 + Tính từ",
explain:"Mô tả mức độ, cách thức thực hiện hành động.",
examples:[
{cn:"他说得很好。",py:"Tā shuō de hěn hǎo.",vi:"Anh ấy nói rất giỏi."},
{cn:"她跑得很快。",py:"Tā pǎo de hěn kuài.",vi:"Cô ấy chạy rất nhanh."},
{cn:"你写得不错。",py:"Nǐ xiě de búcuò.",vi:"Bạn viết không tệ."}
]},
{id:22,l:2,title:"过 (guo) - Kinh nghiệm",
rule:"Chủ ngữ + Động từ + 过 + Tân ngữ",
explain:"Biểu thị đã từng có kinh nghiệm làm việc gì đó.",
examples:[
{cn:"我去过中国。",py:"Wǒ qù guo Zhōngguó.",vi:"Tôi đã từng đi Trung Quốc."},
{cn:"你吃过北京烤鸭吗？",py:"Nǐ chī guo Běijīng kǎoyā ma?",vi:"Bạn đã từng ăn vịt quay Bắc Kinh chưa?"},
{cn:"我没看过这本书。",py:"Wǒ méi kàn guo zhè běn shū.",vi:"Tôi chưa từng đọc cuốn sách này."}
]},
{id:23,l:2,title:"要...了 - Sắp sửa",
rule:"要 + Động từ + 了",
explain:"Biểu thị hành động sắp xảy ra trong tương lai gần.",
examples:[
{cn:"要下雨了。",py:"Yào xià yǔ le.",vi:"Sắp mưa rồi."},
{cn:"电影要开始了。",py:"Diànyǐng yào kāishǐ le.",vi:"Phim sắp bắt đầu rồi."},
{cn:"我要回国了。",py:"Wǒ yào huí guó le.",vi:"Tôi sắp về nước rồi."}
]},
{id:24,l:2,title:"把 (bǎ) - Câu chữ 把",
rule:"Chủ ngữ + 把 + Tân ngữ + Động từ + Bổ ngữ",
explain:"Nhấn mạnh tác động của hành động lên tân ngữ, tân ngữ được đưa lên trước động từ.",
examples:[
{cn:"请把门关上。",py:"Qǐng bǎ mén guān shàng.",vi:"Xin hãy đóng cửa lại."},
{cn:"他把书放在桌子上了。",py:"Tā bǎ shū fàng zài zhuōzi shàng le.",vi:"Anh ấy đã đặt sách lên bàn."},
{cn:"我把作业做完了。",py:"Wǒ bǎ zuòyè zuò wán le.",vi:"Tôi đã làm xong bài tập."}
]}
];
