export const writingTask2Topics = [
  {
    id: 1,
    title: "Technology & Society",
    titleVi: "Công nghệ & Xã hội",
    type: "Opinion (Agree/Disagree)",
    typeVi: "Quan điểm (Đồng ý/Không đồng ý)",
    prompt: "Technology has made our lives more convenient but has also made us more isolated from one another. To what extent do you agree or disagree with this statement?",
    promptVi: "Công nghệ đã làm cho cuộc sống của chúng ta tiện lợi hơn nhưng cũng khiến chúng ta cô lập nhau hơn. Bạn đồng ý hay không đồng ý với nhận định này ở mức độ nào?",
    template: "Partially agree",
    essay: {
      introduction: {
        en: "In the digital age, technology has undeniably transformed every facet of human existence, offering unprecedented convenience while simultaneously raising concerns about social connectivity. While I acknowledge that technology can foster isolation in some contexts, I believe this view is an oversimplification, as digital tools also serve as powerful bridges that connect people across vast distances.",
        vi: "Trong thời đại kỹ thuật số, công nghệ không thể phủ nhận đã biến đổi mọi khía cạnh của sự tồn tại con người, mang lại sự tiện lợi chưa từng có trong khi đồng thời làm dấy lên mối lo ngại về kết nối xã hội. Mặc dù tôi thừa nhận rằng công nghệ có thể thúc đẩy sự cô lập trong một số bối cảnh, nhưng tôi tin rằng quan điểm này là sự đơn giản hóa quá mức, vì các công cụ kỹ thuật số cũng là những cầu nối mạnh mẽ kết nối mọi người trên những khoảng cách xa."
      },
      body1: {
        en: "On the one hand, there is compelling evidence that excessive technology use erodes face-to-face social bonds. The proliferation of smartphones has transformed social gatherings into occasions where individuals sit together yet remain absorbed in their own screens, a phenomenon sociologists call 'phubbing.' Moreover, social media platforms, despite their name, have been shown to generate feelings of loneliness and inadequacy through constant exposure to curated, idealized portrayals of others' lives. Studies conducted by the American Psychological Association indicate a strong correlation between heavy social media use and increased rates of depression and social anxiety, particularly among adolescents.",
        vi: "Một mặt, có bằng chứng thuyết phục rằng việc sử dụng công nghệ quá mức làm xói mòn các mối quan hệ xã hội trực tiếp. Sự phổ biến của điện thoại thông minh đã biến các cuộc tụ họp xã hội thành những dịp mà mọi người ngồi cùng nhau nhưng vẫn chìm đắm trong màn hình của họ, một hiện tượng mà các nhà xã hội học gọi là 'phubbing'. Hơn nữa, các nền tảng mạng xã hội, dù có tên như vậy, đã được chứng minh là tạo ra cảm giác cô đơn và thiếu tự tin thông qua việc tiếp xúc liên tục với những hình ảnh cuộc sống lý tưởng hóa, được dàn dựng của người khác."
      },
      body2: {
        en: "On the other hand, technology has demonstrably strengthened human connections across geographical and cultural boundaries. Video calling platforms such as Zoom and FaceTime enable families separated by continents to maintain intimate daily contact that would have been impossible a generation ago. Furthermore, online communities provide vital social lifelines for individuals who might otherwise be profoundly isolated, including those with disabilities, social anxiety, or who live in remote areas. The COVID-19 pandemic powerfully illustrated this point: technology enabled billions of people to sustain meaningful relationships, work collaboratively, and access healthcare during a period of unprecedented physical isolation.",
        vi: "Mặt khác, công nghệ đã chứng minh được rằng nó tăng cường các kết nối con người vượt qua ranh giới địa lý và văn hóa. Các nền tảng gọi video như Zoom và FaceTime cho phép các gia đình bị chia cắt bởi lục địa duy trì liên lạc hàng ngày thân thiết, điều mà một thế hệ trước đây là không thể. Hơn nữa, các cộng đồng trực tuyến cung cấp những phao cứu sinh xã hội quan trọng cho những người có thể bị cô lập sâu sắc, bao gồm những người khuyết tật, lo lắng xã hội, hoặc sống ở vùng xa xôi."
      },
      conclusion: {
        en: "In conclusion, while technology undoubtedly presents risks of social isolation when misused or overused, it would be erroneous to characterize it as inherently isolating. The critical factor lies not in the technology itself but in how consciously and intentionally we choose to employ it. With mindful usage, technology can and does serve as a powerful vehicle for human connection rather than a barrier to it.",
        vi: "Tóm lại, mặc dù công nghệ chắc chắn đặt ra rủi ro cô lập xã hội khi bị sử dụng sai mục đích hoặc quá mức, nhưng sẽ là sai lầm khi mô tả nó là vốn dĩ cô lập. Yếu tố quan trọng không nằm ở bản thân công nghệ mà là ở cách chúng ta lựa chọn sử dụng nó một cách có ý thức và có chủ đích."
      }
    },
    vocabulary: [
      { word: "proliferation", meaning: "sự lan rộng, phổ biến" },
      { word: "erode", meaning: "xói mòn, làm suy yếu dần" },
      { word: "curated", meaning: "được chọn lọc, dàn dựng cẩn thận" },
      { word: "correlation", meaning: "sự tương quan" },
      { word: "unprecedented", meaning: "chưa từng có tiền lệ" },
    ],
    structures: [
      "On the one hand, ... On the other hand, ...",
      "While I acknowledge that ..., I believe ...",
      "There is compelling evidence that ...",
      "Studies indicate a strong correlation between X and Y",
      "It would be erroneous to characterize X as ...",
    ]
  },
  {
    id: 2,
    title: "Education: Online vs Traditional",
    titleVi: "Giáo dục: Trực tuyến vs Truyền thống",
    type: "Discussion (Both Views + Opinion)",
    typeVi: "Thảo luận (Hai quan điểm + Ý kiến cá nhân)",
    prompt: "Some people believe that online education is just as effective as traditional face-to-face learning, while others argue that classroom-based instruction is superior. Discuss both views and give your own opinion.",
    promptVi: "Một số người cho rằng giáo dục trực tuyến hiệu quả không kém gì học trực tiếp truyền thống, trong khi những người khác lập luận rằng học tập tại lớp vẫn vượt trội hơn. Thảo luận cả hai quan điểm và đưa ra ý kiến của bạn.",
    template: "Discussion + Opinion",
    essay: {
      introduction: {
        en: "The rapid expansion of digital technology has prompted a fundamental debate in education: whether online learning can effectively replace the traditional classroom experience. Proponents of each model present persuasive arguments, and this essay will examine both perspectives before concluding that a hybrid approach represents the most effective path forward.",
        vi: "Sự mở rộng nhanh chóng của công nghệ kỹ thuật số đã thúc đẩy một cuộc tranh luận cơ bản trong giáo dục: liệu học trực tuyến có thể thay thế hiệu quả trải nghiệm lớp học truyền thống hay không. Những người ủng hộ mỗi mô hình đều đưa ra những lập luận thuyết phục, và bài luận này sẽ xem xét cả hai quan điểm trước khi kết luận rằng cách tiếp cận kết hợp là con đường hiệu quả nhất."
      },
      body1: {
        en: "Those who advocate for online education highlight its remarkable accessibility and flexibility. Students from remote areas or developing nations can access world-class courses that would otherwise be geographically or financially out of reach. Furthermore, the self-paced nature of online learning accommodates diverse learning styles and personal schedules, allowing working professionals to pursue education without sacrificing their careers. Platforms like Coursera and edX have demonstrated that rigorous academic content can be delivered digitally with measurable outcomes.",
        vi: "Những người ủng hộ giáo dục trực tuyến nhấn mạnh khả năng tiếp cận và linh hoạt đáng kể của nó. Học sinh từ các vùng xa xôi hoặc các nước đang phát triển có thể tiếp cận các khóa học đẳng cấp thế giới mà nếu không sẽ nằm ngoài tầm với về mặt địa lý hoặc tài chính. Hơn nữa, tính năng tự học theo tốc độ của học trực tuyến phù hợp với các phong cách học tập và lịch trình cá nhân đa dạng."
      },
      body2: {
        en: "Conversely, advocates of traditional education emphasize the irreplaceable value of direct human interaction. The classroom environment fosters collaborative skills, critical debate, and social development that are difficult to replicate online. Teachers can instantly gauge student comprehension, adjust their pace accordingly, and provide the mentorship and motivation that profoundly influence academic outcomes. Research consistently shows that students in traditional settings demonstrate stronger retention rates and interpersonal skills compared to those in purely online environments.",
        vi: "Ngược lại, những người ủng hộ giáo dục truyền thống nhấn mạnh giá trị không thể thay thế của sự tương tác trực tiếp giữa con người. Môi trường lớp học nuôi dưỡng kỹ năng hợp tác, tranh luận phê phán và phát triển xã hội mà khó có thể tái tạo trực tuyến. Giáo viên có thể ngay lập tức đánh giá mức độ hiểu bài của học sinh, điều chỉnh tốc độ dạy phù hợp và cung cấp sự hướng dẫn và động lực có ảnh hưởng sâu sắc đến kết quả học tập."
      },
      conclusion: {
        en: "In my view, rather than treating these as mutually exclusive options, educational institutions should embrace a blended model that harnesses the flexibility of online learning while preserving the irreplaceable human dimensions of traditional education. The most effective 21st-century education will be one that strategically combines both approaches to serve diverse learner needs.",
        vi: "Theo quan điểm của tôi, thay vì coi đây là những lựa chọn loại trừ lẫn nhau, các cơ sở giáo dục nên áp dụng mô hình kết hợp khai thác sự linh hoạt của học trực tuyến trong khi vẫn bảo tồn các chiều cạnh con người không thể thay thế của giáo dục truyền thống."
      }
    },
    vocabulary: [
      { word: "blended learning", meaning: "học kết hợp (online + offline)" },
      { word: "self-paced", meaning: "tự học theo tốc độ cá nhân" },
      { word: "retention rate", meaning: "tỷ lệ ghi nhớ/giữ lại kiến thức" },
      { word: "gauge", meaning: "đánh giá, đo lường" },
      { word: "harness", meaning: "khai thác, tận dụng" },
    ],
    structures: [
      "Those who advocate for X highlight ...",
      "Conversely, advocates of Y emphasize ...",
      "Research consistently shows that ...",
      "Rather than treating these as mutually exclusive, ...",
      "In my view, ... should embrace ...",
    ]
  },
  {
    id: 3,
    title: "Environment & Climate Change",
    titleVi: "Môi trường & Biến đổi khí hậu",
    type: "Problem & Solution",
    typeVi: "Vấn đề & Giải pháp",
    prompt: "Climate change is one of the most serious threats facing humanity today. What are the main causes of climate change and what measures can individuals and governments take to address this problem?",
    promptVi: "Biến đổi khí hậu là một trong những mối đe dọa nghiêm trọng nhất mà nhân loại đang phải đối mặt ngày nay. Nguyên nhân chính của biến đổi khí hậu là gì và các cá nhân và chính phủ có thể thực hiện những biện pháp nào để giải quyết vấn đề này?",
    template: "Problem-Solution",
    essay: {
      introduction: {
        en: "Climate change represents arguably the most pressing existential challenge of the 21st century, threatening ecosystems, economies, and human civilisation on an unprecedented scale. This essay will examine the principal drivers of this crisis before proposing concrete measures at both the individual and governmental levels that could meaningfully mitigate its impact.",
        vi: "Biến đổi khí hậu đại diện cho thách thức tồn tại cấp bách nhất của thế kỷ 21, đe dọa các hệ sinh thái, nền kinh tế và nền văn minh nhân loại ở quy mô chưa từng có. Bài luận này sẽ xem xét các nguyên nhân chính của cuộc khủng hoảng này trước khi đề xuất các biện pháp cụ thể ở cả cấp độ cá nhân và chính phủ có thể giảm thiểu tác động của nó một cách có ý nghĩa."
      },
      body1: {
        en: "The primary cause of contemporary climate change is the anthropogenic release of greenhouse gases, most notably carbon dioxide and methane. The combustion of fossil fuels for energy production, transportation, and industrial manufacturing accounts for approximately 75% of global greenhouse gas emissions. Deforestation compounds this problem significantly: forests that once absorbed atmospheric carbon are cleared at alarming rates to satisfy growing demands for agricultural land and timber. Additionally, intensive livestock farming releases substantial quantities of methane, a greenhouse gas with a warming potential roughly 25 times greater than carbon dioxide over a century.",
        vi: "Nguyên nhân chính của biến đổi khí hậu hiện đại là sự phát thải khí nhà kính do con người gây ra, đáng chú ý nhất là carbon dioxide và metan. Việc đốt nhiên liệu hóa thạch để sản xuất năng lượng, vận tải và sản xuất công nghiệp chiếm khoảng 75% lượng khí thải nhà kính toàn cầu. Nạn phá rừng làm phức tạp thêm vấn đề này đáng kể: những khu rừng từng hấp thụ carbon khí quyển bị phá bỏ ở mức độ đáng báo động."
      },
      body2: {
        en: "Addressing climate change requires coordinated action across multiple levels. Individuals can make meaningful contributions by transitioning to plant-based diets, reducing air travel, and choosing renewable energy providers. Critically, however, systemic solutions require decisive government intervention. Policymakers should implement robust carbon pricing mechanisms that internalise the environmental costs of fossil fuel use, incentivising businesses to innovate sustainable alternatives. Substantial investment in renewable energy infrastructure—particularly wind, solar, and green hydrogen—is essential to facilitating a just transition away from fossil fuels without disproportionately burdening lower-income communities.",
        vi: "Giải quyết biến đổi khí hậu đòi hỏi hành động phối hợp trên nhiều cấp độ. Các cá nhân có thể đóng góp có ý nghĩa bằng cách chuyển sang chế độ ăn có nguồn gốc thực vật, giảm đi máy bay và chọn các nhà cung cấp năng lượng tái tạo. Tuy nhiên, quan trọng hơn, các giải pháp mang tính hệ thống đòi hỏi sự can thiệp quyết đoán của chính phủ thông qua cơ chế định giá carbon mạnh mẽ."
      },
      conclusion: {
        en: "In conclusion, climate change is fundamentally a consequence of unsustainable human activity, primarily the burning of fossil fuels and deforestation. Reversing this trajectory demands both individual behavioural change and ambitious, coordinated governmental policy. While the challenge is formidable, history demonstrates that humanity is capable of extraordinary collective action when the will exists.",
        vi: "Tóm lại, biến đổi khí hậu về cơ bản là hệ quả của các hoạt động con người không bền vững, chủ yếu là đốt nhiên liệu hóa thạch và phá rừng. Đảo ngược quỹ đạo này đòi hỏi cả sự thay đổi hành vi cá nhân lẫn chính sách chính phủ phối hợp tham vọng."
      }
    },
    vocabulary: [
      { word: "anthropogenic", meaning: "do con người gây ra" },
      { word: "greenhouse gases", meaning: "khí nhà kính" },
      { word: "carbon pricing", meaning: "định giá carbon" },
      { word: "just transition", meaning: "quá trình chuyển đổi công bằng" },
      { word: "internalise costs", meaning: "nội hoá chi phí ngoại tác" },
    ],
    structures: [
      "X represents arguably the most pressing challenge of ...",
      "The primary cause of X is the Y, most notably ...",
      "X accounts for approximately Y% of ...",
      "Addressing X requires coordinated action across ...",
      "History demonstrates that humanity is capable of ...",
    ]
  },
  {
    id: 4,
    title: "Work-Life Balance & Health",
    titleVi: "Cân bằng Công việc-Cuộc sống & Sức khỏe",
    type: "Opinion (Agree/Disagree)",
    typeVi: "Quan điểm (Đồng ý/Không đồng ý)",
    prompt: "In many countries, people are working longer hours than ever before. Some believe this is necessary for economic success, while others argue it has serious negative consequences for individuals and society. Discuss and give your opinion.",
    promptVi: "Ở nhiều quốc gia, người ta đang làm việc nhiều giờ hơn bao giờ hết. Một số người cho rằng điều này là cần thiết cho thành công kinh tế, trong khi những người khác lập luận rằng nó có những hậu quả tiêu cực nghiêm trọng đối với cá nhân và xã hội. Thảo luận và đưa ra ý kiến của bạn.",
    template: "Discussion + Opinion",
    essay: {
      introduction: {
        en: "The modern workplace, driven by globalisation and relentless technological connectivity, has blurred the boundaries between professional and personal life, leading many to work longer hours than previous generations. While proponents argue that extended working hours fuel economic productivity, I contend that this trend inflicts serious harm on individual well-being and social cohesion, ultimately undermining the very productivity it purports to enhance.",
        vi: "Nơi làm việc hiện đại, được thúc đẩy bởi toàn cầu hóa và kết nối công nghệ không ngừng, đã làm mờ ranh giới giữa cuộc sống nghề nghiệp và cá nhân, khiến nhiều người làm việc nhiều giờ hơn các thế hệ trước. Mặc dù những người ủng hộ lập luận rằng giờ làm việc kéo dài thúc đẩy năng suất kinh tế, tôi cho rằng xu hướng này gây hại nghiêm trọng cho sức khỏe cá nhân và sự gắn kết xã hội."
      },
      body1: {
        en: "The economic argument for long working hours rests on the assumption that more hours equate to greater output. In competitive industries such as finance, law, and technology, organisations often expect employees to work 60-80 hours weekly, viewing this as a prerequisite for career advancement and organisational success. Proponents argue that longer hours allow companies to meet deadlines, outperform competitors, and drive the innovation that ultimately generates wealth and employment opportunities.",
        vi: "Lập luận kinh tế cho giờ làm việc dài dựa trên giả định rằng nhiều giờ hơn đồng nghĩa với sản lượng lớn hơn. Trong các ngành cạnh tranh như tài chính, luật và công nghệ, các tổ chức thường kỳ vọng nhân viên làm việc 60-80 giờ mỗi tuần, coi đây là điều kiện tiên quyết cho sự thăng tiến nghề nghiệp và thành công của tổ chức."
      },
      body2: {
        en: "However, extensive research reveals that chronic overwork is profoundly counterproductive. Beyond a threshold of approximately 50 hours per week, cognitive performance, creativity, and decision-making capacity decline sharply, resulting in diminishing returns despite additional hours invested. More significantly, overwork generates a public health crisis: elevated rates of cardiovascular disease, mental health disorders, and burnout impose enormous costs on healthcare systems and reduce long-term workforce productivity. Countries with shorter working cultures, such as Denmark and the Netherlands, consistently rank among the world's most productive and innovative economies.",
        vi: "Tuy nhiên, nghiên cứu rộng rãi cho thấy làm việc quá sức mãn tính là phản tác dụng sâu sắc. Vượt qua ngưỡng khoảng 50 giờ mỗi tuần, hiệu suất nhận thức, sáng tạo và khả năng ra quyết định giảm mạnh. Nghiêm trọng hơn, làm việc quá sức tạo ra một cuộc khủng hoảng sức khỏe cộng đồng với tỷ lệ bệnh tim mạch, rối loạn sức khỏe tâm thần và kiệt sức cao hơn."
      },
      conclusion: {
        en: "In conclusion, while the economic case for extended working hours is superficially compelling, the evidence overwhelmingly suggests that overwork is both personally destructive and economically irrational. Governments and employers should prioritise policies that promote sustainable working practices, recognising that human well-being and economic vitality are complementary rather than competing goals.",
        vi: "Tóm lại, mặc dù lập luận kinh tế cho giờ làm việc kéo dài có vẻ thuyết phục bề ngoài, bằng chứng áp đảo cho thấy làm việc quá sức vừa gây hại cá nhân vừa phi lý về mặt kinh tế. Các chính phủ và người sử dụng lao động nên ưu tiên các chính sách thúc đẩy thực hành làm việc bền vững."
      }
    },
    vocabulary: [
      { word: "burnout", meaning: "kiệt sức (do áp lực công việc)" },
      { word: "diminishing returns", meaning: "lợi nhuận giảm dần" },
      { word: "cognitive performance", meaning: "hiệu suất nhận thức" },
      { word: "overwork", meaning: "làm việc quá sức" },
      { word: "counterproductive", meaning: "phản tác dụng" },
    ],
    structures: [
      "The argument for X rests on the assumption that ...",
      "Beyond a threshold of ..., X declines sharply",
      "Research reveals that X is profoundly counterproductive",
      "Countries with X consistently rank among the world's most ...",
      "X and Y are complementary rather than competing goals",
    ]
  },
  {
    id: 5,
    title: "Crime & Punishment",
    titleVi: "Tội phạm & Trừng phạt",
    type: "Discussion (Both Views + Opinion)",
    typeVi: "Thảo luận (Hai quan điểm + Ý kiến cá nhân)",
    prompt: "Some people believe that the only effective way to reduce crime is to give longer prison sentences. Others, however, think there are better alternative methods. Discuss both views and give your opinion.",
    promptVi: "Một số người tin rằng cách duy nhất hiệu quả để giảm tội phạm là đưa ra các bản án tù dài hơn. Tuy nhiên, những người khác nghĩ rằng có những phương pháp thay thế tốt hơn. Thảo luận cả hai quan điểm và đưa ra ý kiến của bạn.",
    template: "Discussion + Opinion",
    essay: {
      introduction: {
        en: "The question of how best to reduce crime sits at the intersection of justice, psychology, and public policy. The debate between punitive incarceration and rehabilitative alternatives reflects fundamentally different philosophies about human nature and the purpose of criminal justice. This essay examines both perspectives before arguing that evidence-based rehabilitative approaches offer more sustainable crime reduction.",
        vi: "Câu hỏi làm thế nào để giảm tội phạm tốt nhất nằm ở giao điểm của công lý, tâm lý học và chính sách công. Cuộc tranh luận giữa giam cầm trừng phạt và các giải pháp thay thế phục hồi phản ánh những triết lý về bản chất con người và mục đích tư pháp hình sự cơ bản khác nhau."
      },
      body1: {
        en: "Proponents of longer prison sentences argue that incarceration serves a dual purpose: deterrence and incapacitation. The prospect of a lengthy prison term, they contend, dissuades potential offenders from committing crimes, while removing convicted criminals from society protects communities from further harm. In jurisdictions with mandatory minimum sentencing, such as the United States, supporters claim that incarceration rates correlate with periods of declining crime statistics, lending apparent credibility to the punitive approach.",
        vi: "Những người ủng hộ bản án tù dài hơn lập luận rằng giam cầm phục vụ mục đích kép: răn đe và vô hiệu hóa. Viễn cảnh về một bản án tù dài, họ lập luận, ngăn cản những người phạm tội tiềm năng thực hiện tội phạm, trong khi loại bỏ tội phạm đã kết án khỏi xã hội bảo vệ cộng đồng khỏi thiệt hại thêm."
      },
      body2: {
        en: "However, the evidence for the deterrent effect of longer sentences is remarkably weak. Research consistently demonstrates that it is the certainty of punishment, not its severity, that most effectively deters criminal behaviour. Moreover, overcrowded prisons frequently function as 'schools for crime,' where first-time offenders are socialised into criminal networks. By contrast, rehabilitation-focused approaches—including vocational training, psychological counselling, and restorative justice programs—address the root causes of criminal behaviour such as poverty, trauma, and addiction, yielding significantly lower reoffending rates at considerably lower public cost.",
        vi: "Tuy nhiên, bằng chứng về hiệu ứng răn đe của bản án dài hơn là cực kỳ yếu. Nghiên cứu liên tục chứng minh rằng chính sự chắc chắn của hình phạt, không phải mức độ nghiêm khắc của nó, mới là điều răn đe hành vi tội phạm hiệu quả nhất. Ngược lại, các cách tiếp cận tập trung vào phục hồi bao gồm đào tạo nghề, tư vấn tâm lý và các chương trình công lý phục hồi giải quyết các nguyên nhân gốc rễ của hành vi tội phạm."
      },
      conclusion: {
        en: "In my view, while incarceration remains necessary for violent and dangerous offenders, sole reliance on lengthy sentences as a crime reduction strategy is both ineffective and economically wasteful. A more rational criminal justice system would prioritise rehabilitation, early intervention, and addressing the social determinants of crime, thereby breaking the cycle of reoffending and building safer communities.",
        vi: "Theo quan điểm của tôi, mặc dù giam cầm vẫn cần thiết đối với những người phạm tội bạo lực và nguy hiểm, việc chỉ dựa vào các bản án dài như một chiến lược giảm tội phạm vừa không hiệu quả vừa lãng phí kinh tế."
      }
    },
    vocabulary: [
      { word: "deterrence", meaning: "sự răn đe" },
      { word: "incapacitation", meaning: "sự vô hiệu hóa (qua giam cầm)" },
      { word: "recidivism / reoffending", meaning: "tái phạm tội" },
      { word: "restorative justice", meaning: "công lý phục hồi" },
      { word: "mandatory minimum", meaning: "mức tối thiểu bắt buộc (bản án)" },
    ],
    structures: [
      "X sits at the intersection of A, B, and C",
      "X serves a dual purpose: A and B",
      "The evidence for X is remarkably weak",
      "Research consistently demonstrates that ...",
      "By contrast, Y-focused approaches ... yield significantly lower X",
    ]
  },
  {
    id: 6,
    title: "Globalisation & Cultural Identity",
    titleVi: "Toàn cầu hoá & Bản sắc văn hóa",
    type: "Discussion (Both Views + Opinion)",
    typeVi: "Thảo luận (Hai quan điểm + Ý kiến cá nhân)",
    prompt: "Globalisation has led to the dominance of Western culture, threatening the survival of local cultures and languages. To what extent do you agree or disagree?",
    promptVi: "Toàn cầu hóa đã dẫn đến sự thống trị của văn hóa phương Tây, đe dọa sự tồn tại của các nền văn hóa và ngôn ngữ địa phương. Bạn đồng ý hay không đồng ý ở mức độ nào?",
    template: "Partially agree",
    essay: {
      introduction: {
        en: "Globalisation, driven by international trade, mass media, and digital connectivity, has dramatically accelerated cross-cultural exchange. Critics argue that this process disproportionately amplifies Western cultural influence, eroding linguistic diversity and traditional practices worldwide. While this concern has genuine merit, I would argue that the relationship between globalisation and cultural identity is considerably more nuanced than simple cultural imperialism.",
        vi: "Toàn cầu hóa, được thúc đẩy bởi thương mại quốc tế, truyền thông đại chúng và kết nối kỹ thuật số, đã tăng tốc đáng kể sự giao lưu văn hóa xuyên biên giới. Các nhà phê bình lập luận rằng quá trình này khuếch đại không cân xứng ảnh hưởng văn hóa phương Tây, làm xói mòn sự đa dạng ngôn ngữ và các thực hành truyền thống trên toàn thế giới."
      },
      body1: {
        en: "There is substantial evidence that Western cultural products have achieved disproportionate global reach. Hollywood films dominate cinemas worldwide; English functions increasingly as the global lingua franca of business, science, and popular culture; and fast-food chains have supplanted traditional dining practices in countless communities. The UNESCO Atlas of the World's Languages in Danger reports that approximately one language disappears every two weeks, with English and other dominant languages frequently cited as contributing factors. Indigenous communities from the Amazon to the Arctic have watched traditional knowledge systems and ceremonial practices fade as younger generations embrace globalised lifestyles.",
        vi: "Có bằng chứng đáng kể rằng các sản phẩm văn hóa phương Tây đã đạt được tầm phủ sóng toàn cầu không cân xứng. Phim Hollywood thống trị các rạp chiếu phim trên toàn thế giới; tiếng Anh ngày càng đóng vai trò là ngôn ngữ chung toàn cầu trong kinh doanh, khoa học và văn hóa đại chúng."
      },
      body2: {
        en: "Nevertheless, globalisation does not operate as a one-directional force of cultural homogenisation. Cultural exchange is, in many respects, reciprocal: Korean pop music (K-pop) has captivated audiences across Europe and the Americas; Japanese anime shapes global entertainment; and culinary traditions from India, Mexico, and the Middle East have become woven into the daily lives of Western consumers. Moreover, digital technology has paradoxically empowered cultural minorities to preserve, promote, and disseminate their heritage globally, reaching audiences that would have been impossible to access a generation ago.",
        vi: "Tuy nhiên, toàn cầu hóa không hoạt động như một lực lượng đồng nhất hóa văn hóa một chiều. Trao đổi văn hóa, về nhiều mặt, là có đi có lại: nhạc pop Hàn Quốc (K-pop) đã thu hút khán giả trên khắp châu Âu và châu Mỹ; anime Nhật Bản định hình nền giải trí toàn cầu."
      },
      conclusion: {
        en: "In conclusion, while globalisation undeniably creates asymmetric pressures that threaten minority languages and cultures, characterising it as straightforward Western cultural imperialism overlooks the genuine complexity of contemporary cultural exchange. The appropriate response is not to reject globalisation but to actively support policies that promote multilingualism, fund cultural preservation, and ensure that globalisation enables cultural dialogue rather than monologue.",
        vi: "Tóm lại, mặc dù toàn cầu hóa chắc chắn tạo ra những áp lực bất đối xứng đe dọa các ngôn ngữ và văn hóa thiểu số, nhưng việc mô tả nó như chủ nghĩa đế quốc văn hóa phương Tây đơn giản đã bỏ qua sự phức tạp thực sự của trao đổi văn hóa đương đại."
      }
    },
    vocabulary: [
      { word: "lingua franca", meaning: "ngôn ngữ chung (dùng giữa các dân tộc khác nhau)" },
      { word: "homogenisation", meaning: "sự đồng nhất hóa" },
      { word: "cultural imperialism", meaning: "chủ nghĩa đế quốc văn hóa" },
      { word: "asymmetric", meaning: "bất đối xứng" },
      { word: "reciprocal", meaning: "có đi có lại, tương hỗ" },
    ],
    structures: [
      "Critics argue that this process disproportionately ...",
      "There is substantial evidence that ...",
      "Nevertheless, X does not operate as ...",
      "X has paradoxically empowered ...",
      "The appropriate response is not to X but to Y",
    ]
  },
  {
    id: 7,
    title: "Government & Free Healthcare",
    titleVi: "Chính phủ & Y tế miễn phí",
    type: "Opinion (Agree/Disagree)",
    typeVi: "Quan điểm (Đồng ý/Không đồng ý)",
    prompt: "Healthcare should be provided free of charge by the government and funded through taxation. To what extent do you agree or disagree with this statement?",
    promptVi: "Chăm sóc sức khỏe nên được chính phủ cung cấp miễn phí và được tài trợ qua thuế. Bạn đồng ý hay không đồng ý ở mức độ nào?",
    template: "Strong agreement",
    essay: {
      introduction: {
        en: "Access to healthcare represents one of the most fundamental aspects of human dignity and social justice. The question of whether governments bear the responsibility to provide universal, publicly funded healthcare is among the most consequential policy debates of our time. I strongly believe that healthcare should be a universal public service, freely available to all citizens regardless of their economic circumstances.",
        vi: "Tiếp cận chăm sóc sức khỏe đại diện cho một trong những khía cạnh cơ bản nhất của phẩm giá con người và công bằng xã hội. Câu hỏi liệu các chính phủ có trách nhiệm cung cấp dịch vụ chăm sóc sức khỏe phổ quát, được tài trợ công là một trong những cuộc tranh luận chính sách quan trọng nhất trong thời đại của chúng ta."
      },
      body1: {
        en: "The most compelling argument for universal healthcare is the fundamental ethical principle that human life and health should not be commodified. In market-based healthcare systems, the ability to access life-saving treatment is determined by financial resources rather than medical need, creating a deeply unjust system where the poor face preventable suffering and premature death. Moreover, universal healthcare systems generate significant economic efficiency: preventive care reduces the far greater costs of treating advanced illnesses; healthier populations are more productive workforces; and the elimination of complex insurance bureaucracies reduces administrative overhead substantially.",
        vi: "Lập luận thuyết phục nhất cho chăm sóc sức khỏe phổ quát là nguyên tắc đạo đức cơ bản rằng cuộc sống và sức khỏe con người không nên bị thương mại hóa. Trong các hệ thống chăm sóc sức khỏe dựa trên thị trường, khả năng tiếp cận điều trị cứu sống được xác định bởi nguồn lực tài chính hơn là nhu cầu y tế."
      },
      body2: {
        en: "Critics of universal healthcare raise concerns about cost, efficiency, and the suppression of medical innovation. They argue that publicly funded systems inevitably lead to long waiting times, rationing of care, and reduced incentives for medical research and development. While these concerns have some validity, countries with universal healthcare—such as Canada, the UK, and the Scandinavian nations—consistently achieve superior health outcomes, including longer life expectancy and lower infant mortality, at significantly lower per-capita costs than the United States, which operates a predominantly private system.",
        vi: "Các nhà phê bình về chăm sóc sức khỏe phổ quát nêu lên lo ngại về chi phí, hiệu quả và việc kìm hãm đổi mới y tế. Họ lập luận rằng các hệ thống được tài trợ công không thể tránh khỏi dẫn đến thời gian chờ đợi dài, phân bổ chăm sóc và giảm động lực cho nghiên cứu và phát triển y tế."
      },
      conclusion: {
        en: "In conclusion, I firmly believe that healthcare should be universally accessible and publicly funded. The evidence from countries that have implemented universal healthcare systems overwhelmingly demonstrates that they produce better health outcomes, greater equity, and superior economic efficiency compared to market-based alternatives. Access to healthcare is not a luxury but a fundamental human right that governments have an obligation to guarantee.",
        vi: "Tóm lại, tôi kiên quyết tin rằng chăm sóc sức khỏe nên được tiếp cận phổ quát và được tài trợ công. Bằng chứng từ các quốc gia đã triển khai hệ thống chăm sóc sức khỏe phổ quát cho thấy áp đảo rằng chúng tạo ra kết quả sức khỏe tốt hơn, công bằng hơn và hiệu quả kinh tế vượt trội so với các lựa chọn thay thế dựa trên thị trường."
      }
    },
    vocabulary: [
      { word: "commodified", meaning: "bị thương mại hóa, coi như hàng hóa" },
      { word: "per-capita", meaning: "tính theo đầu người" },
      { word: "rationing", meaning: "sự phân bổ/phân phối theo hạn mức" },
      { word: "preventive care", meaning: "chăm sóc phòng ngừa" },
      { word: "infant mortality", meaning: "tỷ lệ tử vong trẻ sơ sinh" },
    ],
    structures: [
      "X represents one of the most fundamental aspects of ...",
      "The most compelling argument for X is ...",
      "Critics of X raise concerns about A, B, and C",
      "Countries with X consistently achieve superior outcomes",
      "X is not a luxury but a fundamental right",
    ]
  },
  {
    id: 8,
    title: "Social Media & Mental Health",
    titleVi: "Mạng xã hội & Sức khỏe tâm thần",
    type: "Advantages & Disadvantages",
    typeVi: "Ưu điểm & Nhược điểm",
    prompt: "Social media platforms have transformed the way people communicate and share information. Discuss the advantages and disadvantages of social media and give your own opinion on whether its benefits outweigh its drawbacks.",
    promptVi: "Các nền tảng mạng xã hội đã biến đổi cách mọi người giao tiếp và chia sẻ thông tin. Thảo luận ưu và nhược điểm của mạng xã hội và đưa ra ý kiến của bạn liệu lợi ích của nó có lớn hơn nhược điểm hay không.",
    template: "Advantages-Disadvantages + Opinion",
    essay: {
      introduction: {
        en: "Social media has fundamentally reshaped human communication, creating a global information ecosystem that connects billions of users instantaneously. Its rapid ascent has generated both extraordinary opportunities and unprecedented challenges, prompting intense debate about its net impact on individuals and society. This essay contends that while social media offers genuine benefits, its current form produces harms that require urgent systemic reform.",
        vi: "Mạng xã hội đã định hình lại cơ bản giao tiếp con người, tạo ra một hệ sinh thái thông tin toàn cầu kết nối hàng tỷ người dùng ngay lập tức. Sự trỗi dậy nhanh chóng của nó đã tạo ra cả những cơ hội phi thường lẫn những thách thức chưa từng có."
      },
      body1: {
        en: "The benefits of social media are significant and multifaceted. At the individual level, platforms enable people to maintain relationships across geographical boundaries, discover communities of shared interest, and access information that was previously available only to privileged groups. At a societal level, social media has proven to be a powerful instrument of democratic accountability: citizen journalism and online activism have exposed corruption, mobilised political movements, and amplified the voices of marginalised communities who lacked access to traditional media channels.",
        vi: "Lợi ích của mạng xã hội đáng kể và đa mặt. Ở cấp độ cá nhân, các nền tảng cho phép mọi người duy trì các mối quan hệ vượt qua ranh giới địa lý, khám phá các cộng đồng có cùng sở thích và tiếp cận thông tin trước đây chỉ dành cho các nhóm đặc quyền."
      },
      body2: {
        en: "However, the disadvantages of social media are increasingly difficult to dismiss. Algorithmically driven engagement models prioritise emotionally provocative content that maximises user time on platform, frequently amplifying misinformation, outrage, and political polarisation. The psychological evidence is particularly concerning: experimental research has demonstrated causal links between heavy social media use and depression, anxiety, body dysmorphia, and suicidal ideation, particularly among adolescent girls. Furthermore, the business model of data commodification raises profound privacy concerns, with users' personal information monetised without meaningful consent or transparency.",
        vi: "Tuy nhiên, những nhược điểm của mạng xã hội ngày càng khó bác bỏ. Các mô hình tương tác do thuật toán thúc đẩy ưu tiên nội dung kích động cảm xúc để tối đa hóa thời gian người dùng trên nền tảng, thường xuyên khuếch đại thông tin sai lệch, phẫn nộ và phân cực chính trị."
      },
      conclusion: {
        en: "In conclusion, social media's capacity to connect, inform, and empower is genuinely valuable but is currently being systematically undermined by business models that incentivise harm. Regulatory frameworks requiring algorithmic transparency, data privacy protections, and independent auditing of platform impacts are essential to reforming social media into a genuine public good rather than a profit-driven hazard.",
        vi: "Tóm lại, khả năng kết nối, thông tin và trao quyền của mạng xã hội thực sự có giá trị nhưng hiện đang bị phá hoại có hệ thống bởi các mô hình kinh doanh khuyến khích tác hại. Các khung pháp lý yêu cầu minh bạch thuật toán, bảo vệ quyền riêng tư dữ liệu và kiểm toán độc lập về tác động của nền tảng là cần thiết."
      }
    },
    vocabulary: [
      { word: "polarisation", meaning: "sự phân cực (xã hội, chính trị)" },
      { word: "misinformation", meaning: "thông tin sai lệch" },
      { word: "algorithmic", meaning: "thuộc về thuật toán" },
      { word: "data commodification", meaning: "thương mại hóa dữ liệu cá nhân" },
      { word: "body dysmorphia", meaning: "chứng rối loạn hình thể" },
    ],
    structures: [
      "X has fundamentally reshaped ...",
      "At the individual level, ... At a societal level, ...",
      "The psychological evidence is particularly concerning: ...",
      "X is genuinely valuable but is currently being undermined by ...",
      "Regulatory frameworks requiring X, Y, and Z are essential to ...",
    ]
  },
  {
    id: 9,
    title: "Space Exploration",
    titleVi: "Khám phá Vũ trụ",
    type: "Opinion (Agree/Disagree)",
    typeVi: "Quan điểm (Đồng ý/Không đồng ý)",
    prompt: "Some people think that governments should spend money on space exploration programs, while others believe that this money would be better spent on solving problems on Earth. Discuss both views and give your opinion.",
    promptVi: "Một số người cho rằng chính phủ nên chi tiền cho các chương trình thám hiểm vũ trụ, trong khi những người khác tin rằng số tiền này sẽ được chi tốt hơn để giải quyết các vấn đề trên Trái Đất. Thảo luận cả hai quan điểm và đưa ra ý kiến của bạn.",
    template: "Discussion + Opinion",
    essay: {
      introduction: {
        en: "The allocation of public funds to space exploration has long provoked debate between those who see it as humanity's highest scientific aspiration and those who view it as a fiscally irresponsible distraction from urgent terrestrial needs. While both perspectives have merit, I believe that well-designed space programs generate substantial benefits for humanity that justify continued public investment.",
        vi: "Việc phân bổ quỹ công cho khám phá vũ trụ từ lâu đã gây ra tranh luận giữa những người coi đây là tham vọng khoa học cao nhất của nhân loại và những người coi đây là một sự phân tâm tốn kém tài chính khỏi những nhu cầu cấp bách trên Trái Đất."
      },
      body1: {
        en: "Critics of space exploration spending argue that the resources devoted to missions to Mars or lunar bases could address immediate human needs far more effectively. Global poverty, preventable disease, and climate change represent concrete, solvable problems that claim millions of lives annually and disproportionately affect the world's poorest populations. The approximately $25 billion annual NASA budget, they argue, could fund comprehensive vaccination programmes, clean water infrastructure, or climate adaptation initiatives that would demonstrably reduce human suffering on a massive scale.",
        vi: "Các nhà phê bình về chi tiêu khám phá vũ trụ lập luận rằng các nguồn lực dành cho các sứ mệnh lên sao Hỏa hoặc căn cứ mặt trăng có thể giải quyết các nhu cầu con người cấp bách hiệu quả hơn nhiều."
      },
      body2: {
        en: "However, proponents counter that the benefits of space exploration extend far beyond their apparent scope. Technologies developed for space missions have generated transformative civilian applications: GPS navigation, satellite weather forecasting, water purification technology, and medical imaging advances all originated in space research. Furthermore, the existential risk posed by asteroid impacts, solar events, and other cosmic hazards makes developing the capability to operate beyond Earth a genuine long-term investment in human survival. Space exploration also generates powerful scientific inspiration, stimulating interest in STEM fields that underpin economic and technological competitiveness.",
        vi: "Tuy nhiên, những người ủng hộ phản bác rằng lợi ích của khám phá vũ trụ kéo dài xa hơn phạm vi rõ ràng của chúng. Các công nghệ được phát triển cho các sứ mệnh vũ trụ đã tạo ra các ứng dụng dân sự mang tính chuyển đổi: điều hướng GPS, dự báo thời tiết vệ tinh, công nghệ lọc nước và tiến bộ hình ảnh y tế đều bắt nguồn từ nghiên cứu vũ trụ."
      },
      conclusion: {
        en: "In my view, the framing of space exploration versus earthly problems as a zero-sum choice is a false dichotomy. A modest but sustained investment in space research generates disproportionate long-term returns in scientific knowledge, technological innovation, and human security. The challenge is not to choose between Earth and space, but to ensure that exploration programmes are conducted efficiently and that their benefits are equitably distributed.",
        vi: "Theo quan điểm của tôi, việc đóng khung khám phá vũ trụ so với các vấn đề trần thế như một lựa chọn tổng bằng không là một sự đánh đổi sai lầm. Một khoản đầu tư khiêm tốn nhưng bền vững vào nghiên cứu vũ trụ tạo ra lợi nhuận dài hạn không cân xứng về kiến thức khoa học, đổi mới công nghệ và an ninh con người."
      }
    },
    vocabulary: [
      { word: "terrestrial", meaning: "thuộc về Trái Đất, trên mặt đất" },
      { word: "zero-sum", meaning: "tổng bằng không (lợi ích của bên này = thiệt của bên kia)" },
      { word: "false dichotomy", meaning: "sự đối lập sai lầm (hai lựa chọn không thực sự loại trừ nhau)" },
      { word: "STEM", meaning: "Khoa học, Công nghệ, Kỹ thuật, Toán học" },
      { word: "existential risk", meaning: "rủi ro hiện hữu (đe dọa sự tồn vong)" },
    ],
    structures: [
      "The framing of X versus Y as a zero-sum choice is a false dichotomy",
      "Technologies developed for X have generated transformative applications",
      "X extends far beyond its apparent scope",
      "A modest but sustained investment in X generates disproportionate returns",
      "The challenge is not to choose between X and Y, but to ...",
    ]
  },
  {
    id: 10,
    title: "Gender Equality in the Workplace",
    titleVi: "Bình đẳng giới tại nơi làm việc",
    type: "Problem & Solution",
    typeVi: "Vấn đề & Giải pháp",
    prompt: "Despite significant progress, women remain underrepresented in senior positions across many industries. What are the reasons for this and what measures could be taken to address the situation?",
    promptVi: "Mặc dù đã có tiến bộ đáng kể, phụ nữ vẫn bị đại diện thiếu ở các vị trí cấp cao trong nhiều ngành. Nguyên nhân là gì và có thể thực hiện những biện pháp nào để giải quyết tình trạng này?",
    template: "Problem-Solution",
    essay: {
      introduction: {
        en: "Despite decades of legislative progress on gender equality, a persistent and troubling gap remains between women's representation in the general workforce and their presence at the highest levels of organisational leadership. Understanding the structural, cultural, and psychological mechanisms that perpetuate this disparity is essential to designing interventions capable of producing genuine, lasting change.",
        vi: "Mặc dù đã có nhiều thập kỷ tiến bộ lập pháp về bình đẳng giới, vẫn còn một khoảng cách dai dẳng và đáng lo ngại giữa đại diện của phụ nữ trong lực lượng lao động nói chung và sự hiện diện của họ ở các cấp lãnh đạo tổ chức cao nhất."
      },
      body1: {
        en: "Several interconnected factors contribute to the underrepresentation of women in leadership. First, structural barriers persist in the form of inflexible working arrangements, inadequate parental leave policies, and a dearth of affordable childcare, all of which disproportionately burden women who continue to bear primary responsibility for domestic and caregiving duties in most societies. Second, unconscious bias in recruitment and promotion processes systematically disadvantages female candidates, with research demonstrating that identical CVs are rated significantly lower when assigned a female name. Third, the absence of visible female role models in senior positions creates a psychological barrier, as aspiration is profoundly shaped by what individuals believe to be possible for people like themselves.",
        vi: "Một số yếu tố liên kết nhau góp phần vào sự đại diện thiếu của phụ nữ trong lãnh đạo. Đầu tiên, các rào cản cấu trúc vẫn tồn tại dưới dạng sắp xếp làm việc không linh hoạt, chính sách nghỉ thai sản không đầy đủ và thiếu dịch vụ chăm sóc trẻ em giá cả phải chăng, tất cả đều gây gánh nặng không cân xứng cho phụ nữ."
      },
      body2: {
        en: "Addressing this issue requires a multi-pronged strategy. Organisations should implement transparent, structured promotion criteria that minimise the influence of unconscious bias, alongside mandatory diversity targets for shortlists. Governments can incentivise shared parental leave policies that normalise men's participation in childcare, thereby reducing the career penalty disproportionately borne by mothers. Mentorship programmes connecting aspiring women with senior female leaders have demonstrated measurable impact on career progression. Finally, unconscious bias training, while not sufficient alone, can raise awareness of the subtle mechanisms that perpetuate gender inequality in workplace decision-making.",
        vi: "Giải quyết vấn đề này đòi hỏi chiến lược đa hướng. Các tổ chức nên thực hiện các tiêu chí thăng tiến minh bạch, có cấu trúc để giảm thiểu ảnh hưởng của định kiến vô thức, cùng với các mục tiêu đa dạng bắt buộc cho danh sách ứng viên."
      },
      conclusion: {
        en: "In conclusion, the underrepresentation of women in leadership positions reflects a complex web of structural, cultural, and psychological barriers that require equally multifaceted responses. Progress demands commitment from governments, corporations, and individuals alike. Beyond issues of fairness, research consistently demonstrates that gender-diverse leadership teams produce superior organisational performance, making this not merely a social justice imperative but a sound strategic investment.",
        vi: "Tóm lại, sự đại diện thiếu của phụ nữ ở các vị trí lãnh đạo phản ánh một mạng lưới phức tạp của các rào cản cấu trúc, văn hóa và tâm lý đòi hỏi phản ứng đa mặt tương đương."
      }
    },
    vocabulary: [
      { word: "unconscious bias", meaning: "định kiến vô thức" },
      { word: "glass ceiling", meaning: "trần kính (rào cản vô hình ngăn phụ nữ thăng tiến)" },
      { word: "gender pay gap", meaning: "khoảng cách lương theo giới" },
      { word: "parental leave", meaning: "nghỉ thai sản / nghỉ chăm con" },
      { word: "multi-pronged", meaning: "đa hướng, nhiều mũi nhọn" },
    ],
    structures: [
      "A persistent gap remains between X and Y",
      "Several interconnected factors contribute to ...",
      "Research demonstrates that identical X are rated lower when ...",
      "Addressing this requires a multi-pronged strategy",
      "Beyond issues of fairness, research demonstrates that ...",
    ]
  },
  // ─────────────────────────────────────────────────────────────────────
  // id 11-15 (added batch 2)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Remote Work",
    titleVi: "Làm việc từ xa",
    type: "Discussion (Both Views + Opinion)",
    typeVi: "Thảo luận (Hai quan điểm + Ý kiến cá nhân)",
    prompt: "Working from home has become increasingly popular in recent years. Discuss the advantages and disadvantages of remote work, and give your own opinion.",
    promptVi: "Làm việc tại nhà ngày càng trở nên phổ biến trong những năm gần đây. Thảo luận về những ưu điểm và nhược điểm của làm việc từ xa, và đưa ra ý kiến của bạn.",
    template: "Both views + lean toward advantages",
    essay: {
      introduction: {
        en: "The dramatic rise of remote work, accelerated by the global pandemic, has fundamentally altered the nature of professional life for millions of workers worldwide. While this shift has generated considerable enthusiasm among employees seeking flexibility, it has simultaneously raised legitimate concerns about productivity, collaboration, and the erosion of workplace culture. This essay will examine both perspectives before arguing that, on balance, remote work offers more benefits than drawbacks when implemented with appropriate structures.",
        vi: "Sự gia tăng mạnh mẽ của làm việc từ xa, được đẩy nhanh bởi đại dịch toàn cầu, đã thay đổi căn bản bản chất của cuộc sống nghề nghiệp của hàng triệu người lao động trên toàn thế giới. Mặc dù sự thay đổi này đã tạo ra sự nhiệt tình đáng kể trong nhân viên tìm kiếm sự linh hoạt, nhưng đồng thời cũng đặt ra những lo ngại chính đáng về năng suất, sự hợp tác và sự xói mòn văn hóa nơi làm việc."
      },
      body1: {
        en: "Proponents of remote work highlight several compelling advantages. Most notably, employees reclaim hours previously lost to commuting, which in major cities can amount to two or more hours daily. This recovered time can be reinvested in work, family, or personal wellbeing, contributing to measurably improved work-life balance. Furthermore, research by Stanford University found that remote workers demonstrate a 13% increase in productivity compared to their office-based counterparts, partly attributed to fewer workplace distractions. For employers, the elimination of large office spaces translates directly into significant cost savings, while the removal of geographical constraints enables access to a vastly broader talent pool.",
        vi: "Những người ủng hộ làm việc từ xa nêu bật một số ưu điểm thuyết phục. Đáng chú ý nhất, nhân viên lấy lại những giờ trước đây bị mất vào việc đi lại, điều này ở các thành phố lớn có thể lên đến hai giờ hoặc hơn mỗi ngày. Thời gian được phục hồi này có thể được tái đầu tư vào công việc, gia đình hoặc sức khỏe cá nhân. Hơn nữa, nghiên cứu của Đại học Stanford cho thấy nhân viên làm việc từ xa có năng suất tăng 13% so với đồng nghiệp làm việc tại văn phòng."
      },
      body2: {
        en: "However, remote work is not without significant drawbacks. The absence of physical proximity can impede spontaneous collaboration and creative ideation, which frequently emerge from informal office interactions. Junior employees, in particular, lose access to the informal mentorship and professional socialisation that office environments naturally provide. Additionally, the blurring of boundaries between professional and personal space can create psychological difficulties, with many remote workers reporting feelings of isolation and an inability to 'switch off' from work. These challenges disproportionately affect those living alone or in cramped accommodation without dedicated workspaces.",
        vi: "Tuy nhiên, làm việc từ xa không phải không có những nhược điểm đáng kể. Sự vắng mặt của sự gần gũi vật lý có thể cản trở sự hợp tác tự phát và đổi mới sáng tạo, thường xuất hiện từ các tương tác văn phòng không chính thức. Đặc biệt, nhân viên trẻ mất quyền tiếp cận với sự cố vấn không chính thức và xã hội hóa nghề nghiệp mà môi trường văn phòng tự nhiên cung cấp."
      },
      conclusion: {
        en: "In conclusion, whilst remote work presents genuine challenges relating to collaboration and professional development, its advantages in terms of productivity, flexibility, and cost efficiency are substantial. Rather than viewing it as an all-or-nothing proposition, organisations would be wise to adopt hybrid models that preserve the collaborative energy of office environments whilst affording employees the autonomy and flexibility that remote work uniquely provides.",
        vi: "Tóm lại, mặc dù làm việc từ xa đặt ra những thách thức thực sự liên quan đến sự hợp tác và phát triển nghề nghiệp, nhưng những lợi thế về năng suất, tính linh hoạt và hiệu quả chi phí là đáng kể. Các tổ chức nên áp dụng các mô hình kết hợp để bảo tồn năng lượng hợp tác của môi trường văn phòng đồng thời cho phép nhân viên có sự tự chủ mà làm việc từ xa cung cấp."
      }
    },
    vocabulary: [
      { word: "commuting", meaning: "việc đi lại (đi làm hàng ngày)" },
      { word: "spontaneous collaboration", meaning: "sự hợp tác tự phát" },
      { word: "talent pool", meaning: "nguồn nhân tài" },
      { word: "hybrid model", meaning: "mô hình kết hợp (văn phòng + từ xa)" },
      { word: "work-life balance", meaning: "cân bằng giữa công việc và cuộc sống" },
    ],
    structures: [
      "Research by [institution] found that X demonstrates a [%] increase in ...",
      "Rather than viewing it as an all-or-nothing proposition, ...",
      "This disproportionately affects those ...",
      "The removal of geographical constraints enables access to ...",
      "On balance, X offers more benefits than drawbacks when ...",
    ]
  },
  {
    id: 12,
    title: "Nuclear vs Extended Family",
    titleVi: "Gia đình hạt nhân vs Gia đình đa thế hệ",
    type: "Discussion (Both Views + Opinion)",
    typeVi: "Thảo luận (Hai quan điểm + Ý kiến cá nhân)",
    prompt: "In many countries, the nuclear family (parents and children) is becoming more common, while extended families are declining. What are the causes of this trend? Do you think this is a positive or negative development?",
    promptVi: "Ở nhiều quốc gia, gia đình hạt nhân (cha mẹ và con cái) đang trở nên phổ biến hơn, trong khi gia đình đa thế hệ đang suy giảm. Nguyên nhân của xu hướng này là gì? Bạn có nghĩ đây là một sự phát triển tích cực hay tiêu cực không?",
    template: "Causes + partially negative view",
    essay: {
      introduction: {
        en: "Across the globe, the traditional extended family structure — in which multiple generations cohabit and share resources — is giving way to the smaller nuclear unit of parents and their children. This demographic shift is driven by a confluence of economic, cultural, and social forces. Whilst the nuclear family offers certain freedoms, this essay argues that the erosion of extended family networks carries significant costs for both individuals and broader society.",
        vi: "Trên toàn cầu, cấu trúc gia đình đa thế hệ truyền thống — trong đó nhiều thế hệ cùng sống và chia sẻ tài nguyên — đang nhường chỗ cho đơn vị nhỏ hơn gồm cha mẹ và con cái. Sự thay đổi nhân khẩu học này được thúc đẩy bởi sự hội tụ của các lực lượng kinh tế, văn hóa và xã hội."
      },
      body1: {
        en: "Several interconnected factors drive the decline of extended families. Urbanisation has compelled younger generations to migrate to cities in pursuit of employment and educational opportunities, creating physical distance between family members that was uncommon in predominantly agricultural societies. Additionally, rising individualism in many cultures has fostered a preference for personal autonomy and privacy, values that are difficult to reconcile with the compromises inherent in multi-generational cohabitation. Improved life expectancy has further complicated family arrangements, as elderly relatives now live for decades beyond retirement, making long-term cohabitation more complex for working families.",
        vi: "Một số yếu tố liên kết nhau thúc đẩy sự suy giảm của gia đình đa thế hệ. Đô thị hóa đã buộc các thế hệ trẻ hơn phải di cư đến các thành phố để tìm kiếm việc làm và cơ hội giáo dục, tạo ra khoảng cách vật lý giữa các thành viên trong gia đình. Ngoài ra, chủ nghĩa cá nhân ngày càng tăng ở nhiều nền văn hóa đã thúc đẩy sự ưu tiên cho quyền tự chủ cá nhân và sự riêng tư."
      },
      body2: {
        en: "The consequences of this trend are, in my view, predominantly negative. Extended families historically served as natural support networks, providing childcare, elder care, and financial assistance during crises without the need for formal institutions. As these networks dissolve, governments face mounting pressure to fund formal childcare and aged-care systems, placing significant strain on public resources. Children raised in nuclear families also miss the intergenerational bonds that transmit cultural knowledge, values, and emotional resilience. Furthermore, elderly individuals living apart from family are disproportionately vulnerable to loneliness, a condition now recognised as a serious public health concern comparable to smoking in its health impact.",
        vi: "Hậu quả của xu hướng này, theo quan điểm của tôi, chủ yếu là tiêu cực. Các gia đình đa thế hệ về mặt lịch sử đóng vai trò là mạng lưới hỗ trợ tự nhiên, cung cấp dịch vụ chăm sóc trẻ em, chăm sóc người già và hỗ trợ tài chính trong khủng hoảng mà không cần đến các tổ chức chính thức. Khi những mạng lưới này tan rã, các chính phủ phải đối mặt với áp lực ngày càng tăng để tài trợ cho các hệ thống chăm sóc chính thức."
      },
      conclusion: {
        en: "In summary, the shift toward nuclear families reflects genuine changes in economic structures and cultural values. However, the loss of extended family networks represents a significant social cost — one that manifests in increased public spending, weakened cultural transmission, and heightened vulnerability among the elderly. Society would benefit from policies that enable extended family support where desired, whilst respecting individuals' right to choose their living arrangements.",
        vi: "Tóm lại, sự chuyển dịch sang gia đình hạt nhân phản ánh những thay đổi thực sự trong cấu trúc kinh tế và giá trị văn hóa. Tuy nhiên, sự mất mát của các mạng lưới gia đình đa thế hệ đại diện cho một chi phí xã hội đáng kể — một chi phí biểu hiện ở việc tăng chi tiêu công, truyền đạt văn hóa yếu hơn và tăng tính dễ bị tổn thương ở người cao tuổi."
      }
    },
    vocabulary: [
      { word: "cohabit", meaning: "cùng sống chung" },
      { word: "urbanisation", meaning: "đô thị hóa" },
      { word: "individualism", meaning: "chủ nghĩa cá nhân" },
      { word: "intergenerational", meaning: "liên thế hệ" },
      { word: "demographic shift", meaning: "sự thay đổi nhân khẩu học" },
    ],
    structures: [
      "X is giving way to Y",
      "A confluence of economic, cultural, and social forces drives ...",
      "This disproportionately affects / makes X vulnerable to ...",
      "X historically served as Y, providing ... without the need for ...",
      "Society would benefit from policies that enable X whilst respecting Y",
    ]
  },
  {
    id: 13,
    title: "Urban Development & Smart Cities",
    titleVi: "Phát triển đô thị & Thành phố thông minh",
    type: "Problem & Solution",
    typeVi: "Vấn đề & Giải pháp",
    prompt: "Many cities around the world are facing serious problems such as traffic congestion, pollution, and housing shortages. What are the causes of these problems, and what measures can governments take to address them?",
    promptVi: "Nhiều thành phố trên thế giới đang đối mặt với các vấn đề nghiêm trọng như tắc nghẽn giao thông, ô nhiễm và thiếu hụt nhà ở. Nguyên nhân của những vấn đề này là gì, và chính phủ có thể thực hiện những biện pháp nào để giải quyết chúng?",
    template: "Causes then solutions",
    essay: {
      introduction: {
        en: "Rapid urbanisation has transformed cities into engines of economic growth, yet this concentration of population and activity has simultaneously generated formidable challenges. Traffic gridlock, deteriorating air quality, and acute housing shortages have become defining features of many major metropolitan areas worldwide. This essay examines the root causes of these interconnected problems before proposing a framework of governmental solutions.",
        vi: "Đô thị hóa nhanh chóng đã biến các thành phố thành những động cơ tăng trưởng kinh tế, nhưng sự tập trung dân số và hoạt động này đồng thời đã tạo ra những thách thức khó khăn. Tắc nghẽn giao thông, chất lượng không khí xuống cấp và thiếu hụt nhà ở cấp tính đã trở thành đặc điểm xác định của nhiều khu vực đô thị lớn trên toàn thế giới."
      },
      body1: {
        en: "The origins of urban problems are deeply rooted in planning failures and demographic pressures. The mass rural-to-urban migration driven by the promise of employment and better services has outpaced cities' capacity to expand infrastructure. Housing supply has been chronically constrained by restrictive zoning regulations, slow planning approval processes, and speculative land-holding that removes properties from productive use. Transport infrastructure, often designed for far smaller populations, has been overwhelmed by private vehicle ownership, which governments have historically incentivised through subsidised fuel and inadequate investment in public transit alternatives.",
        vi: "Nguồn gốc của các vấn đề đô thị bắt nguồn sâu xa từ những thất bại trong quy hoạch và áp lực nhân khẩu học. Làn sóng di cư từ nông thôn ra thành thị được thúc đẩy bởi hứa hẹn về việc làm và dịch vụ tốt hơn đã vượt quá khả năng mở rộng cơ sở hạ tầng của các thành phố. Nguồn cung nhà ở đã bị hạn chế mãn tính bởi các quy định phân vùng hạn chế và quá trình phê duyệt quy hoạch chậm chạp."
      },
      body2: {
        en: "Governments can address these challenges through a coordinated suite of policy interventions. Firstly, substantial investment in mass rapid transit — metro systems, light rail, and integrated bus networks — can reduce private car dependency and alleviate both congestion and pollution simultaneously. Congestion pricing schemes, as successfully implemented in Singapore and Stockholm, use market mechanisms to discourage unnecessary driving in peak periods. For housing, streamlining planning processes and mandating affordable housing quotas in new developments can significantly increase supply. Smart city technologies, including traffic management algorithms and real-time monitoring of air quality and utility usage, enable cities to optimise existing resources far more efficiently than traditional approaches permit.",
        vi: "Các chính phủ có thể giải quyết những thách thức này thông qua một bộ can thiệp chính sách phối hợp. Đầu tiên, đầu tư đáng kể vào giao thông công cộng nhanh — hệ thống tàu điện ngầm, tàu điện nhẹ và mạng lưới xe buýt tích hợp — có thể giảm sự phụ thuộc vào xe cá nhân và giảm nhẹ cả tắc nghẽn và ô nhiễm. Các chương trình định giá tắc nghẽn, như đã được thực hiện thành công ở Singapore và Stockholm, sử dụng cơ chế thị trường để ngăn cản việc lái xe không cần thiết trong giờ cao điểm."
      },
      conclusion: {
        en: "In conclusion, the urban challenges of congestion, pollution, and housing shortages are not inevitable consequences of growth but rather the product of policy choices and planning failures that can be reversed. By investing in robust public transport, reforming housing regulations, and deploying smart city technologies, governments can create urban environments that combine economic dynamism with livability and sustainability.",
        vi: "Tóm lại, các thách thức đô thị về tắc nghẽn, ô nhiễm và thiếu hụt nhà ở không phải là hậu quả tất yếu của tăng trưởng mà là kết quả của các lựa chọn chính sách và thất bại quy hoạch có thể được khắc phục. Bằng cách đầu tư vào giao thông công cộng mạnh mẽ, cải cách các quy định nhà ở và triển khai các công nghệ thành phố thông minh, chính phủ có thể tạo ra môi trường đô thị kết hợp sự năng động kinh tế với khả năng sống và bền vững."
      }
    },
    vocabulary: [
      { word: "urbanisation", meaning: "đô thị hóa" },
      { word: "congestion pricing", meaning: "định giá tắc nghẽn (thu phí vào khu vực đông đúc)" },
      { word: "zoning regulations", meaning: "quy định phân vùng đất đai" },
      { word: "mass rapid transit", meaning: "hệ thống vận chuyển nhanh (metro, BRT...)" },
      { word: "speculative land-holding", meaning: "giữ đất đầu cơ, không đưa vào sử dụng" },
    ],
    structures: [
      "X has outpaced cities' capacity to ...",
      "X has been chronically constrained by ...",
      "A coordinated suite of policy interventions can address ...",
      "X are not inevitable consequences of Y but rather the product of ...",
      "By investing in X, reforming Y, and deploying Z, governments can ...",
    ]
  },
  {
    id: 14,
    title: "Private Cars vs Public Transport",
    titleVi: "Xe cá nhân vs Giao thông công cộng",
    type: "Opinion (Agree/Disagree)",
    typeVi: "Quan điểm (Đồng ý/Không đồng ý)",
    prompt: "Private car use should be discouraged, and governments should invest more heavily in public transport. To what extent do you agree or disagree?",
    promptVi: "Việc sử dụng xe cá nhân nên bị hạn chế, và các chính phủ nên đầu tư mạnh hơn vào giao thông công cộng. Bạn đồng ý hay không đồng ý ở mức độ nào?",
    template: "Strong agreement",
    essay: {
      introduction: {
        en: "The private automobile has long been synonymous with personal freedom and mobility; however, the environmental and social costs of mass car ownership have become increasingly untenable in a world grappling with climate change and urban congestion. I strongly agree that governments should prioritise public transport investment and implement policies to reduce private car dependency, whilst acknowledging that this transition requires careful management to avoid disproportionate impacts on lower-income populations.",
        vi: "Ô tô cá nhân từ lâu đã đồng nghĩa với tự do cá nhân và khả năng di chuyển; tuy nhiên, chi phí môi trường và xã hội của việc sở hữu xe ô tô hàng loạt ngày càng trở nên không thể chấp nhận được trong một thế giới đang vật lộn với biến đổi khí hậu và tắc nghẽn đô thị."
      },
      body1: {
        en: "The case for discouraging private car use is compelling on both environmental and practical grounds. Private vehicles are a primary source of urban air pollution and greenhouse gas emissions; in many cities, road transport accounts for over 30% of total carbon output. Beyond environmental harm, the space consumption of private vehicles is extraordinary: a single car lane carries roughly 1,500 vehicles per hour, while an equivalent bus lane can transport 8,000 passengers. This spatial inefficiency is a principal driver of the chronic congestion that costs economies billions in lost productivity annually. Redirecting public investment toward metro systems, tram networks, and high-frequency bus services would serve far more citizens per pound or dollar of expenditure.",
        vi: "Lý do để hạn chế sử dụng xe cá nhân rất thuyết phục về cả môi trường và thực tế. Xe cá nhân là nguồn ô nhiễm không khí đô thị và phát thải khí nhà kính chính; ở nhiều thành phố, giao thông đường bộ chiếm hơn 30% tổng lượng phát thải carbon. Ngoài tác hại môi trường, mức tiêu thụ không gian của xe cá nhân là đặc biệt: một làn xe ô tô chở khoảng 1.500 phương tiện mỗi giờ, trong khi một làn xe buýt tương đương có thể vận chuyển 8.000 hành khách."
      },
      body2: {
        en: "Critics rightly note that in many regions, particularly rural areas and suburban communities with poor public transport coverage, private vehicles represent the only practical means of mobility. Policies that simply penalise car use without providing viable alternatives risk imposing disproportionate burdens on those with limited incomes or mobility challenges. Therefore, the transition must be carefully sequenced: governments should first invest substantially in building public transport capacity, then introduce phased incentives and disincentives once alternatives exist. Financial mechanisms such as income-related subsidies for public transport passes can ensure that reduced car dependency does not translate into reduced mobility for vulnerable populations.",
        vi: "Các nhà phê bình đúng khi lưu ý rằng ở nhiều khu vực, đặc biệt là khu vực nông thôn và cộng đồng ngoại ô với phương tiện giao thông công cộng kém, xe cá nhân là phương tiện di chuyển thực tế duy nhất. Các chính sách đơn giản là phạt sử dụng xe hơi mà không cung cấp các giải pháp thay thế khả thi có nguy cơ áp đặt gánh nặng không cân xứng lên những người có thu nhập hạn chế."
      },
      conclusion: {
        en: "In conclusion, I firmly support the view that private car use should be discouraged in favour of public transport, given the overwhelming evidence of cars' environmental, spatial, and social costs. However, effective policy must ensure that those with genuine transport needs are not left behind. A well-designed transition — sequencing investment before restriction — can deliver cleaner, more efficient, and more equitable urban mobility for all.",
        vi: "Tóm lại, tôi ủng hộ mạnh mẽ quan điểm rằng việc sử dụng xe cá nhân nên bị hạn chế để ủng hộ giao thông công cộng, trước bằng chứng áp đảo về chi phí môi trường, không gian và xã hội của ô tô. Tuy nhiên, chính sách hiệu quả phải đảm bảo rằng những người có nhu cầu giao thông thực sự không bị bỏ lại phía sau."
      }
    },
    vocabulary: [
      { word: "greenhouse gas emissions", meaning: "phát thải khí nhà kính" },
      { word: "spatial inefficiency", meaning: "kém hiệu quả về mặt không gian" },
      { word: "disproportionate burden", meaning: "gánh nặng không cân xứng" },
      { word: "phased incentives", meaning: "ưu đãi theo giai đoạn" },
      { word: "viable alternatives", meaning: "giải pháp thay thế khả thi" },
    ],
    structures: [
      "X is compelling on both Y and Z grounds",
      "X accounts for over [%] of total ...",
      "Policies that simply penalise X without providing Y risk ...",
      "The transition must be carefully sequenced: first ..., then ...",
      "A well-designed X — sequencing A before B — can deliver ...",
    ]
  },
  {
    id: 15,
    title: "Minimum Wage",
    titleVi: "Lương tối thiểu",
    type: "Opinion (Agree/Disagree)",
    typeVi: "Quan điểm (Đồng ý/Không đồng ý)",
    prompt: "Raising the minimum wage benefits workers but may harm businesses and lead to higher unemployment. To what extent do you agree or disagree that governments should raise the minimum wage?",
    promptVi: "Tăng lương tối thiểu mang lại lợi ích cho người lao động nhưng có thể gây hại cho các doanh nghiệp và dẫn đến thất nghiệp cao hơn. Bạn đồng ý hay không đồng ý ở mức độ nào rằng các chính phủ nên tăng lương tối thiểu?",
    template: "Partially agree",
    essay: {
      introduction: {
        en: "Few economic policy debates generate more controversy than that surrounding the minimum wage. Whilst critics contend that artificially elevating wage floors distorts labour markets and drives unemployment, advocates argue that a living wage is a prerequisite for human dignity and a practical tool for reducing inequality. I partially agree that governments should raise minimum wages, provided such increases are calibrated carefully to local economic conditions and implemented gradually.",
        vi: "Ít cuộc tranh luận chính sách kinh tế nào tạo ra nhiều tranh cãi hơn cuộc tranh luận về lương tối thiểu. Trong khi các nhà phê bình cho rằng việc nâng sàn tiền lương một cách nhân tạo làm biến dạng thị trường lao động và thúc đẩy thất nghiệp, những người ủng hộ lập luận rằng mức lương đủ sống là điều kiện tiên quyết cho phẩm giá con người và là công cụ thực tế để giảm bất bình đẳng."
      },
      body1: {
        en: "The arguments in favour of minimum wage increases are substantial. At its core, a meaningful minimum wage ensures that full-time work provides sufficient income to meet basic living costs, reducing dependence on state welfare systems and affirming the intrinsic value of labour. Economically, low-wage workers have a high propensity to spend additional income immediately on goods and services, injecting money into the local economy in ways that higher-income recipients do not. This stimulative effect can partially offset employers' increased wage costs through higher consumer demand. Empirical evidence from countries such as the United Kingdom supports this view: following significant minimum wage increases, the predicted unemployment surge failed to materialise, with employment remaining broadly stable.",
        vi: "Các lập luận ủng hộ tăng lương tối thiểu rất đáng kể. Về cơ bản, mức lương tối thiểu có ý nghĩa đảm bảo rằng làm việc toàn thời gian cung cấp thu nhập đủ để đáp ứng các chi phí sinh hoạt cơ bản, giảm sự phụ thuộc vào hệ thống phúc lợi nhà nước. Về mặt kinh tế, người lao động có mức lương thấp có xu hướng tiêu tiền bổ sung ngay lập tức vào hàng hóa và dịch vụ, bơm tiền vào nền kinh tế địa phương."
      },
      body2: {
        en: "Nevertheless, the concerns of businesses — particularly small enterprises and those operating in low-margin sectors — deserve serious consideration. For labour-intensive industries such as hospitality and retail, wage costs can constitute 40-50% of total operating expenses. Significant, rapid wage increases in such sectors may compel businesses to reduce staff hours, accelerate automation, or, in the worst cases, cease trading. These risks are most pronounced in economically depressed regions where productivity levels and business revenues are substantially lower than in prosperous cities. Consequently, a uniform national minimum wage set at a level appropriate for London may be genuinely damaging to small businesses in rural or post-industrial areas.",
        vi: "Tuy nhiên, những lo ngại của các doanh nghiệp — đặc biệt là các doanh nghiệp nhỏ và những người hoạt động trong các lĩnh vực có lợi nhuận thấp — xứng đáng được xem xét nghiêm túc. Đối với các ngành thâm dụng lao động như nhà hàng và bán lẻ, chi phí tiền lương có thể chiếm 40-50% tổng chi phí hoạt động. Việc tăng lương đáng kể, nhanh chóng trong các lĩnh vực như vậy có thể buộc các doanh nghiệp phải giảm giờ làm của nhân viên hoặc thúc đẩy tự động hóa."
      },
      conclusion: {
        en: "In conclusion, raising minimum wages is, in principle, a sound and socially necessary policy, but its success depends heavily on the pace and scale of implementation. Gradual, evidence-based increases that account for regional economic disparities represent the most prudent approach. The goal should be a minimum wage that constitutes a genuine living wage — one that enables workers to participate fully in society — without imposing costs that smaller, economically vulnerable businesses cannot absorb.",
        vi: "Tóm lại, tăng lương tối thiểu, về nguyên tắc, là một chính sách hợp lý và cần thiết về mặt xã hội, nhưng thành công của nó phụ thuộc nhiều vào tốc độ và quy mô thực hiện. Tăng dần, dựa trên bằng chứng có tính đến sự chênh lệch kinh tế khu vực đại diện cho cách tiếp cận thận trọng nhất. Mục tiêu phải là mức lương tối thiểu tạo thành mức lương đủ sống thực sự."
      }
    },
    vocabulary: [
      { word: "wage floor", meaning: "sàn tiền lương" },
      { word: "living wage", meaning: "mức lương đủ sống" },
      { word: "propensity to spend", meaning: "xu hướng chi tiêu" },
      { word: "labour-intensive", meaning: "thâm dụng lao động" },
      { word: "regional disparities", meaning: "sự chênh lệch vùng miền" },
    ],
    structures: [
      "Few debates generate more controversy than ...",
      "Provided such X are calibrated carefully to ...",
      "X have a high propensity to Y, injecting ... in ways that Z do not",
      "This X effect can partially offset Y through ...",
      "The goal should be X that enables ... without imposing costs that Y cannot absorb",
    ]
  },
  // ─────────────────────────────────────────────────────────────────────
  // id 16-20 (added batch 3)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 16,
    title: "Preserving Traditional Culture",
    titleVi: "Bảo tồn văn hóa truyền thống",
    type: "Opinion (Agree/Disagree)",
    typeVi: "Quan điểm (Đồng ý/Không đồng ý)",
    prompt: "As countries become more interconnected, traditional cultures and customs are disappearing. Some people think this is inevitable and mostly positive. Others believe traditional cultures should be actively preserved. Discuss both views and give your own opinion.",
    promptVi: "Khi các quốc gia ngày càng kết nối với nhau, các nền văn hóa và phong tục truyền thống đang biến mất. Một số người nghĩ điều này là không thể tránh khỏi và chủ yếu là tích cực. Những người khác tin rằng văn hóa truyền thống nên được bảo tồn tích cực. Thảo luận cả hai quan điểm và đưa ra ý kiến của bạn.",
    template: "Both views + favour preservation",
    essay: {
      introduction: {
        en: "Globalisation has acted as a powerful solvent on the world's diverse cultural landscape, accelerating the adoption of dominant global languages, fashions, and values at the expense of local traditions. Whilst some welcome this convergence as a path toward greater universal understanding, others view the erosion of indigenous cultures as an irreplaceable loss. This essay argues that whilst cultural evolution is natural and beneficial in many respects, the active preservation of traditional cultures represents both a moral obligation and a pragmatic investment in human diversity.",
        vi: "Toàn cầu hóa đã hoạt động như một dung môi mạnh mẽ trên bức tranh văn hóa đa dạng của thế giới, đẩy nhanh việc áp dụng các ngôn ngữ, thời trang và giá trị toàn cầu chiếm ưu thế với cái giá phải trả là các truyền thống địa phương. Trong khi một số người chào đón sự hội tụ này như một con đường hướng đến sự hiểu biết phổ quát hơn, những người khác coi sự xói mòn của các nền văn hóa bản địa là một mất mát không thể thay thế."
      },
      body1: {
        en: "Those who view cultural change positively argue that no culture has ever been static: exchange, adaptation, and evolution are the lifeblood of human civilisation. Cross-cultural fertilisation has historically produced some of humanity's greatest artistic, culinary, and scientific achievements. Moreover, the spread of certain values — gender equality, human rights, democratic governance — through globalisation has materially improved the lives of millions who were previously constrained by restrictive traditional practices. From this perspective, lamenting cultural loss risks romanticising traditions that may have embedded forms of oppression or inequality.",
        vi: "Những người nhìn nhận sự thay đổi văn hóa một cách tích cực cho rằng không có nền văn hóa nào từng bất biến: trao đổi, thích nghi và tiến hóa là nguồn sống của nền văn minh nhân loại. Sự giao thoa giữa các nền văn hóa về mặt lịch sử đã tạo ra một số thành tựu nghệ thuật, ẩm thực và khoa học vĩ đại nhất của nhân loại."
      },
      body2: {
        en: "Nevertheless, I maintain that the deliberate preservation of traditional cultures is essential. Cultural heritage — encompassing languages, festivals, art forms, culinary traditions, and spiritual practices — constitutes an irreplaceable dimension of human knowledge and identity. When a language dies, entire systems of ecological knowledge, poetic expression, and philosophical understanding are permanently lost, much like the extinction of a biological species. Furthermore, cultural distinctiveness drives tourism and creative industries, providing real economic value to communities. Governments can support preservation without imposing cultural stasis by funding arts programmes, supporting minority language education, and documenting oral traditions — whilst recognising communities' right to evolve on their own terms.",
        vi: "Tuy nhiên, tôi cho rằng việc bảo tồn có chủ đích các nền văn hóa truyền thống là thiết yếu. Di sản văn hóa — bao gồm ngôn ngữ, lễ hội, hình thức nghệ thuật, truyền thống ẩm thực và thực hành tâm linh — tạo thành một chiều kích không thể thay thế của tri thức và bản sắc con người. Khi một ngôn ngữ chết, toàn bộ hệ thống tri thức sinh thái, biểu đạt thơ ca và hiểu biết triết học bị mất vĩnh viễn, giống như sự tuyệt chủng của một loài sinh học."
      },
      conclusion: {
        en: "In conclusion, while some degree of cultural homogenisation may be an inevitable by-product of globalisation, the passive acceptance of cultural extinction would be a profound impoverishment of human experience. A balanced approach that enables communities to engage with the global world while retaining the right to maintain and celebrate their own traditions represents both sound cultural policy and a meaningful expression of respect for human diversity.",
        vi: "Tóm lại, mặc dù một mức độ đồng nhất văn hóa nào đó có thể là sản phẩm phụ không thể tránh khỏi của toàn cầu hóa, nhưng sự chấp nhận thụ động về sự tuyệt chủng văn hóa sẽ là sự nghèo nàn sâu sắc của trải nghiệm con người. Cách tiếp cận cân bằng cho phép các cộng đồng tham gia vào thế giới toàn cầu trong khi giữ quyền duy trì và tôn vinh các truyền thống của riêng họ."
      }
    },
    vocabulary: [
      { word: "cultural homogenisation", meaning: "đồng nhất hóa văn hóa" },
      { word: "cross-cultural fertilisation", meaning: "sự giao thoa giữa các nền văn hóa" },
      { word: "indigenous cultures", meaning: "văn hóa bản địa" },
      { word: "oral traditions", meaning: "truyền thống truyền miệng" },
      { word: "cultural stasis", meaning: "trạng thái đóng băng văn hóa, không tiến hóa" },
    ],
    structures: [
      "X has acted as a powerful solvent on ...",
      "Lamenting X risks romanticising traditions that may have embedded ...",
      "When X dies, entire systems of Y are permanently lost, much like ...",
      "Governments can support X without imposing Y by ...",
      "A balanced approach that enables ... whilst retaining ... represents ...",
    ]
  },
  {
    id: 17,
    title: "Arts Funding (Government)",
    titleVi: "Tài trợ nghệ thuật (từ chính phủ)",
    type: "Opinion (Agree/Disagree)",
    typeVi: "Quan điểm (Đồng ý/Không đồng ý)",
    prompt: "Government funding for arts and culture is a waste of money that could be better spent on more pressing social needs. To what extent do you agree or disagree?",
    promptVi: "Tài trợ của chính phủ cho nghệ thuật và văn hóa là lãng phí tiền bạc mà lẽ ra có thể được sử dụng tốt hơn cho các nhu cầu xã hội cấp thiết hơn. Bạn đồng ý hay không đồng ý ở mức độ nào?",
    template: "Strong disagreement",
    essay: {
      introduction: {
        en: "In times of economic austerity, public arts funding frequently faces calls for reduction or elimination, framed as an unjustifiable luxury when healthcare, education, and social services compete for finite resources. I strongly disagree with this characterisation. Arts and culture are not peripheral indulgences but fundamental contributors to societal wellbeing, economic productivity, and national identity — making government investment in this sector both defensible and essential.",
        vi: "Trong thời kỳ thắt lưng buộc bụng về kinh tế, tài trợ nghệ thuật công thường xuyên phải đối mặt với lời kêu gọi cắt giảm hoặc xóa bỏ, được đóng khung là xa xỉ không thể biện minh khi chăm sóc sức khỏe, giáo dục và dịch vụ xã hội cạnh tranh cho nguồn lực hữu hạn. Tôi không đồng ý mạnh mẽ với đặc điểm hóa này."
      },
      body1: {
        en: "The economic case for arts funding is more robust than its critics acknowledge. The creative industries — encompassing film, music, theatre, architecture, and design — generate substantial economic output, tourism revenues, and employment. A UNESCO report found that cultural and creative industries account for 3.1% of global GDP and employ approximately 30 million people worldwide. Government seed funding typically acts as a catalyst, attracting private sponsorship and enabling small arts organisations to develop into commercially viable enterprises. Moreover, the arts sector generates significant inward investment through cultural tourism: visitors who attend major museums, galleries, and performing arts venues spend money on accommodation, dining, and retail far beyond their ticket price.",
        vi: "Lý lẽ kinh tế cho tài trợ nghệ thuật mạnh mẽ hơn những gì các nhà phê bình thừa nhận. Các ngành công nghiệp sáng tạo — bao gồm điện ảnh, âm nhạc, nhà hát, kiến trúc và thiết kế — tạo ra sản lượng kinh tế đáng kể, doanh thu du lịch và việc làm. Một báo cáo của UNESCO cho thấy các ngành công nghiệp văn hóa và sáng tạo chiếm 3,1% GDP toàn cầu."
      },
      body2: {
        en: "Beyond economics, the social and psychological benefits of arts participation are well-documented. Access to arts and cultural experiences has been linked to improvements in mental health outcomes, reductions in social isolation, enhanced empathy and civic engagement, and stronger community cohesion. Critically, without public funding, access to the arts becomes stratified by income: prestigious performances, exhibitions, and arts education become the preserve of the affluent, deepening social inequality. Government funding democratises access, ensuring that children from all economic backgrounds can engage with their cultural heritage and develop creative capacities that are increasingly valued in the knowledge economy.",
        vi: "Ngoài kinh tế, những lợi ích xã hội và tâm lý của việc tham gia nghệ thuật được ghi chép rõ ràng. Khả năng tiếp cận các trải nghiệm nghệ thuật và văn hóa đã được liên kết với việc cải thiện các kết quả sức khỏe tâm thần, giảm cô lập xã hội, tăng cường sự đồng cảm và tham gia dân sự. Quan trọng là, nếu không có tài trợ công, quyền tiếp cận nghệ thuật trở nên phân tầng theo thu nhập."
      },
      conclusion: {
        en: "In conclusion, the premise that arts funding diverts money from more important causes fundamentally misunderstands the role of culture in human society. Arts investment is not a zero-sum competition with healthcare or education; rather, it complements and strengthens social provision by enhancing wellbeing, generating economic returns, and fostering the social cohesion on which all other public goods depend. Governments that defund the arts are not being fiscally prudent — they are depleting a vital form of social capital.",
        vi: "Tóm lại, tiền đề rằng tài trợ nghệ thuật chuyển hướng tiền từ các nguyên nhân quan trọng hơn về cơ bản hiểu sai vai trò của văn hóa trong xã hội loài người. Đầu tư nghệ thuật không phải là sự cạnh tranh được mất với chăm sóc sức khỏe hay giáo dục; thay vào đó, nó bổ sung và tăng cường cung cấp xã hội bằng cách tăng cường sức khỏe, tạo ra lợi nhuận kinh tế và thúc đẩy sự gắn kết xã hội."
      }
    },
    vocabulary: [
      { word: "austerity", meaning: "thắt lưng buộc bụng, chính sách khắc khổ" },
      { word: "seed funding", meaning: "vốn mồi, tài trợ ban đầu" },
      { word: "cultural tourism", meaning: "du lịch văn hóa" },
      { word: "social cohesion", meaning: "sự gắn kết xã hội" },
      { word: "social capital", meaning: "vốn xã hội" },
    ],
    structures: [
      "X is not a peripheral indulgence but a fundamental contributor to ...",
      "Government seed funding typically acts as a catalyst, attracting ...",
      "Without X, access to Y becomes stratified by ...",
      "X is not a zero-sum competition with Y; rather, it complements ...",
      "Governments that X are not being Y — they are depleting ...",
    ]
  },
  {
    id: 18,
    title: "Extreme Sports",
    titleVi: "Thể thao mạo hiểm",
    type: "Advantages & Disadvantages",
    typeVi: "Ưu điểm & Nhược điểm",
    prompt: "Extreme sports such as skydiving, rock climbing, and BASE jumping have become increasingly popular. What are the advantages and disadvantages of extreme sports? Should they be regulated or banned?",
    promptVi: "Các môn thể thao mạo hiểm như nhảy dù, leo núi và nhảy BASE ngày càng trở nên phổ biến. Ưu điểm và nhược điểm của thể thao mạo hiểm là gì? Chúng có nên được quản lý hay cấm không?",
    template: "Pros/cons + recommend regulation not ban",
    essay: {
      introduction: {
        en: "The past two decades have witnessed a dramatic surge in the popularity of extreme sports, from base jumping off urban skyscrapers to free solo rock climbing at dizzying altitudes. This phenomenon reflects a broader cultural shift toward thrill-seeking and the deliberate challenge of physical and psychological limits. Whilst extreme sports carry undeniable risks, this essay argues that the benefits they offer — physical, psychological, and economic — justify their existence under robust regulatory frameworks rather than prohibition.",
        vi: "Hai thập kỷ qua đã chứng kiến sự tăng vọt đáng kể về mức độ phổ biến của thể thao mạo hiểm, từ nhảy BASE khỏi các tòa nhà chọc trời đô thị đến leo núi đá tự do ở độ cao chóng mặt. Hiện tượng này phản ánh sự thay đổi văn hóa rộng lớn hơn hướng đến việc tìm kiếm cảm giác mạnh và thách thức có chủ ý đối với các giới hạn thể chất và tâm lý."
      },
      body1: {
        en: "The advantages of extreme sports are substantial and span multiple domains. Physically, activities such as mountain biking, surfing, and rock climbing develop exceptional cardiovascular fitness, strength, coordination, and spatial awareness in ways that conventional gym exercise does not. Psychologically, successfully navigating high-stakes challenges has been shown to build genuine self-confidence, resilience, and improved stress management — qualities transferable to professional and personal life. The extreme sports industry also generates significant economic value through equipment sales, tourism, coaching, and media production. Furthermore, the problem-solving and risk-assessment skills developed through extreme sports have demonstrable value in professions requiring high-stakes decision-making, from surgery to military service.",
        vi: "Những lợi thế của thể thao mạo hiểm rất đáng kể và trải rộng trên nhiều lĩnh vực. Về mặt thể chất, các hoạt động như đạp xe núi, lướt sóng và leo núi phát triển thể lực tim mạch đặc biệt, sức mạnh, sự phối hợp và nhận thức không gian theo những cách mà bài tập phòng tập thông thường không làm được. Về mặt tâm lý, việc điều hướng thành công các thách thức có cược cao đã được chứng minh là xây dựng sự tự tin, khả năng phục hồi và quản lý căng thẳng được cải thiện."
      },
      body2: {
        en: "The primary disadvantage is self-evident: extreme sports carry a substantially elevated risk of serious injury or death compared to conventional athletic activities. Fatalities in activities such as BASE jumping and free solo climbing, whilst relatively rare, are final and irreversible. The costs extend beyond individual participants: emergency rescue operations in remote terrain are expensive and place rescue workers in danger, and serious injuries impose significant burdens on public healthcare systems. There is also concern that the romanticisation of extreme sports in media encourages inadequately prepared individuals to attempt activities beyond their capability. However, these risks are better addressed through rigorous licensing requirements, mandatory safety training, and environmental restrictions than through outright prohibition, which would merely push participants underground without eliminating the risks.",
        vi: "Nhược điểm chính là hiển nhiên: thể thao mạo hiểm mang nguy cơ cao hơn đáng kể về chấn thương nghiêm trọng hoặc tử vong so với các hoạt động thể thao thông thường. Tử vong trong các hoạt động như nhảy BASE và leo núi tự do, mặc dù tương đối hiếm, là cuối cùng và không thể đảo ngược. Chi phí vượt ra ngoài người tham gia cá nhân: các hoạt động giải cứu khẩn cấp ở địa hình xa xôi rất tốn kém và đặt nhân viên cứu hộ vào nguy hiểm."
      },
      conclusion: {
        en: "In conclusion, extreme sports offer genuine physical, psychological, and economic benefits that would be forfeited by prohibition. The appropriate response to their inherent risks is not elimination but regulation: mandatory certification programmes, equipment standards, designated practice areas, and insurance requirements can substantially reduce harm whilst preserving the freedom and challenge that make these activities valuable. Ultimately, in a free society, competent adults who understand and accept risk should retain the right to push their limits.",
        vi: "Tóm lại, thể thao mạo hiểm mang lại những lợi ích thể chất, tâm lý và kinh tế thực sự mà sẽ bị mất đi khi cấm đoán. Phản ứng phù hợp với rủi ro vốn có của chúng không phải là loại bỏ mà là quy định: các chương trình chứng nhận bắt buộc, tiêu chuẩn thiết bị, khu vực thực hành được chỉ định và yêu cầu bảo hiểm có thể giảm đáng kể tác hại trong khi vẫn bảo tồn sự tự do và thách thức."
      }
    },
    vocabulary: [
      { word: "thrill-seeking", meaning: "tìm kiếm cảm giác mạnh" },
      { word: "high-stakes", meaning: "có cược cao, rủi ro lớn" },
      { word: "risk assessment", meaning: "đánh giá rủi ro" },
      { word: "mandatory certification", meaning: "chứng nhận bắt buộc" },
      { word: "push underground", meaning: "đẩy hoạt động vào ngầm, không chính thức" },
    ],
    structures: [
      "X reflects a broader cultural shift toward ...",
      "X develop Y in ways that conventional Z does not",
      "These risks are better addressed through X than through Y, which would merely ...",
      "Costs extend beyond individual participants: ...",
      "Competent adults who understand and accept risk should retain the right to ...",
    ]
  },
  {
    id: 19,
    title: "English as Global Language",
    titleVi: "Tiếng Anh là ngôn ngữ toàn cầu",
    type: "Advantages & Disadvantages",
    typeVi: "Ưu điểm & Nhược điểm",
    prompt: "English has become the global language of business, science, and communication. What are the advantages and disadvantages of having a single global language? Do the benefits outweigh the drawbacks?",
    promptVi: "Tiếng Anh đã trở thành ngôn ngữ toàn cầu của kinh doanh, khoa học và giao tiếp. Ưu điểm và nhược điểm của việc có một ngôn ngữ toàn cầu duy nhất là gì? Liệu những lợi ích có vượt trội hơn những bất lợi không?",
    template: "Benefits outweigh drawbacks",
    essay: {
      introduction: {
        en: "The emergence of English as the world's de facto lingua franca represents one of the most significant sociolinguistic developments of the modern era. Whilst this linguistic convergence has undeniably facilitated international commerce, scientific collaboration, and cross-cultural communication, it has simultaneously raised concerns about linguistic inequality and the accelerated decline of the world's minority languages. This essay contends that, on balance, the benefits of a global language outweigh its drawbacks, provided the international community takes active steps to protect linguistic diversity alongside English's continued expansion.",
        vi: "Sự nổi lên của tiếng Anh như ngôn ngữ chung thực tế của thế giới đại diện cho một trong những sự phát triển ngôn ngữ xã hội học quan trọng nhất của thời đại hiện đại. Trong khi sự hội tụ ngôn ngữ này không thể phủ nhận đã tạo điều kiện cho thương mại quốc tế, hợp tác khoa học và giao tiếp xuyên văn hóa, nó đồng thời đặt ra mối lo ngại về bất bình đẳng ngôn ngữ và sự suy giảm nhanh chóng của các ngôn ngữ thiểu số trên thế giới."
      },
      body1: {
        en: "The practical advantages of a global lingua franca are considerable. In scientific research, the adoption of English as the primary publication language has dramatically accelerated the dissemination of knowledge: researchers in Tokyo, Tehran, and Toronto can access and build upon each other's findings without the delay and cost of translation. In international business, shared linguistic norms reduce transaction costs, facilitate negotiations, and enable the formation of multinational teams. The diplomatic sphere similarly benefits: international organisations such as the United Nations, WHO, and WTO operate more efficiently when their participants share a common working language. For individuals, English proficiency has become a powerful economic asset, expanding access to global labour markets and higher education.",
        vi: "Những lợi thế thực tế của một ngôn ngữ chung toàn cầu là đáng kể. Trong nghiên cứu khoa học, việc áp dụng tiếng Anh như ngôn ngữ xuất bản chính đã đẩy nhanh đáng kể việc phổ biến kiến thức: các nhà nghiên cứu ở Tokyo, Tehran và Toronto có thể truy cập và xây dựng dựa trên những phát hiện của nhau mà không cần sự chậm trễ và chi phí dịch thuật."
      },
      body2: {
        en: "Nevertheless, the dominance of English carries significant costs. Native English speakers enjoy an inherent competitive advantage in international settings — in negotiations, academic publishing, and professional networking — that is unrelated to their actual expertise or intelligence. This linguistic privilege constitutes a form of structural inequality. More profoundly, the prestige attached to English accelerates the decline of minority and indigenous languages: UNESCO estimates that approximately half of the world's 7,000 languages may be extinct by the end of this century. Each lost language represents the permanent disappearance of unique conceptual frameworks, cultural knowledge, and ways of understanding the world — an irreversible impoverishment of human cognitive heritage.",
        vi: "Tuy nhiên, sự thống trị của tiếng Anh mang theo những chi phí đáng kể. Người nói tiếng Anh bản địa được hưởng lợi thế cạnh tranh vốn có trong các bối cảnh quốc tế — trong đàm phán, xuất bản học thuật và mạng lưới chuyên nghiệp — không liên quan đến chuyên môn hay trí thông minh thực sự của họ. Đặc quyền ngôn ngữ này tạo thành một hình thức bất bình đẳng cấu trúc."
      },
      conclusion: {
        en: "In conclusion, the emergence of English as a global language has delivered measurable benefits in terms of international communication, scientific progress, and economic integration that justify its continued prominence. However, the linguistic inequality it perpetuates and the threat it poses to minority languages demand active countermeasures: investment in language preservation programmes, recognition of multilingualism in international institutions, and awareness that communicative efficiency must not come at the price of cultural and cognitive homogenisation.",
        vi: "Tóm lại, sự nổi lên của tiếng Anh như một ngôn ngữ toàn cầu đã mang lại những lợi ích có thể đo lường được về giao tiếp quốc tế, tiến bộ khoa học và hội nhập kinh tế. Tuy nhiên, sự bất bình đẳng ngôn ngữ mà nó duy trì và mối đe dọa mà nó đặt ra đối với các ngôn ngữ thiểu số đòi hỏi các biện pháp đối phó tích cực."
      }
    },
    vocabulary: [
      { word: "lingua franca", meaning: "ngôn ngữ chung (dùng giữa người nói các tiếng khác nhau)" },
      { word: "linguistic inequality", meaning: "bất bình đẳng ngôn ngữ" },
      { word: "dissemination of knowledge", meaning: "phổ biến kiến thức" },
      { word: "structural inequality", meaning: "bất bình đẳng cấu trúc" },
      { word: "cognitive heritage", meaning: "di sản nhận thức" },
    ],
    structures: [
      "X represents one of the most significant Y of the modern era",
      "Provided [condition], the benefits of X outweigh its drawbacks",
      "Shared linguistic norms reduce X, facilitate Y, and enable Z",
      "X constitutes a form of structural inequality",
      "Communicative efficiency must not come at the price of ...",
    ]
  },
  {
    id: 20,
    title: "Animal Testing / Ethics",
    titleVi: "Thử nghiệm trên động vật / Đạo đức",
    type: "Opinion (Agree/Disagree)",
    typeVi: "Quan điểm (Đồng ý/Không đồng ý)",
    prompt: "Animal testing for medical and scientific research is morally unjustifiable and should be banned. To what extent do you agree or disagree?",
    promptVi: "Thử nghiệm trên động vật phục vụ nghiên cứu y tế và khoa học là vô đạo đức và nên bị cấm. Bạn đồng ý hay không đồng ý ở mức độ nào?",
    template: "Partially disagree (support with strict limits)",
    essay: {
      introduction: {
        en: "The use of animals in medical and scientific research occupies one of the most contested intersections between scientific progress and ethical obligation. Whilst the suffering inflicted on research animals represents a genuine moral concern that cannot be dismissed, a blanket ban on animal testing would, in the current state of scientific development, carry serious costs for human and animal health alike. I partially disagree with the proposition that animal testing should be banned, arguing instead for a framework of strict ethical oversight, mandatory harm minimisation, and accelerated investment in alternative methods.",
        vi: "Việc sử dụng động vật trong nghiên cứu y tế và khoa học chiếm một trong những giao điểm gây tranh cãi nhất giữa tiến bộ khoa học và nghĩa vụ đạo đức. Trong khi nỗi đau mà động vật nghiên cứu phải gánh chịu đại diện cho một mối lo ngại đạo đức thực sự không thể bác bỏ, việc cấm hoàn toàn thử nghiệm trên động vật sẽ, trong trạng thái phát triển khoa học hiện tại, mang lại những chi phí nghiêm trọng cho cả sức khỏe con người và động vật."
      },
      body1: {
        en: "The ethical case against animal testing is compelling. The sentience of many research animals — particularly mammals such as mice, rats, and primates — is well established: they experience pain, distress, and fear in ways that are morally significant. Subjecting conscious beings to suffering for human benefit without their consent raises profound questions about our obligations toward other species. Furthermore, practical objections complement the ethical ones: animal physiology differs meaningfully from human physiology, and many findings in animal studies fail to translate to human applications. Critics note that reliance on animal models may actually impede medical progress by focusing resources on a research paradigm of limited predictive validity.",
        vi: "Lý lẽ đạo đức chống lại thử nghiệm trên động vật rất thuyết phục. Tính nhận thức của nhiều động vật nghiên cứu — đặc biệt là động vật có vú như chuột, chuột và linh trưởng — được thiết lập rõ ràng: chúng trải nghiệm đau đớn, đau khổ và sợ hãi theo những cách có ý nghĩa về mặt đạo đức. Việc khiến các sinh vật có ý thức phải chịu đựng đau khổ vì lợi ích con người mà không có sự đồng ý của chúng đặt ra những câu hỏi sâu sắc về nghĩa vụ của chúng ta đối với các loài khác."
      },
      body2: {
        en: "However, an immediate total ban would be premature given the current limitations of alternatives. Whilst in vitro cell cultures, organoids, computer modelling, and human tissue testing offer increasingly powerful tools, they cannot yet fully replicate the complexity of whole biological systems as they interact with diseases, drugs, and environmental factors over time. Vaccines, cancer treatments, surgical techniques, and countless medications that save millions of lives annually were developed using animal research. The pragmatic position is to enforce strict application of the 3Rs framework — Replacement, Reduction, Refinement — requiring researchers to eliminate animal testing wherever alternatives exist, minimise animal numbers, and improve welfare standards. Simultaneously, governments and industry should significantly increase funding for alternative method development to hasten the day when animal testing becomes genuinely unnecessary.",
        vi: "Tuy nhiên, lệnh cấm hoàn toàn ngay lập tức sẽ là sớm bởi những hạn chế hiện tại của các giải pháp thay thế. Trong khi nuôi cấy tế bào in vitro, mô hình máy tính và thử nghiệm mô người cung cấp các công cụ ngày càng mạnh mẽ, chúng vẫn chưa thể tái tạo hoàn toàn sự phức tạp của toàn bộ hệ thống sinh học. Vắc-xin, phương pháp điều trị ung thư, kỹ thuật phẫu thuật và vô số loại thuốc cứu hàng triệu sinh mạng hàng năm đã được phát triển bằng nghiên cứu động vật."
      },
      conclusion: {
        en: "In conclusion, the moral imperative to reduce animal suffering and the practical imperative to advance medical science are not irreconcilable opposites but complementary goals that a well-designed regulatory framework can pursue simultaneously. Rather than an immediate ban, society should demand strict enforcement of harm-minimisation principles, accelerated development of alternatives, and a clear ethical commitment that animal testing is a temporary necessity rather than an acceptable permanent practice.",
        vi: "Tóm lại, mệnh lệnh đạo đức để giảm thiểu đau khổ của động vật và mệnh lệnh thực tế để thúc đẩy khoa học y tế không phải là những đối lập không thể dung hòa mà là các mục tiêu bổ sung mà một khuôn khổ quy định được thiết kế tốt có thể theo đuổi đồng thời. Thay vì lệnh cấm ngay lập tức, xã hội nên yêu cầu thực thi nghiêm ngặt các nguyên tắc giảm thiểu tác hại."
      }
    },
    vocabulary: [
      { word: "sentience", meaning: "khả năng cảm nhận, ý thức (của động vật)" },
      { word: "vivisection", meaning: "mổ xẻ động vật sống để thí nghiệm" },
      { word: "in vitro", meaning: "trong ống nghiệm (thí nghiệm không dùng sinh vật sống)" },
      { word: "3Rs framework", meaning: "khung 3R: Thay thế, Giảm thiểu, Cải thiện (trong nghiên cứu động vật)" },
      { word: "predictive validity", meaning: "tính giá trị dự đoán (của mô hình nghiên cứu)" },
    ],
    structures: [
      "X occupies one of the most contested intersections between Y and Z",
      "Subjecting X to Y for Z without their consent raises profound questions about ...",
      "An immediate ban would be premature given the current limitations of ...",
      "The pragmatic position is to enforce strict application of ..., requiring ...",
      "X and Y are not irreconcilable opposites but complementary goals that ...",
    ]
  },
];

export default writingTask2Topics;
