const projects=[
    {title:"1st project",
    desc:"this is my first project",
    link:"www.google.com"
    },
    {title:"2nd project",
    desc:"this is my second project",
    link:"www.google.com"
    }
]



function Projects(){
    return(<>
    <section className="page">
    <h1>projects</h1>
    <div>
    {projects.map((p,i)=>(
      <div>  <h2>{p.title}</h2>
        <p>{p.desc}</p>
        <p>{p.link}</p>
</div>
    ))}


    </div>      

    </section>
       
    </>)
}

export default Projects