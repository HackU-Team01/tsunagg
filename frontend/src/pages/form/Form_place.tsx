export const map_place = new Map<string, string>([
  ['北海道', '北海道地方'],
  ['青森県', '東北地方'],
  ['岩手県', '東北地方'],
  ['宮城県', '東北地方'],
  ['秋田県', '東北地方'],
  ['山形県', '東北地方'],
  ['福島県', '東北地方'],
  ['茨城県', '関東地方'],
  ['栃木県', '関東地方'],
  ['群馬県', '関東地方'],
  ['埼玉県', '関東地方'],
  ['千葉県', '関東地方'],
  ['東京都', '関東地方'],
  ['神奈川県', '関東地方'],
  ['新潟県', '中部地方'],
  ['富山県', '中部地方'],
  ['石川県', '中部地方'],
  ['福井県', '中部地方'],
  ['山梨県', '中部地方'],
  ['長野県', '中部地方'],
  ['岐阜県', '中部地方'],
  ['静岡県', '中部地方'],
  ['愛知県', '中部地方'],
  ['三重県', '近畿地方'],
  ['滋賀県', '近畿地方'],
  ['京都府', '近畿地方'],
  ['大阪府', '近畿地方'],
  ['兵庫県', '近畿地方'],
  ['奈良県', '近畿地方'],
  ['和歌山県', '近畿地方'],
  ['鳥取県', '中国地方'],
  ['島根県', '中国地方'],
  ['岡山県', '中国地方'],
  ['広島県', '中国地方'],
  ['山口県', '中国地方'],
  ['徳島県', '四国地方'],
  ['香川県', '四国地方'],
  ['愛媛県', '四国地方'],
  ['高知県', '四国地方'],
  ['福岡県', '九州地方'],
  ['佐賀県', '九州地方'],
  ['長崎県', '九州地方'],
  ['熊本県', '九州地方'],
  ['大分県', '九州地方'],
  ['宮崎県', '九州地方'],
  ['鹿児島県', '九州地方'],
  ['沖縄県', '九州地方'],
  ['海外', '海外'],
]);

export default function create_place_pulldown() {
  //let aa = "";
  //for (const [key, value] of map_place) aa += "<option value=\"" + key + "\">" + key + "</option>";
  //console.log(aa);

  //console.log(map_place);

  return (
    <>
      <option value="sample">選択</option>
      <option value="北海道">北海道</option>
      <option value="青森県">青森県</option>
      <option value="岩手県">岩手県</option>
      <option value="宮城県">宮城県</option>
      <option value="秋田県">秋田県</option>
      <option value="山形県">山形県</option>
      <option value="福島県">福島県</option>
      <option value="茨城県">茨城県</option>
      <option value="栃木県">栃木県</option>
      <option value="群馬県">群馬県</option>
      <option value="埼玉県">埼玉県</option>
      <option value="千葉県">千葉県</option>
      <option value="東京都">東京都</option>
      <option value="神奈川県">神奈川県</option>
      <option value="新潟県">新潟県</option>
      <option value="富山県">富山県</option>
      <option value="石川県">石川県</option>
      <option value="福井県">福井県</option>
      <option value="山梨県">山梨県</option>
      <option value="長野県">長野県</option>
      <option value="岐阜県">岐阜県</option>
      <option value="静岡県">静岡県</option>
      <option value="愛知県">愛知県</option>
      <option value="三重県">三重県</option>
      <option value="滋賀県">滋賀県</option>
      <option value="京都府">京都府</option>
      <option value="大阪府">大阪府</option>
      <option value="兵庫県">兵庫県</option>
      <option value="奈良県">奈良県</option>
      <option value="和歌山県">和歌山県</option>
      <option value="鳥取県">鳥取県</option>
      <option value="島根県">島根県</option>
      <option value="岡山県">岡山県</option>
      <option value="広島県">広島県</option>
      <option value="山口県">山口県</option>
      <option value="徳島県">徳島県</option>
      <option value="香川県">香川県</option>
      <option value="愛媛県">愛媛県</option>
      <option value="高知県">高知県</option>
      <option value="福岡県">福岡県</option>
      <option value="佐賀県">佐賀県</option>
      <option value="長崎県">長崎県</option>
      <option value="熊本県">熊本県</option>
      <option value="大分県">大分県</option>
      <option value="宮崎県">宮崎県</option>
      <option value="鹿児島県">鹿児島県</option>
      <option value="沖縄県">沖縄県</option>
      <option value="海外">海外</option>
    </>
  );
}
