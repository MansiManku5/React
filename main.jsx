import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function First()
{
  return<div className='a'><h1>Css Responsive</h1>
  </div>
}

function Second()
{
  return<div className='b'><h1>Flexbox Cards</h1>
  </div>
}



function Third(props) //That //
{
  return<div className='c'>
  
  <h1>{props.y}</h1>
  <p>{props.x}</p>
  <button>Readmore{props.g}</button>
   </div>
}

function Last(){
  return<div className='d'></div>
}

createRoot(document.getElementById('root')).render(

  <StrictMode>
<First/>
<Second/>

<div className='outer'>
  <Third class y= "React" x= " hhdahdoieh khdkajnc  khcihih uheqihifuh  uyued j uyued juyued jkhsdj "/>
     <Third class y= "Vue" x= "hhdahdoieh khdkajnc khcihih  uyued j  uyued j uyued juheqihifuh uyued jkhsdj"/>
     <Third class y= "Angular" x= "hhdahdoieh  uyued j uyued jkhdkajnc khcihih uheqihifuh uyued jkhsdj"/>
     <Third class y= "Jquery" x= "hhdahdoieh   uyued j uyued jkhdkajnc khcihih uheqihifuh uyued jkhsdj"/>
    
</div>

<StrictMode/>
<Last/>
<Second/>
<Third/>
  </StrictMode>,
)
