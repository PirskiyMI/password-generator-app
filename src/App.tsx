import './styles/App.css';
import { Generator } from './components/Generator';

function App() {
   return (
      <>
         <div className="wrapper">
            <div className="container">
               <div className="generator">
                  <Generator />
                  <div className="ref">
                     <a target="_blank" href="https://icons8.com/icon/98955/галочка">
                        Галочка
                     </a>{' '}
                     icon by{' '}
                     <a target="_blank" href="https://icons8.com">
                        Icons8
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
