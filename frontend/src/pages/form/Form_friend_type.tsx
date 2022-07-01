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
        value="友達募集"
        name="hobby"
        id="hobby106"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby106');
        }}
      >
        友達募集
      </button>
      <button
        value="遊び相手"
        name="hobby"
        id="hobby107"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby107');
        }}
      >
        遊び相手
      </button>
      <button
        value="話し相手"
        name="hobby"
        id="hobby108"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby108');
        }}
      >
        話し相手
      </button>
      <button
        value="趣味仲間"
        name="hobby"
        id="hobby109"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby109');
        }}
      >
        趣味仲間
      </button>
      <button
        value="仕事仲間"
        name="hobby"
        id="hobby110"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby110');
        }}
      >
        仕事仲間
      </button>
      <button
        value="勉強仲間"
        name="hobby"
        id="hobby111"
        type="button"
        className="inline-block py-2 px-6 text-sm leading-tight text-red-300 rounded-full border-2 border-red-300 transition duration-150 ease-in-out hover:scale-110"
        onClick={() => {
          handleOnClick('hobby111');
        }}
      >
        勉強仲間
      </button>
    </div>
  );
}
