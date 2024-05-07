const progress = document.querySelector(
  ".progress-box .progress .progress-bar"
);
const progressLabelLeft = document.querySelector(
  ".progress-box .progress-bar-details .left"
);
const progressLabelRight = document.querySelector(
  ".progress-box .progress-bar-details .right"
);

let totalCount = 80;
let totalCompletionsYesCount = 0;

function changeWidth() {
  progress.style.width = `${(totalCompletionsYesCount / totalCount) * 100}%`;
  progressLabelLeft.innerHTML = `${Math.floor(
    (totalCompletionsYesCount / totalCount) * 100
  )}% completed`;

  progressLabelRight.innerHTML = `${totalCompletionsYesCount}/${totalCount}`;
}

function compare(a, b) {
  if (a["# of Courses Completed"] > b["# of Courses Completed"]) {
    return -1;
  }
  if (a["# of Courses Completed"] < b["# of Courses Completed"]) {
    return 1;
  }
  return 0;
}

const updateData = async (filter, flag) => {
  let data = await (await fetch("./data.json")).json();
  if (filter !== "") {
    data = data.filter((el) => {
      return el["User Name"].toLowerCase().includes(filter.toLowerCase());
    });
  }

  data.sort(compare);

  let html = "";

  data.forEach((d, i) => {
    // Check if All 3 Pathways Completed - Yes or No is "Yes" and Redemption is "No" then Highlight it
    const rowBackgroundColor =
      d["All 3 Pathways Completed - Yes or No"] === "Yes"
        ? "#9CFF2E"
        : d["Campaign Code Redemption Status"] === "No"
        ? "#FF5D5D"
        : "";

    // Check if "All 3 Pathways Completed - Yes or No" is "Yes"
    if (d["All 3 Pathways Completed - Yes or No"] === "Yes") {
      totalCompletionsYesCount++;
    }

    html += `<tr style="background-color: ${rowBackgroundColor};">
                  <th>${i + 1}</th>

                  <td><a href="${
                    d["Google Cloud Skills Boost Profile URL"]
                  }" target="_blank" style="color:black;">${
      d["User Name"]
    }</a></td>

                  <td>${d["Campaign Code Redemption Status"] === "Yes" ? "✅" : "⚠️"}</td>

                  <td>${
                    d["Gen AI Arcade Game Completion"] === 1 ? "💯" : "❌"
                  }</td>

                  <td>${
                    d["Prompt Design in Vertex AI Completion"] === 1 ? "💯" : "❌"
                  }</td> 
                        
                  <td>${
                    d["Develop GenAI Apps with Gemini and Streamlit Completion"] === 1 ? "💯" : "❌"
                  }</td>
                          
                  <td>${d["All 3 Pathways Completed - Yes or No"]}</td>
                   
    </tr>`;
  });
  console.log("All 3 Pathways Completed - Yes or No:", totalCompletionsYesCount);
  if (flag) {
    changeWidth();
  };
  document.getElementById("gccp_body").innerHTML = html;
};

updateData("", true);
const input = document.getElementById("input");
input.addEventListener("input", () => {
  console.log(input.value);
  updateData(input.value, false);
});
