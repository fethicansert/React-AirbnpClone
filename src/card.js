export default function CardContainer(){
    return (
        <div className="card-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
           
        </div>
    );
}


function Card(){
    const name = 'Fethi';
    return (
        <div className="card">
            <img className="card-img" src="https://airbnb-experience-kappa.vercel.app/images/swimmer.png" alt="Katie Zefier Pro Athlete"></img>
            <div className="card-info">
                <span className="card-info-line"><i class="fa-solid fa-star"></i> 5.0 <span className="lighter-text">(6) . USA</span></span>
                <span className="card-info-line">Life lessonns with Katie Zaferes</span>
                <span className="card-info-line"><b>From $136</b> / person</span>
                <h1>Hello{' '+name}</h1>
            </div>
        </div>
    );
}