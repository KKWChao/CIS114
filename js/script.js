async function loadData() {
  try {
    const res = await fetch("../data/assignments.json");

    if (!res.ok) {
      throw new Error("Bad Response");
    }

    console.log("Data Laoded");

    const data = await res.json();

    let table = document.getElementById("table-body");

    table.innerHTML += `

    `;

    data.map((item) => {
      if (item.parts[0]) console.log(item.parts[0].name);
    });
  } catch (e) {
    console.log("Data fetch failed: ", e);
  }
}

loadData();
