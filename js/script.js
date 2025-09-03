async function loadData() {
  try {
    const res = await fetch("../data/assignments.json");

    if (!res.ok) {
      throw new Error("Bad Response");
    }

    console.log("Data Laoded");

    const data = await res.json();

    let table = document.getElementById("table-body");
    let htmlData = ``;

    data.map((item) => {
      htmlData += `
        <!-- ${item.name} -->
        <tr>
          <td>${item.name}</td>
          <td>${item.description}</td>
          <td></td>
        </tr>
        `;

      item.parts.forEach((part, index) => {
        htmlData += `
        <tr>
          <td>
            <span>${index + 1 == item.parts.length ? "└─ " : "├─ "}</span> ${
          part.name
        }
          </td>
          <td>${part.description ? part.description : "TBA"}</td>
          <td>
            <a href="${part.link}" class="assignment-link">
              View ${item.name} ${part.name} <span>➡</span>
            </a>
          </td>
        </tr>
          `;
      });

      htmlData += `
        <tr class="table-spacer">
          <td></td>
          <td></td>
          <td></td>
        </tr>
        `;
    });

    table.innerHTML += htmlData;
  } catch (e) {
    console.log("Data fetch failed: ", e);
  }
}

loadData();
