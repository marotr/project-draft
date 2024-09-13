import AuthNav from "../../AuthNav/AuthNav"
import css from "./WelcomeSection.module.css"


const WelcomeSection = () => {
  return (
    <div className={css.welcome }>
    <h1 className={css.logo}>AquaTrack</h1>
    <p className={css.subheader}> Record daily water intake and track</p>
    <h1 className={css.header}> Water consumption tracker</h1>
    <div className={css.buttons}>
        <AuthNav/>
    </div>
    
    
            </div>
  )
}

export default WelcomeSection