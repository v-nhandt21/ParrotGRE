export const writingTask1Types = [
  {
    id: 1,
    type: "Line Graph",
    typeVi: "Biểu đồ đường",
    icon: "📈",
    description: "Shows trends/changes over time",
    descriptionVi: "Thể hiện xu hướng/thay đổi theo thời gian",
    samplePrompt: "The graph below shows the percentage of households in the UK that owned various electronic devices from 2000 to 2020.",
    samplePromptVi: "Biểu đồ dưới đây cho thấy tỷ lệ phần trăm hộ gia đình ở Anh sở hữu các thiết bị điện tử khác nhau từ năm 2000 đến 2020.",
    keyPhrases: [
      { phrase: "show a dramatic/sharp/steep increase", meaning: "tăng mạnh, đột ngột" },
      { phrase: "show a gradual/steady/slow rise", meaning: "tăng dần, tăng đều" },
      { phrase: "experience a significant decline/fall/drop", meaning: "giảm đáng kể" },
      { phrase: "remain relatively stable/constant", meaning: "duy trì tương đối ổn định" },
      { phrase: "fluctuate (considerably)", meaning: "dao động (đáng kể)" },
      { phrase: "reach a peak/peak at X", meaning: "đạt đỉnh tại X" },
      { phrase: "bottom out/trough at X", meaning: "chạm đáy tại X" },
      { phrase: "level off/plateau", meaning: "ổn định, không thay đổi" },
      { phrase: "overtake / surpass", meaning: "vượt qua" },
    ],
    timeExpressions: [
      "between 2000 and 2020", "over the period", "from X to Y", "during this period",
      "by the end of the period", "in the following decade", "thereafter"
    ],
    template: {
      intro: "The line graph illustrates [what + unit of measurement] in/for [place] over/between [time period].",
      overview: "Overall, it is clear that [main trend 1], while [main trend 2]. The most notable feature is [most striking point].",
      body1: "In [year], [A] stood at [figure], [higher/lower] than [B] which was [figure]. Over the following [period], [A] [trend verb] [adverb], reaching [figure] by [year].",
      body2: "By contrast, [B/C] showed a [different trend]. While [B] [verb], [C] [verb+description]. By [end year], [comparison statement].",
    },
    sampleAnswer: {
      en: "The line graph illustrates the proportion of UK households that possessed different types of electronic devices from 2000 to 2020.\n\nOverall, the ownership of all three devices increased markedly over the period, though at notably different rates. Mobile phone ownership rose most dramatically, eventually becoming the most widely owned device by a significant margin.\n\nIn 2000, personal computers were the most common device, owned by approximately 40% of households, while mobile phones and tablets stood at around 30% and 5% respectively. Over the following decade, computer ownership grew steadily to reach roughly 65% by 2010, before levelling off at this figure for the remainder of the period.\n\nMobile phone ownership, by contrast, surged dramatically from 2000 onwards, rising from 30% to nearly 90% by 2020—more than tripling over the two decades. Tablet ownership, though starting from a negligible base in 2000, grew rapidly from 2010 onwards as the technology became commercially available, reaching approximately 55% of households by the end of the period.",
      vi: "Biểu đồ đường minh họa tỷ lệ hộ gia đình Anh sở hữu các loại thiết bị điện tử khác nhau từ năm 2000 đến 2020.\n\nNhìn chung, quyền sở hữu cả ba thiết bị đều tăng đáng kể trong giai đoạn này, mặc dù ở mức độ khác nhau đáng chú ý. Quyền sở hữu điện thoại di động tăng mạnh nhất, cuối cùng trở thành thiết bị được sở hữu rộng rãi nhất với khoảng cách đáng kể.\n\nVào năm 2000, máy tính cá nhân là thiết bị phổ biến nhất, được khoảng 40% hộ gia đình sở hữu, trong khi điện thoại di động và máy tính bảng lần lượt ở mức khoảng 30% và 5%. Trong thập kỷ tiếp theo, quyền sở hữu máy tính tăng đều đặn đến khoảng 65% vào năm 2010, trước khi ổn định ở con số này trong phần còn lại của giai đoạn."
    },
    samplePrompt2: "The graph below shows CO2 emissions per capita in four countries (USA, China, India, and Germany) between 1990 and 2020.",
    samplePromptVi2: "Biểu đồ dưới đây cho thấy lượng phát thải CO2 bình quân đầu người ở bốn quốc gia (Mỹ, Trung Quốc, Ấn Độ và Đức) từ năm 1990 đến 2020.",
    sampleAnswer2: {
      en: "The line graph compares CO2 emissions per capita in the United States, China, India, and Germany over a thirty-year period from 1990 to 2020.\n\nOverall, the USA consistently recorded the highest per-capita emissions throughout, though these declined over time. Germany also showed a downward trend, while China experienced significant growth. India, despite rising, remained the lowest emitter throughout the period.\n\nIn 1990, the USA emitted approximately 20 tonnes of CO2 per person, substantially above Germany at around 12 tonnes. China and India stood at considerably lower levels of roughly 2.5 and 0.8 tonnes respectively. By 2005, the USA had declined modestly to around 18 tonnes, while Germany fell more steeply to approximately 9 tonnes.\n\nThe most dramatic change occurred in China, whose emissions surged from 2.5 tonnes in 1990 to nearly 8 tonnes by 2020, overtaking Germany around 2005. The USA continued to decline, reaching roughly 14 tonnes by 2020. India grew steadily but remained the lowest at approximately 2 tonnes by the end of the period.",
      vi: "Biểu đồ đường so sánh lượng phát thải CO2 bình quân đầu người ở Mỹ, Trung Quốc, Ấn Độ và Đức trong 30 năm từ 1990 đến 2020.\n\nNhìn chung, Mỹ liên tục ghi nhận mức phát thải bình quân đầu người cao nhất, mặc dù giảm dần theo thời gian. Đức cũng cho thấy xu hướng giảm, trong khi Trung Quốc tăng đáng kể. Ấn Độ, dù tăng, vẫn là nước phát thải thấp nhất trong suốt giai đoạn.\n\nNăm 1990, Mỹ phát thải khoảng 20 tấn CO2 mỗi người, cao hơn đáng kể so với Đức ở mức 12 tấn. Trung Quốc và Ấn Độ ở mức thấp hơn nhiều, lần lượt khoảng 2,5 và 0,8 tấn. Đến năm 2005, Mỹ giảm nhẹ xuống còn khoảng 18 tấn, trong khi Đức giảm mạnh hơn xuống còn khoảng 9 tấn.\n\nSự thay đổi ấn tượng nhất xảy ra ở Trung Quốc, nước có lượng phát thải tăng vọt từ 2,5 tấn năm 1990 lên gần 8 tấn vào năm 2020, vượt qua Đức vào khoảng năm 2005. Mỹ tiếp tục giảm xuống còn khoảng 14 tấn vào năm 2020. Ấn Độ tăng đều nhưng vẫn thấp nhất ở mức khoảng 2 tấn vào cuối giai đoạn."
    }
  },
  {
    id: 2,
    type: "Bar Chart",
    typeVi: "Biểu đồ cột",
    icon: "📊",
    description: "Shows comparisons between categories",
    descriptionVi: "So sánh giữa các nhóm/danh mục",
    samplePrompt: "The bar chart below shows the percentage of men and women in employment in six European countries in 2015.",
    samplePromptVi: "Biểu đồ cột dưới đây cho thấy tỷ lệ phần trăm nam và nữ có việc làm ở sáu quốc gia châu Âu vào năm 2015.",
    keyPhrases: [
      { phrase: "the highest/lowest figure was recorded in X", meaning: "con số cao/thấp nhất được ghi nhận ở X" },
      { phrase: "X accounted for the largest/smallest proportion", meaning: "X chiếm tỷ lệ lớn/nhỏ nhất" },
      { phrase: "followed closely by", meaning: "tiếp theo sau là" },
      { phrase: "in comparison / by contrast", meaning: "trong khi so sánh / ngược lại" },
      { phrase: "considerably higher/lower than", meaning: "cao/thấp hơn đáng kể so với" },
      { phrase: "roughly double/triple that of", meaning: "gấp đôi/ba lần so với" },
      { phrase: "similar to / comparable with", meaning: "tương tự như" },
    ],
    template: {
      intro: "The bar chart compares [what] in/for [place/category] in/during [year/period].",
      overview: "Overall, [main finding about highest/lowest]. It is also clear that [second main trend].",
      body1: "With regard to [first category], [A] had the highest/lowest figure at [X%/number], compared with [B] which recorded [Y%]. [C] showed a similar pattern, with [figure].",
      body2: "Turning to [second category], the pattern was [similar/different]. [D] led with [figure], while [E] and [F] recorded [figures] respectively.",
    },
    sampleAnswer: {
      en: "The bar chart compares male and female employment rates across six European nations in 2015.\n\nOverall, employment rates for men exceeded those of women in every country shown, though the size of this gap varied considerably. Switzerland recorded the highest employment figures for both genders.\n\nSweden had the highest female employment rate at 74%, closely followed by Switzerland at 73% and Germany at 67%. In contrast, Italy had the lowest proportion of women in employment at just 47%, with Spain also showing a comparatively low figure of 52%.\n\nRegarding male employment, Switzerland recorded the highest rate at 84%, with Germany (80%) and Sweden (79%) also performing strongly. Italy again showed the lowest male employment rate at 63%, though this still exceeded the female employment rate in all other countries. Notably, the gender employment gap was most pronounced in Italy (16 percentage points) and smallest in Sweden (5 percentage points).",
      vi: "Biểu đồ cột so sánh tỷ lệ việc làm của nam và nữ tại sáu quốc gia châu Âu năm 2015.\n\nNhìn chung, tỷ lệ việc làm của nam cao hơn nữ ở mọi quốc gia được hiển thị, mặc dù khoảng cách này biến động đáng kể. Thụy Sĩ ghi nhận số liệu việc làm cao nhất cho cả hai giới."
    },
    samplePrompt2: "The bar chart below shows the average number of hours spent on leisure activities per week by adults in five countries in 2022.",
    samplePromptVi2: "Biểu đồ cột dưới đây cho thấy số giờ trung bình dành cho các hoạt động giải trí mỗi tuần của người trưởng thành ở năm quốc gia vào năm 2022.",
    sampleAnswer2: {
      en: "The bar chart compares the average weekly hours that adults devoted to leisure activities in five countries — the USA, France, Japan, Brazil, and Australia — in 2022.\n\nOverall, significant variation existed across the five nations, with Brazilians spending the most time on leisure and Japanese adults spending considerably less than their counterparts elsewhere.\n\nAmong the five countries, Brazil recorded the highest average leisure time at approximately 32 hours per week, followed closely by Australia at around 28 hours. France came in third place with roughly 25 hours. By contrast, the USA, despite its wealth, averaged only 22 hours of leisure time weekly, possibly reflecting its longer working culture.\n\nJapan recorded by far the lowest figure, with adults spending just 14 hours per week on leisure activities — less than half that of Brazil. This likely reflects Japan's well-documented long working hours culture and the high value placed on professional dedication in Japanese society.",
      vi: "Biểu đồ cột so sánh số giờ trung bình mỗi tuần mà người trưởng thành dành cho các hoạt động giải trí ở năm quốc gia — Mỹ, Pháp, Nhật Bản, Brazil và Úc — vào năm 2022.\n\nNhìn chung, có sự khác biệt đáng kể giữa năm quốc gia, với người Brazil dành nhiều thời gian giải trí nhất và người Nhật dành ít hơn đáng kể so với các nước khác.\n\nTrong năm quốc gia, Brazil ghi nhận thời gian giải trí trung bình cao nhất ở mức khoảng 32 giờ mỗi tuần, tiếp theo là Úc với khoảng 28 giờ. Pháp đứng thứ ba với khoảng 25 giờ. Ngược lại, Mỹ, dù giàu có, chỉ trung bình 22 giờ giải trí mỗi tuần, có thể phản ánh văn hóa làm việc lâu hơn.\n\nNhật Bản ghi nhận con số thấp nhất, với người trưởng thành chỉ dành 14 giờ mỗi tuần cho các hoạt động giải trí — ít hơn một nửa so với Brazil. Điều này có thể phản ánh văn hóa làm việc lâu được ghi nhận rõ ràng của Nhật Bản."
    }
  },
  {
    id: 3,
    type: "Pie Chart",
    typeVi: "Biểu đồ tròn",
    icon: "🥧",
    description: "Shows proportions/percentages of a whole",
    descriptionVi: "Thể hiện tỷ lệ phần trăm của một tổng thể",
    samplePrompt: "The pie charts below show the household expenditure in the UK in 1980 and 2020.",
    samplePromptVi: "Các biểu đồ tròn dưới đây cho thấy chi tiêu hộ gia đình ở Anh năm 1980 và 2020.",
    keyPhrases: [
      { phrase: "accounted for / made up / comprised", meaning: "chiếm (tỷ lệ)" },
      { phrase: "the largest / dominant / greatest share", meaning: "phần lớn nhất / chiếm ưu thế" },
      { phrase: "a marginal / negligible proportion", meaning: "tỷ lệ nhỏ, không đáng kể" },
      { phrase: "exactly / precisely / approximately", meaning: "chính xác / khoảng" },
      { phrase: "the combined total of X and Y", meaning: "tổng cộng của X và Y" },
      { phrase: "more than / less than half", meaning: "hơn / ít hơn một nửa" },
    ],
    template: {
      intro: "The pie charts illustrate the breakdown of [what] in [place] in [years].",
      overview: "Overall, [most dominant category] represented the largest share in both years, while [notable changes] occurred over the period.",
      body1: "In [year 1], [A] accounted for the largest proportion at [X%], followed by [B] at [Y%] and [C] at [Z%]. Together, [A and B] made up [combined %] of the total.",
      body2: "By [year 2], the picture had changed [considerably/slightly]. The share of [A] [increased/decreased] to [X%], while [B] saw a [notable/marginal] [rise/fall] to [Y%]. [C], by contrast, [remained stable/changed to Z%].",
    },
    sampleAnswer: {
      en: "The pie charts compare household expenditure patterns in the United Kingdom in 1980 and 2020.\n\nOverall, housing represented the single largest expenditure category in both years, while the proportions spent on food and leisure changed most significantly over the forty-year period.\n\nIn 1980, housing accounted for the largest share at 35%, followed by food at 28% and transport at 15%. Leisure and entertainment comprised just 10% of household budgets, with other expenses making up the remaining 12%.\n\nBy 2020, the distribution had shifted noticeably. Housing remained dominant, increasing marginally to 37%, while the proportion spent on food dropped considerably to just 17%—a fall of 11 percentage points. Leisure spending, by contrast, grew substantially to 22%, reflecting changing consumer priorities. Transport's share remained relatively stable at 14%, while other expenditure decreased slightly to 10%.",
      vi: "Các biểu đồ tròn so sánh mô hình chi tiêu hộ gia đình ở Vương quốc Anh vào năm 1980 và 2020.\n\nNhìn chung, nhà ở đại diện cho danh mục chi tiêu lớn nhất duy nhất trong cả hai năm, trong khi tỷ lệ chi cho thực phẩm và giải trí thay đổi đáng kể nhất trong giai đoạn 40 năm."
    },
    samplePrompt2: "The two pie charts below show the sources of electricity generation in a European country in 2000 and 2020.",
    samplePromptVi2: "Hai biểu đồ tròn dưới đây cho thấy các nguồn sản xuất điện ở một quốc gia châu Âu vào năm 2000 và 2020.",
    sampleAnswer2: {
      en: "The two pie charts compare the proportions of electricity generated from different energy sources in a European country in 2000 and 2020.\n\nOverall, the most significant change over the two decades was a considerable shift away from fossil fuels towards renewable energy sources. Coal, which dominated in 2000, had been substantially reduced by 2020.\n\nIn 2000, coal accounted for the largest share of electricity generation at 45%, followed by natural gas at 30%. Nuclear power contributed 15%, while renewable sources — wind and solar combined — made up just 5%. Other sources accounted for the remaining 5%.\n\nBy 2020, the picture had changed dramatically. Renewable energy had grown to represent 35% of total generation, with wind power at 20% and solar at 15%. Gas remained relatively stable at 25%, while coal had fallen sharply to just 18%. Nuclear power's share also declined slightly to 12%. These changes reflect a deliberate policy shift towards cleaner energy in the country over the period.",
      vi: "Hai biểu đồ tròn so sánh tỷ lệ điện được sản xuất từ các nguồn năng lượng khác nhau ở một quốc gia châu Âu vào năm 2000 và 2020.\n\nNhìn chung, sự thay đổi đáng kể nhất trong hai thập kỷ là sự chuyển dịch đáng kể từ nhiên liệu hóa thạch sang các nguồn năng lượng tái tạo. Than đá, vốn chiếm ưu thế vào năm 2000, đã giảm đáng kể vào năm 2020.\n\nNăm 2000, than đá chiếm tỷ trọng lớn nhất trong sản xuất điện ở mức 45%, tiếp theo là khí đốt tự nhiên ở mức 30%. Điện hạt nhân đóng góp 15%, trong khi năng lượng tái tạo — gió và mặt trời kết hợp — chỉ chiếm 5%. Các nguồn khác chiếm 5% còn lại.\n\nĐến năm 2020, bức tranh đã thay đổi đáng kể. Năng lượng tái tạo đã tăng lên chiếm 35% tổng sản xuất, trong đó gió chiếm 20% và mặt trời 15%. Khí đốt vẫn tương đối ổn định ở mức 25%, trong khi than đá giảm mạnh xuống chỉ còn 18%. Tỷ trọng điện hạt nhân cũng giảm nhẹ xuống 12%."
    }
  },
  {
    id: 4,
    type: "Table",
    typeVi: "Bảng số liệu",
    icon: "📋",
    description: "Shows data in rows and columns for comparison",
    descriptionVi: "Thể hiện dữ liệu theo hàng và cột để so sánh",
    samplePrompt: "The table below shows the average monthly cost of living in five major cities in 2023.",
    samplePromptVi: "Bảng dưới đây cho thấy chi phí sinh hoạt trung bình hàng tháng ở năm thành phố lớn năm 2023.",
    keyPhrases: [
      { phrase: "according to the data / the table shows", meaning: "theo dữ liệu / bảng cho thấy" },
      { phrase: "the most/least expensive city for X", meaning: "thành phố đắt/rẻ nhất cho X" },
      { phrase: "at $X per month", meaning: "ở mức $X mỗi tháng" },
      { phrase: "significantly more than / less than", meaning: "nhiều/ít hơn đáng kể so với" },
      { phrase: "the overall cost of living was highest in", meaning: "chi phí sinh hoạt tổng thể cao nhất ở" },
      { phrase: "in comparison, / whereas", meaning: "trong khi so sánh / trong khi đó" },
    ],
    template: {
      intro: "The table provides data on [what] in/for [place/group] in [year/period].",
      overview: "Overall, [city/country A] was the most expensive/cheapest in terms of [category], while [B] stood out for [other category].",
      body1: "Looking at [category 1], [A] had the highest figure at [X], compared to [B] at [Y] and [C] at [Z]. This means that [A] was approximately [X times] more expensive than [C] in this category.",
      body2: "With regard to [category 2], the pattern was [similar/reversed/more varied]. [D] recorded the highest figure at [X], while [E] offered the most affordable option at [Y].",
    },
    sampleAnswer: {
      en: "The table presents average monthly living costs in five international cities in 2023, broken down into rent, food, transport, and leisure categories.\n\nOverall, Singapore had the highest total cost of living at $3,200 per month, while Bangkok offered the most affordable lifestyle at $1,100. The greatest variation between cities was observed in rental costs.\n\nRegarding accommodation, Singapore was by far the most expensive, with average monthly rent of $1,800, compared to just $350 in Bangkok—a difference of over five times. London and Sydney both recorded high rental costs at $1,600 and $1,500 respectively, while New York fell between these figures at $1,700.\n\nFood and transport costs showed a more compressed range. Singapore again ranked highest for food at $500 per month, followed closely by London at $480. Bangkok was the cheapest for both food ($200) and transport ($80), contributing significantly to its overall affordability advantage.",
      vi: "Bảng trình bày chi phí sinh hoạt trung bình hàng tháng ở năm thành phố quốc tế năm 2023, được chia nhỏ thành các danh mục thuê nhà, thực phẩm, giao thông và giải trí.\n\nNhìn chung, Singapore có tổng chi phí sinh hoạt cao nhất ở mức 3.200 đô la mỗi tháng, trong khi Bangkok cung cấp lối sống phải chăng nhất ở mức 1.100 đô la."
    },
    samplePrompt2: "The table below shows data on international tourist arrivals (millions) and tourism revenue (USD billions) for five countries in 2019.",
    samplePromptVi2: "Bảng dưới đây cho thấy dữ liệu về lượng khách du lịch quốc tế (triệu người) và doanh thu du lịch (tỷ USD) của năm quốc gia vào năm 2019.",
    sampleAnswer2: {
      en: "The table presents data on international tourist arrivals and corresponding revenue for five countries — France, Spain, the USA, China, and Italy — in 2019.\n\nOverall, France attracted the most tourists, but the USA generated by far the highest revenue. There was no direct correlation between visitor numbers and income, suggesting significant differences in tourist spending across destinations.\n\nFrance led the world in tourist arrivals with 89.4 million visitors, followed by Spain with 83.7 million. Italy received 64.5 million tourists, while China and the USA attracted 65.7 and 79.3 million respectively. Despite ranking only fourth in arrivals, the USA earned the most revenue at $214.1 billion, nearly double France's $63.8 billion and almost three times Spain's $79.7 billion.\n\nChina, despite substantial visitor numbers, generated $35.8 billion — the lowest of all five countries — perhaps reflecting lower average spending per visitor. Italy earned $49.6 billion. These figures illustrate that tourist numbers alone do not determine a country's tourism income, as destination pricing, accommodation costs, and visitor duration all play critical roles.",
      vi: "Bảng trình bày dữ liệu về lượng khách du lịch quốc tế và doanh thu tương ứng của năm quốc gia — Pháp, Tây Ban Nha, Mỹ, Trung Quốc và Ý — vào năm 2019.\n\nNhìn chung, Pháp thu hút nhiều khách du lịch nhất, nhưng Mỹ tạo ra doanh thu cao nhất. Không có mối tương quan trực tiếp giữa số lượng khách và thu nhập, cho thấy sự khác biệt đáng kể trong chi tiêu của khách du lịch tại các điểm đến.\n\nPháp dẫn đầu thế giới về lượng khách du lịch với 89,4 triệu khách, tiếp theo là Tây Ban Nha với 83,7 triệu. Ý đón 64,5 triệu khách, trong khi Trung Quốc và Mỹ lần lượt thu hút 65,7 và 79,3 triệu. Dù chỉ xếp thứ tư về lượng khách, Mỹ kiếm được doanh thu cao nhất là 214,1 tỷ đô la, gần gấp đôi 63,8 tỷ của Pháp và gần gấp ba 79,7 tỷ của Tây Ban Nha."
    }
  },
  {
    id: 5,
    type: "Process Diagram",
    typeVi: "Sơ đồ quy trình",
    icon: "⚙️",
    description: "Describes how something is made or how a process works",
    descriptionVi: "Mô tả cách làm ra một thứ gì đó hoặc quy trình hoạt động",
    samplePrompt: "The diagram below illustrates the process of how paper is recycled.",
    samplePromptVi: "Sơ đồ dưới đây minh họa quy trình tái chế giấy.",
    keyPhrases: [
      { phrase: "the process begins with / commences when", meaning: "quá trình bắt đầu với / bắt đầu khi" },
      { phrase: "in the first stage / initially", meaning: "ở giai đoạn đầu / ban đầu" },
      { phrase: "subsequently / following this / next", meaning: "tiếp theo sau đó" },
      { phrase: "once X has been completed", meaning: "một khi X đã hoàn thành" },
      { phrase: "is then passed to / fed into / transferred to", meaning: "sau đó được chuyển đến / đưa vào" },
      { phrase: "this results in / producing", meaning: "điều này dẫn đến / tạo ra" },
      { phrase: "in the final stage / ultimately", meaning: "ở giai đoạn cuối / cuối cùng" },
      { phrase: "the cycle is complete when", meaning: "chu trình hoàn tất khi" },
    ],
    template: {
      intro: "The diagram illustrates the [number]-stage process by which [what is produced/how something works].",
      overview: "Overall, the process involves [number] distinct stages, beginning with [first stage] and culminating in [final stage/product]. [Note if it is a cycle or linear process].",
      body1: "The process commences with [stage 1 description]. [Materials/substances] are then [action] in order to [purpose]. Following this, [stage 2] occurs, during which [description].",
      body2: "In the subsequent stages, [stage 3] involves [description]. Once [condition], the [material/product] is [action]. Finally, [last stage description], resulting in [end product].",
    },
    sampleAnswer: {
      en: "The diagram illustrates the seven-stage process through which used paper is collected, processed, and recycled into new paper products.\n\nOverall, the recycling process is a linear sequence that transforms waste paper into reusable raw material, ultimately producing new paper ready for distribution.\n\nThe process begins with the collection of waste paper from households, offices, and recycling bins, which is then transported to a recycling facility. In the initial processing stage, the paper is sorted by type and quality, after which it is shredded and mixed with water and chemicals in large vats to create a watery pulp mixture.\n\nThis pulp is subsequently cleaned to remove contaminants such as ink, staples, and adhesives through a filtering and de-inking process. The cleaned pulp is then spread across a flat screen or mesh, where water drains away and the fibres bond together to form sheets. These sheets are pressed and dried using heated rollers, producing smooth, flat paper. In the final stage, the recycled paper is wound onto large reels and cut to standard sizes before being distributed to consumers or manufacturers.",
      vi: "Sơ đồ minh họa quy trình bảy giai đoạn mà qua đó giấy đã qua sử dụng được thu gom, xử lý và tái chế thành các sản phẩm giấy mới.\n\nNhìn chung, quy trình tái chế là một chuỗi tuyến tính biến đổi giấy thải thành nguyên liệu thô có thể tái sử dụng, cuối cùng sản xuất giấy mới sẵn sàng để phân phối."
    },
    samplePrompt2: "The diagram below shows how solar panels generate electricity for use in homes.",
    samplePromptVi2: "Sơ đồ dưới đây cho thấy cách các tấm pin mặt trời tạo ra điện để sử dụng trong nhà.",
    sampleAnswer2: {
      en: "The diagram illustrates the process by which solar panels convert sunlight into electricity that can be used by households.\n\nOverall, the process involves five distinct stages, beginning with the absorption of sunlight and ending with the distribution of usable electricity throughout the home via a standard electrical system.\n\nThe process begins when sunlight strikes the solar panels, which are typically installed on the roof of a house. The panels, composed of photovoltaic cells, absorb the solar energy and convert it directly into direct current (DC) electricity. This raw electricity cannot be used in homes as it stands, since household appliances require alternating current (AC).\n\nConsequently, the DC electricity is fed into an inverter, which converts it into AC electricity suitable for domestic use. The AC electricity then passes through a meter that monitors the amount of electricity generated. From there, the current flows into the home's electrical circuit, powering appliances and lighting throughout the property. Any surplus electricity not consumed by the household can be exported back to the national grid, often earning the homeowner a financial credit.",
      vi: "Sơ đồ minh họa quá trình các tấm pin mặt trời chuyển đổi ánh sáng mặt trời thành điện có thể sử dụng trong hộ gia đình.\n\nNhìn chung, quá trình bao gồm năm giai đoạn riêng biệt, bắt đầu từ việc hấp thụ ánh sáng mặt trời và kết thúc bằng việc phân phối điện sử dụng được trong toàn bộ ngôi nhà thông qua hệ thống điện tiêu chuẩn.\n\nQuá trình bắt đầu khi ánh sáng mặt trời chiếu vào các tấm pin mặt trời, thường được lắp đặt trên mái nhà. Các tấm pin, được cấu tạo từ các tế bào quang điện, hấp thụ năng lượng mặt trời và chuyển đổi trực tiếp thành điện một chiều (DC). Điện thô này không thể sử dụng trong nhà vì các thiết bị gia dụng yêu cầu điện xoay chiều (AC).\n\nDo đó, điện DC được đưa vào bộ biến tần, chuyển đổi nó thành điện AC phù hợp để sử dụng trong nhà. Điện AC sau đó đi qua đồng hồ đo lượng điện được tạo ra. Điện thừa không được tiêu thụ có thể xuất ngược lại lưới điện quốc gia."
    }
  },
  {
    id: 6,
    type: "Map / Plan",
    typeVi: "Bản đồ / Sơ đồ mặt bằng",
    icon: "🗺️",
    description: "Describes changes to a place or compares two maps",
    descriptionVi: "Mô tả thay đổi của một địa điểm hoặc so sánh hai bản đồ",
    samplePrompt: "The maps below show the town of Riverside in 1970 and the present day.",
    samplePromptVi: "Các bản đồ dưới đây cho thấy thị trấn Riverside vào năm 1970 và hiện tại.",
    keyPhrases: [
      { phrase: "to the north/south/east/west of", meaning: "ở phía bắc/nam/đông/tây của" },
      { phrase: "in the centre/middle of", meaning: "ở trung tâm/giữa" },
      { phrase: "adjacent to / next to / beside", meaning: "liền kề với / bên cạnh" },
      { phrase: "has been replaced by / converted into", meaning: "đã được thay thế bởi / chuyển đổi thành" },
      { phrase: "has been demolished / knocked down", meaning: "đã bị phá dỡ / đập xuống" },
      { phrase: "a new X has been constructed/built", meaning: "một X mới đã được xây dựng" },
      { phrase: "remains unchanged / still stands", meaning: "vẫn không thay đổi / vẫn còn đó" },
      { phrase: "has been extended / expanded", meaning: "đã được mở rộng" },
      { phrase: "the road has been widened / rerouted", meaning: "con đường đã được mở rộng / thay đổi lộ trình" },
    ],
    template: {
      intro: "The maps compare [place name] in [year 1] with its [current/later] layout in [year 2], revealing [general observation].",
      overview: "Overall, [place] has undergone [significant/considerable/dramatic] transformation over the [X-year] period. The most notable changes include [1-2 key changes], while [features that remain unchanged].",
      body1: "In [year 1], the [area/town] featured [description of original features, location references]. [Feature A] was located [position], while [Feature B] occupied [position].",
      body2: "By [year 2], the area had changed considerably. [Feature A] has been replaced by [new feature], and [Feature B] was [change]. A new [building/road/park] has been constructed [position]. Notably, [feature] remains unchanged in [location].",
    },
    sampleAnswer: {
      en: "The two maps illustrate the development of the town of Riverside between 1970 and the present day, revealing substantial urban transformation over the fifty-year period.\n\nOverall, Riverside has undergone dramatic expansion and modernisation, with the replacement of industrial and agricultural land by residential and commercial developments, though the original town centre has been largely preserved.\n\nIn 1970, Riverside was a modest settlement centred on a main high street running east to west, flanked by a market to the north and a small park to the south. Farmland occupied the eastern periphery, while a factory and industrial zone dominated the western outskirts.\n\nBy the present day, the changes are substantial. The farmland to the east has been replaced by a large housing estate, while the industrial zone to the west has been demolished and converted into a modern shopping centre. The park has been expanded considerably, and a new school has been constructed to the south of the high street. The main road through the town has been widened and a roundabout introduced at the eastern entrance. The market to the north, however, remains largely unchanged.",
      vi: "Hai bản đồ minh họa sự phát triển của thị trấn Riverside từ năm 1970 đến ngày nay, cho thấy sự biến đổi đô thị đáng kể trong 50 năm qua.\n\nNhìn chung, Riverside đã trải qua sự mở rộng và hiện đại hóa đáng kể, với việc thay thế đất công nghiệp và nông nghiệp bằng các khu dân cư và thương mại."
    },
    samplePrompt2: "The two maps below show the layout of a university campus in 2000 and now, following a major expansion.",
    samplePromptVi2: "Hai bản đồ dưới đây cho thấy sơ đồ khuôn viên trường đại học vào năm 2000 và hiện nay, sau một đợt mở rộng lớn.",
    sampleAnswer2: {
      en: "The two maps illustrate the changes that have taken place at a university campus between 2000 and the present day as a result of significant expansion.\n\nOverall, the campus has grown considerably, with new academic and recreational facilities added to accommodate a larger student population. Several original buildings have been relocated or replaced, while the central library has remained in its original position.\n\nIn 2000, the campus was relatively compact. A central library occupied the middle of the site, flanked by two lecture buildings to the east and west. Student accommodation was confined to the northern edge, and a small sports field lay to the south. A car park was located at the main entrance to the east.\n\nBy the present day, the campus has expanded significantly, particularly to the south and west. The sports field has been replaced by a new student union building and a gymnasium, while additional lecture halls have been constructed to the west. A new hall of residence has been built to the north, more than doubling accommodation capacity. The car park has been converted to a pedestrian plaza, with parking relocated underground. Notably, the central library has been retained and extended to the rear.",
      vi: "Hai bản đồ minh họa những thay đổi diễn ra tại khuôn viên trường đại học từ năm 2000 đến nay do đợt mở rộng đáng kể.\n\nNhìn chung, khuôn viên đã mở rộng đáng kể, với các cơ sở học thuật và giải trí mới được thêm vào để đáp ứng số lượng sinh viên lớn hơn. Nhiều tòa nhà ban đầu đã được di chuyển hoặc thay thế, trong khi thư viện trung tâm vẫn ở vị trí ban đầu.\n\nNăm 2000, khuôn viên tương đối nhỏ gọn. Thư viện trung tâm nằm ở giữa, hai bên là hai tòa nhà giảng đường ở phía đông và tây. Khu ký túc xá ở phía bắc và sân thể thao nhỏ ở phía nam. Bãi đỗ xe nằm ở lối vào chính phía đông.\n\nĐến nay, khuôn viên mở rộng đáng kể về phía nam và tây. Sân thể thao được thay bằng nhà sinh viên và phòng tập thể dục. Thư viện trung tâm được giữ nguyên và mở rộng về phía sau."
    }
  },
];

export default writingTask1Types;
