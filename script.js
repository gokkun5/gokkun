//全部まとめる
const figures = [

{
series:"zyuzyutu",
name:"Luminasta 宿儺 「■」「開」",
type:"lum",
price:1800,
img:"images/zyuzyutu/sukuna_lum.jpg"
},

{
series:"orerebe",
name:"XrossLink 向坂雫",
type:"xros",
price:1200,
img:"images/orerebe/kou_xros.jpg"
},

{
series:"orerebe",
name:"XrossLink 水篠旬",
type:"xros",
price:1400,
img:"images/orerebe/mizu_xros.jpg"
},

{
series:"oba",
name:"T-most アルベド ～純白の悪魔ver.～",
type:"tmost",
price:1300,
img:"images/oba/aru_tmost.jpg"
},

{
series:"miku",
name:"初音ミク Fashion Outdoor",
type:"",
price:1200,
img:"images/miku/miku_auto.jpg"
},

{
series:"naruto",
name:"うちはサスケ GiGO限定",
type: "",
price:1600,
img:"images/naruto/sasuke_gigo.jpg"
},

{
series:"naruto",
name:"うちはイタチ GiGO限定",
type: "",
price:1600,
img:"images/naruto/itati_gigo.jpg"
},

{
series:"naruto",
name:"忍界造形列伝-波風ミナト-",
type: "ninkai",
price:1400,
img:"images/naruto/minato_ninkai.jpg"
},

{
series:"buri",
name:"GLITTER&GLAMOURS　-ハリベル-",
type: "gli",
price:1100,
img:"images/buri/hari_gli.jpg"
},

{
series:"tyen",
name:"Luminasta “チェンソーマン”",
type: "lum",
price:1200,
img:"images/tyen/tyen_lum.jpg"
},

{
series:"tyen",
name:"ハイプレミアムフィギュア“天使の悪魔”",
type: "hi",
price:1500,
img:"images/tyen/tensi_hi.jpg"
},

{
series:"hant",
name:"Grandista　-キルア-",
type: "ex",
price:1300,
img:"images/hant/kirua_gra.jpg"
},

{
series:"hant",
name:"Exc∞d Creative　クロロ・鎮魂歌",
type: "ex",
price:1100,
img:"images/hant/kuroro_ex.jpg"
},

{
series:"zyuzyutu",
name:"FIGURIZMα 伏黒恵 邂逅",
type:"fig",
price:1300,
img:"images/zyuzyutu/fusi_fig.jpg"
},

{
series:"zyuzyutu",
name:"FIGURIZMα 伏黒甚爾 邂逅",
type:"fig",
price:1300,
img:"images/zyuzyutu/touzi_fig.jpg"
},

{
series:"naruto",
name:"Grandista　-うずまきナルト-",
type: ["gra", "72"],
price:1500,
img:"images/naruto/naruto_gra3.jpg"
},

{
series:"naruto",
name:"Grandista　-うずまきナルトⅡ-",
type: "gra",
price:800,
img:"images/naruto/naruto_gra2.jpg"
},

{
series:"db",
name:"SOLID EDGE WORKS-THE出陣-ブロリーⅡ",
type:"syutu",
price:800,
img:"images/DB/burori_syutu.jpg"
},


{
series:"naruto",
name:"NARUTO 72 SERIES -16-　うずまきナルト",
type:"72",
price:800,
img:"images/naruto/naruto_72.jpg"
},

{
series:"naruto",
name:"NARUTO 72 SERIES -16-　うみのイルカ",
type:"72",
price:800,
img:"images/naruto/iruka_72.jpg"
},


{
series:"zyuzyutu",
name:"Grandista　-五条悟-",
type:"gra",
price:2500,
img:"images/zyuzyutu/gozyo_gra.jpg"
},

{
series:"kimetu",
name:"XrossLink 猗窩座 -無限城編-",
type:"xros",
price:1300,
img:"images/kimetu/akaza_xros.jpg"
},

{
series:"kimetu",
name:"XrossLink 冨岡義勇 -無限城編-",
type:"xros",
price:1800,
img:"images/kimetu/tomioka_xros.jpg"
},

{
series:"kimetu",
name:"XrossLink 竈門炭治郎 -無限城編-",
type:"xros",
price:1100,
img:"images/kimetu/tanziro_xros.jpg"
},

{
series:"kimetu",
name:"Grandista　-冨岡義勇-",
type:"gra",
price:1500,
img:"images/kimetu/giyu_gra.jpg"
},

{
series:"orerebe",
name:"水篠旬　ESPREST",
type:"esp",
price:1600,
img:"images/orerebe/mizusino_esp.jpg"
},


{
series:"miku",
name:"雪ミク×クロミ　Trio-Try-iT",
type:"trio",
price:2000,
img:"images/miku/kuromi_miku.jpg"
},

{
series:"miku",
name:"ザクミク",
type:"",
price:1600,
img:"images/miku/miku_zaku.jpg"
},

{
series:"miku",
name:"桜ミク　AMP+～桜ドレスver.～",
type:"",
price:1600,
img:"images/miku/sakuramiku2026.jpg"
},

{
series:"kimetu",
name:"胡蝶しのぶ　GLITTER&GLAMOURS",
type:"gli",
price:1300,
img:"images/kimetu/kotyo_gri.jpg"
},

{
series:"zyuzyutu",
name:"FIGURIZMα　宿儺",
type:"fig",
price:1500,
img:"images/zyuzyutu/sukuna_fig.jpg"
},

{
series:"miku",
name:"初音ミク ぬーどるストッパー　-ヴィンテージドール-",
type:"nusuto",
price:2200,
img:"images/miku/miku_vin.jpg"
},

{
series:"miku",
name:"初音ミク AMP Latidos 2022",
type:"AMP",
price:1000,
img:"images/miku/miku_amp2022.jpg"
},

{
series:"miku",
name:"初音ミク AMP birthday 2023",
type:"AMP",
price:1000,
img:"images/miku/miku_amp2023.jpg"
},

{
series:"miku",
name:"初音ミク AMP birthday 2024",
type:"AMP",
price:1000,
img:"images/miku/miku_amp2024.jpg"
},

{
series:"miku",
name:"初音ミク AMP birthday 2025",
type:"AMP",
price:1400,
img:"images/miku/miku_amp2025.jpg"
},

{
series:"miku",
name:"初音ミク×ラスカル Trio-Try-iT -悪魔-",
type:"trio",
price:2500,
img:"images/miku/miku_akuma.jpg"
},

{
series:"kisekoi",
name:"T-most 喜多川海夢 〜黒江雫ver.〜",
type:"tmost",
price:1200,
img:"images/kisekoi/sizuku_tmost.jpg"
},

{
series:"kusuri",
name:"BRILLIANTフィギュア 猫猫",
type:"bri",
price:900,
img:"images/kusuri/maomao_buri.jpg"
},

{
series:"kusuri",
name:"猫猫 フィギュア～園遊会～",
type:"",
price:800,
img:"images/kusuri/maomao_enyu.jpg"
},

{
series:"zyuzyutu",
name:"MAXIMATIC　五条悟",
type:"ma",
price:1000,
img:"images/zyuzyutu/gozyo_ma.jpg"
},

{
series:"furi-ren",
name:"Grandista -フリーレン-",
type:"gra",
price:900,
img:"images/furi-ren/furi_gra.jpg"
},

{
series:"furi-ren",
name:"MAXIMATIC フェルン",
type:"ma",
price:700,
img:"images/furi-ren/fer_ma.jpg"
},

{
series:"furi-ren",
name:"MAXIMATIC シュタルク",
type:"ma",
price:800,
img:"images/furi-ren/syuta_ma.jpg"
},

{
series:"furi-ren",
name:"MAXIMATIC フリーレン",
type:"ma",
price:700,
img:"images/furi-ren/furi_ma.jpg"
},

{
series:"furi-ren",
name:"MAXIMATIC　フリーレンⅡ",
type:"ma",
price:800,
img:"images/furi-ren/furi_ma2.jpg"
},

{
series:"furi-ren",
name:"MAXIMATIC　ヒンメル",
type:"ma",
price:1000,
img:"images/furi-ren/hin_ma.jpg"
},

{
series:"kimetu",
name:"我妻善逸",
type:"vib",
price:1200,
img:"images/kimetu/kimetu_zen_vib.jpg"
},

{
series:"kimetu",
name:"獪岳",
type:"vib",
price:1000,
img:"images/kimetu/kimetu_kai_vib.jpg"
}

];

