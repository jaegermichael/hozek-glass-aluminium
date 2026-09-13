import { useEffect, useRef, useState } from 'react'

const services=[
  {title:'Frameless glazing',note:'Uninterrupted views',image:'/images/hero.png'},
  {title:'Windows + doors',note:'Spaces that flow',image:'/images/detail.png'},
  {title:'Commercial systems',note:"Built for what’s next",image:'/images/commercial.png'},
  {title:'Glass balustrades',note:'Safety meets design',image:'/images/detail.png'},
  {title:'Custom solutions',note:'Ideas into reality',image:'/images/hero.png'},
]
const steps=[
  ['Measure','We assess the opening, site conditions and practical requirements.'],
  ['Detail','We confirm the system, hardware, finish and every critical junction.'],
  ['Fabricate','Each component is prepared to the agreed dimensions and specification.'],
  ['Install','Our team fits, aligns, seals and leaves the space ready to use.'],
]

function Brand({light=false}){return <a className={`brand ${light?'brand--light':''}`} href="#top" aria-label="Hozek Glass and Aluminium home"><img src="/images/hozek-logo.png" alt="Hozek Glass and Aluminium"/></a>}

function App(){
  const [menuOpen,setMenuOpen]=useState(false)
  const [sent,setSent]=useState(false)
  const progressRef=useRef(null)
  useEffect(()=>{
    let ticking=false
    const update=()=>{
      document.body.classList.toggle('scrolled',scrollY>40)
      const max=document.documentElement.scrollHeight-innerHeight
      if(progressRef.current) progressRef.current.style.transform=`scaleX(${max>0?scrollY/max:0})`
      ticking=false
    }
    const onScroll=()=>{if(!ticking){requestAnimationFrame(update);ticking=true}}
    update();addEventListener('scroll',onScroll,{passive:true});return()=>removeEventListener('scroll',onScroll)
  },[])
  useEffect(()=>{
    const nodes=[...document.querySelectorAll('[data-reveal]')]
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
    }),{threshold:.12,rootMargin:'0px 0px -8% 0px'})
    nodes.forEach(node=>observer.observe(node))
    return()=>observer.disconnect()
  },[])
  useEffect(()=>{document.body.classList.toggle('menu-open',menuOpen);return()=>document.body.classList.remove('menu-open')},[menuOpen])
  const submit=(e)=>{e.preventDefault();const data=new FormData(e.currentTarget);const body=`Name: ${data.get('name')}\nProject type: ${data.get('type')}\n\n${data.get('message')}`;setSent(true);window.location.href=`mailto:info@hozekglass.com?subject=${encodeURIComponent('Project enquiry from '+data.get('name'))}&body=${encodeURIComponent(body)}`}
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <div className="scroll-progress" ref={progressRef} aria-hidden="true"/>
    <div className="utility"><span>Spaces for a brighter tomorrow</span><span>Residential / Commercial / Bespoke</span></div>
    <header className="header"><Brand light/><nav className={menuOpen?'open':''} aria-label="Primary"><a href="#about" onClick={()=>setMenuOpen(false)}>About</a><a href="#services" onClick={()=>setMenuOpen(false)}>Services</a><a href="#process" onClick={()=>setMenuOpen(false)}>Process</a><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></nav><button className="menu" onClick={()=>setMenuOpen(v=>!v)} aria-expanded={menuOpen} aria-label="Toggle menu"><span></span><span></span></button></header>
    <main id="main">
      <section className="hero" id="top"><div className="hero-backdrop" aria-hidden="true"></div><div className="hero-shade"></div><div className="hero-copy"><p className="kicker">Residential · Architectural · Bespoke</p><h1>Glass shaped<br/>for modern living.</h1><p>Considered glass and aluminium systems for brighter, more connected spaces.</p><a className="button" href="#services">Explore our work <span>→</span></a></div><aside className="hero-project"><div><small>Featured application</small><h2>Inside meets outside</h2><p>Sliding systems that open the room to its setting.</p><a href="#services">View services →</a></div><div className="image-shell"><img src="/images/detail.png" alt="Slim aluminium sliding door and frameless balustrade"/></div></aside><div className="hero-count">01 <i></i> 03</div></section>

      <section className="about grid-texture" id="about"><div className="about-copy" data-reveal><p className="kicker accent">About Hozek</p><h2>One team.<br/>From measure<br/>to <em>final fit.</em></h2><p className="lead">We help people create brighter spaces through carefully detailed glass and aluminium solutions. Measurement, planning and installation stay connected from start to finish.</p><div className="principles">{[['01','We listen','Your space, priorities and practical needs come first.'],['02','We plan','Every dimension, finish and connection is resolved.'],['03','We deliver','We install carefully and check every final detail.']].map(item=><div key={item[0]}><b>{item[0]}</b><h3>{item[1]}</h3><p>{item[2]}</p></div>)}</div></div><div className="about-collage" data-reveal="images"><figure className="collage-main"><img src="/images/hero.png" alt="Modern home with expansive aluminium-framed glazing"/></figure><figure className="collage-top"><img src="/images/detail.png" alt="Detailed aluminium sliding door system"/></figure><figure className="collage-bottom"><img src="/images/commercial.png" alt="Commercial glazed entrance"/></figure></div></section>

      <section className="services" id="services"><header className="section-head" data-reveal><div><p className="kicker accent">Our services</p><h2>Glass and aluminium,<br/>resolved.</h2></div><div><p>Designed around the architecture, supplied for the opening and installed with the final room in mind.</p><a className="outline" href="#contact">Discuss your project →</a></div></header><div className="service-grid">{services.map((s,i)=><article className={`service service-${i+1}`} data-reveal key={s.title}><img src={s.image} alt=""/><a href="#contact"><span><b>{s.title}</b><small>{s.note}</small></span><i>→</i></a></article>)}</div></section>

      <section className="process" id="process"><div className="process-image" data-reveal="image"><Brand light/><img src="/images/detail.png" alt="Precision aluminium framing and glass balustrade"/><p>People · Materials · Better spaces</p></div><div className="process-copy" data-reveal><p className="kicker accent">How we work</p><h2>A cleaner way<br/><em>to build.</em></h2><ol>{steps.map((step,i)=><li key={step[0]}><span>{i+1}</span><div><h3>{step[0]}</h3><p>{step[1]}</p></div></li>)}</ol></div></section>

      <section className="contact" id="contact"><div className="contact-copy" data-reveal><p className="kicker">Glass · Aluminium · Brighter living</p><h2>Let’s open up<br/>the space.</h2><p>Share a few project details and we’ll help you work out the right next step.</p></div><form onSubmit={submit} data-reveal><label>Name<input required name="name" autoComplete="name"/></label><label>Email<input required type="email" name="email" autoComplete="email"/></label><label>Project type<select name="type" defaultValue=""><option value="" disabled>Choose a project type</option><option>Windows + doors</option><option>Frameless glazing</option><option>Commercial systems</option><option>Custom project</option></select></label><label>Message<textarea required name="message" rows="3"></textarea></label><button className="button" type="submit">Send enquiry <span>→</span></button><p className="form-status" aria-live="polite">{sent?'Your email app is opening with the enquiry prepared.':''}</p></form></section>
    </main>
    <footer><Brand light/><p>Spaces<br/>People<br/>Possibilities</p><div><a href="mailto:info@hozekglass.com">info@hozekglass.com</a><span>Glass for a brighter tomorrow</span></div></footer>
  </>
}
export default App
