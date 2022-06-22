export default function Hobby() {
  const handleOnClick = async (id_name: string) => {
    const button_col = document.getElementById(id_name);
    if (button_col.checked == true) {
      button_col.className =
        'inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight uppercase rounded-full';
      button_col.checked = false;
    } else {
      button_col.className =
        'inline-block px-6 py-2 border-2 bg-red-400 text-white text-sm leading-tight uppercase rounded-full';
      button_col.checked = true;
    }
    //console.log(button_col.checked);
  };

  return (
    <div className="space-y-1 space-x-2">
      <button
        value="スポーツ"
        name="hobby"
        id="hobby0"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase checked:bg-red-400 rounded-full border-2 border-red-300"
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
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
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
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
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
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
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
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
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
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
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
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
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
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
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
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
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
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
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
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby10');
        }}
      >
        水泳
      </button>
      <button
        value="その他"
        name="hobby"
        id="hobby11"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby11');
        }}
      >
        その他
      </button>
      <button
        value="ライフスタイル"
        name="hobby"
        id="hobby12"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby12');
        }}
      >
        ライフスタイル
      </button>
      <button
        value="サウナ"
        name="hobby"
        id="hobby13"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby13');
        }}
      >
        サウナ
      </button>
      <button
        value="睡眠"
        name="hobby"
        id="hobby14"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby14');
        }}
      >
        睡眠
      </button>
      <button
        value="ドライブ"
        name="hobby"
        id="hobby15"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby15');
        }}
      >
        ドライブ
      </button>
      <button
        value="カフェ巡り"
        name="hobby"
        id="hobby16"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby16');
        }}
      >
        カフェ巡り
      </button>
      <button
        value="美術館"
        name="hobby"
        id="hobby17"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby17');
        }}
      >
        美術館
      </button>
      <button
        value="映画"
        name="hobby"
        id="hobby18"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby18');
        }}
      >
        映画
      </button>
      <button
        value="カラオケ"
        name="hobby"
        id="hobby19"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby19');
        }}
      >
        カラオケ
      </button>
      <button
        value="ダンス"
        name="hobby"
        id="hobby20"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby20');
        }}
      >
        ダンス
      </button>
      <button
        value="舞台"
        name="hobby"
        id="hobby21"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby21');
        }}
      >
        舞台
      </button>
      <button
        value="Netflix"
        name="hobby"
        id="hobby22"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby22');
        }}
      >
        Netflix
      </button>
      <button
        value="飲み"
        name="hobby"
        id="hobby23"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby23');
        }}
      >
        飲み
      </button>
      <button
        value="旅行"
        name="hobby"
        id="hobby24"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby24');
        }}
      >
        旅行
      </button>
      <button
        value="ゲーム"
        name="hobby"
        id="hobby25"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby25');
        }}
      >
        ゲーム
      </button>
      <button
        value="モンハン"
        name="hobby"
        id="hobby26"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby26');
        }}
      >
        モンハン
      </button>
      <button
        value="スプラトゥーン"
        name="hobby"
        id="hobby27"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby27');
        }}
      >
        スプラトゥーン
      </button>
      <button
        value="ポケモン"
        name="hobby"
        id="hobby28"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby28');
        }}
      >
        ポケモン
      </button>
      <button
        value="マリオ"
        name="hobby"
        id="hobby29"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby29');
        }}
      >
        マリオ
      </button>
      <button
        value="フォートナイト"
        name="hobby"
        id="hobby30"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby30');
        }}
      >
        フォートナイト
      </button>
      <button
        value="Apex"
        name="hobby"
        id="hobby31"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby31');
        }}
      >
        Apex
      </button>
      <button
        value="スマブラ"
        name="hobby"
        id="hobby32"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby32');
        }}
      >
        スマブラ
      </button>
      <button
        value="ドラクエ"
        name="hobby"
        id="hobby33"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby33');
        }}
      >
        ドラクエ
      </button>
      <button
        value="FF"
        name="hobby"
        id="hobby34"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby34');
        }}
      >
        FF
      </button>
      <button
        value="キングダムハーツ"
        name="hobby"
        id="hobby35"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby35');
        }}
      >
        キングダムハーツ
      </button>
      <button
        value="ELDENRING"
        name="hobby"
        id="hobby36"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby36');
        }}
      >
        ELDENRING
      </button>
      <button
        value="龍が如く"
        name="hobby"
        id="hobby37"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby37');
        }}
      >
        龍が如く
      </button>
      <button
        value="アニメ"
        name="hobby"
        id="hobby38"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby38');
        }}
      >
        アニメ
      </button>
      <button
        value="コードギアス"
        name="hobby"
        id="hobby39"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby39');
        }}
      >
        コードギアス
      </button>
      <button
        value="STEINS;GATE"
        name="hobby"
        id="hobby40"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby40');
        }}
      >
        STEINS;GATE
      </button>
      <button
        value="進撃の巨人"
        name="hobby"
        id="hobby41"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby41');
        }}
      >
        進撃の巨人
      </button>
      <button
        value="ヴァイオレットエヴァーガーデン"
        name="hobby"
        id="hobby42"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby42');
        }}
      >
        ヴァイオレットエヴァーガーデン
      </button>
      <button
        value="銀魂"
        name="hobby"
        id="hobby43"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby43');
        }}
      >
        銀魂
      </button>
      <button
        value="ハイキュー"
        name="hobby"
        id="hobby44"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby44');
        }}
      >
        ハイキュー
      </button>
      <button
        value="魔法少女まどか★マギカ"
        name="hobby"
        id="hobby45"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby45');
        }}
      >
        魔法少女まどか★マギカ
      </button>
      <button
        value="宇宙よりも遠い場所"
        name="hobby"
        id="hobby46"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby46');
        }}
      >
        宇宙よりも遠い場所
      </button>
      <button
        value="僕のヒーローアカデミア"
        name="hobby"
        id="hobby47"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby47');
        }}
      >
        僕のヒーローアカデミア
      </button>
      <button
        value="エヴァンゲリオン"
        name="hobby"
        id="hobby48"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby48');
        }}
      >
        エヴァンゲリオン
      </button>
      <button
        value="音楽"
        name="hobby"
        id="hobby49"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby49');
        }}
      >
        音楽
      </button>
      <button
        value="JPOP"
        name="hobby"
        id="hobby50"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby50');
        }}
      >
        JPOP
      </button>
      <button
        value="SEKAINOOWARI"
        name="hobby"
        id="hobby51"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby51');
        }}
      >
        SEKAINOOWARI
      </button>
      <button
        value="Official髭男dism"
        name="hobby"
        id="hobby52"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby52');
        }}
      >
        Official髭男dism
      </button>
      <button
        value="TaniYuuki"
        name="hobby"
        id="hobby53"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby53');
        }}
      >
        TaniYuuki
      </button>
      <button
        value="マカロニえんぴつ"
        name="hobby"
        id="hobby54"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby54');
        }}
      >
        マカロニえんぴつ
      </button>
      <button
        value="Ado"
        name="hobby"
        id="hobby55"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby55');
        }}
      >
        Ado
      </button>
      <button
        value="Uru"
        name="hobby"
        id="hobby56"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby56');
        }}
      >
        Uru
      </button>
      <button
        value="Aimer"
        name="hobby"
        id="hobby57"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby57');
        }}
      >
        Aimer
      </button>
      <button
        value="backnumber"
        name="hobby"
        id="hobby58"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby58');
        }}
      >
        backnumber
      </button>
      <button
        value="米津玄師"
        name="hobby"
        id="hobby59"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby59');
        }}
      >
        米津玄師
      </button>
      <button
        value="YOASOBI"
        name="hobby"
        id="hobby60"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby60');
        }}
      >
        YOASOBI
      </button>
      <button
        value="アニメ"
        name="hobby"
        id="hobby61"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby61');
        }}
      >
        アニメ
      </button>
      <button
        value="Lisa"
        name="hobby"
        id="hobby62"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby62');
        }}
      >
        Lisa
      </button>
      <button
        value="QUEENDOM"
        name="hobby"
        id="hobby63"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby63');
        }}
      >
        QUEENDOM
      </button>
      <button
        value="Chinozo"
        name="hobby"
        id="hobby64"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby64');
        }}
      >
        Chinozo
      </button>
      <button
        value="DECO*27"
        name="hobby"
        id="hobby65"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby65');
        }}
      >
        DECO*27
      </button>
      <button
        value="fripSide"
        name="hobby"
        id="hobby66"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby66');
        }}
      >
        fripSide
      </button>
      <button
        value="supercell"
        name="hobby"
        id="hobby67"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby67');
        }}
      >
        supercell
      </button>
      <button
        value="K-pop"
        name="hobby"
        id="hobby68"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby68');
        }}
      >
        K-pop
      </button>
      <button
        value="BTS"
        name="hobby"
        id="hobby69"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby69');
        }}
      >
        BTS
      </button>
      <button
        value="IVE"
        name="hobby"
        id="hobby70"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby70');
        }}
      >
        IVE
      </button>
      <button
        value="LE"
        name="hobby"
        id="hobby71"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby71');
        }}
      >
        LE
      </button>
      <button
        value="SSERAFIM"
        name="hobby"
        id="hobby72"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby72');
        }}
      >
        SSERAFIM
      </button>
      <button
        value="TWICE"
        name="hobby"
        id="hobby73"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby73');
        }}
      >
        TWICE
      </button>
      <button
        value="PSY"
        name="hobby"
        id="hobby74"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby74');
        }}
      >
        PSY
      </button>
      <button
        value="HipHop"
        name="hobby"
        id="hobby75"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby75');
        }}
      >
        HipHop
      </button>
      <button
        value="CreepyNuts"
        name="hobby"
        id="hobby76"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby76');
        }}
      >
        CreepyNuts
      </button>
      <button
        value="ちゃんみな"
        name="hobby"
        id="hobby77"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby77');
        }}
      >
        ちゃんみな
      </button>
      <button
        value="Awich"
        name="hobby"
        id="hobby78"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby78');
        }}
      >
        Awich
      </button>
      <button
        value="WILYWNKA"
        name="hobby"
        id="hobby79"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby79');
        }}
      >
        WILYWNKA
      </button>
      <button
        value="VaVa"
        name="hobby"
        id="hobby80"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby80');
        }}
      >
        VaVa
      </button>
      <button
        value="Tohji"
        name="hobby"
        id="hobby81"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby81');
        }}
      >
        Tohji
      </button>
      <button
        value="¥ellow"
        name="hobby"
        id="hobby82"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby82');
        }}
      >
        ¥ellow
      </button>
      <button
        value="Bucks"
        name="hobby"
        id="hobby83"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby83');
        }}
      >
        Bucks
      </button>
      <button
        value="ROCK"
        name="hobby"
        id="hobby84"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby84');
        }}
      >
        ROCK
      </button>
      <button
        value="SaucyDog"
        name="hobby"
        id="hobby85"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby85');
        }}
      >
        SaucyDog
      </button>
      <button
        value="優理"
        name="hobby"
        id="hobby86"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby86');
        }}
      >
        優理
      </button>
      <button
        value="Novelbright"
        name="hobby"
        id="hobby87"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby87');
        }}
      >
        Novelbright
      </button>
      <button
        value="Mrs.GREENAPPLE"
        name="hobby"
        id="hobby88"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby88');
        }}
      >
        Mrs.GREENAPPLE
      </button>
      <button
        value="VAUNDY"
        name="hobby"
        id="hobby89"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby89');
        }}
      >
        VAUNDY
      </button>
      <button
        value="ONEOKROCK"
        name="hobby"
        id="hobby90"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby90');
        }}
      >
        ONEOKROCK
      </button>
      <button
        value="UVERWORLD"
        name="hobby"
        id="hobby91"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby91');
        }}
      >
        UVERWORLD
      </button>
      <button
        value="MyHairisBad"
        name="hobby"
        id="hobby92"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby92');
        }}
      >
        MyHairisBad
      </button>
      <button
        value="SNS"
        name="hobby"
        id="hobby93"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby93');
        }}
      >
        SNS
      </button>
      <button
        value="Facebook"
        name="hobby"
        id="hobby94"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby94');
        }}
      >
        Facebook
      </button>
      <button
        value="Twitter"
        name="hobby"
        id="hobby95"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby95');
        }}
      >
        Twitter
      </button>
      <button
        value="LINE"
        name="hobby"
        id="hobby96"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby96');
        }}
      >
        LINE
      </button>
      <button
        value="Instagram"
        name="hobby"
        id="hobby97"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby97');
        }}
      >
        Instagram
      </button>
      <button
        value="友達募集"
        name="hobby"
        id="hobby98"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 uppercase rounded-full border-2 border-red-300"
        onClick={() => {
          handleOnClick('hobby98');
        }}
      >
        友達募集
      </button>
    </div>
  );
}