function showFigures(){

const search = document.getElementById("search").value.toLowerCase();
const series = document.getElementById("series").value;
const type = document.getElementById("type").value;
const price = document.getElementById("price").value;
const sort = document.getElementById("sort").value;


// 元データをコピー
let filtered = [...figures];


// シリーズ
if(series !== "all"){
filtered = filtered.filter(f => f.series === series);
}


// タイプ
if(type !== "all"){
filtered = filtered.filter(f =>
Array.isArray(f.type) ? f.type.includes(type) : f.type === type
);
}


// 価格
if(price !== "all"){
filtered = filtered.filter(f => f.price == price);
}


// 検索
if(search !== ""){
filtered = filtered.filter(f =>
f.name.toLowerCase().includes(search)
);
}


// ソート
if(sort === "priceLow"){
filtered.sort((a,b) => a.price - b.price);
}

if(sort === "priceHigh"){
filtered.sort((a,b) => b.price - a.price);
}

if(sort === "name"){
filtered.sort((a,b) => a.name.localeCompare(b.name,"ja"));
}


// 表示
let html = "";

filtered.forEach(f => {

html += `
<div class="card">

<img src="${f.img}">
<h3 class="name">${f.name}</h3>
<p class="price">¥ ${f.price}</p>

</div>
`;

});


document.getElementById("figureList").innerHTML = html;

}


showFigures();
