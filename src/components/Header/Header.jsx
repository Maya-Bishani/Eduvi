import './Header.css'
export default function Header(){
    return(
        <div className='ne-hero-cours'>
            <div className='ne-home-cours'>
                <div className='ne-herodiv1'>Hero</div>
                <div className='ne-herodiv2' >Courses</div>
            </div>
            <div className='ne-parent-img-p'>
                <p className='ne-eduvi-courses'>Eduvi Courses For All Standards</p>
                <div className='ne-div-img'>
                    <img src='/images/CoursesImg/stars lap.png'className='ne-stars'></img>
                    <img src='/images/CoursesImg/lap remove.png' alt='error' className='ne-imglap'></img>
                </div>
            </div>
        </div>
    )

    
}