import Image from 'next/image'
import humans from '../public/humans.png'

function Home() {
  return (
    <div className='page'>
    <header>
  
    <svg width="97" height="98" viewBox="0 0 97 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M90.582 30.2962C97.1765 37.3722 98.6816 47.8383 94.3511 56.5055L86.9954 71.2277L79.0983 85.663C74.4492 94.1614 65.0236 98.8361 55.4947 97.3696L39.3089 94.8786L23.2269 91.7809C13.7591 89.9571 6.4287 82.3803 4.86997 72.8066L2.22234 56.545L0.18019 40.1951C-1.02207 30.5696 3.87303 21.2121 12.4386 16.7618L26.988 9.2025L41.8079 2.19551C50.5327 -1.92966 60.8885 -0.136051 67.741 6.68711L79.3807 18.2769L90.582 30.2962ZM49.9781 84.0758L48.6274 35.2576L72.9411 81.3636L49.9781 84.0758Z" fill="#0A0F0D"/>
</svg>
      <nav>
 
      <ul>
        <li><a href="/about" className='button'>Get Started</a></li>

      </ul>
      </nav>
     
    </header>
    <main>
  
        <div >
          <Image  alt="" src={humans} className='image2' />
        <Image width='900' height='922' alt="" src="../cards.svg" className='image' />
        </div>
        <div className='main' >
        <div
          className='kigaliHacksHack' 
           >{`Kigali Hacks, Hack The Future. `}</div>
          <div className='joinUs'>
            Join us at Kigali Hacks, the premier in-person high school
            hackathon, and be a part of a 2-day journey of coding, building,
            learning, and sharing, open to all high schoolers across Rwanda,
            technical or non-technical backgrounds. We warmly welcome you
          </div>
          <div className='inputs'>
          <div  className='inputs1' />
          <input placeholder='Enterr email address' />
          <Image className='image3' width='90' height='92' alt="" src="../group-51.svg" />
        </div>
        </div>
    </main>
  <section>
  <div className='sponsors'>
        <div className='sponsors1' />
        <Image className='image4' width='100' height='207' alt="" src="../group-41.svg" />
        <div className='sponsors2'>Sponsors</div>
        <div className='sponsors3' />
      </div>  
  </section>
    

      <div className='faqSection'>
      <i className='faqs'>FAQs</i>
      <section className='fqa'>
      <div className='div'>
          <div className='bg1' />
          <i className='iNeedHelp'>
            What is a hackathon?
          </i>
          <div className='wereSorryYouContainer'>
            <span>A hackathon is an invention marathon where students come together to build, learn and share. The project can be anything as long it solves a problem. Everyone will create their own project in teams of up to 8 and at the end each team presents its project. The best projects will get prizes, and there will be swag and food and drinks for everyone.</span>  
          </div>
        </div>
        <div className='div1'>
          <div className='bg1' />
          <i className='iNeedHelp'>
            Do I need to know how to code?
          </i>
          <div className='wereSorryYouContainer'>
            <span>No, everyone is welcomed since there will be workshops that introduces some to </span>
            <span className='here'>programming</span>
            <span>.</span>
          </div>
        </div>

        <div className='div2'>
          <div className='bg1' />
          <i className='iNeedHelp'>
        Who can attend?
          </i>
          <div className='wereSorryYouContainer'>
            <span>Everyone is eligible to particpate in Kigali Hacks 2023 if only you are in high school, and if you already graduated and still want to attend you can consider volunteering or mentoring for the event</span>
            <span className='here'> email us at morncast@gmail.com</span>
            <span>.</span>
          </div>
        </div>

        <div className='div3'>
          <div className='bg1' />
          <i className='iNeedHelp'>
            How much does Kigali Hacks cost?
          </i>
          <div className='wereSorryYouContainer'>
            <span>It cost nothing basically it is free.</span>
          </div>
        </div>

        <div className='div4'>
          <div className='bg1' />
          <i className='iNeedHelp'>
           1.Where is Kigali Hacks?
           <br />
           <br />
           2.Can I use past projects?
          </i>
     <br />
     <br />
          <div className='wereSorryYouContainer'>
            <br />
            <span>1.The venue is still not locked in but we will update you as soon as possible.</span>
         
            <br />

            <span>{"2.No, you can't use them"}</span>
          </div>
        </div>
      </section>
      </div>
      <footer>
        <div className='footer' />
        <div className='copyright'>Morncast is fiscally sponsored by Hack Club Bank, a project by The Hack
  Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499). 
  <br />
  <br />
  Copyright © 2023.</div>
      </footer>
    </div>
  )
}

export default Home