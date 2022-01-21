import Info from './info'
import About from './about'
import Footer from './footer'
import Interests from './interests'

export default function App(){
    return (
        <div className="card">
        <Info />
        <About />
        <Interests />
        <Footer />
        </div>
    )
}