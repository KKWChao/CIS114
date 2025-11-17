let form = document.getElementById("pt1-form");

form.addEventListener("change", (event) => {
  let bg = form.elements["bg-color"].value;

  let fd = [
    form.elements["fd-bold"].checked,
    form.elements["fd-underline"].checked,
    form.elements["fd-italics"].checked,
  ];

  let fs = form.elements["f-size"].value;

  let result_style = styleBuilder(bg, fd, fs);

  // attach style
  let result = document.getElementById("result-box");

  result.style.backgroundColor = result_style.bgColor;
  result.style.fontWeight = result_style.fd_bold;
  result.style.textDecoration = result_style.fd_underline;
  result.style.fontStyle = result_style.fd_italic;
  result.style.fontSize = result_style.fontSize;
});

function styleBuilder(bg, fd, fs) {
  // Background Color Map
  let bgMap = {
    1: "#B8336A",
    2: "#758E4F",
    3: "#033F63",
  };

  // Font Size Map
  let fsMap = {
    "f-10": "10px",
    "f-12": "12px",
    "f-14": "14px",
    "f-16": "16px",
  };

  return {
    bgColor: bgMap[bg] || "",
    fd_bold: fd[0] ? "bold" : "normal",
    fd_underline: fd[1] ? "underline" : "none",
    fd_italic: fd[2] ? "italic" : "normal",
    fontSize: fsMap[fs] || "12px",
  };
}
