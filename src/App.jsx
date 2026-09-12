import { useEffect, useState } from 'react'

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

function Brand({light=false}){return <a className={`brand ${light?'brand--light':''}`} href="#top" aria-label="Hozek home"><b>HOZEK</b><span>Glass + Aluminium</span></a>}

function App(){
  const [menuOpen,setMenuOpen]=useState(false)
  const [sent,setSent]=useState(false)
  useEffect(()=>{const fn=()=>document.body.classList.toggle('scrolled',scrollY>40);fn();addEventListener('scroll',fn,{passive:true});return()=>removeEventListener('scroll',fn)},[])
  const submit=(e)=>{e.preventDefault();const data=new FormData(e.currentTarget);const body=`Name: ${data.get('name')}\nProject type: ${data.get('type')}\n\n${data.get('message')}`;setSent(true);window.location.href=`mailto:info@hozekglass.com?subject=${encodeURIComponent('Project enquiry from '+data.get('name'))}&body=${encodeURIComponent(body)}`}
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <div className="utility"><span>Spaces for a brighter tomorrow</span><span>Residential / Commercial / Bespoke</span></div>
    <header className="header"><Brand light/><nav className={menuOpen?'open':''} aria-label="Primary"><a href="#about" onClick={()=>setMenuOpen(false)}>About</a><a href="#services" onClick={()=>setMenuOpen(false)}>Services</a><a href="#process" onClick={()=>setMenuOpen(false)}>Process</a><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></nav><button className="menu" onClick={()=>setMenuOpen(v=>!v)} aria-expanded={menuOpen} aria-label="Toggle menu"><span></span><span></span></button></header>
    <main id="main">
      <section className="hero" id="top"><div className="hero-shade"></div><div className="hero-copy"><p className="kicker">Residential · Architectural · Bespoke</p><h1>Glass shaped<br/>for modern living.</h1><p>Considered glass and aluminium systems for brighter, more connected spaces.</p><a className="button" href="#services">Explore our work <span>→</span></a></div><aside className="hero-project"><div><small>Featured application</small><h2>Inside meets outside</h2><p>Sliding systems that open the room to its setting.</p><a href="#services">View services →</a></div><img src="/images/detail.png" alt="Slim aluminium sliding door and frameless balustrade"/></aside><div className="hero-count">01 <i></i> 03</div></section>

      <section className="about grid-texture" id="about"><div className="about-copy"><p className="kicker accent">About Hozek</p><h2>One team.<br/>From measure<br/>to <em>final fit.</em></h2><p className="lead">We help people create brighter spaces through carefully detailed glass and aluminium solutions. Measurement, planning and installation stay connected from start to finish.</p><div className="principles"><div><b>01</b><h3>We listen</h3><p>Your space, priorities and practical needs come first.</p></div><div><b>02</b><h3>We plan</h3><p>Every dimension, finish and connection is resolved.</p></div><div><b>03</b><h3>We deliver</h3><p>We install carefully and check every final detail.</p></div></div></div><div className="about-collage"><figure className="collage-main"><img src="/images/hero.png" alt="Modern home with expansive aluminium-framed glazing"/></figure><figure className="collage-top"><img src="/images/detail.png" alt="Detailed aluminium sliding door system"/></figure><figure className="collage-bottom"><img src="/images/commercial.png" alt="Commercial glazed entrance"/></figure></div></section>

      <section className="services" id="services"><header className="section-head"><div><p className="kicker accent">Our services</p><h2>Glass and aluminium,<br/>resolved.</h2></div><div><p>Designed around the architecture, supplied for the opening and installed with the final room in mind.</p><a className="outline" href="#contact">Discuss your project →</a></div></header><div className="service-grid">{services.map((s,i)=><article className={`service service-${i+1}`} key={s.title}><img src={s.image} alt=""/><a href="#contact"><span><b>{s.title}</b><small>{s.note}</small></span><i>→</i></a></article>)}</div></section>

      <section className="process" id="process"><div className="process-image"><Brand light/><img src="/images/detail.png" alt="Precision aluminium framing and glass balustrade"/><p>People · Materials · Better spaces</p></div><div className="process-copy"><p className="kicker accent">How we work</p><h2>A cleaner way<br/><em>to build.</em></h2><ol>{steps.map((step,i)=><li key={step[0]}><span>{i+1}</span><div><h3>{step[0]}</h3><p>{step[1]}</p></div></li>)}</ol></div></section>

      <section className="contact" id="contact"><div className="contact-copy"><p className="kicker">Glass · Aluminium · Brighter living</p><h2>Let’s open up<br/>the space.</h2><p>Share a few project details and we’ll help you work out the right next step.</p></div><form onSubmit={submit}><label>Name<input required name="name" autoComplete="name"/></label><label>Email<input required type="email" name="email" autoComplete="email"/></label><label>Project type<select name="type" defaultValue=""><option value="" disabled>Choose a project type</option><option>Windows + doors</option><option>Frameless glazing</option><option>Commercial systems</option><option>Custom project</option></select></label><label>Message<textarea required name="message" rows="3"></textarea></label><button className="button" type="submit">Send enquiry <span>→</span></button><p className="form-status" aria-live="polite">{sent?'Your email app is opening with the enquiry prepared.':''}</p></form></section>
    </main>
    <footer><Brand light/><p>Spaces<br/>People<br/>Possibilities</p><div><a href="mailto:info@hozekglass.com">info@hozekglass.com</a><span>Glass for a brighter tomorrow</span></div></footer>
  </>
}
export default App
