const editor = document.getElementById('editor');

const btnUnderline = document.getElementById('btn-underline');
const btnStrike = document.getElementById('btn-strike');
const btnOrderedList = document.getElementById('btn-ordered-list');
const btnUnorderedList = document.getElementById('btn-unordered-list');

function btnBold(){
    setStyle('bold');
}

function btnItalic(){
    setStyle('italic');
}

/*btnBold.addEventListener('click', function () {
    setStyle('bold');
});

btnItalic.addEventListener('click', function () {
    setStyle('italic');
});*/

btnUnderline.addEventListener('click', function () {
    setStyle('underline');
});

btnStrike.addEventListener('click', function () {
    setStyle('strikeThrough')
});

btnOrderedList.addEventListener('click', function () {
    setStyle('insertOrderedList');
});

btnUnorderedList.addEventListener('click', function () {
    setStyle('insertUnorderedList');
});

function setStyle(style) {
    document.execCommand(style);
    focusEditor();
}

// 버튼 클릭 시 에디터가 포커스를 잃기 때문에 다시 에디터에 포커스를 해줌
function focusEditor() {
    editor.focus({preventScroll: true});
}
