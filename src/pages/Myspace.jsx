import Three from '../images/three.jfif';
import ImageSlider from '../components/ImageSlider';
import End from '../components/End';

export default function Myspace () {
    return (
        <div className="space-page">
        <div className="space-page-inner">
            <div className="header">
                <span className="sender-name"> 
                <img src={Three} /> 
                <h6 className="inter-text">Lorem Ipsum</h6></span>
            </div>
            <div className="slider">
                <ImageSlider />
                </div>
                <div className="space-description">
                    <p className="inter-text">
                        Lorem ipsum dolor sit amet consectetur. Sit etiam hendrerit non arcu facilisi pellentesque in amet. Odio turpis hac accumsan nunc dolor quis euismod Lorem ipsum dolor sit amet consectetur. Sit etiam hendrerit non arcu facilisi pellentesque in amet. Odio turpis hac accumsan nunc dolor quis euismod Lorem ipsum dolor sit amet consectetur. Sit etiam hendrerit non arcu facilisi pellentesque in amet. Odio turpis hac accumsan nunc dolor  
 More 
 </p>
                    </div>

        </div>
        <div className="end">
                <End />
            </div>
        </div>
    )
    ;
}