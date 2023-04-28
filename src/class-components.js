import React, {Component} from 'react'

export default class Calendar extends Component { 
    getDate=() => {
        const dayNames = ['วันอาทิตย์','วันจันทร์','วันอังคาร','วันพุธ','วันพฤหัส','วันศุกร์','วันเสาร์']  
        const monthNames = ['มกราคม','กุมภาพันท์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']

        const date = new Date()
        const weekday = dayNames[date.getDay()]  
        const day = date.getDate()
        const month = monthNames[date.getMonth()]  
        const year = date.getFullYear() + 543
        const daythai = `วัน${weekday} ที่ ${day}${month}${year}`
        return daythai

    }
    render(){
        return <div style={{textAlign:'center'}}>{this.getDate()}</div>
    }
}