import React from 'react';
import bg from '../assets/crypto-currency-3130381_1920.jpg'
import SignUp from './SignUp'

const styles = ({
    backgroundContainer: {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // width: `calc(100vw + 48px)`,
        margin: -24,
        height: 900
      }
})

const landing = () => {
    return (
        <div style={styles.backgroundContainer}>
      <div>
      <SignUp/>
      </div>
    </div>
    )
}

export default landing