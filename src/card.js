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
    return (
        <div className="card">
            <img className="card-img" src="https://airbnb-experience-kappa.vercel.app/images/swimmer.png" alt="Katie Zefier Pro Athlete"></img>
            <div className="card-info">
                <span><i class="fa-solid fa-star"></i></span>
            </div>
        </div>
    );
}