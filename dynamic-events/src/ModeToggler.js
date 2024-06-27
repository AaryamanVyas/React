function ModeToggler() {
    const darkModeOn = true;
    const darkMode = <h1>dark Mode is on</h1>
    const lightMode = <h1>light Mode is on</h1>
    return(
        <div>
            {darkModeOn ? darkMode : lightMode}
        </div>
    )
}

export default ModeToggler