/*
<button  value="野球" name="hobby" id="hobby0" type="button" className="inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight uppercase rounded-full" onClick={() => {handleOnClick("hobby0");}}>野球</button>
                
                <button  value="サッカー" name="hobby" id="hobby1" type="button" className="inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight uppercase rounded-full" onClick={() => {handleOnClick("hobby1");}}>サッカー</button>
                
                <button  value="テニス" name="hobby" id="hobby2" type="button" className="inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight uppercase rounded-full" onClick={() => {handleOnClick("hobby2");}}>テニス</button>

                <button  value="バスケ" name="hobby" id="hobby3" type="button" className="inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight uppercase rounded-full" onClick={() => {handleOnClick("hobby3");}}>バスケ</button> 
                
                <button  value="サウナ" name="hobby" id="hobby4" type="button" className="inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight uppercase rounded-full" onClick={() => {handleOnClick("hobby4");}}>サウナ</button>
                
                <button  value="睡眠" name="hobby" id="hobby5" type="button" className="inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight uppercase rounded-full" onClick={() => {handleOnClick("hobby5");}}>睡眠</button>
                
                <button  value="ドライブ" name="hobby" id="hobby6" type="button" className="inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight uppercase rounded-full" onClick={() => {handleOnClick("hobby6");}}>ドライブ</button>

                <button  value="カフェ巡り" name="hobby" id="hobby7" type="button" className="inline-block px-6 py-2 border-2 border-red-300 text-red-300 text-sm leading-tight uppercase rounded-full" onClick={() => {handleOnClick("hobby7");}}>カフェ巡り</button> 


スポーツ 
野球
サッカー
卓球
バレーボール
バドミントン
陸上
バスケットボール
テニス
ラグビー
水泳
その他
ライフスタイル
サウナ
睡眠
ドライブ
カフェ巡り
美術館
映画
カラオケ
ダンス
舞台
Netflix
飲み
旅行
ゲーム 
モンハン
スプラトゥーン
ポケモン
マリオ
フォートナイト
Apex
スマブラ
ドラクエ
FF
キングダムハーツ
ELDENRING
龍が如く
アニメ
コードギアス
STEINS;GATE
進撃の巨人
ヴァイオレットエヴァーガーデン
銀魂
ハイキュー
魔法少女まどか★マギカ
宇宙よりも遠い場所
僕のヒーローアカデミア
エヴァンゲリオン
音楽
JPOP
SEKAINOOWARI
Official髭男dism
TaniYuuki
マカロニえんぴつ
Ado
Uru
Aimer
backnumber
米津玄師
YOASOBI
アニメ
Lisa
QUEENDOM
Chinozo
DECO*27
fripSide
supercell
K-pop
BTS
IVE
LE SSERAFIM
TWICE
PSY
HipHop
CreepyNuts
ちゃんみな
Awich
WILYWNKA
VaVa
Tohji
¥ellow Bucks
ROCK
SaucyDog
優理
Novelbright
Mrs.GREENAPPLE
VAUNDY
ONEOKROCK
UVERWORLD
MyHairisBad
SNS
Facebook
Twitter
LINE
Instagram 
友達募集
趣味仲間募集
仕事仲間募集
意見交換
*/
