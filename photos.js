// 共通の写真リスト（すべてのページ共通）
const PHOTOS = [
  {
    src: "photos/tengu.JPG",
    caption_en: "Mt. Nishitengudake",
    caption_ja: "西天狗岳"
  },
  {
    src: "photos/antwerpen.JPG",
    caption_en: "Brabo Foutain",
    caption_ja: "ブラボーの噴水"
  },
  {
    src: "photos/ariake.JPG",
    caption_en: "Ariake Beach",
    caption_ja: "有明浜"
  },
  {
    src: "photos/blizzard.JPG",
    caption_en: "Sognsvann Lake",
    caption_ja: "ソグンスヴァン湖"
  },
  {
    src: "photos/brocken.JPEG",
    caption_en: "Brocken spectre",
    caption_ja: "ブロッケン現象"
  },
  {
    src: "photos/brubridge.JPG",
    caption_en: "Gray-Kroonbrug",
    caption_ja: "グレイクルーン橋"
  },
  {
    src: "photos/bruge.JPG",
    caption_en: "Bruge",
    caption_ja: "ブルッヘ"
  },
  {
    src: "photos/bruhome.JPG",
    caption_en: "From the boarding house in Brussels",
    caption_ja: "ブリュッセルの下宿先から"
  },
  {
    src: "photos/brumorning.JPG",
    caption_en: "From the boarding house in Brussels",
    caption_ja: "ブリュッセルの下宿先から"
  },
  {
    src: "photos/brunight.JPG",
    caption_en: "One night in Brussels",
    caption_ja: "ブリュッセルのある夜"
  },
  {
    src: "photos/brusnow.JPG",
    caption_en: "From the boarding house at Brussels",
    caption_ja: "ブリュッセルの下宿先から"
  },
  {
    src: "photos/bruwheel.JPG",
    caption_en: "Poelaertplein",
    caption_ja: "ポエラール広場"
  },
  {
    src: "photos/bruX.JPG",
    caption_en: "Christmas market at Sint-Katelijneplein",
    caption_ja: "聖カトリーヌ広場のクリスマスマーケット"
  },
  {
    src: "photos/chateau.JPG",
    caption_en: "Chateau de la Hulpe",
    caption_ja: "ウルプの城"
  },
  {
    src: "photos/choshi.JPG",
    caption_en: "Dawn at Choshi",
    caption_ja: "銚子の夜明け"
  },
  {
    src: "photos/cloud.JPG",
    caption_en: "cloud",
    caption_ja: "雲"
  },
  {
    src: "photos/iwagikyou.JPG",
    caption_en: "Mountain Harebell",
    caption_ja: "岩桔梗"
  },
  {
    src: "photos/fog.JPEG",
    caption_en: "Foggy Forest",
    caption_ja: "霧の森"
  },
  {
    src: "photos/folon.JPG",
    caption_en: "Sign at Folon Foundation",
    caption_ja: "フォロン美術館の標識"
  },
  {
    src: "photos/gendarme.JPEG",
    caption_en: "Mt. Gendarme",
    caption_ja: "ジャンダルム"
  },
  {
    src: "photos/gent.JPG",
    caption_en: "Gent",
    caption_ja: "ヘント"
  },
  {
    src: "photos/gozentachibana.JPEG",
    caption_en: "Crackerberry",
    caption_ja: "御前橘"
  },
  {
    src: "photos/haneki.JPG",
    caption_en: "plum blossom",
    caption_ja: "梅の花"
  },
  {
    src: "photos/hinata.JPG",
    caption_en: "Mt. Hinatayama",
    caption_ja: "日向山"
  },
  {
    src: "photos/hulpe.JPG",
    caption_en: "Autumn at Hulpe",
    caption_ja: "ウルプの秋"
  },
  {
    src: "photos/ibuki.JPG",
    caption_en: "Ibuki",
    caption_ja: "伊吹島"
  },
  {
    src: "photos/iou.JPG",
    caption_en: "Mt. Ioudake",
    caption_ja: "硫黄岳"
  },
  {
    src: "photos/iseebi.JPG",
    caption_en: "Morning at Choshi",
    caption_ja: "長崎鼻の朝"
  },
  {
    src: "photos/jindai.JPG",
    caption_en: "Eranthis pinnatifida",
    caption_ja: "節分草"
  },
  {
    src: "photos/kotohiki.JPG",
    caption_en: "Cats at Kotohiki Hachimangu",
    caption_ja: "琴弾八幡宮の猫"
  },
  {
    src: "photos/kourakuen.JPG",
    caption_en: "Lotus",
    caption_ja: "蓮の葉"
  },
  {
    src: "photos/maehotaka.JPEG",
    caption_en: "North ridge of Mt. Maehotaka",
    caption_ja: "前穂北尾根"
  },
  {
    src: "photos/miwa.JPG",
    caption_en: "Miwa",
    caption_ja: "三輪"
  },
  {
    src: "photos/morito.JPG",
    caption_en: "Morito beach",
    caption_ja: "森戸海岸"
  },
  {
    src: "photos/nakayama.JPG",
    caption_en: "Mt. Nakayama",
    caption_ja: "中山"
  },
  {
    src: "photos/okuhotaka.JPEG",
    caption_en: "Mt. Okuhotakadake",
    caption_ja: "奥穂高岳"
  },
  {
    src: "photos/oslo_sea.JPG",
    caption_en: "Bjørvika bay",
    caption_ja: "ビョルヴィカ湾"
  },
  {
    src: "photos/oslo_town.JPG",
    caption_en: "Prinsens gate",
    caption_ja: "プリンセンス通り"
  },
  {
    src: "photos/sunrise.JPG",
    caption_en: "Mt. Karesawa",
    caption_ja: "涸沢岳の夜明け"
  },
  {
    src: "photos/takamiishi.JPEG",
    caption_en: "Takamiishi hut",
    caption_ja: "高見石小屋"
  },
  {
    src: "photos/yari.JPG",
    caption_en: "Mt. Yarigatake",
    caption_ja: "槍ヶ岳"
  },
  {
    src: "photos/yatsuforest.JPG",
    caption_en: "Northern Yatsugatake forest",
    caption_ja: "北八ヶ岳の森"
  },
];

// ページ言語を自動判定して1枚ランダムに表示
function showRandomPhoto() {
  if (!PHOTOS.length) return;

  // ページ言語を取得（例: <html lang="ja"> または "en"）
  const lang = document.documentElement.lang || "en";

  const pick = PHOTOS[Math.floor(Math.random() * PHOTOS.length)];
  const img = document.getElementById("photo");
  const cap = document.getElementById("cap");
  if (!img) return;

  img.src = pick.src;
  img.alt = lang === "ja" ? (pick.caption_ja || "写真") : (pick.caption_en || "Photo");

  if (cap) {
    cap.textContent = lang === "ja" ? (pick.caption_ja || "") : (pick.caption_en || "");
  }
}
