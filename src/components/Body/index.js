import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const renderLeftNavbar = showLeftNavbar => {
    if (showLeftNavbar === true) {
      return (
        <div>
          <h1>Left Navbar Menu</h1>
          <ul>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
            <p>Item 4</p>
          </ul>
        </div>
      )
    }
    return null
  }

  const renderContent = showContent => {
    if (showContent === true) {
      return (
        <div>
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amset conceputor ameting emsit elit sit do
          </p>
        </div>
      )
    }
    return null
  }

  const renderRightNavbar = showRightNavbar => {
    if (showRightNavbar === true) {
      return (
        <div>
          <h1>Right Navbar Menu</h1>
          <p>Ad 1</p>
          <p>Ad 2</p>
        </div>
      )
    }
    return null
  }

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        const showContentDetails = renderContent(showContent)

        const showLeftNavbarDetails = renderLeftNavbar(showLeftNavbar)

        const showRightNavbarDetails = renderRightNavbar(showRightNavbar)
        return (
          <div>
            {showLeftNavbarDetails}
            {showContentDetails}

            {showRightNavbarDetails}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
