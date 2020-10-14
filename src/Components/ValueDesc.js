import React from 'react'
import imgWhy from '../Modules/Images/why-img-1.png'
import imgWhy2 from '../Modules/Images/why-img-2.png'
import imgWhy3 from '../Modules/Images/why-img-3.png'
const ValueDesc = () => {
    return (
        <div className="why-sec">
            <div className="why-title">
                <p>Why Me Should Be Your Partner ?</p>
            </div>
            <div className="why-img">
                <div className="img-card">
                    <img src={imgWhy} alt="" />
                    <p>Mendapat Dukungan Penuh Tim Alzhaffron</p>
                </div>
                <div className="img-card">
                    <img src={imgWhy2} alt="" />
                    <p>Prospek Usaha Yang Menjanjikan</p>
                </div>
                <div className="img-card">
                    <img src={imgWhy3} alt="" />
                    <p>Pendaftaran Yang Mudah</p>
                </div>                
            </div>
        </div>
    )
}

export default ValueDesc
