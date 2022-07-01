export default function Hobby() {
  const handleOnClick = async (id_name: string) => {
    const button_col = document.getElementById(id_name);
    if (button_col.checked == true) {
      button_col.className =
        'inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight rounded-full border-red-300  transition duration-150 ease-in-out hover:scale-110 ';
      button_col.checked = false;
    } else {
      button_col.className =
        'inline-block px-6 py-2 border-2 bg-red-400 text-white text-sm leading-tight rounded-full border-red-300  transition duration-150 ease-in-out hover:scale-110 ';
      button_col.checked = true;
    }
    //console.log(button_col.checked);
  };

  return (
    <div className="space-y-1 space-x-1">
      <button
        value="スポーツ"
        name="hobby"
        id="hobby0"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby0');
        }}
      >
        スポーツ
      </button>
      <button
        value="野球"
        name="hobby"
        id="hobby1"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby1');
        }}
      >
        野球
      </button>
      <button
        value="サッカー"
        name="hobby"
        id="hobby2"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby2');
        }}
      >
        サッカー
      </button>
      <button
        value="卓球"
        name="hobby"
        id="hobby3"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby3');
        }}
      >
        卓球
      </button>
      <button
        value="バレーボール"
        name="hobby"
        id="hobby4"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby4');
        }}
      >
        バレーボール
      </button>
      <button
        value="バドミントン"
        name="hobby"
        id="hobby5"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby5');
        }}
      >
        バドミントン
      </button>
      <button
        value="陸上"
        name="hobby"
        id="hobby6"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby6');
        }}
      >
        陸上
      </button>
      <button
        value="バスケットボール"
        name="hobby"
        id="hobby7"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby7');
        }}
      >
        バスケットボール
      </button>
      <button
        value="テニス"
        name="hobby"
        id="hobby8"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby8');
        }}
      >
        テニス
      </button>
      <button
        value="ラグビー"
        name="hobby"
        id="hobby9"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby9');
        }}
      >
        ラグビー
      </button>
      <button
        value="水泳"
        name="hobby"
        id="hobby10"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby10');
        }}
      >
        水泳
      </button>
      <button
        value="ゴルフ"
        name="hobby"
        id="hobby11"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby11');
        }}
      >
        ゴルフ
      </button>
      <button
        value="ダンス"
        name="hobby"
        id="hobby12"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby12');
        }}
      >
        ダンス
      </button>
      <button
        value="スキー"
        name="hobby"
        id="hobby13"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby13');
        }}
      >
        スキー
      </button>
      <button
        value="スノーボード"
        name="hobby"
        id="hobby14"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby14');
        }}
      >
        スノーボード
      </button>
      <button
        value="筋トレ"
        name="hobby"
        id="hobby15"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby15');
        }}
      >
        筋トレ
      </button>
      <button
        value="キャンプ"
        name="hobby"
        id="hobby16"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby16');
        }}
      >
        キャンプ
      </button>
      <button
        value="バーベキュー"
        name="hobby"
        id="hobby17"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby17');
        }}
      >
        バーベキュー
      </button>
      <button
        value="魚釣り"
        name="hobby"
        id="hobby18"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby18');
        }}
      >
        魚釣り
      </button>
      <button
        value="アウトドア"
        name="hobby"
        id="hobby19"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby19');
        }}
      >
        アウトドア
      </button>
      <button
        value="インドア"
        name="hobby"
        id="hobby20"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby20');
        }}
      >
        インドア
      </button>
      <button
        value="サウナ"
        name="hobby"
        id="hobby21"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby21');
        }}
      >
        サウナ
      </button>
      <button
        value="温泉"
        name="hobby"
        id="hobby22"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby22');
        }}
      >
        温泉
      </button>
      <button
        value="旅行"
        name="hobby"
        id="hobby23"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby23');
        }}
      >
        旅行
      </button>
      <button
        value="海"
        name="hobby"
        id="hobby24"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby24');
        }}
      >
        海
      </button>
      <button
        value="睡眠"
        name="hobby"
        id="hobby25"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby25');
        }}
      >
        睡眠
      </button>
      <button
        value="ドライブ"
        name="hobby"
        id="hobby26"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby26');
        }}
      >
        ドライブ
      </button>
      <button
        value="カフェ"
        name="hobby"
        id="hobby27"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby27');
        }}
      >
        カフェ
      </button>
      <button
        value="コーヒー"
        name="hobby"
        id="hobby28"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby28');
        }}
      >
        コーヒー
      </button>
      <button
        value="ラーメン"
        name="hobby"
        id="hobby29"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby29');
        }}
      >
        ラーメン
      </button>
      <button
        value="カラオケ"
        name="hobby"
        id="hobby30"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby30');
        }}
      >
        カラオケ
      </button>
      <button
        value="お酒"
        name="hobby"
        id="hobby31"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby31');
        }}
      >
        お酒
      </button>
      <button
        value="ピアノ"
        name="hobby"
        id="hobby32"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby32');
        }}
      >
        ピアノ
      </button>
      <button
        value="ギター"
        name="hobby"
        id="hobby33"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby33');
        }}
      >
        ギター
      </button>
      <button
        value="カメラ"
        name="hobby"
        id="hobby34"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby34');
        }}
      >
        カメラ
      </button>
      <button
        value="読書"
        name="hobby"
        id="hobby35"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby35');
        }}
      >
        読書
      </button>
      <button
        value="花火"
        name="hobby"
        id="hobby36"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby36');
        }}
      >
        花火
      </button>
      <button
        value="動物"
        name="hobby"
        id="hobby37"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby37');
        }}
      >
        動物
      </button>
      <button
        value="猫"
        name="hobby"
        id="hobby38"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby38');
        }}
      >
        猫
      </button>
      <button
        value="犬"
        name="hobby"
        id="hobby39"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby39');
        }}
      >
        犬
      </button>
      <button
        value="洋服"
        name="hobby"
        id="hobby40"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby40');
        }}
      >
        洋服
      </button>
      <button
        value="美術館"
        name="hobby"
        id="hobby41"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby41');
        }}
      >
        美術館
      </button>
      <button
        value="舞台"
        name="hobby"
        id="hobby42"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby42');
        }}
      >
        舞台
      </button>
      <button
        value="映画"
        name="hobby"
        id="hobby43"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby43');
        }}
      >
        映画
      </button>
      <button
        value="動画"
        name="hobby"
        id="hobby44"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby44');
        }}
      >
        動画
      </button>
      <button
        value="ドラマ"
        name="hobby"
        id="hobby45"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby45');
        }}
      >
        ドラマ
      </button>
      <button
        value="Youtube"
        name="hobby"
        id="hobby46"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby46');
        }}
      >
        Youtube
      </button>
      <button
        value="Netflix"
        name="hobby"
        id="hobby47"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby47');
        }}
      >
        Netflix
      </button>
      <button
        value="ダーツ"
        name="hobby"
        id="hobby48"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby48');
        }}
      >
        ダーツ
      </button>
      <button
        value="ボードゲーム"
        name="hobby"
        id="hobby49"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby49');
        }}
      >
        ボードゲーム
      </button>
      <button
        value="ポーカー"
        name="hobby"
        id="hobby50"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby50');
        }}
      >
        ポーカー
      </button>
      <button
        value="麻雀"
        name="hobby"
        id="hobby51"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby51');
        }}
      >
        麻雀
      </button>
      <button
        value="将棋"
        name="hobby"
        id="hobby52"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby52');
        }}
      >
        将棋
      </button>
      <button
        value="チェス"
        name="hobby"
        id="hobby53"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby53');
        }}
      >
        チェス
      </button>
      <button
        value="ゲーム"
        name="hobby"
        id="hobby54"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby54');
        }}
      >
        ゲーム
      </button>
      <button
        value="モンハン"
        name="hobby"
        id="hobby55"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby55');
        }}
      >
        モンハン
      </button>
      <button
        value="スプラトゥーン"
        name="hobby"
        id="hobby56"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby56');
        }}
      >
        スプラトゥーン
      </button>
      <button
        value="ポケモン"
        name="hobby"
        id="hobby57"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby57');
        }}
      >
        ポケモン
      </button>
      <button
        value="マリオ"
        name="hobby"
        id="hobby58"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby58');
        }}
      >
        マリオ
      </button>
      <button
        value="フォートナイト"
        name="hobby"
        id="hobby59"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby59');
        }}
      >
        フォートナイト
      </button>
      <button
        value="Apex"
        name="hobby"
        id="hobby60"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby60');
        }}
      >
        Apex
      </button>
      <button
        value="スマブラ"
        name="hobby"
        id="hobby61"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby61');
        }}
      >
        スマブラ
      </button>
      <button
        value="ドラクエ"
        name="hobby"
        id="hobby62"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby62');
        }}
      >
        ドラクエ
      </button>
      <button
        value="マインクラフト"
        name="hobby"
        id="hobby63"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby63');
        }}
      >
        マインクラフト
      </button>
      <button
        value="FF"
        name="hobby"
        id="hobby64"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby64');
        }}
      >
        FF
      </button>
      <button
        value="バイオ"
        name="hobby"
        id="hobby65"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby65');
        }}
      >
        バイオ
      </button>
      <button
        value="アニメ"
        name="hobby"
        id="hobby66"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby66');
        }}
      >
        アニメ
      </button>
      <button
        value="進撃の巨人"
        name="hobby"
        id="hobby67"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby67');
        }}
      >
        進撃の巨人
      </button>
      <button
        value="呪術廻戦"
        name="hobby"
        id="hobby68"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby68');
        }}
      >
        呪術廻戦
      </button>
      <button
        value="Re:ゼロ"
        name="hobby"
        id="hobby69"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby69');
        }}
      >
        Re:ゼロ
      </button>
      <button
        value="このすば"
        name="hobby"
        id="hobby70"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby70');
        }}
      >
        このすば
      </button>
      <button
        value="無職転生"
        name="hobby"
        id="hobby71"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby71');
        }}
      >
        無職転生
      </button>
      <button
        value="五等分の花嫁"
        name="hobby"
        id="hobby72"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby72');
        }}
      >
        五等分の花嫁
      </button>
      <button
        value="転スラ"
        name="hobby"
        id="hobby73"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby73');
        }}
      >
        転スラ
      </button>
      <button
        value="スパイファミリー"
        name="hobby"
        id="hobby74"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby74');
        }}
      >
        スパイファミリー
      </button>
      <button
        value="トーキョーグール"
        name="hobby"
        id="hobby75"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby75');
        }}
      >
        トーキョーグール
      </button>
      <button
        value="サマーウォーズ"
        name="hobby"
        id="hobby76"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby76');
        }}
      >
        サマーウォーズ
      </button>
      <button
        value="天気の子"
        name="hobby"
        id="hobby77"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby77');
        }}
      >
        天気の子
      </button>
      <button
        value="君の名は"
        name="hobby"
        id="hobby78"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby78');
        }}
      >
        君の名は
      </button>
      <button
        value="コナン"
        name="hobby"
        id="hobby79"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby79');
        }}
      >
        コナン
      </button>
      <button
        value="暗殺教室"
        name="hobby"
        id="hobby80"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby80');
        }}
      >
        暗殺教室
      </button>
      <button
        value="ジョジョ"
        name="hobby"
        id="hobby81"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby81');
        }}
      >
        ジョジョ
      </button>
      <button
        value="鬼滅"
        name="hobby"
        id="hobby82"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby82');
        }}
      >
        鬼滅
      </button>
      <button
        value="ゆるキャン"
        name="hobby"
        id="hobby83"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby83');
        }}
      >
        ゆるキャン
      </button>
      <button
        value="バァイオレット・エバァーガーデン"
        name="hobby"
        id="hobby84"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby84');
        }}
      >
        バァイオレット・エバァーガーデン
      </button>
      <button
        value="ソードアート・オンライン"
        name="hobby"
        id="hobby85"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby85');
        }}
      >
        ソードアート・オンライン
      </button>
      <button
        value="ハイキュー"
        name="hobby"
        id="hobby86"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby86');
        }}
      >
        ハイキュー
      </button>
      <button
        value="エヴァンゲリオン"
        name="hobby"
        id="hobby87"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby87');
        }}
      >
        エヴァンゲリオン
      </button>
      <button
        value="漫画"
        name="hobby"
        id="hobby88"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby88');
        }}
      >
        漫画
      </button>
      <button
        value="音楽"
        name="hobby"
        id="hobby89"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby89');
        }}
      >
        音楽
      </button>
      <button
        value="JPOP"
        name="hobby"
        id="hobby90"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby90');
        }}
      >
        JPOP
      </button>
      <button
        value="K-pop"
        name="hobby"
        id="hobby91"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby91');
        }}
      >
        K-pop
      </button>
      <button
        value="HipHop"
        name="hobby"
        id="hobby92"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby92');
        }}
      >
        HipHop
      </button>
      <button
        value="プログラミング"
        name="hobby"
        id="hobby93"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby93');
        }}
      >
        プログラミング
      </button>
      <button
        value="Web"
        name="hobby"
        id="hobby94"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby94');
        }}
      >
        Web
      </button>
      <button
        value="モバイル"
        name="hobby"
        id="hobby95"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby95');
        }}
      >
        モバイル
      </button>
      <button
        value="IOS"
        name="hobby"
        id="hobby96"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby96');
        }}
      >
        IOS
      </button>
      <button
        value="Android"
        name="hobby"
        id="hobby97"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300  rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby97');
        }}
      >
        Android
      </button>
      <button
        value="競プロ"
        name="hobby"
        id="hobby98"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby98');
        }}
      >
        競プロ
      </button>
      <button
        value="Kaggle"
        name="hobby"
        id="hobby99"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby99');
        }}
      >
        Kaggle
      </button>
      <button
        value="AI"
        name="hobby"
        id="hobby100"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby100');
        }}
      >
        AI
      </button>
      <button
        value="SNS"
        name="hobby"
        id="hobby101"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby101');
        }}
      >
        SNS
      </button>
      <button
        value="Facebook"
        name="hobby"
        id="hobby102"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby102');
        }}
      >
        Facebook
      </button>
      <button
        value="Twitter"
        name="hobby"
        id="hobby103"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby103');
        }}
      >
        Twitter
      </button>
      <button
        value="LINE"
        name="hobby"
        id="hobby104"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby104');
        }}
      >
        LINE
      </button>
      <button
        value="Instagram"
        name="hobby"
        id="hobby105"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby105');
        }}
      >
        Instagram
      </button>
    </div>
  );
}
