import "./Particles.css";

function Particles() {

const particles = Array.from({ length: 30 });

return (

<div className="particles">

{particles.map((_,i)=>

<div className="particle" key={i}></div>

)}

</div>

)

}

export default Particles;