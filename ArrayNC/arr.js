lst = [
  {
    id: 1,
    name: "html",
    price: 0,
  },
  {
    id: 2,
    name: "css",
    price: 0,
  },
  {
    id: 3,
    name: "js",
    price: 250,
  },
  {
    id: 4,
    name: "js",
    price: 10,
  },
];

// For
console.log("🚀 ~ file: arr.html:27 ~ For");
for (var i = 0; i < lst.length; i++) {
  console.log("🚀 ~ file: arr.html:28 ~ lst[i]", lst[i]);
}

// For in
console.log("🚀 ~ file: arr.html:33 ~ For in");
for (var i in lst) {
  console.log("🚀 ~ file: arr.html:34 ~ i", i);
}

// For of
console.log("🚀 ~ file: arr.html:39 ~ For of");
for (var i of lst) {
  console.log("🚀 ~ file: arr.html:41 ~ i", i);
}

// ForEach
console.log("🚀 ~ file: arr.html:33 ~ ForEach");
lst.forEach(function (item, index) {
  console.log("🚀 ~ file: arr.html:27 ~ lst.forEach ~ index", index);
  console.log("🚀 ~ file: arr.html:27 ~ lst.forEach ~ item", item);
});

// Every --Tat ca phan tu trong mang phai thoa man dieu kien--
console.log("🚀 ~ file: arr.html:40 ~ Every");
var isFree = lst.every(function (item) {
  return item.price === 0;
});
console.log("🚀 ~ file: arr.html:34 ~ isFree=lst.every ~ isFree", isFree);

// Some --Chi can 1 phan tu trong mang thoa man dieu kien--
console.log("🚀 ~ file: arr.html:59 ~ Some");
var isCheck = lst.some(function (item) {
  return item.price !== 0;
});
console.log("🚀 ~ file: arr.html:63 ~ isCheck=lst.some ~ isCheck", isCheck);

// Find --Chi tra ve 1 phan tu thoa man dk--
console.log("🚀 ~ file: arr.html:66 ~ Find");
var findCourse = lst.find(function (item) {
  return item.name == "js";
});
console.log("🚀 ~ file: arr.html:68 ~ findCourse ~ findCourse", findCourse);

// filter --Tra ve tat ca phan tu thoa man dk--
var findCourse = lst.filter(function (item) {
  return item.name == "js";
});
console.log("🚀 ~ file: arr.html:68 ~ findCourse ~ findCourse", findCourse);

// Map? method --Chinh sua/ thay doi element trong arr
console.log("🚀 ~ file: arr.html:74 ~ Map");
var newCourse = lst.map(function (item, index, lst) {
  // return {
  //     id: item.id,
  //     name: `Language: ${item.name}`,
  //     coin: item.price,
  //     coinText: `Price: ${item.price}`,
  //     index: index,
  //     arr: lst
  // }

  // or
  // return item.name

  // or
  return `<h2>${item.name}</h2>`;
});
// console.log("🚀 ~ file: arr.html:91 ~ newCourse ~ newCourse", newCourse)
console.log(
  "🚀 ~ file: arr.html:91 ~ newCourse ~ newCourse",
  newCourse.join("")
);

// Reduce?
console.log("🚀 ~ file: arr.html:108 ~ Reduce");
// reduce có 2 tham số: tham số 1 là 1 function, tham số 2 là giá trị khởi tạo (vd: var totalPrice = 0)
// accumulator: biến lưu trữ
// currentValue: giá trị hiện tại
// currentIndex: chỉ mục
var i = 0;
var totalPrice = lst.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  originArray
) {
  return accumulator + currentValue.price;
},
0);
console.log("🚀 ~ file: arr.html:117 ~ totalPrice ~ totalPrice", totalPrice);

// Assignment with reduce?
console.log("🚀 ~ file: arr.html:121 ~ Assignment with reduce");
var numbers = [100, 200, 300, 400];
console.log("🚀 ~ file: arr.html:123 ~ numbers", numbers);
var totalNum = numbers.reduce(function (total, number) {
  return total + number;
});
console.log("🚀 ~ file: arr.html:126 ~ totalNum ~ totalNum", totalNum);

// flat = làm phẳng mảng
var deptArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
console.log("🚀 ~ file: arr.html:131 ~ deptArray", deptArray);
var flatArray = deptArray.reduce(function (flatOuput, depthItem) {
  return flatOuput.concat(depthItem);
}, []);
console.log("🚀 ~ file: arr.html:134 ~ flatArray ~ flatArray", flatArray);

// lấy các khóa học đưa vào một mảng mới
var topics = [
  {
    topic: "Font-end",
    course: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "JAVASCRIPT",
      },
    ],
  },
  {
    topic: "Back-end",
    course: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "NodeJs",
      },
    ],
  },
];
console.log("🚀 ~ file: arr.html:186 ~ topics", topics);

var newCourses = topics.reduce(function (course, topic) {
  return course.concat(topic.course);
}, []);
console.log("🚀 ~ file: arr.html:191 ~ newTopics ~ newTopics", newCourses);

var html = newCourses.map(function (course) {
  return `
      <div>
          <h2>${course.title}</h2>
          <p>ID: ${course.id}</p>
      </div>
  `;
});
console.log("🚀 ~ file: arr.html:201 ~ html ~ html", html.join(" "));