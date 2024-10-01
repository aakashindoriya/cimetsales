import pic1 from "../../assets/black.jpg"
import pic2 from "../../assets/blue.jpg"
import pic3 from "../../assets/orange.jpg"
import pic4 from "../../assets/red.jpg"
import pic5 from "../../assets/sky.jpg"
import pic6 from "../../assets/white.jpg"
import pic7 from "../../assets/black.jpg"
import pic8 from "../../assets/blue.jpg"
import pic9 from "../../assets/orange.jpg"
import pic10 from "../../assets/red.jpg"
import pic11 from "../../assets/sky.jpg"
import pic12 from "../../assets/white.jpg"

let arr=[
    {
        pic:pic1,id:1,name:"black"
    },
    {
        pic:pic7,id:2,name:"black"
    },
    {
        pic:pic2,id:3,name:"blue"
    },
    {
        pic:pic8,id:4,name:"blue"
    },
    {
        pic:pic3,id:5,name:"orange"
    },
    {
        pic:pic9,id:6,name:"orange"
    },
    {
        pic:pic4,id:7,name:"red"
    },
    {
        pic:pic10,id:8,name:"red"
    },
    {
        pic:pic5,id:9,name:"sky"
    },
    {
        pic:pic11,id:10,name:"sky"
    },
    {
        pic:pic6,id:11,name:"white"
    },
    {
        pic:pic12,id:12,name:"white"
    }
]

export default function shuffle() {
    let array=arr
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
}