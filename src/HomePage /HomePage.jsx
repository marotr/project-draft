

import AdvantagesSection from "./AdvantagesSection/AdvantagesSection"
import css from "./HomePage.module.css"
import WelcomeSection from "./WelcomeSection/WelcomeSection"

const HomePage = () =>{
    return(
        <div className={css.HomePage}>

        <WelcomeSection/>

        <AdvantagesSection/>
        </div>
    )

}
export default HomePage