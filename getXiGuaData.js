const rows = document.querySelectorAll('.wrapper-col-all>.table tbody tr')
const data = [];
// 遍历每个tr
rows.forEach(item => {
    const tds = item.querySelectorAll('td');
    data.push({
        name: item.querySelector('.js-rank-detail-btn').textContent,
        id: item.querySelector('.js-rank-detail-btn+em').textContent,
        // 上榜次数
        rankCount: tds[2].textContent.trim(),
        fans: tds[3].textContent,
        avgReadNum: tds[4].textContent,
        sendCount: tds[5].textContent,
        originArtNum: tds[6].textContent,
        originArtReadNum: tds[7].textContent,
        originArtLike: tds[8].textContent,
        xiguaZhiShu: tds[9].textContent
    })
})
JSON.stringify(data)