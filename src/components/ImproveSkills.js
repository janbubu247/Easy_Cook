import { useNavigate } from "react-router-dom";
export default function ImproveSkills(){
    const navigate = useNavigate();
    const list = [
        "Learn new recipies",
        "Write your own recipies",
        "Find nearby grocery stores",
        "Get cooking tips",
        "Online ordering"
    ]
    const navigateToReceipt = () => { 
        navigate('/SignUp');
    }
    return(
        <div className="section improve_skills">
            <div className="col img">
                <img src="/img/gallery/img-10.jpg" alt=""/>
            </div>
            <div className="col typography">
                <h1 className="title">You can do</h1>
                {list.map((item, index)=>(
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <button className="btn" onClick={navigateToReceipt}>Get started</button>
            </div>
        </div>
    )
}