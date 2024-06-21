import Hero from '../components/Hero.jsx'
import DetailLandingCard from '../components/DetailLandingCard.jsx'

function LandingPage() {

    return (
        <section className="top-[7rem] relative h-[70vh] flex">
            <Hero />
            <DetailLandingCard />
        </section>
    )
}

export default LandingPage