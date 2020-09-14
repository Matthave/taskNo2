export const makeLinkForDownloadFunc = (formData) => {
  const form = document.querySelector(".form");

  let csvContent =
    "data:text/csv;charset=utf-16," + formData.map((e) => e).join("\n");

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "form_data.csv");
  link.setAttribute("class", "csvLink");
  link.textContent = "Download CSV form";
  form.appendChild(link);
};
