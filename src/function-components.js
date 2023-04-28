import React from 'react';

export function MyAbout(){
    const aStyle={
        display: 'inline-block',
        color: 'navy',
        margin: '10px',
        textDecoration: 'none',
        fontSize: '40px'
    }
    return (
        <div align="center">
            <a style={aStyle}>ข้อมูลส่วนตัว</a>
        </div>
    )
}

export function MyImage(){
    return (
        <div style={{textAlign: 'center', color: 'navy'}}>
            <img src="./images/personal.jpg" width="20%"/>
            <h2>นาย ชโยดม ชโลธร</h2>
        </div>
    )
}

export const MyData=() => { //Arrow Function
return(
    <div style={{textAlign: 'center'}}>
        ชื่อเล่น : อิง <br></br>
        สถานศึกษา : มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์ วาสุกรี <br></br>
        แผนก : บริหารธุรกิจและเทคโนโลยีสารสนเทศ <br></br>
        วันเดือนปีเกิด : 3 มิถุนายน พ.ศ.2544 <br></br>
        งานอดิเรก : เล่นเกม ฟังเพลง ดูหนัง <br></br>
        สีที่ชอบ : สีม่วง <br></br>
        ที่อยู่ : 248/102 ซิตี้โฮม 1 ซอย 13 ตำบล บ้านกรด อำเภอ <br></br>
        บางปะอิน จังหวัด พระนครศรีอยุธยา 13140 <br></br>
    </div>
)
}