import React from "react";

const Courses = () => {
  const coursesData = [
    {
      id: 1,
      courseName: "UI/UX Design",
      courseDescription:
        "Idk bro i havent taken this course yet but i heard its pretty good but also that ai might over take ts bro we are cookeddddd",
      courseImage:
        "https://th.bing.com/th/id/OIP.7hoakxrs-A0lbLmf6ZqtawHaEK?w=324&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      price: 12000,
    },
    {
      id: 2,
      courseName: "Flutter",
      courseDescription:
        "Lol bro i aint take ts either but name is dope, ai might take it over asw but shi what can we do",
      courseImage:
        "https://miro.medium.com/v2/resize:fit:720/1*piY_vzXFb3XsbhXHbNyV5w.jpeg",
      price: 10000,
    },
    {
      id: 3,
      courseName: "Python",
      courseDescription:
        "Ayo this python shi ik somewhat but its a coding language and one of the best or so i have heard, ts is used to code the ai bro take ts asap",
      courseImage:
        "https://tse2.mm.bing.net/th/id/OIP.w_C5b8sg6KbxD2f0SIOSnQHaE-?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: 15000,
    },
    {
      id: 4,
      courseName: "Graphic design and video editing",
      courseDescription:
        "BROTHA YOU ARE COOKED IF YOU MAJOR IN TS, AI TOOK OVER TS FIRST BRO YOU ARE COOKED DONT TAKE TS",
      courseImage:
        "https://tse2.mm.bing.net/th/id/OIP.HCcM-YxDyhy8VCZ792SYwAHaGM?rs=1&pid=ImgDetMain&o=7&rm=3",
      price: 14000,
    },
    {
      id: 5,
      courseName: "Digital Marketing",
      courseDescription:
        "Ayo this one actually sounds good cuz like ts is good for business as well and if u goated at ts u might make millions, MIGHT",
      courseImage:
        "https://th.bing.com/th/id/R.41c01201ae302484ae2571f52d3d93e7?rik=BZhusDbRkeQkfQ&pid=ImgRaw&r=0",
      price: 12000,
    },
  ];
  return (
    <div>
      {coursesData.map((value, index) => (
        <div key={index}>
          {value.courseName}
          {value.price}
        </div>
      ))}
    </div>
  );
};

export default Courses;
