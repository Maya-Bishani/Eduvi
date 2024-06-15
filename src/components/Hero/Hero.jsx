import './Hero.css'
export default function Hero(){
    return(
    <section className='ne-hero-ssection'>
        <div className='ne-hero-left'>
            <div className='never-stop-learning'>
                <p>Never Stop Learning</p>
            </div>
            <p className='ne-grow-up'>Grow up your skills by online courses with Eduvi

            </p>
            <p className='ne-lorem'>
                Eduvi is a Global training provider based accross the UK that specialises in accredited and bespoke training courses .We crush the barriers to getting adegree  
            </p>
            <div className='ne-left-search'>
                <div className='ne-parent'>
                <input list='courses' placeholder='kinder garden'/>
                <datalist id='courses' >
                    <option value='kinder garden'></option>
                    <option value='school'></option>
                </datalist>
                <div className='ne-class-course'>class/course</div>
                </div>
               <button className='ne-but-search'>search</button>
            </div>
        </div>
        <img src='./images/Homepage/Hero/Image.svg'className='ne-hero-right-img'></img>

    </section>
    )
}