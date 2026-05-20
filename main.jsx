import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function Example()
{
  return<div className='a'><h1>Sample Flexbox Example</h1>
  </div>
}

function Cart(props)
{
  return(
   <div className='b'>
    <h1>{props.x}</h1>
      <p>{props.y}</p>
   </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Example/>

<div className='outer'>
  <Cart x= "First article" y=" fuywdfuyw khqduyqud iudwidq iduioduai diiojaoi uqoiwhoid ojjdioja jhdkhdk khdhljd sahdjahd hdhoahjidoi dihdihie ieuhoi"/>
    <Cart x= "Second article" y=" fuywdfuyw khqduyqud iudwidq iduioduai diiojaoi uqoiwhoid ojjdioja jhdkhdk khdhljd sahdjahd hdhoahjidoi dihdihie ieuhoi"/>
     <Cart x= "third article" y=" fuywdfuyw khqduyqud iudwidq iduioduai diiojaoi uqoiwhoid ojjdioja jhdkhdk khdhljd sahdjahd hdhoahjidoi dihdihie ieuhoi"/>

</div>
  </StrictMode>,
)
