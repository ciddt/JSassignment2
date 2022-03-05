// Khai báo đối tượng testScore để lưu trữ dữ liệu mỗi khi nhập điểm
const testScore = {
  name: "",
  math: "",
  physical: "",
  chemistry: ""
};

// Khai báo biến truy cập phần tử marke-table
let table = document.getElementById("mark-table");

//
function inputData() {
  // Gán giá trị thuộc tính của input vào thuộc tính của đối tượng
  testScore.name = document.getElementById("name").value;
  testScore.math = document.getElementById("math").value;
  testScore.physical = document.getElementById("physical").value;
  testScore.chemistry = document.getElementById("chemistry").value;

  // Sau khi nhập xong thì trả lại giá trị rỗng cho input
  document.getElementById("name").value = "";
  document.getElementById("math").value = "";
  document.getElementById("physical").value = ""; 
  document.getElementById("chemistry").value = "";

  // Thêm dòng cho table
  let row = table.insertRow();
  let cellNum = row.insertCell();
  let cellName = row.insertCell();
  let cellMath = row.insertCell();
  let cellPhysical = row.insertCell();
  let cellChemistry = row.insertCell();
  let cellAverage = row.insertCell();
  let cellResult = row.insertCell();

  // Truy xuất tất cả các thẻ tag name tr trong table
  let numRow = document.getElementsByTagName("tr");
  // Tạo vòng lặp để in giá trị thuộc tính của đổi tượng tương ứng vào các ô tương ứng của table
  for (let i = 0; i <= numRow.length; i++) {
    cellNum.innerHTML = i - 1; // Dòng thứ 2 mang số thứ tự là 1 nên phải  - 1
    cellName.innerHTML = testScore.name;
    cellMath.innerHTML = testScore.math;
    cellPhysical.innerHTML = testScore.physical;
    cellChemistry.innerHTML = testScore.chemistry;
    cellAverage.innerHTML = "?"; // Giá trị mặc định khi chưa click button tính số điểm trung bình là ?
    cellResult.innerHTML = ""; // Giá trị mặc định khi chưa click button xác nhận học sinh giỏi là rỗng
  }
}

function averageFunction() {
  // Tạo vòng lặp để lấy giá trị của cell của table
  for (let i = 1; (row = table.rows[i]); i++) {
    let row = table.rows[i];
    for (let j in row.cells) {
      let mathScore = row.cells[2].innerText;
      let physicalScore = row.cells[3].innerText;
      let chemistryScore = row.cells[4].innerText;
      // Chuyển dữ liệu giá trị innterText của cell sang số rồi mới tính giá trị trung bình
      let averageScore =
        (parseInt(mathScore) +
          parseInt(physicalScore) +
          parseInt(chemistryScore)) /
        3;
      row.cells[5].innerHTML = averageScore.toFixed(1);
    }
  }
}

function levelFunction() {
  for (let i = 1; (row = table.rows[i]); i++) {
    let row = table.rows[i];
    for (let j in row.cells) {
      let averageScore = parseInt(row.cells[5].innerText);
      // Với averageScore trong khoảng khác nhau thì hiển thị màu chữ tương ứng và kết quả tương ứng
    if (averageScore >= 8) {
        row.style.color = "red";
        row.cells[6].innerHTML = "Great Passed";
      } else if (averageScore >= 7) {
        row.style.color = "blue";
        row.cells[6].innerHTML = "Passed";
      } else if (averageScore >= 5) {
        row.style.color = "orange";
        row.cells[6].innerHTML = "Acceptable Passed";
      } else {
        row.style.color = "black";
        row.cells[6].innerHTML = "Fail";
      }
    }
  }
}
