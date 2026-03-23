Area = (r) => {
    area=3.14*r*r
    return area,r,
    console.log("Area of circle with r = "+r+"cm is : "+area +"cm") 
 }



 function Perimeter (r) {
    perimeter=2*3.14*r
    return perimeter,r,
    console.log("Perimeter of circle with r = "+r+"cm is : "+perimeter +"cm")
}

export default {Area,Perimeter}
